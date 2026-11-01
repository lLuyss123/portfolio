const FRAME_COUNT = 239;
const FRAMES_PER_STRIP = 16;
const FRAME_WIDTH = 960;
const FRAME_HEIGHT = 540;
const IDLE_FRAME = 0;

export function initHeroAvatar() {
  const stage = document.querySelector("[data-avatar-stage]");
  const canvas = stage?.querySelector("[data-avatar-canvas]");
  const context = canvas?.getContext("2d", { alpha: false });
  if (!stage || !canvas || !context) return;

  const hero = stage.closest("#hero") || stage;
  const strips = Array.from({ length: Math.ceil(FRAME_COUNT / FRAMES_PER_STRIP) }, (_, index) => {
    const image = new Image();
    image.decoding = "async";
    image.src = `${import.meta.env.BASE_URL}images/avatar/look-strip-${String(index + 1).padStart(2, "0")}.webp`;
    return image;
  });
  const idleImage = new Image();
  idleImage.decoding = "async";
  idleImage.src = `${import.meta.env.BASE_URL}images/avatar/look-idle.webp`;

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const mobileLayout = window.matchMedia("(max-width: 767px)");
  let currentFrame = IDLE_FRAME;
  let targetFrame = IDLE_FRAME;
  let frameRequest = 0;
  let lastFrameTime = 0;
  let width = 0;
  let height = 0;

  const draw = () => {
    let frame = Math.max(0, Math.min(FRAME_COUNT - 1, Math.round(currentFrame)));
    // The source clip's final frame is close to, but not identical to, its first.
    // Reuse frame zero at the endpoint so the idle pose closes cleanly.
    if (frame === IDLE_FRAME) frame = 0;
    const stripIndex = Math.floor(frame / FRAMES_PER_STRIP);
    const frameInStrip = frame % FRAMES_PER_STRIP;
    const strip = strips[stripIndex];
    const source = strip?.complete && strip.naturalWidth ? strip : idleImage;
    if (!source.complete || !source.naturalWidth) return;

    context.fillStyle = "#0b1220";
    context.fillRect(0, 0, width, height);
    const regionWidth = mobileLayout.matches ? width : width * 0.52;
    const regionHeight = mobileLayout.matches ? height * 0.5 : height * 0.9;
    const scale = Math.min(regionWidth / FRAME_WIDTH, regionHeight / FRAME_HEIGHT);
    const drawWidth = FRAME_WIDTH * scale;
    const drawHeight = FRAME_HEIGHT * scale;
    const offsetX = mobileLayout.matches ? (width - drawWidth) / 2 : width - regionWidth + (regionWidth - drawWidth) / 2;
    const offsetY = mobileLayout.matches ? height * 0.12 : (height - drawHeight) / 2;
    context.drawImage(
      source,
      source === strip ? frameInStrip * FRAME_WIDTH : 0,
      0,
      FRAME_WIDTH,
      FRAME_HEIGHT,
      offsetX,
      offsetY,
      drawWidth,
      drawHeight
    );
  };

  const animate = (timestamp) => {
    frameRequest = 0;
    const delta = targetFrame - currentFrame;

    if (reducedMotion.matches) currentFrame = targetFrame;
    else if (Math.abs(delta) > 0.04) {
      const elapsed = lastFrameTime ? Math.min(timestamp - lastFrameTime, 64) : 16.7;
      const easing = 1 - Math.exp((-9 * elapsed) / 1000);
      currentFrame += delta * easing;
    } else {
      currentFrame = targetFrame;
    }

    lastFrameTime = timestamp;
    draw();
    if (Math.abs(delta) > 0.04 && !reducedMotion.matches) {
      frameRequest = requestAnimationFrame(animate);
    }
  };

  const requestDraw = () => {
    if (!frameRequest) frameRequest = requestAnimationFrame(animate);
  };

  strips.forEach((strip) => {
    strip.addEventListener("load", requestDraw, { once: true });
    strip.addEventListener("error", () => stage.classList.add("hero-avatar--error"), { once: true });
    if (strip.complete && strip.naturalWidth) requestDraw();
  });
  idleImage.addEventListener("load", requestDraw, { once: true });
  if (idleImage.complete && idleImage.naturalWidth) requestDraw();

  const resize = new ResizeObserver(([entry]) => {
    const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
    width = Math.round(entry.contentRect.width * pixelRatio);
    height = Math.round(entry.contentRect.height * pixelRatio);
    canvas.width = width;
    canvas.height = height;
    requestDraw();
  });
  resize.observe(stage);

  window.addEventListener("pointermove", (event) => {
    if (event.pointerType === "touch") return;
    const bounds = hero.getBoundingClientRect();
    const insideHero =
      event.clientX >= bounds.left &&
      event.clientX <= bounds.right &&
      event.clientY >= bounds.top &&
      event.clientY <= bounds.bottom;

    if (!insideHero) {
      targetFrame = IDLE_FRAME;
    } else {
      const horizontal = (event.clientX - bounds.left) / bounds.width;
      targetFrame = horizontal * (FRAME_COUNT - 1);
    }
    requestDraw();
  });

  requestDraw();
}

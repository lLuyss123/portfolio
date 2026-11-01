const FRAME_COUNT = 239;
const FRAMES_PER_STRIP = 16;
const FRAME_WIDTH = 960;
const FRAME_HEIGHT = 540;
const IDLE_FRAME = 0;

export function initHeroAvatar() {
  const stage = document.querySelector("[data-avatar-stage]");
  const canvas = stage?.querySelector("[data-avatar-canvas]");
  const context = canvas?.getContext("2d");
  if (!stage || !canvas || !context) return;
  const alphaMask = document.createElement("canvas");
  const alphaMaskContext = alphaMask.getContext("2d");

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
  const mobileLayout = window.matchMedia("(max-width: 900px)");
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

    context.clearRect(0, 0, width, height);
    const isDark = document.documentElement.classList.contains("dark");
    const regionWidth = mobileLayout.matches
      ? width * 0.88
      : width * 0.52;
    const regionHeight = mobileLayout.matches
      ? height * 0.42
      : height * 0.9;
    const scale = Math.min(regionWidth / FRAME_WIDTH, regionHeight / FRAME_HEIGHT);
    const drawWidth = FRAME_WIDTH * scale;
    const drawHeight = FRAME_HEIGHT * scale;
    const rightInset = 0;
    const offsetX = mobileLayout.matches
      ? (width - drawWidth) / 2
      : width - regionWidth - rightInset + (regionWidth - drawWidth) / 2;
    const offsetY = mobileLayout.matches ? height * 0.05 : (height - drawHeight) / 2;
    const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
    const mask = {
      "--avatar-mask-center-x": `${(offsetX + drawWidth / 2) / pixelRatio}px`,
      "--avatar-mask-center-y": `${(offsetY + drawHeight * 0.5) / pixelRatio}px`,
      "--avatar-mask-radius-x": `${(drawWidth * 0.42) / pixelRatio}px`,
      "--avatar-mask-radius-y": `${(drawHeight * 0.62) / pixelRatio}px`,
    };

    Object.entries(mask).forEach(([property, value]) => {
      if (stage.style.getPropertyValue(property) !== value) {
        stage.style.setProperty(property, value);
      }
    });

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

    if (!isDark) {
      const fade = Math.max(12 * pixelRatio, 1);
      if (!alphaMaskContext) return;
      alphaMaskContext.clearRect(0, 0, width, height);
      alphaMaskContext.filter = `blur(${fade}px)`;
      alphaMaskContext.fillStyle = "#fff";
      alphaMaskContext.beginPath();
      const radius = drawHeight * 0.5;
      alphaMaskContext.arc(
        offsetX + drawWidth / 2,
        offsetY + drawHeight / 2,
        radius,
        0,
        Math.PI * 2
      );
      alphaMaskContext.fill();
      context.globalCompositeOperation = "destination-in";
      context.drawImage(alphaMask, 0, 0);
      context.globalCompositeOperation = "source-over";
    }
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
  document.addEventListener("themechange", requestDraw);

  const resize = new ResizeObserver(([entry]) => {
    const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
    width = Math.round(entry.contentRect.width * pixelRatio);
    height = Math.round(entry.contentRect.height * pixelRatio);
    canvas.width = width;
    canvas.height = height;
    alphaMask.width = width;
    alphaMask.height = height;
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

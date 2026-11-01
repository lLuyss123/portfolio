# Portafolio - Luis Mejía

## Ejecutar localmente

npm install
npm run dev

## Build de producción

npm run build
npm run preview

## Animación interactiva del avatar

El hero usa una hoja horizontal de 239 cuadros (272 × 153 px) extraída del video de origen con FFmpeg. Para regenerarla:

```sh
ffmpeg -i input.mp4 -vf "scale=272:153:flags=lanczos,tile=239x1:nb_frames=239:padding=0:margin=0" -frames:v 1 -q:v 3 public/images/avatar/avatar-sprite.jpg
```

El navegador usa un atlas ligero de nueve poses direccionales para evitar decodificar una textura de más de 65 000 píxeles de ancho y poder interpolar entre miradas con fluidez. Genéralo directamente desde el mismo video:

```sh
ffmpeg -i input.mp4 -vf "select='eq(n,195)+eq(n,215)+eq(n,145)+eq(n,45)+eq(n,0)+eq(n,35)+eq(n,65)+eq(n,165)+eq(n,175)',scale=272:153:flags=lanczos,tile=3x3:nb_frames=9:padding=0:margin=0" -fps_mode passthrough -frames:v 1 -q:v 2 public/images/avatar/avatar-poses.jpg
```

La duración del video fuente es de aproximadamente 9.96 segundos a 24 fps.

## Despliegue

### GitHub Pages

1. Crea un repositorio en GitHub. Si aún no tienes un repositorio remoto configurado, abre una terminal en esta carpeta y ejecuta:

   ```sh
   git add .
   git commit -m "Preparar portafolio"
   git remote add origin https://github.com/TU_USUARIO/NOMBRE_DEL_REPOSITORIO.git
   git push -u origin master
   ```

   Reemplaza la URL por la de tu repositorio. Si tu rama principal se llama `main`, usa `main` en lugar de `master`.

2. En GitHub, abre **Settings → Pages** y selecciona **GitHub Actions** como fuente.
3. Cada push a `main` o `master` ejecutará el despliegue. Cuando termine correctamente, encontrarás la URL publicada en **Settings → Pages**.

El workflow configura automáticamente la ruta base para repositorios de proyecto y de usuario. El directorio `dist/` también puede desplegarse en otros hostings estáticos.

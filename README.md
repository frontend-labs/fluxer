# Fluxer
Entorno de desarrollo Docker para Flux

## Instalación

1. Tener instalado docker y docker-compose: https://github.com/Edux87/DockerEsp
2. clonar el repo: `git clone git@github.com:frontend-labs/fluxer.git`
3. En el directorio fluxer, ejecutar: `docker-compose up`
4. La construcción de la imagen toma aproximadamente 15 min.
5. ingresamos a la consola del contenedor.  `docker exec -ti fluxer_node_1`
6. Ejecutamos `bower install` luego, `gulp bower` y finalmente `gulp`
7. Acceder por el browser: http://localhost:3000

## Post Install
- Puedes clonar tu proyecto como un submodule en la carpeta project, y modificar docler-compose.yml para asociar el directorio de tus archivos statics.
- Puedes acceder a la configuracion del entorno mediante el archivo fluxer/config/config.local.js
- Puedes acceder editar tus files, coffe, jade, stylus desde fluxer/source/
/**
 * Tarea para manejar librerias de bower
 *
 * @module Task (gulp bower)
 * @extends Gulp
 * @extends Plugins
 * @author Victor Sandoval
 */

function Task(gulp, path, config, plugins, functions){

  /**
   * Tarea para filtrar archivos de las librerías de bower
   * (gulp bower:filter)
   * 
   * Se puede especificar que solo traiga los js de las librería a descargar
   * y estas se deben listar en el objeto {} "preen", dentro de archivo bower.json
   */
  gulp.task('bower:filter', function(cb) {
    plugins.preen.preen({}, cb);
  });

  /**
   * Tarea para limpiar archivos css
   * (gulp clean:css)
   */
  gulp.task('bower:clean', function (cb) {
    return plugins.del([path.frontend.third_party_libs + '/*'], { force: true }, cb);
  });

  /**
   * Tarea principal
   * (gulp bower)
   */

    gulp.task('bower', function(cb){
        plugins.runSequence('bower:filter', cb)
    });

}

module.exports = Task;
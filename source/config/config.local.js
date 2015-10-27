/**
 * Contiene las viariables globales de configuracion
 *
 * @module Config
 * @author Victor Sandoval
 */

var CONFIG = {
	prod : true,
	port : 3002,
	tests : {
		unit: {module: 'sections', sections : 'home'}
	},
	jade: {
		prettyOutput: true,
		minify: false,
		minRemoveComments: true,
		extFiles: 'html'
	}
};

module.exports = CONFIG;

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
	jadePrettyOutput: true,
    jadeMinify: false,
    jadeMinRemoveComments: true,
	jadeExtFiles: 'html'
};

module.exports = CONFIG;

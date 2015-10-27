/**
 * Contiene la configuración principal del servidor express, como:
 * Configuración de las rutas de los estáticos y lógica de urls del servidor.
 *
 * @author Victor Sandoval
 */

var express = require("express"),
    path    = require('./path'),
    config  = require('./config.local'),
    setGlobalVariables = function (req){
      var oP = {};
      oP.version    = new Date().getTime();
      oP.section    = req.params.section;
      oP.baseUrl    = "http://" + req.headers.host;
      oP.staticUrl  = oP.baseUrl + path.dest.static + "/";
      oP.elementUrl = oP.baseUrl;
      return oP;
    };

var app = express();
app.set('view engine', 'jade');
app.set('views', path.dest.serverFiles);

app.use(express.static(path.dest.serverFiles));

app.get("/:section", function(req, res) {
  var jadeGlobals = setGlobalVariables(req);
  res.render(path.frontend.pre_html + "/views/" + jadeGlobals.section, jadeGlobals);
});

app.get("/", function(req, res) {
  var jadeGlobals = setGlobalVariables(req);
  jadeGlobals.section = "index";
  res.render(path.frontend.pre_html + "/views/" + jadeGlobals.section, jadeGlobals);
});

var server = app.listen(config.port, function () {
    console.log('Frontend-Labs >> http://frontendlabs.io');
});
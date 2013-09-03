
var ElifeConfiguration = function() {

};

ElifeConfiguration.Prototype = function() {

  // Resolve figure url
  // --------
  // 
  // By default, figures are expected at the baseURL of the source XML
  // This can be overriden by a configuration

  this.resolveFigureURLs = function(state, figure) {
    var graphic = figure.querySelector("graphic");
    var url = graphic.getAttribute("xlink:href");

    // Example url to SVG: http://cdn.elifesciences.org/elife-articles/00768/svg/elife00768f001.svg
    // Where are the images with that layout?
    
    url = [
      "http://cdn.elifesciences.org/elife-articles/",
      state.doc.id,
      "/svg/",
      url,
      ".svg"
    ].join('');


    return {
      url: url,
      large_url: url
    };
  };
};

ElifeConfiguration.prototype = new ElifeConfiguration.Prototype();

module.exports = ElifeConfiguration;
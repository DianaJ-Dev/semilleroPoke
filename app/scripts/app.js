import '../pages/home-page/home-page.js';

(function() {
  'use strict';

  window.CellsPolymer.start({
    routes: {
      'home': '/',
      'evolution': '/evolution'
    },
    onRouteChange: function(route) {
      if (route === 'evolution') {
        const queryParams = this.getQueryParams(); // Implementa esta función para obtener los queryParams
        console.log('Received queryParams:', queryParams);
        if (queryParams && queryParams.pokemonId) {
          // Maneja el pokemonId aquí
        } else {
          console.error('pokemonId no está definido en queryParams');
        }
      }
    }
  });
  
  // Implementación de una función para obtener los queryParams
  window.CellsPolymer.getQueryParams = function() {
    const queryString = window.location.hash.split('?')[1];
    if (!queryString) return null;

    const params = new URLSearchParams(queryString);
    return Object.fromEntries(params.entries());
  };
}());


$(document).ready(function () {

});

  var input = $('#search');
  var btn = $('#btn');

  btn.click(function type(names) {
    var search = input.val();
    var url = 'http://pokeapi.salestock.net/api/v2/type/' + search;  
    console.log(url);
    $.ajax({
      url: url,
      method: 'GET',
      success: getPokemon,
      error: renderError
    });
  });

  function getPokemon(response) {
    console.log(response);
    var pokeList = response.pokemon;
  
    for(var p in pokeList) {
      var poke = pokeList[p];
      var pokemon = poke.pokemon.name;
      var url = poke.pokemon.url;
      //console.log(pokemon, url);
      $.ajax({
        url: url,
        method: 'GET',
        success: getImg,
        error: renderError
      });
    }
  }

  function getImg(r) {
    console.log(r);
    var weight = r.weight;
    var name = r.name;
    var img = r.sprites.front_default;
    console.log(name, img);
    var container = $('#pokemonContainer');
    container.append('<div class="col-lg-4 result"><img class="col-lg-3 pokemoncito" src="'+ img +'">' + '<div><h5>'+ name + '</h5></div></div>')
  }
  
  function renderError (error) {
    console.log(error);
  }

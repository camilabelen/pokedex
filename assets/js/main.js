$('form').on('submit', function(e) {
  e.preventDefault();

  var search = $('#search').val().replace(/\s/g, '');
  search = search.split(',');
  console.log(search);

  var pokeTypes = search.map(function(names) {
    return $.ajax({
      url: 'http://pokeapi.salestock.net/api/v2/type/' + search,
      datatype: 'json',
      method: 'GET'
    });
  });

  $.when.apply(null, pokeTypes)
    .then(function() {
      var pokeTypes = Array.prototype.slice.call(arguments);
      console.log(pokeTypes);
    });
});

/*
function getDoubleDmgTypes(pokeTypes) {
  pokeTypes = pokeTypes.map(function(types) {
    return types[0].damage_relations.double_damage_from;
  });
  console.log(pokeTypes);
}
*/


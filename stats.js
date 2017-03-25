var stats = (function(){
  var people = 0;

  //cache
  var $stats = $();
  var template = $();

  pubSub.subscribe('peopleChanged', setPeople);

  _render();

  function _render() {
    $stats.html(Mustache.render(template, {people: people}))
  }

  function setPeople(newPeople) {
    people = newPeople;
    _render();
  }

  function destroy() {
    $stats.remove();
    events.off('peopleChanged', setPeople);
  }

});

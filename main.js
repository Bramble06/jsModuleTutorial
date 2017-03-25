var people = (function(){
    var people = ['Devon', 'Alisa'];

    //cache DOM
    var $el = $('#peopleModule');
    var $button = $el.find('button');
    var $input = $el.find('input');
    var $ul = $el.find('ul');
    var template = $el.find('#people-template').html();

    //bind events
    $button.on('click', addPerson);
    $ul.delegate('i.del', 'click', deletePerson);

    _render();

    function _render() {
       $ul.html(Mustache.render(template, {people: people}));
    }

    function addPerson(value) {
        var name = (typeof value === "string") ? value : $input.val();
        people.push(name);
        _render();
        $input.val('');
    }

    function deletePerson(event) {
        var i;
        if (typeof event === "number") {
            i = event;
        } else {
            var $remove = $(event.target).closest('li');
            i = $ul.find('li').index($remove);
        }
        people.splice(i, 1);
        _render();
    }

    return {
        addPerson: addPerson,
        deletePerson: deletePerson
    };

})();

// $(function() {
//     console.log( "ready!" );
//
//     function add(first, second, callback) {
//       console.log(first + second);
//
//       if (callback){
//           callback();
//       }
//
//     }
//
//     function logDone(){
//       console.log('done.');
//     }
//
//     //add(2,6);
//     //add(2,3, logDone);
//
//     function handleClick(){
//       console.log('Test');
//       add(2,6);
//       add(2,3, logDone);
//     }
//
//     $('#mydiv').click(handleClick);
//
// });

// object literal
// var mymodule = {
//   name:'Devon',
//   age:'36',
//   sayName:function(){
//     alert(this.name);
//   },
//   setName:function(newName){
//     this.name = newName;
//   }
// };
//
// mymodule.sayName();

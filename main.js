
// revealing module pattern
(function(){

  var people = ['Devon', 'Alisa'];

    //cache dom
    var $el = $('#peopleModule');
    var $button = this.$el.find('button');
    var $input = this.$el.find('input');
    var $ul = this.$el.find('ul');
    var template = this.$el.find('#people-template').html();

    //bind events
    this.$button.on('click', this.addPerson.bind(this));
    this.$ul.delegate('i.del', 'click', this.deletePerson.bind(this));

    _render();

    _render:function(){

       $ul.html(Mustache.render(template, {people: people}));

    }

    addPerson:function(event){

      var name = (typeof value === "string") ? value : this.$input.val()

      this.people.push(name;
      this._render();
      this.$input.val('');

    }

    deletePerson:function(){

      if(typeof event ==="number"){
        i =event
      }else{
        var $remove = $(event.target).closest('li');
        i = this.$ul.find('li').index($remove);
      }
      this.people.splice(i, 1);
      this._render();

    }

  };

return{
  addPerson:addPerson,
  deletePerson:deletePerson
}

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

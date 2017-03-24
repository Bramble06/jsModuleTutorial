
(function(){

  var people = {
    people: ['Devon', 'Alisa'],
    init:function(){
      this.cacheDom();
      this.bindEvents();
      this.render();
    },
    cacheDom:function(){
      this.$el = $('#peopleModule');
      this.$button = this.$el.find('button');
      this.$input = this.$el.find('input');
      this.$ul = this.$el.find('ul');
      this.template = this.$el.find('#people-template').html();
    },
    bindEvents:function(){
      this.$button.on('click', this.addPerson.bind(this));
      this.$ul.delegate('i.del', 'click', this.deletePerson.bind(this));
    },
    render:function(){
      var data = {
           people: this.people,
       };
       this.$ul.html(Mustache.render(this.template, data));
    },
    addPerson:function(){
      this.people.push(this.$input.val());
      this.render();
      this.$input.val('');
    },
    deletePerson:function(){
      var $remove = $(event.target).closest('li');
      var i = this.$ul.find('li').index($remove);

      this.people.splice(i, 1);
      this.render();
    }
  };

people.init();

})()


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

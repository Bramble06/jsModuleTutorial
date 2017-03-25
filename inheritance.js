// classical
function inherits(ctor, superCtor) {
  ctor.super_ = superCtor;
  ctor.prototype = Object.create(superCtor.prototype, {
    constructor: {
      value: ctor,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
};


var Person = function(name){
  this.name = name;

}

Person.prototype.sayName = function () {
  console.log('Hello ' + this.name);
};

Person.prototype.shoutName = function () {
  console.log('Hello ' + this.name + "!");
};

var tom = new Person("Tom");

var Programmer = function(name, language){
  Programmer.super_.call(this, name);
  this.language = language;
}

inherits(Programmer, Person);

Programmer.prototype.getLanguage = function() {
  console.log(this.language);
}

var julia = new Programmer("Julia", "JS");
julia.sayName();
julia.getLanguage();

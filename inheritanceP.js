//prototypal inheritance
var programmer = {
 type: "web",
 create: function(values) {
  var instance = Object.create(this);
  Object.keys(values).forEach(function(key) {
    instance[key] = values[key];
  });
  return instance;
 },
 sayType: function() {
  console.log(this.type);
 },
 sayName: function() {
  console.log(this.name);
 }
};

var webProgrammer = programmer.create({
  type: "web developer",
  CodeSomething: function() {
    console.log("coding.. " + this.language);
  }
});

var devon = webProgrammer.create({
  name: "devon",
  language: "C#"
});

devon.CodeSomething(); // plays drums
devon.sayName(); //will

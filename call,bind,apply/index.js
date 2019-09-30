function Employee(name, age, salary) {
  this.name = name;
  this.age = age;
  this.salary = salary;
  this.netSalary = function() {
    return this.salary - (this.salary * 16) / 100; //after tax
  };
}

function Manager(name, age, salary, dept) {
  Employee.call(this, name, age, salary);
  this.dept = dept;
}

Manager.prototype.getName = function() {
  return this.name;
};

const manager = new Manager("Mike", 27, 500, "Development");

console.log(manager.getName(), manager.netSalary());

function User(name) {
  this.name = name;
}

const user = new User("Micheal");
const getUserName = manager.getName.bind(user);
console.log(getUserName());

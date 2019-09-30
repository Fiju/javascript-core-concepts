function Employee(name, age, salary) {
  this.name = name;
  this.age = age;
  this.salary = salary;
  this.netSalary = function() {
    return this.salary - (this.salary * 16) / 100; //after tax
  };
}

function Manager(name, age, salary, dept) {
  this.__proto__ = new Employee(name, age, salary);
  this.dept = dept;
}

const manager = new Manager("Mike", 27, 500, "Development");
console.log(manager.name, manager.netSalary());

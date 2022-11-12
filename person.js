class Person {
  constructor(name) {
    this.name = name;
  }

  sayMyName() {
    return `Hi! My name is ${this.name}`;
  }
}

// module.exports = {
//   Person,
// };

export { Person };

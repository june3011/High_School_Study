// es6
const obj = {
  id: 1,
  func() {
    console.log(this.id);
  },
};

obj.func();

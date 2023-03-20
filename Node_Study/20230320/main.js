// const data = require("./obj");
// const each = require("./each");
import data from "./obj";
import { bye, hello } from "./each";

console.log(data);
data.sayHello();

hello("USER");
hello(data.user);
bye();

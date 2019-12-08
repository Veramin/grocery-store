# JS Module Summary
### I. Why we need to use the Module?
  In the past, Javascript can execute the scripting by itself, because it's small.  In recent years, It's getting more and more complicated.  So, we have to find a method to solve a problem that is how to execute scripts effectively. Therefore, a concept uccurs - Module. According to our needs, we can export and import revent modules. There are many ways about module, this article I just talk about the export/import in ES6.

### II. How to use the Module?
+ General Export and Import
+ Default Export and Import
+ Rename Export and Import

#### II.I The folder structure: General Export and Import
- js-module
  - js
    - basic.js
    - index.js
  - index.html

```Javascript
// basic.js
const person = {
  name: 'Vera',
  age: 24,
  gender: 'female'
}

export {person}
```

```Javascript
// index.js
import {person} from './basic.js'

console.log(person)
```
```Javascript
// index.html
<script type="module" src="./js/index.js"></script>
```
> Tips:
> 1. Please don't run code locally, eg.```file:///F:/grocery-store/js-module/index.html```. Because of the module's safety and CORS, if we want to run these codes , We must use a serve.
> 2. We must add ```"type = 'module'"``` to the script tag to declare this script is a module as a top level module.  If we don't, there are some errors. For example, ```Uncaught SyntaxError: Cannot use import statement outside a module.```

#### II.II The folder structure: Default Export and Import
- js-module
  - js
    - basic.js
    - index.js
  - index.html

```Javascript
// basic.js

// About basic information
const basicInfor = {
  name: 'chenchen',
  age: 24,
  gender: 'female'
}
// About user's hobby1
const hobby1 = 'sleep sleep sleep'
// About user's hobby2
const hobby2 = 'eat eat eat'
const dosomething = (something) => 'I like' + something + '.'

export default dosomething
export { basicInfor, hobby1, hobby2 }
```

```Javascript
// index.js

// import { basicInfor, hobby1, hobby2 }, dosomething  from './basic.js';   Syntax Error
import dosomething, {basicInfor, hobby1, hobby2} from './basic.js'

console.log(basicInfor);
console.log(hobby1);
console.log(hobby2);
console.log(dosomething('吃饭睡觉打豆豆'));
```

> Tips:
> 1. In a module file, ```export default``` only appear once, but ```export``` can appear many times.
> 2.  When we use ```export default```, we don't need braces. On the contrary, ```export``` must be bracketed. Similarly, the usage of import is same to export, but there is one thing to note that is ```import {default as name} from './basic.js```  can be abbreviated to ```import name from './basic.js```.
> 3. ```export const name = ... ``` is corret. Instead, ```export default const name = ... ``` is wrong.
> 4. Last but not least, in a module file, the value export from ```export name ``` can be changed, but the other value export from ```export default name``` cannot be changed.

#### II.III Rename Export and Import(How to avoid naming conflicts?)
##### Please wait patiently....





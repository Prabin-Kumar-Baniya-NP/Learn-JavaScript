/*
JavaScript Engine hoist the variable andfunction declarations to the 
top of the script 
In case of var: it will allocate a memory to the variable and initialize as undefined
In case of let and const: it will allocate a memory to the variable but not initialize it.
*/
console.log(a); // undefined
console.log(b); // Reference Error: Cannot access b before initialization
var a = 1;
let b;
/*
Output:
undefined
/home/prabin_kumar_baniya_np/Learn JavaScript/19.JavaScriptHoisting.js:2
console.log(b);
            ^

ReferenceError: Cannot access 'b' before initialization
    at Object.<anonymous> (/home/prabin_kumar_baniya_np/Learn JavaScript/19.JavaScriptHoisting.js:2:13)
    at Module._compile (internal/modules/cjs/loader.js:1138:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1158:10)
    at Module.load (internal/modules/cjs/loader.js:986:32)
    at Function.Module._load (internal/modules/cjs/loader.js:879:14)
    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:71:12)
    at internal/main/run_main_module.js:17:47
*/

    
/*
Lexical Environment is the local memory + lexical environment of its parent.

The whole chain of lexical environment is called scope chain

*/
function a(){
    b();
    function b(){
        console.log(x);
    }
}
var x = 100;
a();
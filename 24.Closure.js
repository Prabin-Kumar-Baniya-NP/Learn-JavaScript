/*
Closure is the combination of function boundled together with its lexical environment.
*/
function z(){
    let a = 10;
    function x(){
        let b = 20;
        function y(){
            console.log(a, b);
        }
        y();
    }
    x();
}
z();
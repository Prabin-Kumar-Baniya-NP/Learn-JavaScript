var a = 1;
let b = 2;
{
    let a = 3; // right because we can decrease the scope of a
    var b = 4; // wrong because we cannot increase the scope of b
}
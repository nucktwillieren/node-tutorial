
/*
    "ReferenceError: * is not defined" vs undefined

    "ReferenceError" happens when you haven't declared the variable before it is used.
    "undefined" happens when a variable haven't initialized before it is used.
*/

function nonDeclaration() {
    console.log(a); // ReferenceError
}
//nonDeclaration()

function varDeclareWithoutAssignment() {
    var a;
    console.log(a); // Undefined
}

varDeclareWithoutAssignment()

function varDeclareWithAssignment() {
    var a = 1
    console.log(a); // 1
}

varDeclareWithAssignment()

function isVarHoisted() {
    console.log(a); // ReferenceError
    var a;
}

isVarHoisted()

function isAssignmentHoisted() {
    var a;
    console.log(a); // Undefined
    a = 2;
}

isAssignmentHoisted()

function isVarWithAssignmentHoisted() {
    console.log(a); // ReferenceError
    var a = 2;
}

isVarWithAssignmentHoisted()

function letDeclareWithoutAssignment() {
    let a;
    console.log(a); // Undefined
}

letDeclareWithoutAssignment()

function isLetHoisted() {
    console.log(a); // ReferenceError
    let a;
}

//isLetHoisted()

function letVsVar() {
    var foo = "Foo";
    let bar = "Bar";

    console.log(foo, bar); // FooBar

    {
        var moo = "Mooo";
        let baz = "Bazz";
        console.log(moo, baz); // MoooBazz
    }

    console.log(moo); // ReferenceError
    console.log(baz); // ReferenceError
}

letVsVar()

/*
    "ReferenceError: * is not defined" vs undefined

    "ReferenceError" happens when you haven't declared the variable before it is used.
    "undefined" happens when a variable haven't initialized before it is used.
*/


function nonDeclaration() {
    console.log(a);
}
//nonDeclaration()

function varDeclareWithoutAssignment() {
    var a;
    console.log(a);
}

varDeclareWithoutAssignment()

function varDeclareWithAssignment() {
    var a = 1
    console.log(a);
}

varDeclareWithAssignment()

function isVarHoisted() {
    console.log(a);
    var a;
}

isVarHoisted()

function isAssignmentHoisted() {
    var a;
    console.log(a);
    a = 2;
}

isAssignmentHoisted()

function isVarWithAssignmentHoisted() {
    console.log(a);
    var a = 2;
}

isVarWithAssignmentHoisted()

function letDeclareWithoutAssignment() {
    let a;
    console.log(a);
}

letDeclareWithoutAssignment()

function isLetHoisted() {
    console.log(a);
    let a;
}

//isLetHoisted()

function letVsVar() {
    var foo = "Foo";
    let bar = "Bar";

    console.log(foo, bar);

    {
        var moo = "Mooo";
        let baz = "Bazz";
        console.log(moo, baz);
    }

    console.log(moo);
    console.log(baz);
}

letVsVar()
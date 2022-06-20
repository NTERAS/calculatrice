const one = document.getElementById("cle1");
const two = document.getElementById("cle2");
const three = document.getElementById("cle3");
const four = document.getElementById("cle4");
const five = document.getElementById("cle5");
const six = document.getElementById("cle6");
const seven = document.getElementById("cle7");
const eight = document.getElementById("cle8");
const nine = document.getElementById("cle9");
const zero = document.getElementById("cle0");

const plus = document.getElementById("are1");
const minus = document.getElementById("are2");
const divide = document.getElementById("are3");
const multiply = document.getElementById("are4");

const equal = document.getElementById("enter");
const clear = document.getElementById("a-clear");

const library = ["0","0","operation", "1"];

one.addEventListener("click", function onClick(event) {
    if (document.getElementById("screen").innerHTML.length >= 2) {
        console.log("many digits!")
        document.getElementById("screen").style.backgroundColor="red";
        setTimeout(() => {
            document.getElementById("screen").style.backgroundColor="white";
        }, "200")
    }
    else{
        document.getElementById("screen").innerHTML += "1";
    }
});

two.addEventListener("click", function onClick(event) {
    if (document.getElementById("screen").innerHTML.length >= 2) {
        document.getElementById("screen").style.backgroundColor="red";
        setTimeout(() => {
            document.getElementById("screen").style.backgroundColor="white";
        }, "200")
    }
    else{
        document.getElementById("screen").innerHTML += "2";
    }
});

three.addEventListener("click", function onClick(event) {
    if (document.getElementById("screen").innerHTML.length >= 2) {
        document.getElementById("screen").style.backgroundColor="red";
        setTimeout(() => {
            document.getElementById("screen").style.backgroundColor="white";
        }, "200")
    }
    else{
        document.getElementById("screen").innerHTML += "3";
    }
});

four.addEventListener("click", function onClick(event) {
    if (document.getElementById("screen").innerHTML.length >= 2) {
        document.getElementById("screen").style.backgroundColor="red";
        setTimeout(() => {
            document.getElementById("screen").style.backgroundColor="white";
        }, "200")
    }
    else{
        document.getElementById("screen").innerHTML += "4";
    }
});

five.addEventListener("click", function onClick(event) {
    if (document.getElementById("screen").innerHTML.length >= 2) {
        document.getElementById("screen").style.backgroundColor="red";
        setTimeout(() => {
            document.getElementById("screen").style.backgroundColor="white";
        }, "200")
    }
    else{
        document.getElementById("screen").innerHTML += "5";
    }
});

six.addEventListener("click", function onClick(event) {
    if (document.getElementById("screen").innerHTML.length >= 2) {
        document.getElementById("screen").style.backgroundColor="red";
        setTimeout(() => {
            document.getElementById("screen").style.backgroundColor="white";
        }, "200")
    }
    else{
        document.getElementById("screen").innerHTML += "6";
    }
});

seven.addEventListener("click", function onClick(event) {
    if (document.getElementById("screen").innerHTML.length >= 2) {
        document.getElementById("screen").style.backgroundColor="red";
        setTimeout(() => {
            document.getElementById("screen").style.backgroundColor="white";
        }, "200")
    }
    else{
        document.getElementById("screen").innerHTML += "7";
    }
});

eight.addEventListener("click", function onClick(event) {
    if (document.getElementById("screen").innerHTML.length >= 2) {
        document.getElementById("screen").style.backgroundColor="red";
        setTimeout(() => {
            document.getElementById("screen").style.backgroundColor="white";
        }, "200")
    }
    else{
        document.getElementById("screen").innerHTML += "8";
    }
});

nine.addEventListener("click", function onClick(event) {
    if (document.getElementById("screen").innerHTML.length >= 2) {
        document.getElementById("screen").style.backgroundColor="red";
        setTimeout(() => {
            document.getElementById("screen").style.backgroundColor="white";
        }, "200")
    }
    else{
        document.getElementById("screen").innerHTML += "9";
    }
});

zero.addEventListener("click", function onClick(event) {

    if (document.getElementById("screen").innerHTML.charAt(0) == "0") {
        console.log("zeeero!")
        document.getElementById("screen").innerHTML = document.getElementById("screen").innerHTML.substring(1);
    }

    if (document.getElementById("screen").innerHTML.length >= 2) {
        document.getElementById("screen").style.backgroundColor="red";
        setTimeout(() => {
            document.getElementById("screen").style.backgroundColor="white";
        }, "200")
    }
    else{
        document.getElementById("screen").innerHTML += "0";
    }
});

plus.addEventListener("click", function onClick(event) {
    
    var kar  = document.getElementById("screen");
    const result = kar.innerText;
    if (isNaN(Number(result))) {
    } else {
        library[0] = Number(result);
    
    library[1] = Number(library[1]) + Number(library[0]);
    library[2] = "+";

    document.getElementById("screen").innerHTML = "";
    document.getElementById("memory").innerHTML = library[1]+"+";
    }

});

minus.addEventListener("click", function onClick(event) {
    
    var kar  = document.getElementById("screen");
    const result = kar.innerText;
    if (isNaN(Number(result))) {
    } else {
        library[0] = Number(result);
    
    library[1] = Number(library[0]) - Number(library[1]);
    library[2] = "-";

    document.getElementById("screen").innerHTML = "";
    document.getElementById("memory").innerHTML = library[1]+"-";
    }
});

divide.addEventListener("click", function onClick(event) {
    
    var kar  = document.getElementById("screen");
    const result = kar.innerText;
    library[3] = Number(result);
    
    library[2] = "/";

    document.getElementById("screen").innerHTML = "";
    document.getElementById("memory").innerHTML = library[3] + "/";

});

multiply.addEventListener("click", function onClick(event) {
    
    var kar  = document.getElementById("screen");
    const result = kar.innerText;
    library[3] = Number(result);
    library[2] = "*";

    document.getElementById("screen").innerHTML = "";
    document.getElementById("memory").innerHTML = library[3]+"*";

});

equal.addEventListener("click", function onClick(event) {
    
    var kar  = document.getElementById("screen");
    const result = kar.innerText;
    library[0] = Number(result);
    if (library[2]=="+") {

        fx = addValues();
        document.getElementById("screen").innerHTML = fx;
        library[1] = 0;
        document.getElementById("memory").innerHTML = "";
    }
    else if (library[2]=="-"){
        fx = removeValues();
        document.getElementById("screen").innerHTML = fx;
        library[1] = 0;
        document.getElementById("memory").innerHTML = "";
    }
    else if (library[2]=="/"){
        fx = divideValues();
        document.getElementById("screen").innerHTML = fx;
        library[3] = 1;
        document.getElementById("memory").innerHTML = "";
    }
    else if (library[2]=="*"){
        fx = multiValues();
        document.getElementById("screen").innerHTML = fx;
        library[3] = 1;
        document.getElementById("memory").innerHTML = "";
    }

});

clear.addEventListener("click", function onClick(event) {
    
    library[0] = "0";
    library[1] = "0";
    library[2] = "op";
    library[3] = "1";
    document.getElementById("screen").innerHTML = "";
    document.getElementById("memory").innerHTML = "";
});

function addValues() {
    x = Number(library[0]);
    y = Number(library[1]);
    return x+y;
}

function removeValues() {
    x = Number(library[1]);
    y = Number(library[0]);
    return x-y;
}

function divideValues() {
    x = parseInt(Number(library[3]));
    y = parseInt(Number(library[0]));
    return x/y;
}

function multiValues() {
    x = Number(library[0]);
    y = Number(library[3]);
    return x*y;
}
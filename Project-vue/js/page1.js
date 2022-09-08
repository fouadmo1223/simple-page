let applyButton = document.querySelector(".apllybutton");
let checkText = document.querySelector(".chicking");

let applyButton2 = document.querySelector(".apllybutton2");
let checkText2 = document.querySelector(".chicking2");


let totalPrice = document.querySelector(".total");
let changingTotal = document.querySelector(".change");
let changingTotal1 = document.querySelector(".change1");
let changingTotal2 = document.querySelector(".change2");
let changingTotal3 = document.querySelector(".change3");


let totalPrice2 = document.querySelector(".total2");
let changingTotal4 = document.querySelector(".change4");
let changingTotal5 = document.querySelector(".change5");
let changingTotal6 = document.querySelector(".change6");
let changingTotal7 = document.querySelector(".change7");





let totalValue = document.querySelector(".calctotal");
let totalValue2 = document.querySelector(".calctotal2");


totalValue.onclick = function () {

    totalPrice.innerText= parseInt(changingTotal.value * 499) + parseInt(changingTotal1.value * 499) + parseInt(changingTotal2.value * 599) + parseInt(changingTotal3.value * 699) ;

}


totalValue2.onclick = function () {

    totalPrice2.innerText = parseInt(changingTotal4.value * 499) + parseInt(changingTotal5.value * 499) + parseInt(changingTotal6.value * 599) + parseInt(changingTotal7.value * 699) ;

}



applyButton.onclick = function (e) {
    e.preventDefault();

    if (checkText.value == "fouad" && Number(totalPrice.innerText) >500) {

        totalPrice.innerText = Number(totalPrice.innerText) - 500;
    }

}

applyButton2.onclick = function (e) {
    e.preventDefault();

    if (checkText2.value == "fouad" && Number(totalPrice2.innerText) > 500) {

        totalPrice2.innerText = Number(totalPrice2.innerText) - 500;
    }

}



const cookie = document.getElementById("cookie");
const counter = document.getElementById("counter");
const clickupgrade = document.getElementById("clickupgrade");
const clickupgrade2 = document.getElementById("clickupgrade2");
const clickupgrade3 = document.getElementById("clickupgrade3");
const autoclickbutton1 = document.getElementById("autoclickbutton1")
let numberOfCookies = 0;
let clickIncrease = 1;


let autoClickIncrease=0;
let autoclicker;
let upgradeprize= 100;
let upgradeprize2= 200;
let upgradeprize3= 500;
let autoclickerprize= 100;
// {} - scope
cookie.onclick = () => {
    //numberOfCookies = numberOfCookies + 1;
    //numberOfCookies += 1;
    // ++ inkrement
    numberOfCookies = numberOfCookies + clickIncrease;

    counter.innerText = "Vráťovi plácačky: " + numberOfCookies;
}

clickupgrade.onclick = () => {


    if (numberOfCookies >= upgradeprize) {
        //odectu susenky
        numberOfCookies -= upgradeprize;
        counter.innerText = "Vráťovi plácačky: " + numberOfCookies;
        upgradeprize+=100
        clickupgrade.innerText= "Plácaček(+1 za trénink): " + upgradeprize
        clickIncrease++;
        
        
    }
};

clickupgrade2.onclick = () => {


    if (numberOfCookies >= upgradeprize2) {
        //odectu susenky
        numberOfCookies -= upgradeprize2;
        counter.innerText = "Vráťovi plácačky: " + numberOfCookies;
        upgradeprize2+= 200
        clickupgrade2.innerText= "Plácaček(+2 za trénink): " + upgradeprize2;
        
        clickIncrease = clickIncrease + 1;
        clickIncrease++;
    }

};
clickupgrade3.onclick = () => {


    if (numberOfCookies >= upgradeprize3) {
        //odectu susenky
        numberOfCookies -= upgradeprize3;
        counter.innerText = "Vráťovi plácačky: " + numberOfCookies;
        upgradeprize3+=300
        clickupgrade3.innerText= "Plácaček(+3 za trénink):   " + upgradeprize3;
        
        
        clickIncrease = clickIncrease + 2;
        clickIncrease++;
    }

};

autoclickbutton1.onclick = () => {
    if (numberOfCookies >= autoclickerprize) {
        numberOfCookies -= autoclickerprize;
        counter.innerText = "Vráťovi plácačky: " + numberOfCookies;
        autoclickerprize+=100
        autoclickbutton1.innerText= "Plácaček(+1 za sekundu): " + autoclickerprize;
        autoClickIncrease++;
        clearInterval(autoclicker)
        autoclicker=setInterval(() => {
            numberOfCookies+= autoClickIncrease;
            counter.innerText = "Vráťovi plácačky: " + numberOfCookies;
        }, 1000);
    }

}

/*const turnOnCheats= () => {
    numberOfCookies=1000000;
    counter.innerText = "Vráťovi plácačky: " + numberOfCookies;
}
turnOnCheats()
function turnOnsuperCheats() {

    numberOfCookies=1000000000;
    counter.innerText = "Vráťovi plácačky: " + numberOfCookies;
}
turnOnsuperCheats();*/
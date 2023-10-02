const cookie = document.getElementById("cookie");
const counter = document.getElementById("counter");
const clickupgrade = document.getElementById("clickupgrade");
const clickupgrade2 = document.getElementById("clickupgrade2");
const clickupgrade3 = document.getElementById("clickupgrade3");

let numberOfCookies = 0;
let clickIncrease = 1;
let clickIncrease2 = 2;
// {} - scope
cookie.onclick = () => {
    //numberOfCookies = numberOfCookies + 1;
    //numberOfCookies += 1;
    // ++ inkrement
    numberOfCookies = numberOfCookies + clickIncrease;

    counter.innerText = "Kills: " + numberOfCookies;
}

clickupgrade.onclick = () => {


    if (numberOfCookies >= 50) {
        //odectu susenky
        numberOfCookies -= 50;
        counter.innerText = "Kills: " + numberOfCookies;
        clickIncrease++;
    }
};

clickupgrade2.onclick = () => {


    if (numberOfCookies >= 200) {
        //odectu susenky
        numberOfCookies -= 200;
        counter.innerText = "Kills: " + numberOfCookies;

        numberOfCookies = numberOfCookies;
        clickIncrease = clickIncrease + 2;
        clickIncrease++;
    }

};
clickupgrade3.onclick = () => {


    if (numberOfCookies >= 500) {
        //odectu susenky
        numberOfCookies -= 500;
        counter.innerText = "Kills: " + numberOfCookies;

        numberOfCookies = numberOfCookies;
        clickIncrease = clickIncrease + 3;
        clickIncrease++;
    }

};


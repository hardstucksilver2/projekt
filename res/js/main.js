const cookie = document.getElementById("cookie");
const counter = document.getElementById("counter");
const clickupgrade = document.getElementById("clickupgrade")
let numberOfCookies = 0;
let clickIncrease = 1;
// {} - scope
cookie.onclick = () => {
    //numberOfCookies = numberOfCookies + 1;
    //numberOfCookies += 1;
    // ++ inkrement
    numberOfCookies += clickIncrease;

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

    function turndice() {
        let rand1 = Math.floor(Math.random()*6 + 1), rand2 = Math.floor(Math.random()*6 + 1);
    let randDice1 = "images/dice" + rand1 + ".png", randDice2 = "images/dice" + rand2 + ".png";
    document.querySelectorAll("img")[0].setAttribute("src", randDice1);
    document.querySelectorAll("img")[1].setAttribute("src", randDice2);
    if(rand1 > rand2){
        document.querySelector("h1").innerHTML = "🚩Player 1 Wins!"
        document.querySelector("h1").style.color = "#68c40c";
    }else if(rand1 < rand2){
        document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
        document.querySelector("h1").style.color = "#68c40c";
    }else {
        document.querySelector("h1").innerHTML = "Draw!"; 
        document.querySelector("h1").style.color = "#e0c709";
    }
    }

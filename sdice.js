let images = ["441581183_898515425365917_8186390106576642368_n.jpg", 
"441537767_449340131015908_5931348474780018497_n.jpg", 
"438171575_970150554596657_2692958061669758027_n.jpg", 
"438159146_1183255606421909_1127957873831438797_n.jpg",
"438159146_1183255606421909_1127957873831438797_n.jpg ", 
"438154274_342772325196458_4262882937555789751_n.jpg"] ;
let dice = document.querySelectorAll("img"); 

function roll(){ 
    dice.forEach(function(die){
        die.classList.add("shake"); 
    });
    setTimeout(function(){
        dice.forEach(function(die){
            die.classList.remove("shake");
        });
        let dieOneValue = Math.floor(Math.random()*6)
        ; 
        let dieTwoValue = Math.floor(Math.random()*6)
        ; 
        console.log(dieOneValue,dieTwoValue);
        document.querySelector("#die-1").setAttribute 
        ("src", images[dieOneValue]); 
        document.querySelector("#die-2").setAttribute 
        ("src", images[dieTwoValue]);
        document.querySelector("#total").innerHTML = 
        "Dice Unfurls... " + ( (dieOneValue +1) + 
        (dieTwoValue + 1) ); 
    }, 
    1000
    );
} 
roll();


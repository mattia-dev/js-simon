document.addEventListener('DOMContentLoaded', function () {

    var output = document.querySelector('#output');

    var randomNumbers = [];

    var userNumbers = [];

    var score = 0;

    var randomNumbersString = "Ricordati questi numeri:";

    var userNumbersStringRight = "";

    var userNumbersStringWrong = "";

    while (randomNumbers.length < 5) {

        var num = Math.floor(Math.random() * 100) + 1;

        if (!randomNumbers.includes(num)) {
            
            randomNumbers.push(num);

            randomNumbersString += " " + num;

        }

    }

    alert(randomNumbersString);

    setTimeout(function () {
        
        while (userNumbers.length < 5) {
            
            var userNum = parseInt(prompt("Inserisci un numero che ricordi."));

            if (!userNumbers.includes(userNum)) {
                
                userNumbers.push(userNum);

                if (randomNumbers.includes(userNum)) {

                    userNumbersStringRight += " " + userNum; 

                    score += 1;
                    
                } 
                
            } else {

                alert("Hai già inserito questo numero! Provane un altro!")

            }

        }

        for (var i = 0; i < randomNumbers.length; i++) {
            
            if (!userNumbers.includes(randomNumbers[i])) {
                
                userNumbersStringWrong += " " + randomNumbers[i];

            }
            
        }

        switch (score) {
    
            case 0:
    
                output.innerHTML = "Hai indovinato " + score + " numeri su 5. Te li sei dimenticati tutti:" + userNumbersStringWrong;
                break;
        
            case 5:
    
                output.innerHTML = "Hai indovinato " + score + " numeri su 5. Te li sei ricordati tutti:" + userNumbersStringRight;
                break;
    
            default:
    
                output.innerHTML = "Hai indovinato " + score + " numeri su 5. Ti sei ricordato:" + userNumbersStringRight + "; ti sei dimenticato:" + userNumbersStringWrong;
                break;
    
        }

    }, 30000);

})
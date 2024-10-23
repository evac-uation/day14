let fname = "";

function greet() {
    let greetParagraph = document.getElementById("greet");
   
    let lname = document.getElementById("lname").value;
    let age = document.getElementById("age").value;
    fname = document.getElementById("fname").value;
    
    greetParagraph.innerHTML = "Greetings " + age + " year old " + fname + " " + lname;
}

function trivia1() {
    let triviaAnswer = document.getElementById("trivia1-answer")

    // get values from form
    let chocolateSelected = document.getElementById("chocolate").checked;
    let tunaSelected = document.getElementById("tuna").checked;
    let honeySelected = document.getElementById("honey").checked;

    // give result based off of what they selected
    if (chocolateSelected) {
        triviaAnswer.innerHTML = fname + ", you are wrong. Sweet tooth eh?";
    }
    else if (tunaSelected) {
        triviaAnswer.innerHTML = fname + ", you are wrong. Rotten tooth, eh!";
    }
    else if (honeySelected) {
        triviaAnswer.innerHTML = fname + ", you are correct!";
    }
}

function truths1() {
    let truths1Answer = document.getElementById("truths1-answer")
 

    let twinSelected = document.getElementById("twin").checked;
    let colorblindSelected = document.getElementById("colorblind").checked;
    let righthandedSelected = document.getElementById("righthanded").checked;

 
    if (twinSelected) {
        truths1Answer.innerHTML = fname + ", you are wrong.";
    }
    else if (colorblindSelected) {
        truths1Answer.innerHTML = fname + ", you are wrong.";
    }
    else if (righthandedSelected) {
        truths1Answer.innerHTML = fname + ", you are correct!";
    }
}
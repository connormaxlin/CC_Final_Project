var myRec = new p5.SpeechRec(); // new P5.SpeechRec object
var textHPos = 100;

function setup() {
    createCanvas(window.innerWidth - 10, window.innerHeight - 10);
    // instructions:
    myRec.onResult = showResult;
    myRec.start();
}

function draw() {
    textSize(56);
    textFont("Chaparral Pro");
    text("The truth is...", 100, textHPos);
    textSize(18);
    textFont("Arial");
    text("(Say something)", 100, textHPos+40);
}

function showResult() {
    if (myRec.resultValue == true) {
        textSize(56);
        textFont("Chaparral Pro");
        text("The truth is " + myRec.resultString, 100, textHPos+=80);
        console.log(myRec.resultString);
    }
}

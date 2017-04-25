var myRec = new p5.SpeechRec(); // new P5.SpeechRec object
var textHPos = 100;

// Need to loard custom fonts but wasn't working. https://p5js.org/reference/#/p5/textFont 
// var fontRegular, fontBold;
// function preload() {
//    fontRegular = loadFont("assets/ChaparralPro-Regular.otf");
//    fontBold = loadFont("assets/ChaparralPro-Regular.otf");
// }

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

//Voice not working. Documentation says it needs to be running on a server? 
function showResult() {
    if (myRec.resultValue == true) {
        textSize(56);
        textFont("Chaparral Pro");
        text("The truth is " + myRec.resultString, 100, textHPos+=80);
        console.log(myRec.resultString);
    }
}

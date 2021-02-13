function setup() {
    canvas = createCanvas(300, 300);
    canvas.center()
    Video = createCapture(VIDEO);
    Video.hide();
    classifier = ml5.imageClassifier('Mobilenet', Model_Loaded)
}

function Model_Loaded() {
    console.log("Model Loaded");
}




function draw() {
    image(Video, 0, 0, 300, 300);
    classifier.classify(Video, gotresults);
}

function gotresults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("result").innerHTML = results[0].label;
        document.getElementById("accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
}
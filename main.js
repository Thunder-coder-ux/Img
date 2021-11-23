Webcam.set({
width:349.99,
height:299.99,
image_format: 'png',
png_quality:88.98
});
camera = document.getElementById("camera");

Webcam.attach( '#camera' );

function take_snapshot(){
Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'">';
});
}

console.log('ml5 version:', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/_fkFCDSvK/model.json', modelLoaded);
function modelLoaded(){
    console.log('model Loaded')
}

function check(){
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}

function gotResult(error, results){
    if (error) {
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("result_obj_name").innerHTML = results[0].label;
        document.getElementById("result_obj_acy").innerHTML = results[0].confiedence.toFixed(2);
    }
}
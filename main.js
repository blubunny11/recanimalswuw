function start()
{ 
    navigator.mediaDevices.getUserMedia({ audio: true,
        video:false
    });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/_rji04VCO/model.json',modelReady);
}

function modelReady(){
    classifier.classify(gotResult);
}
var dog=0;
var cat=0;

function gotResult(error,results){
if (error) {
    console.error(error);
}
else {
    console.log(results);
    random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;
    
    document.getElementById("result").innerHTML = 'I Can Hear - '+
    results[0].label;
    document.getElementById("result_count").innerHTML = "detected dog-"+dog+ "detected cat-"+cat;
    document.getElementById("result").style.color = "rgb("
    +random_number_r+","+random_number_g+","+random_number_b+")";
    document.getElementById("result_count").style.color = "rgb("
    +random_number_r+","+random_number_g+","+random_number_b+")";
    img=document.getElementById("animal_img")
    if(results[0].label=="Dog"){
        img.src='dog.gif';
        dog=dog+1;
    }
    else if(results[0].label=="Cat"){
        img.src='giga cat.jpeg';
        cat=cat+1;
    }
    else{
        img.src='ear.jpg';
    }

   
}
}

var rootRef = firebase.database().ref();

var c = 0;
var answer = 0;
var i;
var myData;

    var ref= firebase.database().ref();

    ref.on('value', function(snapshot) {
        myData = snapshot.val();
    
        document.getElementById("question").innerHTML = myData[0].question;
        document.getElementById("op1").innerHTML = myData[0].option1;
        document.getElementById("op2").innerHTML = myData[0].option2;
        document.getElementById("op3").innerHTML = myData[0].option3;
        document.getElementById("op4").innerHTML = myData[0].option4;
        answer = myData[0].answer;
    });

$("#next").on("click", function () {
    c++;
    console.log(c);
    ref = firebase.database().ref();
    
        document.getElementById("question").innerHTML = myData[c].question;
        document.getElementById("op1").innerHTML = myData[c].option1;
        document.getElementById("op2").innerHTML = myData[c].option2;
        document.getElementById("op3").innerHTML = myData[c].option3;
        document.getElementById("op4").innerHTML = myData[c].option4;
        answer = myData[c].answer;

    document.getElementById("op-image1").src = 'images/blue.png';
    document.getElementById("op-image2").src = 'images/blue.png';
    document.getElementById("op-image3").src = 'images/blue.png';
    document.getElementById("op-image4").src = 'images/blue.png';
});


$("#previous").on("click", function () {
    c--;
    console.log(c);
    ref= firebase.database().ref();
    
        document.getElementById("question").innerHTML = myData[c].question;
        document.getElementById("op1").innerHTML = myData[c].option1;
        document.getElementById("op2").innerHTML = myData[c].option2;
        document.getElementById("op3").innerHTML = myData[c].option3;
        document.getElementById("op4").innerHTML = myData[c].option4;
        answer = myData[c].answer;
    
    document.getElementById("op-image1").src = 'images/blue.png';
    document.getElementById("op-image2").src = 'images/blue.png';
    document.getElementById("op-image3").src = 'images/blue.png';
    document.getElementById("op-image4").src = 'images/blue.png';
});

$("#check").on("click", function(){
    i=1;
    
    answer = myData[c].answer;
    document.getElementById("op-image"+answer).src = 'images/green.png';
    while(i <= 4){
        if(i != answer){
            document.getElementById("op-image"+i).src = 'images/red.png';
        }
        i++;
    }
});

$("#icons a:nth-child(1)").on("click", function(){
    document.getElementById("call").src = 'images/Cross.png';
});


$("#icons a:nth-child(2)").on("click", function(){
    document.getElementById("dd").src = 'images/Cross.png';
});


$("#icons a:nth-child(3)").on("click", function(){
    document.getElementById("skip").src = 'images/Cross.png';
});




$("#pause").on("click", function(){
    $(".wrapper .spinner").css("animation-play-state", "paused");
    $(".wrapper .filler").css("animation-play-state", "paused");
    $(".wrapper .mask").css("animation-play-state", "paused");
});


$("#play").on("click", function(){
    $(".wrapper .spinner").css("animation-play-state", "running");
    $(".wrapper .filler").css("animation-play-state", "running");
    $(".wrapper .mask").css("animation-play-state", "running");
});
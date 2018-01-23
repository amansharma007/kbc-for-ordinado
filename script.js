
var rootRef = firebase.database().ref();

var c = 0;
var answer = 0;
var i;
var myData;

    var ref= firebase.database().ref();

    ref.once('value', function(snapshot) {
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
    
    ref.on('value', function(snapshot) {
    
        document.getElementById("question").innerHTML = snapshot.child(c + "/question").val();
        document.getElementById("op1").innerHTML = snapshot.child(c + "/option1").val();
        document.getElementById("op2").innerHTML = snapshot.child(c + "/option2").val();
        document.getElementById("op3").innerHTML = snapshot.child(c + "/option3").val();
        document.getElementById("op4").innerHTML = snapshot.child(c + "/option4").val();
        answer = snapshot.child(c + "/answer").val();
    });

    //stop animation
    $(".wrapper .spinner").css("animation", "none");
    $(".wrapper .filler").css("animation", "none");
    $(".wrapper .mask").css("animation", "none");
    
    
    
    document.getElementById("op-image1").src = 'images/blue.png';
    document.getElementById("op-image2").src = 'images/blue.png';
    document.getElementById("op-image3").src = 'images/blue.png';
    document.getElementById("op-image4").src = 'images/blue.png';
});


$("#previous").on("click", function () {
    c--;
    console.log(c);
    ref= firebase.database().ref();
    ref.on('value', function(snapshot) {
    
        document.getElementById("question").innerHTML = snapshot.child(c + "/question").val();
        document.getElementById("op1").innerHTML = snapshot.child(c + "/option1").val();
        document.getElementById("op2").innerHTML = snapshot.child(c + "/option2").val();
        document.getElementById("op3").innerHTML = snapshot.child(c + "/option3").val();
        document.getElementById("op4").innerHTML = snapshot.child(c + "/option4").val();
        answer = snapshot.child(c + "/answer").val();
    });
    
    
    //stop animation
    $(".wrapper .spinner").css("animation", "none");
    $(".wrapper .filler").css("animation", "none");
    $(".wrapper .mask").css("animation", "none");
    
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


$("#icons a:nth-child(4)").on("click", function(){
    document.getElementById("call").src = '';
    document.getElementById("dd").src = '';
    document.getElementById("skip").src = '';
});


$("#pause").on("click", function(){
    $(".wrapper .spinner").css("animation-play-state", "paused");
    $(".wrapper .filler").css("animation-play-state", "paused");
    $(".wrapper .mask").css("animation-play-state", "paused");
});


$("#play").on("click", function(){
    // restart animation
    setTimeout(function() {
        
    $(".wrapper .spinner").css("animation", "rota 30s linear 1");
    $(".wrapper .filler").css("animation", "opa 30s steps(1, end) 1 reverse");
    $(".wrapper .mask").css("animation", "opa 30s steps(1, end) 1");
    }, 10);
    
    $(".wrapper .spinner").css("animation-play-state", "running");
    $(".wrapper .filler").css("animation-play-state", "running");
    $(".wrapper .mask").css("animation-play-state", "running");
});

//Read the code it is very easy.... Beacause the operations being done here are just reading operations...that means this app is just reading from the database and not writing anything.... everything is well sorted in this code... 

var rootRef = firebase.database().ref();//Here I am taking the root reference of the firebase database into the variable rootRef

var c = 0;
var answer = 0;
var lock = 0;
var i;
var myData;

    var ref= firebase.database().ref();
//The once() function here basically is a function that is triggered, 'once' when your app starts... So here what I did is I took all the data from the database into the array "myData[]" and then I have done some changes in the HTML using that data..

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
    //Now here the function on() is a little different from the function once() which means that it does not get triggered once after the app starts but it gets triggered each and everytime there is change being made in the database...
    
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
    
    //play music
    document.getElementById("countdown").currentTime = 0;
    document.getElementById("questionStart").play();
    
    
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
    
    
    //play music
    document.getElementById("countdown").currentTime = 0;
    document.getElementById("questionStart").play();
    
    //stop animation
    $(".wrapper .spinner").css("animation", "none");
    $(".wrapper .filler").css("animation", "none");
    $(".wrapper .mask").css("animation", "none");
    
    document.getElementById("op-image1").src = 'images/blue.png';
    document.getElementById("op-image2").src = 'images/blue.png';
    document.getElementById("op-image3").src = 'images/blue.png';
    document.getElementById("op-image4").src = 'images/blue.png';
});

$("#1").on("click", function(){

    document.getElementById("countdown").pause();
    
    $(".wrapper .spinner").css("animation-play-state", "paused");
    $(".wrapper .filler").css("animation-play-state", "paused");
    $(".wrapper .mask").css("animation-play-state", "paused");
    document.getElementById("answerLock").play();
    document.getElementById("op-image1").src = 'images/green.png';  
    lock = 1;
    
});

$("#2").on("click", function(){

    document.getElementById("countdown").pause();
    
    $(".wrapper .spinner").css("animation-play-state", "paused");
    $(".wrapper .filler").css("animation-play-state", "paused");
    $(".wrapper .mask").css("animation-play-state", "paused");
    document.getElementById("answerLock").play();
    document.getElementById("op-image2").src = 'images/green.png';       
    lock = 2;
    
});

$("#3").on("click", function(){

    document.getElementById("countdown").pause();
    
    $(".wrapper .spinner").css("animation-play-state", "paused");
    $(".wrapper .filler").css("animation-play-state", "paused");
    $(".wrapper .mask").css("animation-play-state", "paused");
    document.getElementById("answerLock").play();
    document.getElementById("op-image3").src = 'images/green.png';       
    lock = 3;
    
});

$("#4").on("click", function(){

    document.getElementById("countdown").pause();
    
    $(".wrapper .spinner").css("animation-play-state", "paused");
    $(".wrapper .filler").css("animation-play-state", "paused");
    $(".wrapper .mask").css("animation-play-state", "paused");
    document.getElementById("answerLock").play();
    document.getElementById("op-image4").src = 'images/green.png';       
    lock = 4;
    
});

$("#check").on("click", function(){
    i=1;
    
    answer = myData[c].answer;
    document.getElementById("op-image"+answer).src = 'images/green.png';
    
    if(answer === lock){
        document.getElementById("gameStart").play();
    }
    
    while(i <= 4){
        if(i != answer){
            document.getElementById("op-image"+i).src = 'images/red.png';
        }
        i++;
    }
});

$("#icons a:nth-child(1)").on("click", function(){
    document.getElementById("call").src = 'images/Cross.png';
    document.getElementById("lifeline").play();
});


$("#icons a:nth-child(2)").on("click", function(){
    document.getElementById("dd").src = 'images/Cross.png';
    document.getElementById("lifeline").play();
});


$("#icons a:nth-child(3)").on("click", function(){
    document.getElementById("skip").src = 'images/Cross.png';
    document.getElementById("lifeline").play();
});


$("#icons a:nth-child(4)").on("click", function(){
    document.getElementById("gameStart").play();
    document.getElementById("call").src = '';
    document.getElementById("dd").src = '';
    document.getElementById("skip").src = '';
});


$("#pause").on("click", function(){
    //play music
    document.getElementById("countdown").pause();
    
    $(".wrapper .spinner").css("animation-play-state", "paused");
    $(".wrapper .filler").css("animation-play-state", "paused");
    $(".wrapper .mask").css("animation-play-state", "paused");
});




$("#play").on("click", function(){
    //play music
    document.getElementById("countdown").play();
    
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

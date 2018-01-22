
var rootRef = firebase.database().ref();

var c = 1;
var answer = 0;

var presentKey;

    var ref= firebase.database().ref().child(0);

    ref.on('value', function(snapshot) {
        presentKey = snapshot.key;
        alert(presentKey);
    });

    ref.on('value', function(snapshot) {
        document.getElementById("question").innerHTML = snapshot.child("question").val();
        document.getElementById("op1").innerHTML = snapshot.child("option1").val();
        document.getElementById("op2").innerHTML = snapshot.child("option2").val();
        document.getElementById("op3").innerHTML = snapshot.child("option3").val();
        document.getElementById("op4").innerHTML = snapshot.child("option4").val();
        answer = snapshot.child("answer").val();
    });

document.getElementById("next").addEventListener("click", function () {
    
    ref= firebase.database().ref().child(c);
    
    ref.on('value', function(snapshot) {
        document.getElementById("question").innerHTML = snapshot.child("question").val();
        document.getElementById("op1").innerHTML = snapshot.child("option1").val();
        document.getElementById("op2").innerHTML = snapshot.child("option2").val();
        document.getElementById("op3").innerHTML = snapshot.child("option3").val();
        document.getElementById("op4").innerHTML = snapshot.child("option4").val();
        answer = snapshot.child("answer").val();
    });
    document.getElementById("op-image1").src = 'images/blue.png';
    document.getElementById("op-image2").src = 'images/blue.png';
    document.getElementById("op-image3").src = 'images/blue.png';
    document.getElementById("op-image4").src = 'images/blue.png';
    c = c + 1;
});


document.getElementById("previous").addEventListener("click", function () {
    c = c - 1;
    ref= firebase.database().ref().child(c);
    
    ref.on('value', function(snapshot) {
        document.getElementById("question").innerHTML = snapshot.child("question").val();
        document.getElementById("op1").innerHTML = snapshot.child("option1").val();
        document.getElementById("op2").innerHTML = snapshot.child("option2").val();
        document.getElementById("op3").innerHTML = snapshot.child("option3").val();
        document.getElementById("op4").innerHTML = snapshot.child("option4").val();
        answer = snapshot.child("answer").val();
    });
    document.getElementById("op-image1").src = 'images/blue.png';
    document.getElementById("op-image2").src = 'images/blue.png';
    document.getElementById("op-image3").src = 'images/blue.png';
    document.getElementById("op-image4").src = 'images/blue.png';
});

document.getElementById("check").addEventListener("click", function(){
    ref= firebase.database().ref().child(c);
    
    ref.on('value', function(snapshot) {
        answer = snapshot.child("answer").val();
    });
    
    document.getElementById("op-image"+answer).src = 'images/green.png';
});
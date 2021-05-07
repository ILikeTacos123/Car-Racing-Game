var canvas = document.getElementById("my_canvas");
var ctx = canvas.getContext("2d");

var car1_width = 120;
var car1_height = 70;
var car1_image = "car1.png"
var car1_x = 10;
var car1_y = 10;

var car2_width = 120;
var car2_height = 70;
var car2_image = "car2.png"
var car2_x = 10;
var car2_y = 100;

var background_image = "racing-background.jpg";
var background_imgTag, car1_imgTag, car2imgTag;

function add() {
    background_imgTag = new Image();
    background_imgTag.onload = upload_background;
    background_imgTag.src = background_image;

    car1_imgTag = new Image();
    car1_imgTag.onload = upload_car1;
    car1_imgTag.src = car1_image;

    car2_imgTag = new Image();
    car2_imgTag.onload = upload_car2;
    car2_imgTag.src = car2_image;
}


function upload_background() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function upload_car1() {
    ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height);
}

function upload_car2() {
    ctx.drawImage(car2_imgTag, car2_x, car2_y, car2_width, car2_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    key_pressed = e.keyCode;
    console.log(key_pressed);

    if(key_pressed == "38") {
        car1_up();
        console.log("Up key is pressed");
    }
    if(key_pressed == "40") {
        car1_down();
        console.log("Down key is pressed");
    }
    if(key_pressed == "37") {
        car1_left();
        console.log("Left key is pressed");
    }
    if(key_pressed == "39") {
        car1_right();
        console.log("Right key is pressed");
    }
    if(key_pressed == "87") {
        car2_up();
        console.log("W key is pressed");
    }
    if(key_pressed == "65") {
        car2_left();
        console.log("A key is pressed");
    }
    if(key_pressed == "83") {
        car2_down();
        console.log("S key is pressed");
    }
    if(key_pressed == "68") {
        car2_right();
        console.log("D key is pressed");
    }
    if(car1_x>700) {
        console.log("Car 1 - White Car WON!");
        document.getElementById("game_status").innerHTML = "Car 1 - White Car WON!";
    }
    if(car2_x>700) {
        console.log("Car 2 - Green Car WON!");
        document.getElementById("game_status").innerHTML = "Car 2 - Green Car WON!";
    }
}

function car1_up(){
    if (car1_y >= 0) {
        car1_y = car1_y - 10;
        console.log("When up arrow is pressed, x = " + car1_x + " , y = " + car1_y);
        upload_background();
        upload_car1();
        upload_car2();
    }
}

function car1_down(){
    if (car1_y <= 500) {
        car1_y = car1_y + 10;
        console.log("When down arrow is pressed, x = " + car1_x + " , y = " + car1_y);
        upload_background();
        upload_car1();
        upload_car2();
    }
}

function car1_right(){
    if (car1_x <= 700) {
        car1_x = car1_x + 10;
        console.log("When right arrow is pressed, x = " + car1_x + " , y = " + car1_y);
        upload_background();
        upload_car1();
        upload_car2();
    }
}

function car1_left(){
    if (car1_x >= 0) {
        car1_x = car1_x - 10;
        console.log("When left arrow is pressed, x = " + car1_x + " , y = " + car1_y);
        upload_background();
        upload_car1();
        upload_car2();
    }
}

function car2_left(){
    if (car2_x >= 0) {
        car2_x = car2_x - 10;
        console.log("When A is pressed, x = " + car2_x + " , y = " + car2_y);
        upload_background();
        upload_car2();
        upload_car1();
    }
}

function car2_right(){
    if (car2_x <= 700) {
        car2_x = car2_x + 10;
        console.log("When D is pressed, x = " + car2_x + " , y = " + car2_y);
        upload_background();
        upload_car2();
        upload_car1();
    }
}

function car2_down(){
    if (car2_y <= 500) {
        car2_y = car2_y + 10;
        console.log("When S is pressed, x = " + car2_x + " , y = " + car2_y);
        upload_background();
        upload_car2();
        upload_car1();
    }
}

function car2_up(){
    if (car2_y >= 0) {
        car2_y = car2_y - 10;
        console.log("When W is pressed, x = " + car2_x + " , y = " + car2_y);
        upload_background();
        upload_car2();
        upload_car1();
    }
}
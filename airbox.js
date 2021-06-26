var canvas= new fabric.Canvas('Mycanvas')
var player_x=10;
var player_y=10;
var playerimage="";
var blockimage="";
var blockheight=30;
var blockwidth=30;
function addPlayer(){
    fabric.Image.fromURL("player.png",function(Img){
        playerimage=Img;
        playerimage.scaleToWidth(150);
        playerimage.scaleToHeight(140);
        playerimage.set({
            top:playery,
            left:playerx
        });
        canvas.add(playerimage);
    });
};
function new_image(getImage){
    fabric.Image.fromURL(getImage,function(Img){
        blockimage=Img;
        blockimage.scaleToHeight(blockheight);
        blockimage.scaleToWidth(blockwidth);
        blockimage.set({
            top:playery,
            left:playerx
        });
        canvas.add(blockimage);
    });
};
window.addEventListener("my_keydown", mykey_code)
function mykey_code(){
keyPressed=e.keyCode;
if (e.shiftKey == true && keyPressed == '80'){
    console.log("p and shift pressed together")
    block_image_width = block_image_width + 10;
    block_image_height = block_image_height + 10;
    document.getElementById("widthspan").innerHTML = block_image_width;
    document.getElementById("heightspan").innerHTML = block_image_height;
}

if (e.shiftKey == true && keyPressed == '77'){
    console.log("m and shift pressed together")
    block_image_width = block_image_width - 10;
    block_image_height = block_image_height - 10;
    document.getElementById("widthspan").innerHTML = block_image_width;
    document.getElementById("heightspan").innerHTML = block_image_height;
}


console.log(keyPressed);
if(keyPressed == '38'){
    console.log("up");
    up();}
if(keyPressed == '40'){
    console.log("down");
    down();
}
if(keyPressed == '39'){
console.log("right");
right();
}
if(keyPressed == '37'){
    console.log("left")
    left(); 
}
if(keyPressed == '72'){
    console.log("h")
    new_image('hulk_face.png');
}
if(keyPressed == '70'){
    console.log("f")
    new_image('ironman_face.png');
}
if(keyPressed == '66'){
    console.log("b")
    new_image('spiderman_body.png');
}
if(keyPressed == '76'){
    console.log("l")
    new_image('hulk_legs.png');
}
if(keyPressed == '82'){
    console.log("r")
    new_image('thor_right_hand.png');
}
if(keyPressed == '65'){
    console.log("a")
    new_image('captain_amerca_left_hand.png');
}
}

function up(){
    if (player_y >=0) {
        player_y = player_y - 10;
        canvas.remove(playerimage);
        addPlayer();
    }
}

function down(){
    if (player_y <=500) {
        player_y = player_y + 10;
        canvas.remove(playerimage);
        addPlayer();
    }
}
function left(){
    if (player_x >=0) {
        player_x = player_x - 10;
        canvas.remove(playerimage);
        addPlayer();
    }
}

function right(){
    if (player_x <=800) {
        player_x = player_x + 10;
        canvas.remove(playerimage);
        addPlayer();
    }
}
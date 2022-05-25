var inp
var button
var title
var db
var gs
var pc

function setup(){
    createCanvas(window.innerWidth,window.innerHeight);
    inp = createInput()
    inp.position(window.innerWidth/2-50,200)

    button = createButton('play')
    button.position(window.innerWidth/2,250)

    title = createElement('H1')
    title.html('car raceing game')
    title.position(window.innerWidth/2-50,50)

    db = firebase.database()
    db.ref('gameState').on('value',function(data){
        gs=data.val()
    })
    db.ref('playerCount').on('value',function(data){
       pc = data.val()
    })
}

function draw(){
    background("white");
   
    drawSprites();
}


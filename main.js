// uses play() method to play the audio files upon clicking.
function qplay(){
  document.getElementById('Q').play();
  document.getElementById('display').innerHTML = "percussion1"
};

function wplay(){
  document.getElementById('W').play();
  document.getElementById('display').innerHTML = "percussion2"
};
function eplay(){
  document.getElementById('E').play();
  document.getElementById('display').innerHTML = "percussion3"
};

function aplay(){
  document.getElementById('A').play();
  document.getElementById('display').innerHTML = "percussion4"
};

function splay(){
  document.getElementById('S').play();
  document.getElementById('display').innerHTML = "percussion5"
};

function dplay(){
  document.getElementById('D').play();
  document.getElementById('display').innerHTML = "percussion6"
};

function zplay(){
  document.getElementById('Z').play();
  document.getElementById('display').innerHTML = "percussion7"
};

function xplay(){
  document.getElementById('X').play();
  document.getElementById('display').innerHTML = "percussion8"
};

function cplay(){
  document.getElementById('C').play();
  document.getElementById('display').innerHTML = "percussion9"
};

document.addEventListener("keydown", functionname);
function functionname(poop){
  if(poop.keyCode == "81"){
    qplay();
    document.getElementById('display').innerHTML = "percussion1"
  }
  if(poop.keyCode == "87"){
    wplay();
    document.getElementById('display').innerHTML = "percussion2"
  }
  else if(poop.keyCode == "69"){
    document.getElementById('display').innerHTML = "percussion3"
    eplay();
  }
  else if(poop.keyCode == "65"){
    aplay();
    document.getElementById('display').innerHTML = "percussion4"
  }
  else if(poop.keyCode == "83"){
    splay();
    document.getElementById('display').innerHTML = "percussion5"
  }
  else if(poop.keyCode == "68"){
    dplay();
    document.getElementById('display').innerHTML = "percussion6"
  }
  else if(poop.keyCode == "90"){
    zplay();
    document.getElementById('display').innerHTML = "percussion7"
  }
  else if(poop.keyCode == "88"){
    xplay();
    document.getElementById('display').innerHTML = "percussion8"
  }
  else if(poop.keyCode == "67"){
    cplay();
    document.getElementById('display').innerHTML = "percussion9"
  }
};

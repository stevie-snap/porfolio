let mouseCursor = document.querySelector(".cursor");
let navLinks = document.querySelectorAll('.nav-links li');

window.addEventListener('mousemove', cursor);

function cursor(e){
    mouseCursor.style.top = e.pageY + 'px';
    mouseCursor.style.left = e.pageX + 'px';
}

navLinks.forEach(link =>{
    link.addEventListener('mouseleave', () =>{
        mouseCursor.classList.remove("link-grow");
    });
    link.addEventListener('mouseover', () =>{
        mouseCursor.classList.add("link-grow");
    });
});

$(document).on('mousemove', function(e){
    $('.light').css({
        left: e.pageX - 65,
        top: e.pageY - 65
    })
  });


var btn = document.getElementById('btn');
var text = document.getElementById('text');
var image = document.getElementById('img');
var cover = 0;

function coverImg() {
    if(cover == 0) {
        btn.innerHTML ="Cover";
        text.style.display = "none";
        image.style.filter = "blur(0)";
        cover = 1; 
    } else {
        btn.innerHTML ="Uncover";
        text.style.display = "block";
        image.style.filter = "blur(25px)";
        cover = 0;
    }
};

var btn1 = document.getElementById('btn1');
var tex = document.getElementById('tex');
var image1 = document.getElementById('img2');
var cover = 0;

function coverImg1() {
    if(cover == 0) {
        btn1.innerHTML ="Cover";
        tex.style.display = "none";
        image1.style.filter = "blur(0)";
        cover = 1; 
    } else {
        btn1.innerHTML ="Uncover";
        tex.style.display = "block";
        image1.style.filter = "blur(25px)";
        cover = 0;
    }
};

var btn2 = document.getElementById('btn2');
var txt = document.getElementById('txt');
var image2 = document.getElementById('img3');
var cover = 0;

function coverImg2() {
    if(cover == 0) {
        btn2.innerHTML ="Cover";
        txt.style.display = "none";
        image2.style.filter = "blur(0)";
        cover = 1; 
    } else {
        btn2.innerHTML ="Uncover";
        txt.style.display = "block";
        image2.style.filter = "blur(25px)";
        cover = 0;
    }
};

var btn3 = document.getElementById('btn3');
var bla = document.getElementById('bla');
var image3 = document.getElementById('img4');
var cover = 0;

function coverImg3() {
    if(cover == 0) {
        btn3.innerHTML ="Cover";
        bla.style.display = "none";
        image3.style.filter = "blur(0)";
        cover = 1; 
    } else {
        btn3.innerHTML ="Uncover";
        bla.style.display = "block";
        image3.style.filter = "blur(25px)";
        cover = 0;
    }
};

var btn4 = document.getElementById('btn4');
var blabla = document.getElementById('blabla');
var image4 = document.getElementById('img5');
var cover = 0;

function coverImg4() {
    if(cover == 0) {
        btn4.innerHTML ="Cover";
        blabla.style.display = "none";
        image4.style.filter = "blur(0)";
        cover = 1; 
    } else {
        btn4.innerHTML ="Uncover";
        blabla.style.display = "block";
        image4.style.filter = "blur(25px)";
        cover = 0;
    }
};

var btn5 = document.getElementById('btn5');
var blablabla = document.getElementById('blablabla');
var image5 = document.getElementById('img6');
var cover = 0;

function coverImg5() {
    if(cover == 0) {
        btn5.innerHTML ="Cover";
        blablabla.style.display = "none";
        image5.style.filter = "blur(0)";
        cover = 1; 
    } else {
        btn5.innerHTML ="Uncover";
        blablabla.style.display = "block";
        image5.style.filter = "blur(25px)";
        cover = 0;
    }
};

var btn6 = document.getElementById('btn6');
var la = document.getElementById('la');
var image6 = document.getElementById('img7');
var cover = 0;

function coverImg6() {
    if(cover == 0) {
        btn6.innerHTML ="Cover";
        la.style.display = "none";
        image6.style.filter = "blur(0)";
        cover = 1; 
    } else {
        btn6.innerHTML ="Uncover";
        la.style.display = "block";
        image6.style.filter = "blur(25px)";
        cover = 0;
    }
};

var btn7 = document.getElementById('btn7');
var lala = document.getElementById('lala');
var image7 = document.getElementById('img8');
var cover = 0;

function coverImg7() {
    if(cover == 0) {
        btn7.innerHTML ="Cover";
        lala.style.display = "none";
        image7.style.filter = "blur(0)";
        cover = 1; 
    } else {
        btn7.innerHTML ="Uncover";
        lala.style.display = "block";
        image7.style.filter = "blur(25px)";
        cover = 0;
    }
};

var btn8 = document.getElementById('btn8');
var lalala = document.getElementById('lalala');
var image8 = document.getElementById('img9');
var cover = 0;

function coverImg8() {
    if(cover == 0) {
        btn8.innerHTML ="Cover";
        lalala.style.display = "none";
        image8.style.filter = "blur(0)";
        cover = 1; 
    } else {
        btn8.innerHTML ="Uncover";
        lalala.style.display = "block";
        image8.style.filter = "blur(25px)";
        cover = 0;
    }
};

var btn9 = document.getElementById('btn9');
var jsp = document.getElementById('jsp');
var image9 = document.getElementById('img10');
var cover = 0;

function coverImg9() {
    if(cover == 0) {
        btn9.innerHTML ="Cover";
        jsp.style.display = "none";
        image9.style.filter = "blur(0)";
        cover = 1; 
    } else {
        btn9.innerHTML ="Uncover";
        jsp.style.display = "block";
        image9.style.filter = "blur(25px)";
        cover = 0;
    }
};
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
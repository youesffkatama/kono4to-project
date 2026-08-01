let menuBtn = document.getElementById("menuBtn");
let popup = document.getElementById("popup");
let closeBtn = document.getElementById("closeBtn");
let overlay = document.getElementById("overlay");
let learnBtn = document.getElementById("learnBtn");
let learningPopup = document.getElementById("learningPopup");
let learningOverlay = document.getElementById("learningOverlay");
let closeLearning = document.getElementById("closeLearning");
let index = document.getElementById('index');
let section_1 = document.getElementById('intro_kronothos');
let section_2 = document.getElementById('elmot_3lah_salyeb');
let section_3 = document.getElementById('salyeb');
let section_4 = document.getElementById('father_mecha');
let section_5 = document.getElementById('ma3rafsh');


function showOnly(id) {
    section_1.style.display = 'none';
    section_2.style.display = 'none';
    section_3.style.display = 'none';
    section_4.style.display = 'none';
    section_5.style.display = 'none';
    index.style.display = 'none';
    document.getElementById(id).style.display = 'block';
    popup.classList.remove('active');
    overlay.style.display = 'none';
    learningPopup.classList.remove('show');
    learningOverlay.classList.remove('show');
  }

  function showIndex() {
    section_1.style.display = 'none';
    section_2.style.display = 'none';
    section_3.style.display = 'none';
    section_4.style.display = 'none';
    section_5.style.display = 'none';
    index.style.display = 'block';
    popup.classList.remove('active');
    overlay.style.display = 'none';
    learningPopup.classList.remove('show');
    learningOverlay.classList.remove('show');
  }
  
menuBtn.onclick = function(){
    popup.classList.add("active");
    overlay.style.display = "block";
}

closeBtn.onclick = function(){
    popup.classList.remove("active");
    overlay.style.display = "none";
}

overlay.onclick = function(){
    popup.classList.remove("active");
    overlay.style.display = "none";
}

learnBtn.onclick = function(){
    learningPopup.classList.add("show");
    learningOverlay.classList.add("show");
}

closeLearning.onclick = function(){
    learningPopup.classList.remove("show");
    learningOverlay.classList.remove("show");
}

learningOverlay.onclick = function(){
    learningPopup.classList.remove("show");
    learningOverlay.classList.remove("show");
}
/*  Main Function
      - getting letters
      - adding click event to each
*/

(function() {
let letterA, letterS, LetterD, LetterF, LetterG, LetterH, LetterJ, LetterK, LetterL;


letterA = document.getElementById('a');
letterS = document.getElementById('s');
letterD = document.getElementById('d');
letterF = document.getElementById('f');
letterG = document.getElementById('g');
letterH = document.getElementById('h');
letterJ = document.getElementById('j');
letterK = document.getElementById('k');
letterL = document.getElementById('l');

letterA.addEventListener('click', function(e){
  console.log("clap");

});

letterS.addEventListener('click', function(e){
  console.log("hi-hat");

});
letterD.addEventListener('click', function(e){
  console.log("kick");
});
letterF.addEventListener('click', function(e){
  console.log("openhat");
});
letterG.addEventListener('click', function(e){
  console.log("boom");
});
letterH.addEventListener('click', function(e){
  console.log("ride");
});
letterJ.addEventListener('click', function(e){
  console.log("snare");
});
letterK.addEventListener('click', function(e){
  console.log("tom");
});
letterL.addEventListener('click', function(e){
  console.log("crash");
});
})();

window.addEventListener('keydown', function(e) {

});

// random value generated
var y=Math.floor(Math.random() * 10 + 1);
var guess=0;
  
// counting the number of guesses
function submit(){
    playername=localStorage.getItem("player_name")
    var x =document.getElementById("guessfield").value ;
    if(x == y)
    {
        alert("CONGRGULATIONS!!!"+playername+ " YOU GUESSED IT RIGHT IN  "
        +guess + "GUESS");
        guess= 1;

}

else
    if(x>y){
        guess++;
        alert("oops SORRY! try a smaller number");
    }
else{
    guess++;alert("oops SORRY! try a bigger number");

}
 }
// made for correct Guess

  
// function for number guessed by user     
function playAgain(){
 y=Math.floor(Math.random() * 10 + 1);

}
//Event Listener
addEventListener();
function addEventListener(){
    document.querySelector('form').addEventListener('submit', tweetSave);
}
function tweetSave(e){
e.preventDefault();
console.log("Tweet Submitted");
}

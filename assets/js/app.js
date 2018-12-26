//Global Variable tweetList declaration
const tweetList = document.getElementById('tweet-list');

//Event Listener
addEventListener();
function addEventListener(){
    document.querySelector('form').addEventListener('submit', tweetSave);
}

//Click Event Listener for Removing tweet.
tweetList.addEventListener('click', removeTweet );

//Main function
function tweetSave(e){
    e.preventDefault();
    const tweet = document.getElementById(`tweet`).value;
    
    //Creating remove button
    const removeBtn = document.createElement('a');
    removeBtn.classList = 'remove-tweet';
    removeBtn.textContent = 'X';

    //create li element and appending it in tweetList
    const li = document.createElement('li');
    li.textContent = tweet;
    tweetList.appendChild(li);

    //Adding remove button in each tweet
    li.appendChild(removeBtn);

    //Saving tweet in local storage
    addTweetLocally(tweet);
    
}

//Remove Tweet Function
function removeTweet(Event){
    if (Event.target.classList.contains('remove-tweet'))
        Event.target.parentElement.remove();
}

//Saving tweet in Local Storage via this function decion
function addTweetLocally(tweet){
let tweets = getTweetfromlocal();

    tweets.push(tweet);
    
    localStorage.setItem('tweets', JSON.stringify(tweets));
    
    
}

function getTweetfromlocal(){
    let tweets ;
    const tweetsLS = localStorage.getItem('tweets');
    if(tweetsLS===null){
        tweets = [];
    } else
        tweets= JSON.parse(tweetsLS);
        return tweets;
}
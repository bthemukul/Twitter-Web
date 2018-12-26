//Global Variable tweetList declaration
const tweetList = document.getElementById('tweet-list');

//Event Listener
EventListener();
function EventListener(){

    // Tweet Sbmission
    document.querySelector('form').addEventListener('submit', tweetSave);

    //Click Event Listener for Removing tweet.
    tweetList.addEventListener('click', removeTweet );

    //document local storage fetching listener
    document.addEventListener('DOMContentLoaded', localStoragefetch );
}



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

    //Adding remove button in each tweet
    li.appendChild(removeBtn);

    //Add to list
    tweetList.appendChild(li);

    //Saving tweet in local storage
    addTweetLocally(tweet);
    
}

//Remove Tweet Function
function removeTweet(Event){
    if (Event.target.classList.contains('remove-tweet')){
        Event.target.parentElement.remove();
    }
    removeTweetLocal(Event.target.parentElement.textContent);
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

function localStoragefetch(){
    let tweets = getTweetfromlocal();

    tweets.forEach(function(tweet){
    //Creating remove button
    const removeBtn = document.createElement('a');
    removeBtn.classList = 'remove-tweet';
    removeBtn.textContent = 'X';

    //create li element and appending it in tweetList
    const li = document.createElement('li');
    li.textContent = tweet;
    
    //Adding remove button in each tweet
    li.appendChild(removeBtn);

    //Add to list
    tweetList.appendChild(li);
    })
}

function removeTweetLocal(tweet){

    let tweets = getTweetfromlocal();
    const tweetDelete = tweet.substring(0, tweet.length-1 );

    tweets.forEach(function(tweetLS, index){
        if (tweetDelete === tweetLS)
            tweets.splice(index,1);
            })

    //Save the data
    localStorage.setItem('tweets', JSON.stringify(tweets));
}
//Global Variable tweetList declaration
const tweetList = document.getElementById('tweet-list');

//Event Listener
addEventListener();
function addEventListener(){
    document.querySelector('form').addEventListener('submit', tweetSave);
}

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
    
}

function removeTweet(Event){
    if (Event.target.classList.contains('remove-tweet'))
        Event.target.parentElement.remove();
}
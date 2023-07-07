const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('Author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');


function showLoadingSpinner() {
    loader.hidden=false;
    quoteContainer.hidden=true;
}

function removeLoadingSpinner(){
    quoteContainer.hidden=false;
    loader.hidden=true;
}

// get Quotes From API 
function newQuote(){
    showLoadingSpinner();
    // pick a random quote from api quotes array 
    const quote=localQuotes [Math.floor(Math.random()* localQuotes.length)];
    // check if author field is blank and replace it with unknown 
    if (!quote.author){
        authorText.textContent='unknown'
    } else{
    authorText.textContent=quote.author;
    }
    // check Quote Length to determine styling 
    if (quote.text.length>100){
        quoteText
    }else{
        quoteText.classList.remove('long-quote')
    }
    quoteText.textContent=quote.text;
    removeLoadingSpinner();
}

// twitt quote 
function twittQuote(){
    const twitterUrl=`https://twitter.com/intent/tweet?text=${quoteText.textContent}
     - ${authorText.textContent}`;
     window.open(twitterUrl,' _blank');
}

newQuoteBtn.addEventListener('click',newQuote);
twitterBtn.addEventListener('click',twittQuote);



// // On Load 

newQuote();
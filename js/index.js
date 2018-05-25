// Quotes
var quotes = [
  {
    quote: "Son, you don't have bad luck. The reason bad things happen to you...is because you're a dumbass.",
    author: "Red Forman"
  },
  {
    quote: "The harder the conflict, the more glorious the triumph.",
    author: "Thomas Paine"
  },
  {
    quote: "There's no shame in fear, my father told me. What matters is how we face it.",
    author: "Jon Snow"
  },
  {
    quote: "Some journeys need to be walked alone.",
    author: "Mozzie"
  },
  {
    quote: "I have always assumed love is a dangerous disadvantage.",
    author: "Sherlock"
  },
  {
    quote: "Everybody lies.",
    author: "Gregory House"
  },
  {
    quote: "If you keep giving up on people so quickly, you're gonna miss out on something great.",
    author: "Robin Scherbatsky"
  },
  {
    quote: "Because sometimes, even if you know how something's going to end, that doesn't mean you can't enjoy the ride.",
    author: "Ted Mosby"
  },
  {
    quote: "If you're not scared, then you're not taking a chance. And if you're not taking a chance, then what the hell are you doing anyway?",
    author: "Ted Mosby"
  },
  {
    quote: "The only hope you have is to accept the fact that you're already dead. The sooner you accept that, the sooner you'll be able to function as a soldier is supposed to function: without mercy, without compassion, without remorse. All war depends on it.",
    author: "Ronald Spiers"
  },
  {
    quote: "Therefore encourage one another and build each other up, just as in fact you are doing.",
    author: "Thessalonians"
  },
  {
    quote: "For those who exalt themselves will be humbled, and those who humble themselves will be exalted.",
    author: "Matthew"
  },
  {
    quote: "Sometimes it's best to leave the moment unspoken and just enjoy each others company instead.",
    author: "The Mother"
  },
  {
    quote: "You will be shocked kids, when you discover how easy it is in life to part ways with people forever. That's why, when you find someone you want to keep around, you do something about it.",
    author: "Ted Mosby"
  },
  {
    quote: "I used to think that the worst thing in life was to end up alone. It's not. The worst thing in life is to end up with people who make you feel alone.",
    author: "Robin Williams"
  },
  {
    quote: "It's a terrible thing, I think, in life to wait until you're ready. I have this feeling now that actually no one is ever ready to do anything. There is almost no such thing as ready. There is only now. And you may as well do it now. Generally speaking, now is as good a time as any.",
    author: "Hugh Laurie"
  },
  {
   quote: "Everyone has a price,the important thing is to find out what it is.",
    author: "Pablo Escobar"
  },
  {
    quote: "The means should always justify the ends",
    author: "Neal Caffrey"
  },
  {
    quote: "If you want a happy ending, that depends, of course, on where you stop your story.",
    author: "Orson Welles"
  },
  {
   quote: "There can only be one King.",
   author: "Pablo Escobar"
  }
];

var currentIndex;

// update function 
function updateQuote() {
  do{
    // Generate random position 
    var index = Math.floor(Math.random() * quotes.length);  
  } while(currentIndex === index)

  currentIndex = index;
  $('#quote').html(quotes[index].quote);
  $('#author').html(quotes[index].author);  
  $('#twitter').click(shareTweet)
}

$(function () {
  updateQuote();
  $('#generator').click(function() {
    updateQuote();
  });
});


// Function to share tweet
function shareTweet() {
  var quoteToTweet = quotes[currentIndex].quote;

  // Cuts the quote if length is longer than 100
  if (quoteToTweet.length > 100) {
    quoteToTweet = quoteToTweet.substr(0, 100).match(/(^.+)(\s)/)[0] + "...";
  }
  quoteToTweet = encodeURI("\"" + quoteToTweet);
  window.open("https://twitter.com/intent/tweet?text=" + quoteToTweet + "\"");
};


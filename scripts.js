var storyArray = ["There once was a programmer in the forest.",
	"He was trying to figure out how to tame a rhino.",
	"The rhino was bold and menacing, but he had Jquery and a pocket of rubies.",
	"During his advances, the rhino attacked!",
	"The programmer wrapped him up in jquery, and pelted him with the rubies.",
	"But this only made the rhino more angry.",
	"The programmer then realized that he wasn't attacking.",
	"As it turns out, the rhino was lonely and only wanted a friend.",
	"The programmer then released the rhino.",
	"And, the programmer and the rhino tamed the DOM together."
];

var clickCount = 0;

$(document).ready(function() {
	$('div').on('click', 'button', function() {
		clickCount += 1;
		if (clickCount < 10) {
			$('div').html("<p>" + storyArray[clickCount - 1] + "</p> <button class='button'>Next</button>");
		} else {
			$('div').html('<p>THE END!</p>');
			}


	});
	//When the button is clicked --> display the next object within the array.
	//AND change the button to next.
});
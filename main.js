(function () {	
	var imageArray = [];
	var shuffledArray = [];
	var i = 1;
	            //not needed but good if you want to shuffle the imgs without refreshing
        	var $button = $('<button id="shuffler">Shuffle</button>');
        	$('#buttonRow').prepend($button);

		//collects all imgs from folder and makes them into an array
	while(i<=710){ // i stops at # of imgs in folder
		imageArray.push("img/jpg/a ("+i+").jpg"); // named all imgs in folder to 'a' it auto added ' (i)'
		i++;
	}
		//creates the <img> tag and adds a src = to the array[i]
	for(var i=0; i<710;i++){ // i stops at # of imgs in folder -1 cause it's now an array
		var $imgSrc = $('<img src="'+imageArray[i]+'"></img>');
		shuffledArray.push($imgSrc); 
	}

		//this is to randomize the layout each time
	function shuffleArray(array) {
	    for (var i = array.length - 1; i > 0; i--) {
	        var j = Math.floor(Math.random() * (i + 1));
	        var temp = array[i];
	        array[i] = array[j];
	        array[j] = temp;
	    }
	    return array;
	}

	shuffledArray = shuffleArray(shuffledArray); 
	$('#splash').append(shuffledArray); //splash is the div that all imgs will be appened too


		//button.on('click') removes the imgs and reapplys them randomly
	$('#shuffler').on('click', function () {
			$('#splash img').detach();// detaches for use later if removed the imgs wont be targetable "breaks any overlay"
			$('#splash').append(shuffleArray(shuffledArray));
		});
}());

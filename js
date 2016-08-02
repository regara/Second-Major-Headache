$(document).ready(function create () {
//needs at least 1 "img/jpg/a (i).jpg" put into array or wont work
//I had to rename all my imgs to "a" the numbers were generated automatically
	var imageArray = ["img/jpg/a (1).jpg", "img/jpg/a (2).jpg", "img/jpg/a (3).jpg", "img/jpg/a (4).jpg"];
	
	var i = 5 // 5 comes after (4)in the above array
	
	while(i<=40){ // 40 is how many images were in my folder
	
	
		imageArray.push("img/jpg/a ("+i+").jpg"); this populates the rest of the array if you start at 0
		                                          and populate the whole array like this it wont work
		i++;
	}



	for(var i=0; i<=40;i++){
	
	    //this takes the old array and sticks it in here as a fresh full array
		var imageArrayy = imageArray;
    
		var $sourceCode = $('<img src="'+imageArray[i]+'"></img>');  // gets the imgs ready to display
		
		$('#splash').append($sourceCode); //#splash was the div i appened them under


	}

});

function myFunction(){
	/* get by id (pure javascript) */
	/* hide the first block, element accessed by id */
	var firstBlock = document.getElementById('first');
	firstBlock.style.display = 'none';

	/* get by class name (pure javascript) */
	/* change the color of blocks with class name as "appear" */
	var appearClass = document.getElementsByClassName('appear');
	for(var index = 0; index < appearClass.length; index++){
		appearClass[index].style.backgroundColor  = 'red';
	}
	
	/* get by tag name (pure javascript) */
	/* change the height of elements with tag name as "div" */
	var divTag = document.getElementsByTagName('div');
	for(var index = 0; index < divTag.length; index++){
		divTag[index].style.height = '400px';
	}

}

/* call myFunction when button is clicked */
var butn =  document.getElementsByTagName('button');
butn[0].onclick = function(){
	myFunction();
}

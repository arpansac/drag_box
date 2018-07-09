console.log('script loaded');

// var box = document.querySelector('#box');

// dragbox
// document.addEventListener('keypress', function(){

// 	// console.log(event.key);
// 	// console.log(box.style.top, box.style.left);

// 	var boxRect = box.getBoundingClientRect();
// 	if (event.key == 'd' && (boxRect.x + boxRect.width < window.innerWidth)){
// 		box.style.left = (boxRect.x + 20);
// 	}

// 	if (event.key == 's' && (boxRect.y + boxRect.height < window.innerHeight)){
// 		box.style.top = (boxRect.y + 20);
// 	}

// });




var box = document.querySelector('#box');





function catchMeIfYouCan(){

	function randomGenerator(upper, lower){
		return Math.floor((Math.random() * (upper - lower)) + lower);
	}

	var movement;
	box.addEventListener('mouseover', function(){
		// let mouseX = event.clientX;
		// let mouseY = event.clientY;
		clearInterval(movement);
		let boxX = box.getBoundingClientRect().x;
		let boxY = box.getBoundingClientRect().y;

		let newX = randomGenerator(0, window.innerWidth);
		let newY = randomGenerator(0, window.innerHeight);

		let moveX = 1;
		let moveY = 1;

		if (newX < boxX){
			moveX = -1;
		}

		if (newY < boxY){
			moveY = -1;
		}


		movement = setInterval(function(){
			boxX += moveX;
			boxY += moveY;
			box.style.left = boxX + 'px';
			box.style.top = boxY + 'px';

		}, 10);


		

		// box.style.left = newX + 'px';
		// box.style.top = newY + 'px';

	});

}

catchMeIfYouCan();




















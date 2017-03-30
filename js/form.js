'use strict';

window.onload = function () {

 	document.querySelector('#contact-submit').onclick = function () {
 		ajaxGet();
 		
 	}

};


function ajaxGet() {
	var request = new XMLHttpRequest();

	request.onreadystatechange = function() {
		if(request.readyState == 4 && request.status == 200) {

			var result = request.responseText;
			console.log(result);
		}

	}

	request.open('GET', 'https://codeit.pro/frontTestTask/user/registration');
	request.send();
};

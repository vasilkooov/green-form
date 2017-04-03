'use strict';

window.onload = function () {

 	document.querySelector('#submit').onclick = function () {

 		ajaxGet();
 	}

};


function ajaxGet() {
	var request = new XMLHttpRequest();

	var name = document.getElementById('name').value;
	var secondname = document.getElementById('secondname').value;
	var email = document.getElementById('email').value;
	var gender = document.getElementById('user-gender').value;
	var password = document.getElementById('user-pass').value;
	var check = document.getElementById('user-check').value;


	
	var error_m = document.querySelectorAll('p.error');

	// for (var i = 0; i < error_m.length; i++) {
	// 	console.log(error_m[i].innerHTML);
 //   	error_m[i].innerHTML = "";
	// }
	
	function clearErrorField(element, index, array) {
		console.log(element.innerHTML);
   	element.innerHTML = "";
	}

	error_m.forEach(clearErrorField);



	request.onreadystatechange = function() {
		if(request.readyState == 4 && request.status == 200) {

			var result = JSON.parse(request.responseText);

			var error_elem = document.querySelector('input[name="' + result.field + '"] + p.error');
			error_elem.innerHTML = result.message;

		} 
	}

		request.open('POST', 'https://codeit.pro/frontTestTask/user/registration', true);
		request.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		request.send("name=" + name + "&secondname=" + secondname + "&email=" + 
						email + "&gender=" + gender + "&pass=" + password + "&check=" + check);
};

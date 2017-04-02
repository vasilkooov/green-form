'use strict';

window.onload = function () {

 	document.querySelector('#submit').onclick = function () {

 		ajaxGet();
 	}

};


function ajaxGet() {
	var request = new XMLHttpRequest();

	var name = document.getElementById('first-name').value;
	var secondname = document.getElementById('second-name').value;
	var email = document.getElementById('email').value;
	var gender = document.getElementById('user-gender').value;
	var password = document.getElementById('user-pass').value;
	var check = document.getElementById('user-check').value;

	request.onreadystatechange = function() {
		if(request.readyState == 4 && request.status == 200) {

			var result = JSON.parse(request.responseText);


		var error_elem = document.querySelector('input[name="' + result.field + '"] + p.error');
		console.log(error_elem);

		error_elem.innerHTML = result.message;

		}

		

	}

		request.open('POST', 'https://codeit.pro/frontTestTask/user/registration', true);
		request.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		request.send("name=" + name + "&secondname=" + secondname + "&email=" + 
						email + "&gender=" + gender + "&pass=" + password + "&check=" + check);
};

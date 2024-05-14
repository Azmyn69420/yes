
const uname = document.querySelector("#uname") 
const email = document.querySelector("#mail")
const pass1 = document.querySelector("#pass")
const pass2 = document.querySelector("#cpass")
const mobile = document.querySelector("#mobile")

function validate(){
	if(uname.value == "" || uname.value == null){
		var a= document.querySelector("#show")
		a.innerText = "Username is Required!"
		return false
	}
	
	else if(mail.value === "" || email.value == null){
		var a= document.querySelector("#show")
		a.innerText = "Email is Required!"
		return false
	}
	 else if(pass.value.length < 6){
		var a= document.querySelector("#show")
		a.innerText = "Password Must have 6 characters"
		return false
	}

	else if(pass.value.length > 10){
		var	a= document.querySelector("#show")
		a.innerText = "Password must be less than 10 characters"
		return false
	}

	else if(pass.value != cpass.value){
		var a = document.querySelector("#show")
		a.innerText = "Confirm Password didn't match!"
		return false
	}

	else if(mobile.value.length != 11){
		var  = document.querySelector("#show")
		a.innerText = "Contact Number must have 11 digits."
		return false
	}

	else{
		var a = document.querySelector("#n5")
		a.innerText = ""
	}
	
}
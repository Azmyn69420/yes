const uname = document.querySelector("#uname") 

function Exam(){
	if(uname.value>=80){
			var a= document.querySelector("#show")
			a.innerText = "5.00 Grade A+"
			return false
		}


	if(uname.value>=70){
			var a= document.querySelector("#show")
			a.innerText = "4.00 Grade A"
			return false
		}


	if(uname.value>=60){
			var a= document.querySelector("#show")
			a.innerText = "3.50 Grade A-"
			return false
		}


	if(uname.value>=50){
			var a= document.querySelector("#show")
			a.innerText = "3.00 Grade B"
			return false
		}

	if(uname.value>=40){
			var a= document.querySelector("#show")
			a.innerText = "2.00 Grade C"
			return false
		}


	if(uname.value>=33){
			var a= document.querySelector("#show")
			a.innerText = "1.00 Grade D"
			return false
		}


	if(uname.value<33){
			var a= document.querySelector("#show")
			a.innerText = "0.00 Grade F"
			return false
		}
}
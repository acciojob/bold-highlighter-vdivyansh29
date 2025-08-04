const allStrongElement = document.querySelectorAll("p strong")

function highlight() {
    //Write your code here
	allStrongElement.forEach((element) => {
		element.style.color = "rgb(0, 128, 0)"
	})

}


function return_normal() {
    //Write your code here
	allStrongElement.forEach((element) => {
		element.style.color = "rgb(0, 0, 0)"
	})
    
}

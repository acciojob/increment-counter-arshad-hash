//your JS code here. If required.
const p=document.getElementById("counter");
const button = document.getElementById("incrementBtn");

button.addEventListener("click" , Onclick);

function Onclick(event) {
	event.preventDefault();
	let increment=parseInt(p.innerText);
	
	p.innerText=++increment;
	
}
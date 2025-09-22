function volume_sphere() {
    //Write your code here
	event.preventDefault();
	const userInput=event.target[0].value
	if(userInput>0){
		const volumeOfSphere=(4/3)*Math.PI*userInput*userInput*userInput;
		event.target[1].value=volumeOfSphere.toFixed(4);
		console.log(volumeOfSphere)
	}else{
		event.target[1].value="NaN";
	}
	
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;

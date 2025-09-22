function volume_sphere() {
    //Write your code here
	event.preventDefault();
	const volume=document.getElementById("volume");
	const radius=document.getElementById("radius");
	const userInput=radius.value;
	if(userInput>0){
		const volumeOfSphere=(4/3)*Math.PI*userInput*userInput*userInput;
		volume.value=volumeOfSphere.toFixed(4);
		console.log(volumeOfSphere)
	}else{
		volume.value="NaN";
	}
	
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;

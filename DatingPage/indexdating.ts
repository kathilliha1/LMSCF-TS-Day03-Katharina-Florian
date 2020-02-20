

class Dating{
	
	image: string;
	slogan: string;
constructor( a:string, b:string) {
	this.image = a;
	this.slogan= b;
}
datingtop(){
	return ` 
	<div class="col-sm-2 bg-dark"> 
			<img src="${this.image}" class="rounded p-2 image" alt="Cinque Terre">
			<h2 class="text-light">${this.slogan}</h2>
			<button type="button" class="btn btn-outline-secondary m-2 ">match</button>

	</div>
	`
}

}


let pleaseWork = new Dating("../Images/DarthMaul.jpg", "möge die macht mit dir sein")

 document.getElementsByClassName("y")[0].innerHTML = (pleaseWork.datingtop());




class Datinglike{
	image: string;
	name: string;
	age: number;
	location: string;
	hobbies: string;
	favourite: string;

	constructor( a: string, b: string, c: number, d:string, e: string, f: string){
		this.image = a;
		this.name = b;
		this.age = c;
		this.location = d;
		this.hobbies = e;
		this.favourite = f;

	}

	datingdown(){
		return `
		<div class= col-sm-3 bg-dark border>
		<img src="${this.image}" class=" rounded pic" alt="Cinque Terre">

	<p class=" row justify-content-start">Name: ${this.name}</p>
	<p class=" row justify-content-start">Age: ${this.age}</p>
	<p class=" row justify-content-start">Location: ${this.location}</p>
	<p class=" row justify-content-start">Hobbies: ${this.hobbies}</p>
	<p class=" row justify-content-start">Favorites: ${this.favourite}</p>
	
	
</div>
		`
	}

}



let pleaseDateOne = new Datinglike("../Images/DarthMaul.jpg", "Darth Moul", 49, "Vienna", "sometimes", "nudelmonster");

let pleaseDatetwo = new Datinglike("../Images/DarthVader.png", "Darth Vader", 55, "Lang Enzersdorf", "Schnorcheln", "eis essen");

let pleaseDateThree = new Datinglike("../Images/JarJar.jpg", "Jar Jar Bings", 14, "star wars", "comedy club", "blabla"  )

let pleaseDateFour = new Datinglike("../Images/JynErso.jpg", "Jyn Erso", 27, "mistelbach", "pläne fladern", "d")

let pleaseDateFive = new Datinglike("../Images/Padme.jpg", "Padme", 30, "ff", "d", "d")

let pleaseDateSix = new Datinglike("../Images/PrinzessionLea.jpg", "Prinzession Lea", 40, "ff", "üü", "dd")

let pleaseDateSeven = new Datinglike("../Images/RaySkywalker.png", "Ray Skywalker", 89,  "asdf", "asdf", "sdf")

let pleaseDateEight = new Datinglike("../Images/Yoda.png", "Joda", 29, "asdfsadf", "asdfdsf", "asdfdsf")


let downout = [pleaseDateOne, pleaseDatetwo, pleaseDateThree, pleaseDateFour, pleaseDateFive, pleaseDateSix, pleaseDateSeven, pleaseDateEight]

for (let i = 0; i < downout.length; i++){ 



document.getElementsByClassName("upp")[0].innerHTML += (downout[i].datingdown());	
}





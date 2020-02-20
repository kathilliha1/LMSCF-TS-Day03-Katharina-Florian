

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
		<div class= col-sm-4 bg-dark border>
		<img src="${this.image}" class="rounded " alt="Cinque Terre">

	<p class=" row justify-content-start">Name: ${this.name}</p>
	<p class=" row justify-content-start">Age: ${this.age}</p>
	<p class=" row justify-content-start">Location: ${this.location}</p>
	<p class=" row justify-content-start">Hobbies: ${this.hobbies}</p>
	<p class=" row justify-content-start">Favorites: ${this.favourite}</p>
	
	
</div>
		`
	}

}



let pleaseDateMe = new Datinglike("../Images/DarthMaul.jpg", "Karl", 49, "Vienna", "sometimes", "nudelmonster");



document.getElementsByClassName("upp")[0].innerHTML = (pleaseDateMe.datingdown());


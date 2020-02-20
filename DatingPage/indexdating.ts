

class Dating{
	
	image: string;
	slogan: string;
constructor( a:string, b:string) {
	this.image = a;
	this.slogan= b;
}
datingtop(){
	return ` 
	<div class=""> 
			<a>${this.image}</a>
			<h2>${this.slogan}</h2>

	</div>
	`
}

}


let pleaseWork = new Dating("`<img src='spagetti-bolognese.jpg'>`", "möge das nudelmonster mit dir sein")

document.write(pleaseWork.datingtop());


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
		<div class= col-sm-5 bg-dark>
	<img src="${this.image}" class="rounded m-2" alt="Cinque Terre">

	<p class=" row justify-content-start">Name: ${this.name}</p>
	<p class=" row justify-content-start">Age: ${this.age}</p>
	<p class=" row justify-content-start">Location: ${this.location}</p>
	<p class=" row justify-content-start">Hobbies: ${this.hobbies}</p>
	<p class=" row justify-content-start">Favorites: ${this.favourite}</p>
	
	
</div>
		`
	}

}



let pleaseDateMe = new Datinglike("spagetti-bolognese.jpg", "Karl", 49, "Vienna", "sometimes", "nudelmonster");



document.write(pleaseDateMe.datingdown());

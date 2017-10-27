
interface Starship 
{
	speedUp(increment: number): void;
}

// esempio dichiarazione di una classe (che implementa l'interfaccia Starship)
class LightFreighter implements Starship 
{
	speed: number = 0;
	speedUp(increment: number): void {
		this.speed = this.speed + increment;
	}
}

let millenniumFalcon = new LightFreighter();
millenniumFalcon.speedUp(100);


// esempio con autoassegnazione proprietà privata tramite costruttore!
class LightFreighter2 implements Starship 
{
	constructor(private speed: number = 0, public pilot: string) {
	}

	public speedUp(increment: number): void {
		this.speed = this.speed + increment;
	}
}

let millenniumFalcon2 = new LightFreighter2(33, "Gerry");
millenniumFalcon2.speedUp(50);
console.log(millenniumFalcon2.pilot);

// abstract class 
abstract class MyStarship 
{
	constructor(protected speed: number = 0) {}

	abstract speedUp(increment: number ): void;
}

class LightFreighter3 extends MyStarship 
{
	public speedUp(increment: number): void {
		this.speed = this.speed + increment;
	}
}

let millenniumFalcon3 = new LightFreighter3();
millenniumFalcon3.speedUp(150);

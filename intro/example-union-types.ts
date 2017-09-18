
interface Anakin 
{
	useLightSaber: () => void;
	useForce: () => void;
}

interface Padme
{
	leaderSkills: string[];
	useGun: () => void;
}

type Luke = Anakin & Padme;


// dichiare l'implementazione di più istanze senza utilizzare un "type":
function joinRebelion(luke: Anakin & Padme)
{
}

interface PlainObj 
{
	[key: string]: string;
}

interface JQuery {}

function jQuery(selector: string | Node | Node[] | PlainObj | JQuery): JQuery {
	let output: JQuery = {}
	// ...
	return output;
}

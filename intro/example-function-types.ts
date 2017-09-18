
// esempio function type literal
const showModal: (toggle: boolean) => void = function(toggle) {
	console.log( toggle );
}

showModal(true);

// esempio function type con interfaccia
interface Switcher {
	(toggle: boolean): void;
}
const showModal2: Switcher = (toggle) => {
	console.log(toggle);
}

showModal2(false);

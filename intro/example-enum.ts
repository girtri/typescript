
const enum Status {
	NEEDS_PATCH = 1,
	UP_TO_DATE = 2,
	NOT_INSTALLED = 3
}

function setStatus(status: Status) {
	console.log(status);
}

setStatus(Status.NEEDS_PATCH);

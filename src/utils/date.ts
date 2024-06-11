export function getNowDateWithString(input: Date) {
	const dt = new Date(input);
	var y = dt.getFullYear();
	var m = ("00" + (dt.getMonth() + 1)).slice(-2);
	var d = ("00" + dt.getDate()).slice(-2);
	var result = y + "/" + m + "/" + d;
	return result;
}

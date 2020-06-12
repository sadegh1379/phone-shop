function addCama (num, sep){
	var number = typeof num === "number"? num.toString() : num,
	separator = typeof sep === "undefined"? ',' : sep;
	return number.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1"+separator);
}

export default addCa;
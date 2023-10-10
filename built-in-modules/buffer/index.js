const buffer = new Buffer.from("ThanhDat");

console.log(buffer);
console.log(buffer.toJSON());
console.log(buffer.toString());

buffer.write("Dat09");
console.log(buffer);
console.log(buffer.toJSON());
console.log(buffer.toString());

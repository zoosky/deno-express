const file = await Deno.open("testdata/8360.json");
const buf = new Uint8Array(100);
const numberOfBytesRead = await Deno.read(file.rid, buf); // 11 bytes
const text = new TextDecoder().decode(buf); // "hello world"
Deno.close(file.rid);
console.log(numberOfBytesRead, text.length);
console.log(JSON.stringify(text));
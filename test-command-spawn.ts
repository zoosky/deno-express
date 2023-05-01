const command = new Deno.Command(Deno.execPath(), {
    args: [
        "eval",
        "console.log('hello'); console.error('world')",
    ],
});
const { code, stdout, stderr } = await command.output();
console.assert(code === 0);
const tout = new TextDecoder().decode(stdout)
const terr = new TextDecoder().decode(stderr)
console.assert("hello\n" === tout);
console.assert("world\n" === terr);
console.log(`hello world test:  ${code}\n ${tout} ${terr}`)
const command = new Deno.Command(Deno.execPath(), {
    args: [
        "eval",
        "console.log('Hello World')",
    ],
    stdin: "piped",
});
const child = command.spawn();

// open a file and pipe the subprocess output to it.
child.stdout.pipeTo(Deno.openSync("output").writable);

// manually close stdin
child.stdin.close();
const status = await child.status;
console.log(status);
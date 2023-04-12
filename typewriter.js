const sentence = "hello there from lighthouse labs";

let delay = 0;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, delay);
  delay += 50; // <= 1s delay to make it noticeable. Can dial it down later.
}

setTimeout(() => {
  console.log();
}, 50 * sentence.length);

// Or add a newline character when exiting with this function
// setTimeout(() => {
//   process.stdout.write("\n");
// }, 50 * sentence.length)
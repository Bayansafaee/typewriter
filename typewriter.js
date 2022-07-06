const sentence = "hello there from lighthouse labs";
let count = 0;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, 0 + count); // <= 1s delay to make it noticeable. Can dial it down later.
  count += 50;
}

setTimeout(() => {
  process.stdout.write("\n");
}, count)

// process.stdout.write("\n");
// setTimeout(() => {
//   console.log("\n")
// }, count)
//   console.log("")
// }, count)
const sentence = "hello there from lighthouse labs";

// writes out the string into the terminal one letter at a time.
for (let i = 0; i < sentence.length; i++) {
  setTimeout(() => {process.stdout.write(sentence[i])}, i * 50)
}

// newline
setTimeout(() => {process.stdout.write("\n")}, sentence.length * 50 + 1)
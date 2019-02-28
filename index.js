function takeANumber (line, names) {
  line.push(names);
  return (`Welcome ${names}, you are ${line.length} in line.`);
}
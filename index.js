function takeANumber (line, names) {
  line.push(names);
  return (`Welcome ${names}, you are ${line.length} in line.`);
}

function nowServing (katzDeliLine) {
  if (!katzDeliLine.length) {
    return 'There is nobody waiting to be served!';
  }
  var firstCustomer = katzDeliLine.shift();
  return ('Currently serving ' + firstCustomer + '.');
}

function currentLine (line) {
  if (!line.length) {
    return `
  }
}
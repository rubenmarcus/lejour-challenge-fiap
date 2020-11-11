


export const filterByValue = (array, string) => {
  return array.filter((data) => JSON.stringify(data).toLowerCase().indexOf(string.toLowerCase()) !== -1);
}

// Filter Api Result by Parameter and Return all values with this param value
export const propbyFilter = (result, prop) => {
  return result.map((item: any) => parseInt(item[prop]));
}

// Results Sum of Filtered Params get one field
export const sumNums = (value, param) => {
  console.log()

  let filteredValue = filterByValue(value.res, value.field);
  filteredValue = propbyFilter(filteredValue, param)
  filteredValue = convNumtoStr(filteredValue);

  filteredValue = sumAllNums(filteredValue);
  return filteredValue;
} 

// Sort Numbers from Desc
export const sortedNumbers = (num) => num.sort((a, b) => b - a)


// convert Array nums to string

export const convNumtoStr = (val) => {
  return val.join().split(',');
}

// Return String Array Sum
 const sumAllNums = (val) => {

  
  return val.map(function (elt) { // assure the value can be converted into an integer
    return /^\d+$/.test(elt) ? parseInt(elt) : 0;
  }).reduce(function (a, b) { // sum all resulting numbers
    return a + b
  })
}

export const AvgNums = (val) => {
  const value = convNumtoStr(val);
  return value.map(function (elt) { // assure the value can be converted into an integer
    return /^\d+$/.test(elt) ? parseInt(elt) : 0;
  }).reduce((a, v, i) => (a * i + v) / (i + 1), 0)
}

export const returnSums = (val) =>{
  let value = convNumtoStr(val);
  value = sumAllNums(value);
  return value;
}

// Max Number
const findMax = (...budget) => {
  let currentMax = budget[0]; // 2

  for (const number of budget) {
    if (number > currentMax) {
      console.log(number, currentMax);
      currentMax = number;
    }
  }
  console.log('Largest ', currentMax);
  return currentMax;
};

export const numberToReal = (numero) => {
  var numero = numero.toFixed(2).split('.');
  numero[0] = "R$ " + numero[0].split(/(?=(?:...)*$)/).join('.');
  return numero.join(',');
}


//let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];

// Returns a URL-friendly version of a string.
//  Example: "North Dakota" -> "north-dakota"
function urlify(string) {
    return string.toLowerCase().split(/\s+/).join('-');
  }


function functionalSts(states){
    return states.map(state => urlify(state));
}
  
console.log(functionalSts(states));

function urlified(states){
    return states.map(state => "https://example.com/" + state);
}

console.log(urlified(functionalSts(states)));

//=================================================

let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];

//Singles: Imperatrive Version
function ImperativeSingles(elements) {
   let singles = []
   elements.forEach(function(element) {
       if (element.split(/\s+/).length === 1) {
           singles.push(element);
       }
   })
   return singles;
}
console.log(ImperativeSingles(states));

states.filter(states => state.split(/\s+/).length === 1);

function functionalSingles(elements) {
    return elements.filter(states => element.split(/\s+/).length === 1);
}

let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];

function singleSt(states) {
    return states.filter(state => state.split(/\s+/).length === 2);
}


function dakotas(elements) {
    return elements.filter(element => element.includes("Dakota"));
  }
  
  console.log(dakotas(states));
  [ 'North Dakota', 'South Dakota' ]

> function singleSt(states) {
    ...     return states.filter(state => state.split(/\s+/).length === 2);
    ... }console.log(singleSt(states));
    [ 'North Dakota', 'South Dakota' ]


    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// sum: Imperative solution
    function imperatriveSum(elements) {
        let total = 0; 
        elements.forEach(function(n) {
            total += n;
        }); 
        return total;
    }

    console.log(imperatriveSum(numbers));

    numbers.reduce((total, n) => {
        total += n;
        return total;
    })

    // sum: Functional solution
function functionalSum(elements) {
    return elements.reduce((total, n) => { return total += n; });
  }
  console.log(functionalSum(numbers));

  function functionalSum(elements) {
    return elements.reduce((total, n) => { return total *= n; });
  }
  console.log(functionalSum(numbers));

  function imperativeLengths(elements) {
    let lengths = {};
    elements.forEach(function(element) {
      lengths[element] = element.length;
    });
    return lengths;
  }
  console.log(imperativeLengths(states));
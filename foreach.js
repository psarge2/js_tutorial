let a = ["ant", "bat", "cat", 42];
a.forEach(function(element) {
    console.log(element);
});

let soliloquy = "To be, or not to be, that is the question:";
Array.from(soliloquy).forEach(function(character){
    console.log(character);
});


const data = [1,2,3,4]

     a.forEach(element => {
         console.log(element)
     })

     let a = ["ant", "bat", "cat", 42];
     a.forEach(element => {
        console.log(element)
    })
});


let b = [8, 17, 42, 99];
b.sort();
b.sort(function(a, b) { return a - b; });
[ 8, 17, 42, 99 ]
//Buatkan perulangan segitiga siku siku

for (let i = 0; i < 5; i++){
    let x = "";
    for(let y = 0; y < i; y++){
      x += "*"
    }
    console.log(x);
}


let i = 0;

do {
  let x = "";
  let y = 0;

  do {
    x += "*"
    y++
  } while (y < i)

  console.log(x)
  i++;
} while (i < 5)




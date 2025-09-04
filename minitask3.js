//persegi

let tinggi = 5;
for (let i = 0; i < tinggi; i++) {
  let simbol = "";
  if (i === 0 || i === tinggi - 1) {
    for (let a = 0; a < tinggi; a++) {
      simbol += "* ";
    }
  } else {
    for (let b = 0; b < tinggi; b++) {
      if (b == 0) {
        simbol += "*";
      } else if (b === tinggi - 1) {
        simbol += " *";
      } else simbol += "  ";
    }
  }
  console.log(simbol)
}


//Segitiga
let  c = 5
for(let d = 1; d <= c; d++){
    let hasil = ""
    for(let e = d; e <= c; e++){
        hasil += " "
    }
    for(let f = 1; f <= d; f++ ){
        hasil += "* "
    }
    console.log(hasil)
}

//Labyrinth
let j = 5
for(let k = 0; k < j; k++){
    let l = ''
    for(m = 0; m < 11; m++){
        if(k == 0 || k == 2 || k == 4){
            if(m % 2 == 0){
                l += "*"
            }else{
                l += " "
            }
        } else{
            if(k == 1 && m == 8){
                l += '*'
            } else if(m != 10){
                l += ' '
            } else{
                l += '*'
            }
        }
    }
    console.log(l)
}
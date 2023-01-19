function id(min, max) {
    return Math.floor(
        Math.random() * (max - min + 1) + min
    )
}
//   console.log(  
//     "4 Digit: " + id(1000, 9999)
//   )

//   console.log(  
//     "6 Digit: " + id(100000, 999999)
//   )

console.log(
    "8 Digit: " + id(10000000, 99999999)
)
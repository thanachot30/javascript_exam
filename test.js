// static generateField(height, width, percent = 0.2) {
//     let set_hat = true;
//     const field = new Array(height).fill(0).map(e => new Array(width));
//     for(let y = 0; y < height; y++){
//         for(let x = 0; x < width; x++){
//             const prob = Math.random();
//             field[y][x] = prob > percent ? fieldCharacter : hole
//         }
//     }

const field = new Array(5).fill().map(e => new Array(20));

console.log(field);
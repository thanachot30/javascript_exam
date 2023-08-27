//--- Please copy and paste your GitHub Repo on line 2 (optional) ---//
// <GitHub Repo>

// JavaScript Assessment Rubric: https://generation.instructure.com/courses/2342/assignments/143783

// Codecademy: https://www.codecademy.com/paths/front-end-engineer-career-path/tracks/fecp-javascript-syntax-part-iii/modules/fecp-challenge-project-find-your-hat/projects/find-your-hat

// Please break down your thinking process step-by-step (mandatory)
// step 1 :



// JS Assessment: Find your hat //

// const prompt = require('prompt-sync')({ sigint: true }); // This sends a SIGINT, or “signal interrupt” message indicating that a user wants to exit a program by press Crtl+
 const clear = require('clear-screen');//every turn clear the screen that meant you will not get new field in time you choose the direction
const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';


class Field {
  constructor(field = [[]]) {
    this.field = field;
    this.positionX = 0;
    this.positionY = 0;
    this.status = 'true';
    // Set the "home" position before the game starts
    this.field[0][0] = pathCharacter;
  }
  //print field method to make it eaier 
  printMap() {
    // clear();
    // your print map code here
    let row = ""
    for(let i=0;i<=this.field.length-1;i++){
        // console.log(i);
        for(let j=0;j<=this.field[i].length-1;j++){
            row = row.concat(this.field[i][j]);
        }
        row += "\n";
    }
    console.log(row);
  }

  control(){
    const max_index = this.field.length-1;
    const max_index_row = this.field[0].length-1;
    let _copy = 0;
    const prompt = require('prompt-sync')({ sigint: true }); // This sends a SIGINT, or “signal interrupt” message indicating that a user wants to exit a program by press Crtl+
    let control = prompt("l:Left,r:right,u:up,d:Down?:");
    console.log("Move:" + control);
    //check move
    //this.positionX
    //this.positionY
    console.log(`Now Pos: ${this.positionX}:${this.positionY}`);
    switch(control){
        case 'l':
            _copy = this.positionY;
            _copy -= 1;
            if(_copy < 0){
                //out of min range
                console.log("Out of range: pos < 0")
            }else{
                this.positionY -= 1;
                console.log("New: " + this.positionY)
                this.field[this.positionX][this.positionY] = pathCharacter;
            }
            break;
        case 'r':
            _copy = this.positionY;
            _copy += 1;
            if(_copy > max_index_row){
                //out of min range
                console.log(`Out of range: pos > ${max_index_row}`);
            }else{
                this.positionY += 1;
                console.log("New: " + this.positionY)
                this.field[this.positionX][this.positionY] = pathCharacter;
            }
            break;
        case 'u':
            _copy = this.positionX;
            _copy -= 1;
            if(_copy < 0){
                console.log("Out of range: pos < 0");
            }else{
                this.positionX -= 1;
                console.log("New:" + this.positionX);
                this.field[this.positionX][this.positionY] = pathCharacter;
            }
            break;
        case 'd':
            _copy = this.positionX;
            _copy += 1;
            if(_copy > max_index){
                console.log("Out of range: pos >" +max_index);
            }else{
                this.positionX += 1;
                console.log("New:" + this.positionX);
                this.field[this.positionX][this.positionY] = pathCharacter;
            }
            break;
    }
  }

  start(){
    while(this.status){
        myField.printMap();
        myField.control();
    }
  }


}



const myField = new Field([
    ['*', '░', 'O'],
    ['░', 'O', '░'],
    ['░', '^', '░'],
  ]);

// node script.js
myField.start();





// Please copy and paste your GitHub Repo on line 2 (optional)
// https://github.com/thanachot30/javascript_exam

// JavaScript Assessment Rubric: https://generation.instructure.com/courses/2342/assignments/143783

// Codecademy: https://www.codecademy.com/paths/front-end-engineer-career-path/tracks/fecp-javascript-syntax-part-iii/modules/fecp-challenge-project-find-your-hat/projects/find-your-hat

// Please break down your thinking process step-by-step (mandatory)
// step 1 :อ่านโจทย์ว่า เค้าต้องการให้สร้างเกม ตามหาหมวก โดยเมื่อเดินทางไปเจอหมวกจะชนะเกมนี้ แต่ถ้าเดินทางไปเจอหลุมจะแพ้ โดยเกมนี้เล่นบนหน้าต่าง terminal ,การบังคับ 4ทิศทางใช้การพิมเข้าทาง terminal ท้ังหมด
//step 2: ผมทำการคิดองค์ประกอบของเกมออกมาก่อนว่ามีส่วนประกอบใดบ้าง ดังนี้            1.map :เป็นด่านการเดินทาง Displayเป็นตำแหน่งของการเดินที่เปลี่ยนแปลงไป ,ตำแหน่งของ holdและ hat.                                                           2.input direction:4 ทิศทาง การเคลื่อนที่ l:ซ้าย,r:ขวา,u:ขึ้น,d:ลง โดยจะมี curcorมารอรับคำ input
//step3:เริ่มทดสอบทำส่วน map ก่อน โดยทดสอบ hardcode Array ขึ้นมาเป็นด่านก่อนจากนั้นทำการ print map ออกมาโดยใช้วิธีการ for loop 2 ชั้น ชั้น1 เป็น row ปริ้นออกมาที่ละแถว ชั้น 2เป็นข้อมูลในแถวนั้นๆ โดยจะขึ้นบรรทัดใหม่ทุกๆ row                                 ต่อมาทดสอบระบบ input โดยใช้ prompt-sync เป็นการรอรับ input ข้อมูล โดยเก็บ input ไว้ในตัวแปลนึงเพื่อนำไปใช้
//step:4 เริ่มประกอบร่างรวมกันโดยทำการเขียน class start เพื่อใช้ในการเริ่มเกม while loop status==trur โดยในclass start การทำงานดังนี้                1.class.print map จาก array ออกมาเป็นด่าน                                 2.class.control รอรับ คำสั่งการเดิน โดยแบ่งเป็น 4ทิศทาง l:ซ้าย,r:ขวา,u:ขึ้น,d:ลง   เมื่อรับ ทิศทางมาแล้ว โปรแกรมจะทำการคำนวน position ต่อไปที่เราเดินโดย _copy position ไว้แล้วเช็คเงื่อนไงต่างๆ ว่า out of range array หรือไม่ ถ้าไม่ก็จะทำการเช็คต่อว่าตำแหน่งที่จะเดินต่อไปนั้นเป็น object อะไร ถ้าเป็นพื้น โปรแกรมก็จะทำการ เปลี่ยน พื้นเป็นรถ และ update array map จริง และ loop ขั้นตอนที่ 1 ต่อไป แต่ถ้าเป็น hold:print hold,hat:find hat ไม่update map และโปรแกรมจะทำการเปลี่ยน status = false เพื่อออกจากโปรแกรม.
//step:5 ramdom map จากจุดเริ่มต้นผมได้ใช้ head code map ต่อมาต้องการจะสร้าง method generate map ramdom hold hat car โดยวิธีการคือ สร้าง Array [20][20] 2มิติตามตอนนี้ fix ที่20 20 จากนั้นทำการ loop แต่ index โดย ในแต่ละ index ramdom เลข 0-1 ถ้า >0.2.ให้ index นั้นเป็น พื้นแต่ถ้าไม่ ให้เป็น hold loop ไปทุกๆ index จนครบ    ต่อมาเป็นการวาง hat โดย ทำการ while loop random index Array[ramdomX][randomy] โดยทำการเช็ค ถ้าเป็นพื้น ให้แทนที่ค่าเป็น hat เลยและออกจาก loop แต่ถ้าเป็นอย่างอื่นก็ ramdom หาindex ใหม่ สรุปคือ จะrandom หาตำแหน่งให้ hat จบกว่าจะวางได้ให้ได้. สุดท้ายจะได้ return array[][] map 2มิติ ออกมา
//ข้อเสนอแนะ:จากแนวคิด ramdom สร้าง map ปัจจุบัญ อาจทำให้เกิดปัญหาการ block กันของเส้นทางไม่สามารถให้ car ไปยัง hat ได้โดยวิธีการแก้ไขที่คิดๆไว้คือ จะต้องกำหนดcar,hatเป็นลำดับแรก จากนั้นสร้างเส้นทางที่ถูกต้องไว้เลย 1-2 ทางจาก car ถึง hat จากนั้นค่อยวางตำแหน่ง hold ปิดท้าย โดยจะใช้หลักการ จุดตัด ใส่ car ลงไป 4 คัน(random) hat(random) 1 โดยทำการคำนวนเส้นทางเทียบตามลำดับ car1-car2,car2-car3,car-4,car4-hat และเก็บเส้นทางนี้ไว้เป็น Array โดยจะให้ตำแหน่งหล่าวนี้เป็นพื้นเท่านั้น จากนั้นปิดท้ายด้วย ใส่ hold.ปัจจุบัณ version1 ยังไม่ได้แก้ไขในส่วนนี้.
// JS Assessment: Find your hat //

// const prompt = require('prompt-sync')({ sigint: true }); // This sends a SIGINT, or “signal interrupt” message indicating that a user wants to exit a program by press Crtl+
 const clear = require('clear-screen');//every turn clear the screen that meant you will not get new field in time you choose the direction
const hat = '🏥';
const hole = '🚧';
const fieldCharacter = '🟩';
const pathCharacter = '🚑';

class Field {
  constructor(field = [[]]) {
    this.field = field;
    this.positionX = 0;
    this.positionY = 0;
    this.status = 'true';
    // Set the "home" position before the game starts
    this.field[0][0] = pathCharacter;
  }
  static generateField(height, width, percent = 0.2) {
    let set_hat = true;
    const field = new Array(height).fill().map(e => new Array(width));
    for(let y = 0; y < height; y++){
        for(let x = 0; x < width; x++){
            const prob = Math.random();
            field[y][x] = prob > percent ? fieldCharacter : hole
        }
    }
    //set hat
    while(set_hat){
        let ran_y = Math.floor(Math.random()*height);
        let ran_x = Math.floor(Math.random()*width);
        console.log(ran_y + " " + ran_x);
        // let cell = field[ran_y][ran_x];
        if(field[ran_y][ran_x] == fieldCharacter){
            field[ran_y][ran_x] = hat;
            set_hat = false;
        }
    }
    return field;
}
  //print field method to make it eaier 
  printMap() {
    clear(); //clear function 
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
    const max_index_row = this.field[0].length-1;//dead situation
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
                if(check_object('l',this.positionX,this.positionY,this.field) === fieldCharacter){
                    console.log("true fieldCharacter");
                    this.positionY -= 1;
                    console.log("New: " + this.positionY)
                    this.field[this.positionX][this.positionY] = pathCharacter;
                }
                else if(check_object('l',this.positionX,this.positionY,this.field) === hat){
                    console.log("Find hate");
                    this.status = false;
                }
                else if(check_object('l',this.positionX,this.positionY,this.field) === hole){
                    console.log("Hold end game");
                    this.status = false;
                }
            }
            break;
        case 'r':
            _copy = this.positionY;
            _copy += 1;
            if(_copy > max_index_row){
                //out of min range
                console.log(`Out of range: pos > ${max_index_row}`);
            }else{
                if(check_object('r',this.positionX,this.positionY,this.field) === fieldCharacter){
                    console.log("true fieldCharacter");
                    this.positionY += 1;
                    console.log("New: " + this.positionY)
                    this.field[this.positionX][this.positionY] = pathCharacter;
                }
                else if(check_object('r',this.positionX,this.positionY,this.field) === hat){
                    console.log("Find hate");
                    this.status = false;
                }
                else if(check_object('r',this.positionX,this.positionY,this.field) === hole){
                    console.log("Hold end game");
                    this.status = false;
                }
            }
            break;
        case 'u':
            _copy = this.positionX;
            _copy -= 1;
            if(_copy < 0){
                console.log("Out of range: pos < 0");
            }else{
                if(check_object('u',this.positionX,this.positionY,this.field) === fieldCharacter){
                    console.log("true fieldCharacter");
                    this.positionX -= 1;
                    console.log("New:" + this.positionX);
                    this.field[this.positionX][this.positionY] = pathCharacter;
                }
                else if(check_object('u',this.positionX,this.positionY,this.field) === hat){
                    console.log("Find hate");
                    this.status = false;
                }
                else if(check_object('u',this.positionX,this.positionY,this.field) === hole){
                    console.log("Hold end game");
                    this.status = false;
                }
            }
            break;
        case 'd':
            _copy = this.positionX;
            _copy += 1;
            if(_copy > max_index){
                console.log("Out of range: pos >" +max_index);
            }else{
                if(check_object('d',this.positionX,this.positionY,this.field) === fieldCharacter){
                    console.log("true fieldCharacter");
                    this.positionX += 1;
                    console.log("New:" + this.positionX);
                    this.field[this.positionX][this.positionY] = pathCharacter;
                }
                else if(check_object('d',this.positionX,this.positionY,this.field) === hat){
                    console.log("Find hate");
                    this.status = false;
                }
                else if(check_object('d',this.positionX,this.positionY,this.field) === hole){
                    console.log("Hold end game");
                    this.status = false;
                }
            }
            break;
    }

    function check_object(direction,posx,posy,field){
        let get_posx = posx;
        let get_posy = posy;
        let get_field = field;
        let object_to = "";
        switch(direction){
            case'l':
                object_to = get_field[get_posx][get_posy-1];
                break;
            case'r':
            object_to = get_field[get_posx][get_posy+1];
                break;
            case'u':
                object_to = get_field[get_posx-1][get_posy];
                break;
            case 'd':
                object_to = get_field[get_posx+1][get_posy];
                break;
        }
        return object_to;
    }
  }

  start(){
    while(this.status){
        myField.printMap();
        myField.control();
    }
  }
}

const myField = new Field(Field.generateField(20,20));

// node script.js
myField.start();


// [
//     ['*', '░', 'O','░','░','░'],
//     ['░', 'O', '░','░','░','░'],
//     ['░', '^', '░','░','░','░'],
//     ['░', 'O', '░','░','░','░'],
//     ['░', '^', '░','░','░','░'],
//     ['░', 'O', '░','░','░','░'],
//     ['░', '^', '░','░','░','░'],
//     ['░', '░', '░','░','░','░'],
//     ['░', '^', '░','░','░','░'],
//     ['░', 'O', '░','░','░','░'],
//     ['░', '^', '░','░','░','░'],
//     ['░', 'O', '░','░','░','░'],
//     ['░', '^', '░','░','░','░'],
//     ['░', 'O', '░','░','░','░'],
//     ['░', '^', '░','░','░','░'],
//     ['░', 'O', '░','░','░','░'],
//     ['░', '^', '░','░','░','░'],
//     ['░', 'O', '░','░','░','░'],
//     ['░', '^', '░','░','░','░'],
//   ]


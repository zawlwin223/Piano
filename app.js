             
let ipt=document.getElementById("ipt")
let pianomemory=[];
let list=document.getElementById("list")
let btn=document.getElementById("btn")
// let hh=document.getElementById("gg")
// let key=document.getElementById("key")
function run(x){
    let audio=new Audio(`sound/${x}.mp3`)
    audio.play()
    ipt.value+=x+" "
    console.log(ipt.value)
    
    
}
let ind=0;
function SaveMemory(){
    pianomemory.push(ipt.value)
    let nn=ipt.value
    // list.innerHTML=""
    
   function add(){
    let kk=document.createElement("li")
    let aa=document.createTextNode(nn)
    let bb=document.createElement("button")
    let cc=document.createTextNode("Replay")
    bb.appendChild(cc)
    kk.appendChild(aa)
    kk.appendChild(bb)
    list.appendChild(kk)
    bb.classList.add(`replay`)
    bb.setAttribute("onclick",`replay(${ind})`)
    kk.setAttribute("class","animate__animated animate__backInLeft")

ind++
   }
   
add()
ipt.value=""
console.log(ind)
}
   

let m=["C4","C5","d4","f4"]
function runmemory(arr,delay=1000){
//    let x=delay
   let a=prompt("Please Enter Temper Second")
   let raiser=Number(a)*1000
   console.log(raiser)
   arr.map((val,index)=>{
      setTimeout(run,delay,val)
      let wait = '';
switch (val) {
    case 'C4':
        wait = 0;
        
        break;
    case 'D4':
        wait = 1;
        break;
    case 'E4':
        wait = 2;
        break;
    case 'F4':
        wait = 3;
        break;
    case 'G4':
        wait = 4;
        break;
    case 'A4':
        wait = 5;
        break;
    case 'B4':
        wait = 6;
        break;
    case 'C5':
        wait = 7;
        break;

}
setTimeout(nn,delay,wait)
     delay+=raiser
    
   })
   
}
function replay(x){
   let current=pianomemory[x].split(" ")
   current.pop()
   console.log(current)
  runmemory(current)
}
function Delete(){
   ipt.value=""
}
function removeone(){
ipt.value=ipt.value.substring(0, ipt.value.length - 3)
}

let key=document.querySelectorAll(".key-button")
key.forEach((val,ind)=>{
    let oo=document.getElementById(`gg-`+(ind+1))
    
    val.addEventListener("click",function(){
        
        nn(ind)
    })
    
})
function nn(x){
    switch(x){
        case 0:
            document.getElementById(`gg-`+(x+1)).style.backgroundColor="rgb(217 14 182)";
            document.getElementById(`gg-`+(8)).style.backgroundColor=""
            document.getElementById(`gg-`+(2)).style.backgroundColor="";
            // break;
        case 1:
            document.getElementById(`gg-`+(2-1)).style.backgroundColor=""
            document.getElementById(`gg-`+(x+1)).style.backgroundColor="rgb(217 14 182)";
            document.getElementById(`gg-`+(3)).style.backgroundColor="";
            // break;
            case 2:
                document.getElementById(`gg-`+(3-1)).style.backgroundColor=""
                document.getElementById(`gg-`+(x+1)).style.backgroundColor="rgb(217 14 182)";
                document.getElementById(`gg-`+(4)).style.backgroundColor="";
                document.getElementById(`gg-`+(1)).style.backgroundColor="";
                // break;
                case 3:
                    document.getElementById(`gg-`+(4-1)).style.backgroundColor=""
                    document.getElementById(`gg-`+(x+1)).style.backgroundColor="rgb(217 14 182)";
                    document.getElementById(`gg-`+(5)).style.backgroundColor="";
                    document.getElementById(`gg-`+(1)).style.backgroundColor="";
                    // break;
                    case 4:
                        document.getElementById(`gg-`+(5-1)).style.backgroundColor=""
                        document.getElementById(`gg-`+(x+1)).style.backgroundColor="rgb(217 14 182)";
                        document.getElementById(`gg-`+(6)).style.backgroundColor="";
                        document.getElementById(`gg-`+(3)).style.backgroundColor="";
                        document.getElementById(`gg-`+(1)).style.backgroundColor="";
                        // break;
                        case 5:
                            document.getElementById(`gg-`+(6-1)).style.backgroundColor=""
                            document.getElementById(`gg-`+(x+1)).style.backgroundColor="rgb(217 14 182)";
                            document.getElementById(`gg-`+(7)).style.backgroundColor="";
                            // break;
                            case 6:
                                document.getElementById(`gg-`+(7-1)).style.backgroundColor=""
                                document.getElementById(`gg-`+(x+1)).style.backgroundColor="rgb(217 14 182)";
                                document.getElementById(`gg-`+(8)).style.backgroundColor="";
                                document.getElementById(`gg-`+(5)).style.backgroundColor="";
                                document.getElementById(`gg-`+(4)).style.backgroundColor="";
                                // break;
                                case 7:
                                    // document.getElementById(`gg-`+(7)).style.backgroundColor=""
                                    // document.getElementById(`gg-`+(6)).style.backgroundColor="";
                                    document.getElementById(`gg-`+(1)).style.backgroundColor="";
                                    document.getElementById(`gg-`+(2)).style.backgroundColor="";
                                    document.getElementById(`gg-`+(3)).style.backgroundColor="";
                                    document.getElementById(`gg-`+(4)).style.backgroundColor="";
                                    document.getElementById(`gg-`+(5)).style.backgroundColor="";
                                    document.getElementById(`gg-`+(6)).style.backgroundColor="";
                                    document.getElementById(`gg-`+(7)).style.backgroundColor="";
                                    document.getElementById(`gg-`+(x+1)).style.backgroundColor="rgb(217 14 182)";
                                    
                                    
                                    // break;

    }
}
document.addEventListener("keyup",function(e){
    switch(e.keyCode){
     case 65:
     run('C4');
     nn(0);
     break;
 case 83:
     run('D4');
     nn(1);
     break;
 case 68:
     run('E4');
     nn(2);
     break;
 case 70:
     run('F4');
     nn(3);
     break;
 case 74:
     run('G4');
     nn(4);
     break;
 case 75:
     run('A4');
     nn(5);
     break;
 case 76:
     run('B4');
     nn(6);
     break;
 case 186:
     run('C5');
     nn(7);
     break;
 case 8:
     break;
    }
 
    
 })
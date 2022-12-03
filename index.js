// alert("Welcome my friend!WELCOME")
var len = document.querySelectorAll(".drum").length ;
// instead of 's' i have all 
// BUTTON WILL DO BUT IT IS POSSIBLE IN FUTURE FURTHER BUTTOONSARE ADDED SO THE CLASSES ARE INTRODUCED
// const temp = document.querySelector(".drum") ; 
// // console.log(temp.innerhtml + " hi ");
// temp.addEventListener("dragstart" , ()=>{
//   // temp.classList.add("pos");
//   console.log("drag start  ");
//   console.log(this.innerHTML);

// } ) ; 


// temp.addEventListener("dragend" , ()=>{
//   temp.classList.remove("pos");
//   console.log("drag end  ");
// } ) ; 


let element = "" ; 
for(let i = 0; i < len ; i++)
{ 

  // jisko drag karna h ...
  
      document.querySelectorAll(".drum")[i].addEventListener("dragstart" , function()

      {
        // console.log(this)
        // console.log(this.innerHTML );
        // console.log(i) ;
        element = this ; 
        this.classList.remove("display") ; 
        this.classList.add("ndisplay") ; 

      }            
    )
    document.querySelectorAll(".drum")[i].addEventListener("dragend" , function()
      {
        console.log("drag end");   
        this.classList.add("display") ; 
        this.classList.remove("ndisplay") ;      
      }            
    )
    
    // jiske upar drag karna h ...
    // jiske upar drag karna h ...

    // when you go over something 
    document.querySelectorAll(".drum")[i].addEventListener("dragover" , function(e)
      {
        // whn defult disabled at that time only the drop function was enabled 
          e.preventDefault();
        // console.log("drag over");        
      }            
    )
    document.querySelectorAll(".drum")[i].addEventListener("dragenter" , function()
      {
        // console.log("drag enter");        
      }            
    )
    document.querySelectorAll(".drum")[i].addEventListener("dragleave" , function()
      {
        // console.log("dragleave");        
      }            
    )
    document.querySelectorAll(".drum")[i].addEventListener("drop" , function(e)

      {
        console.log("drop");
        console.log(this.innerHTML +"-" + element.innerHTML ) ; 
        const text1 = element.innerHTML ; 
        const text2 = this.innerHTML  ; 
        element.innerHTML = text2 ; 
        element.classList.remove(""+text1) ; 
        element.classList.add("" + text2) ; 

        // this.innerHTML = text1 ; 
        this.innerHTML = text1 ; 
        this.classList.remove(""+text2)
        this.classList.add(""+text1) ; 
        // console.log(this)
        // console.log(this.innerHTML );
        // console.log(i) ;
        // element = this ; 
      }
    )
    // console.log(i) ;
    
 }


var ind = 0 ;
for(let i = 0; i < len ; i++)
{
      document.querySelectorAll(".drum")[i].addEventListener(
        "click" , function()
        // in the function part I can even call external function
      {
      // a = 5 ;
      // alert("Ye buddy ... Got clicked " + "value is--**" +i );
      // this stands for the button selected
      // alert("Somthing happened ");
      var btnchar = this.innerHTML ;
      console.log("---" + btnchar ) ;
        buttonAnimation(btnchar);
      makeSound(btnchar);


          // document.querySelectorAll(".drum")[i].color:"white";
          // IN THE ANOVE CODE I AM USING CSS AND THERFOR NOTHING WILL HAPPEN NEED TO USE JAVASCRIPT CODE

      }
    ) ;

    // document.querySelectorAll(".drum")[i].addEventListener('dragstart' , ()=>{
    //   console.log("drag start  ");
    // } ) ; 
    // document.querySelectorAll(".drum")[i].addEventListener('dragend' , ()=>{
    //   console.log("drag end ");
    // } ) ; 




}
// entire web page starts listening for key strokes
// event let us tap into the event which triggered the event listener
document.addEventListener( "keypress" , function(event)
{
            // alert(event +"  Key is pressed");

            // alert("key is pressed ");
            makeSound(event.key);
            buttonAnimation(event.key);
}
) ;

function makeSound(key )
{

  switch ( key ) {
    case "d":
              var audio = new Audio('sounds/tom-1.mp3');
              audio.play();
      break;
    case "j":
                var audio = new Audio('sounds/tom-2.mp3');
                audio.play();
      break;
    case "k":
                  var audio = new Audio('sounds/tom-3.mp3');
                  audio.play();
        break;
    case "l":
                  var audio = new Audio('sounds/tom-4.mp3');
                  audio.play();
       break;
      case "w":
                     var audio = new Audio('sounds/crash.mp3');
                     audio.play();
          break;
      case "a":
                    var audio = new Audio('sounds/kick-bass.mp3');
                    audio.play();
         break;
       case "s":
                     var audio = new Audio('sounds/snare.mp3');
                     audio.play();
        break;

    default:
      console.log(" The strnge buttonpressed was " + btnchar );

  }

}




function buttonAnimation( keyPressed )
{
   var activebutton = document.querySelector("." +keyPressed);
   activebutton.classList.add("pressed") ;

   setTimeout( function()
 {
   activebutton.classList.remove("pressed")
 } , 100);
}
// the first one is event type and the second one is the function which is
// to be called to handle the particular event
//
// function handleClick(a)
// {
//   a = 5 ;
//   alert("Ye buddy ... Got clicked " + "value is--**" +a );
// }

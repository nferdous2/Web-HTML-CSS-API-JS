console.log('im here');
// alert('open the book')
const maComing =()=>{
    alert('Maa is coming')
}
const askPicnic =()=>{

   const response= confirm('Are you going to picnic?');
   console.log(response);
   if(response===true){
       alert('give money')
   }
   else{
       console.log('go')
   }
}
const askName = () => {
    const name = prompt('What is your name?');
    if (name) {
        console.log(name)
    }
}
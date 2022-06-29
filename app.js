let screen= document.getElementById('screen');
let buttons= document.getElementsByTagName('button');
Array.from(buttons).forEach(function(elem,idx,arr){
    elem.addEventListener('click',(e)=>
    {let innerText=e.target.innerText;
        console.log(innerText);
        let screenValue='';
        // to handle the multiplication
        if(innerText==='X'){
            screenValue= screen.value+'*';
            screen.value=screenValue;
        }
        // to clear all the screen
        else if(innerText==='C'){
            screen.value=''
        }
        // for delete one element fro the last
        else if(innerText==='<'){
            if(screen.value!=''){
                screenValue=screen.value;
                screen.value= screenValue.slice(0, screenValue.length-1);
                console.log(screen.value);
            }
        }
        else if(innerText==='='){
            screenValue= eval(screen.value);
            screen.value=screenValue;
        }
        else{
            // debugger;
            console.log('fired')
            screenValue= screen.value+innerText;
            screen.value=screenValue;
        }
    })
});


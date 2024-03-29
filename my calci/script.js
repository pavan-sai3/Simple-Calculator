let display=document.getElementById('inputBox');
let buttons=document.querySelectorAll('button');
string='';
let nodelist=Array.from(buttons);
nodelist.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        if(e.target.innerHTML== '=')
        { 
            try{

                string=eval(string);
                display.value=string;
            }catch(err){
                display.value='Error'; 
            }
             

        }
        else if(e.target.innerHTML=='AC')
        {
            string='';
            display.value=string;

        }
        else if(e.target.innerHTML=='DEL')
        {
            string= String(string).slice(0,-1);
            display.value=string;
        }
       
        else{

            string+=e.target.innerHTML;
            display.value=string;
        }
    })
    
})
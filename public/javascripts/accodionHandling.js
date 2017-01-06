var flowFunc=function(element){
    console.log(element.value);
    /*console.log(document.getElementById('old').value);
     console.log(document.getElementById('new').value);*/
if(element.value==1)
   { document.getElementById('customer-login').style.display='block';
    document.getElementById('guestBtn').style.display='none';}
    else
       { document.getElementById('customer-login').style.display='none';
       document.getElementById('guestBtn').style.display='block';
       }
}
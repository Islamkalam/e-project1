document.getElementById('email').addEventListener('keyup',function(){
   var email= document.getElementById('email2').innerHTML=this.value
});
document.getElementById('password').addEventListener('keyup',function(){
   var password= document.getElementById('password2').innerHTML=this.value
});

$(document).ready(function(){
    if(email==='' && password==''){
        $('#link').attr('href','#')
    }else{
        $('#link').attr('href','./home.html')
    }

})
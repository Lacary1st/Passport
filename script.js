function myName(){
    let result;
    let name=document.getElementById("name")
    result= name.value
    document.getElementById('fullname').innerHTML= result;
}

function myNumber(){
    let validNumber; 
    let number =document.getElementById("num")
    input =number.value
if (input.startsWith('070') || input.startsWith('080') || input.startsWith('081') || input.startsWith('090') || input.startsWith('091')){
    if ( input.length == 11 ){
        validNumber = input
    
    }
    else {
             validNumber = 'Invalid'
          }
        }
          document.getElementById('telephone').innerHTML= validNumber;
    
}

   
function myAge(){
    let result;
    let age=document.getElementById("age")
    result= age.value
    document.getElementById('dateofbirth').innerHTML= result;
}


function myPob(){
    let result;
    let pob =document.getElementById("pob")
    result= pob.value
    document.getElementById('place').innerHTML= result;
}


function myEmail(){
    let result;
    let email=document.getElementById("email")
    result= email.value
    document.getElementById('electronicmail').innerHTML= result;
}


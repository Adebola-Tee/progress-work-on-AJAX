var information = document.getElementById("info");
function getInfo(){
    let xhr= new XMLHttpRequest();
xhr.open('GET','ajax2.json', true);
xhr.onload = function(){
    if(this.status == 200){
       var user = JSON.parse(this.responseText);
       console.log(user.name);
    }
}  
xhr.send();
}

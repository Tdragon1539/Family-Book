var family= ["FamilyCover.jpg","Dad.jpg", "Mom.jpg", "Sis.jpg", "Me.jpg"];

var family_name= ["Family", "Dad", "Mom", "Sister", "Me"];

var i=0;
function change(){
  document.getElementById("IMAGE").src=family[i]; 
   document.getElementById("name_of_member").innerHTML=family_name[i]; i++; 
  if(i==4){
    i=0;} }
const monthEl=document.querySelector(".date h1");
const fullDateEl=document.querySelector(".date p");
const daysEl=document.querySelector(".days");

const monthInx=new Date().getMonth();
const lastDay=new Date(new Date().getFullYear(),monthInx+1,0).getDate();
let firstDay = new Date(new Date().getFullYear(), monthInx, 1).getDay();
firstDay = firstDay === 0 ? 6 : firstDay - 1; // Sunday adjustment


const months=[
    "January", 
    "February", 
    "March", 
    "April", 
    "May", 
    "June", 
    "July", 
    "August", 
    "September", 
    "October", 
    "November",
    "December"


];
monthEl.innerText=months[monthInx];
fullDateEl.innerText=new Date().toDateString();

let days = "";

for(let i=firstDay;i>0;i--)
{
     days += `<div></div>`;
}
for(let i=1;i<=lastDay;i++)
{
    if(i===new Date().getDate())
    {
       days += `<div class="today">${i}</div>`; 
    }
    else{
    days += `<div>${i}</div>`;
    }

}

daysEl.innerHTML=days;
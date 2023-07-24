let timeString = document.getElementById("timeString");
let dateString = document.getElementById("dateString");
let greeting = document.getElementById("greeting");
let searchQuery = document.getElementById("searchQuery");
let searchBtn = document.getElementById("searchBtn");


setInterval(()=>{
    let date = new Date();
    let currentHour = date.getHours();
    timeString.innerHTML="Now , "+date.toLocaleTimeString().substring(0,5);
    dateString.innerHTML="Today , "+date.toLocaleDateString("default",{dateStyle:"medium"});
    if(currentHour>4 && currentHour<=12){
        greeting.innerHTML="Good Morning , Kishore";
        document.body.style.backgroundImage="url('./assets/morning.jpg')";
    }else if(currentHour>12 && currentHour<=16){
        greeting.innerHTML="Good Afternoon , Kishore";
        document.body.style.backgroundImage="url('./assets/afternoon.jpg')"
    }else if(currentHour>16 && currentHour<=20){
        greeting.innerHTML="Good Evening , Kishore";
        document.body.style.backgroundImage="url('./assets/evening.jpg')"
    }else if(currentHour>20){
        greeting.innerHTML="Good Night , Kishore";
        document.body.style.backgroundImage="url('./assets/riverForest.jpg')"
        
    }

},1000)
document.addEventListener("keypress",(e)=>{
    if(e.key==="Enter"){
        if(searchQuery.value.includes(".")){
            window.open("https://"+searchQuery.value,"_self");
         }
        window.open("https://www.google.com/search?q="+searchQuery.value+"&oq="+searchQuery.value);
    }
})
searchBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    if(searchQuery.value.includes(".")){
       window.open("https://"+searchQuery.value,"_self");
    }
    window.open("https://www.google.com/search?q="+searchQuery.value+"&oq="+searchQuery.value);
    
})
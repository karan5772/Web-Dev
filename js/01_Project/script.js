function setdate(){
    const time = document.getElementById("time");
    const date = document.getElementById("date");
    const now = new Date();
    
    const hours = (now.getHours()%12 || 12).toString().padStart(2,"0"); //if it's 12 then it'll retirn 12
    const min = now.getMinutes().toString().padStart(2,"0");
    const sec = now.getSeconds().toString().padStart(2,"0");
    const ampm = now.getHours() >= 12 ? 'PM' : 'AM'; 
    time.textContent = `${hours}:${min}:${sec} ${ampm}`;

    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      };
    
    const dateString = now.toLocaleDateString(undefined, options);
    //const dateString = `${now.getMonth() + 1}/${now.getDate()}/${now.getFullYear()}`;
    date.textContent = dateString;



}



setInterval(setdate, 1000)
setdate()

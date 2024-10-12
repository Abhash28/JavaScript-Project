let timer=document.getElementById("timer")

const clock = () => {
    const date = new Date("june 30,2024 12:00:00").getTime();
    const currentdate = new Date();
    const diff = Math.floor(date - currentdate) / 1000;
    const days = Math.floor(diff / 3600 / 24);
    const hour = Math.floor((diff / 3600) % 24);
    const min = Math.floor((diff / 60) % 60);
    let sec = Math.floor(diff % 60);
    let time1=(`The Deal ends in ${days}d ${hour}h ${min}m ${sec}s`);
    timer.innerHTML=time1
  };

setInterval(() => {
    clock()
}, 1000);


const Home=document.getElementById("home")
Home.addEventListener("click",()=>{
  if (Home) {
    Home.scrollIntoView(`{behavior : 'smooth'}`)
  }
})


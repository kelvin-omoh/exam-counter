

gsap.from('.day' , {duration: 1, x: '-100rem' })
gsap.from('.min' , {delay:1.3, duration: 1, x: '-300rem' })
gsap.from('.hour' , {delay:1, duration: 1, x: '-300rem' })
gsap.from('.sec' , { delay:1.5 ,duration: 1, x: '-300rem' })
gsap.from('.title' , { delay:2.5 ,duration: 1, y: '-300rem',rotate:1000  })
gsap.from('.btn' , { delay:2.5 ,duration: 3, y: '-3rem',opacity:0  })




//inputting my own exam date
var countDownDate= new Date("July 4 , 2022  00:00:00");

 setInterval(()=>{
      //present hour
        //storing values for the present date
        var date = new Date();

       //gettting the differences in the time
       let timeleft = (countDownDate - date)
       
        //gets day number for both the  day and countday
        var daynum= date.getDate();
        var countDownDay = countDownDate.getDate();

        //the below formula for days is (time left / (1000*24*60*60))------------
        var presentday=document.querySelector(".day").textContent=   Math.floor(timeleft / (1000*60*60*24)) +"day/";
        


        //gets day minutes  
        var daymin=date.getMinutes();
        var countDownmin = countDownDate.getMinutes();
        //the below formula  for minutes is (time left % (1000*60*60)/(1000*60))------------
        
         var min=document.querySelector(".min").textContent=   (Math.floor((Math.floor(timeleft%(1000*24*60*60))/(60*1000))))+"min/";
       



         //get day hour
         var dayhour=date.getHours(); 
         var countDownhour=countDownDate.getHours()
         //the below formula  for hour is (time left / (1000*60*60)* 24))------------
         var hour=document.querySelector(".hour").textContent= (Math.floor((Math.floor(timeleft /(1000*60*60*24))*24)))+"hour/";
        
        
        
         //get day sec
         var daysec=date.getSeconds();
         //the below formula  for minutes is (time left % (1000*60*60*24)/(1000))------------
         var sec=document.querySelector(".sec").textContent=  Math.floor(((timeleft%(1000*60*60*24))/1000)) +"sec";
    
      if((timeleft<=0)){
          var examday=document.querySelector(".ex-date");
          examday.style.display="block";
          document.querySelector(".day").style.display="none"
          document.querySelector(".hour").style.display="none"
          document.querySelector(".min").style.display="none"
          document.querySelector(".sec").style.display="none"
      }
    
    },1000)
    



 

// Iteration 2: Generate 2 random number and display it on the screen

var num1 = document.getElementById('number1')
var num2 = document.getElementById('number2')

num1.innerHTML =Math.round(Math.random()*100);
num2.innerHTML = Math.round(Math.random()*100)

let score =0;

// Iteration 3: Make the options button functional

const greater = document.getElementById('greater-than')
const smaller = document.getElementById('lesser-than')
const equal = document.getElementById('equal-to')


greater.addEventListener('click', ()=>{
    if(num1.innerHTML>num2.innerHTML){
        score++;
        console.log(score)
        resetTime(timerId)
        num1.innerHTML =Math.round(Math.random()*100);
        num2.innerHTML = Math.round(Math.random()*100);
    
    }
    else{
        location.href="gameover.html"
    }
    
})

smaller.addEventListener('click', ()=>{
    if(num1.innerHTML<num2.innerHTML){
        score++;
        console.log(score)
        resetTime(timerId)
        num1.innerHTML =Math.round(Math.random()*100);
        num2.innerHTML = Math.round(Math.random()*100);


    }
    else{
        location.href="gameover.html"
    }
   
})

equal.addEventListener('click', ()=>{
    if(num1.innerHTML==num2.innerHTML){
        score++
        console.log(score)
        resetTime(timerId)
        num1.innerHTML =Math.round(Math.random()*100);
        num2.innerHTML = Math.round(Math.random()*100);

    }
    else{
        location.href="gameover.html"
    }
   
})




// Iteration 4: Build a timer for the game

var time =5;
var timer = document.getElementById('timer');
var timerId;

function showTimer(){
    time=5
    timer.innerText=time
    timerId=setInterval(()=>{
        time--
        if(time==0){
            location.href='gameover.html'
        }
        timer.innerText=time
        
    },1000)
    localStorage.setItem("score",score)
}

function resetTime(timerId){
    clearInterval(timerId)
    showTimer()
}
showTimer()
//#1
//change figcaption color and weight
//css trigger
function homeClick1() { //was thinking about using childnodes/ nextof, but wasn't sure how to implement it. originally didn't have it in a function. this caused countdown not to work. had an eventlistener before the function, post function it got removed.

//it takes a second to load!!!!!!!!!
//lets user remember which destination they clicked
    const click1 = document.querySelector('.click1');
    click1.classList.toggle('color');
}
function homeClick2() {
    const click2 = document.querySelector('.click2');
    click2.classList.toggle('color');
}
function homeClick3() {
    const click3 = document.querySelector('.click3');
    click3.classList.toggle('color');
}
function homeClick4() {
    const click4 = document.querySelector('.click4');
    click4.classList.toggle('color');
}
function homeClick5() {
    const click5 = document.querySelector('.click5');
    click5.classList.toggle('color');
}
function homeClick6() {
    const click6 = document.querySelector('.click6');
    click6.classList.toggle('color');
}

//#2
//group trip countdown
//js from 3a-countdown, borrowed #1
function myCount(){
const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const countdown = document.getElementById('countdown');
const year = document.getElementById('year');
const loading = document.getElementById('loading');

const currentYear = new Date().getFullYear();
const newYearTime = new Date(`August 04 ${currentYear} 00:00:00`);

year.innerText = currentYear +1;

//update countdown time
function updateCountdown(){
    const currentTime = new Date();
    const diff = newYearTime - currentTime

    const d = Math.floor(diff / 1000 / 60 / 60 / 24); //math.floor rounds down
    const h = Math.floor(diff / 1000 / 60 / 60) % 24 ; 
    const m = Math.floor(diff / 1000 / 60) % 60 ;
    const s = Math.floor(diff / 1000) % 60 ;



//add values to DOM

days.innerHTML = d 
hours.innerHTML = h < 10 ? '0' + h : h; //? = if/else ( : is the or) --allows numbers to always be 2 characters
minutes.innerHTML = m < 10 ? '0' + m : m;
seconds.innerHTML = s < 10 ? '0' + s : s;

}
setInterval(updateCountdown, 1000);
}
myCount(); //calls myCount to run


//#3
//contact page
//hide form and show response recorded
function myHide(event){
    event.preventDefault();
    var div = document.getElementById("hide"); 
    div.style.display = "none"; //hide div/ form

    document.getElementById("nameOutput").innerHTML = "Your response has been recorded."; //display string
}


//#4
//gear page
//if all items checked, display image
function myCheck() { //got concept from my project2 where I counted score for a good or bad grade. Initially, I was going to do 8 nested if statements but thought this would be better
    var items = [
        { id: "item1", check: true },
        { id: "item2", check: true },
        { id: "item3", check: true },
        { id: "item4", check: true },
        { id: "item5", check: true },
        { id: "item6", check: true },
        { id: "item7", check: true },
        { id: "item8", check: true },
        { id: "item9", check: true }
    ];

    var allItem = 0; //set counter to 0

    for (let i = 0; i < items.length; i++) { //array for counting 8 items
        const item = items[i];
        const selected = document.getElementById(item.id).checked;

        if (selected === item.check) { //if checked, add item to counter
        allItem++;
        }
    }

    if (allItem === items.length) { //if all checked, display image
        document.getElementById("checked").innerHTML =
        '<img src="images/checked.jpg" style="width: 20em; " alt="Happy face">';
        document.getElementById("letsGo").innerHTML =
        "You're ready to go!";
    } else {
        document.getElementById("checked").innerHTML = ''; //if not all checked, display empty string (nothing)
    }
}

#########################################

const names = [{
    text1:value1,
    text2:value2
},{
    text1:value3,
    text2:value4
}];

names[0].text1 >> give me value1
names[0].text2 >> give me value2
names[1].text1 >> give me value3
names[1].text2 >> give me value4

#########################################

window.addEventListener('click', function(e){
    if(e.target === modalContainer){
        modalContainer.style.display = "none";
    }
});

console.log(e.target); // <div class="modal-container">...</div>

#########################################

const accordion = document.getElementsByClassName('content-container');

for(let i=0; i<accordion.length; i++){

    accordion[i].addEventListener('click', function(){
        this.classList.toggle('active');
    });
    
}

#########################################

let timeInterval = null;

function stopWatch(){
	seconds++;
	diplayTimer.innerText = `${seconds}`;
}

timeInterval = window.setInterval(stopWatch, 1000); // one second

clearInterval(timeInterval); // to stop function interval

#########################################

button.addEventListener('click',function(){
	li.style.textDecoration = "line-through";
});

button.addEventListener('click',function(){
	button.parentElement.remove();
});

#########################################

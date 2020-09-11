var awesomeHeader = document.getElementById('myHeader')
awesomeHeader.style.background = 'lightblue'
awesomeHeader.style.color = 'darkblue'

var myButton = document.getElementById('myButton')
var myTitle = document.getElementById('myTitle')
var counter = 0

myButton.addEventListener('click', function(){
    //console.log('aww you poked me')
    //myButton.style.background = 'red'
    //myTitle.textContent = "I'm learning JavaScript"
    console.log('counter at line 13: ', counter)
    counter += 1
    console.log('counter at line 15: ', counter)
    myButton.textContent = counter
})
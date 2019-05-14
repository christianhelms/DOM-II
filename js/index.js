const firstButton = document.querySelector('.first');
const MouseOverThing = document.querySelector('.intro h2')
const keyStuff = document.querySelector('html')
const doubleClick = document.querySelector('.intro h2')
const mouseDown = document.querySelector('.intro h2')
const mouseUp = document.querySelector('.intro h2')
const mouseMove = document.querySelector('.intro h2')
const mouseEnter = document.querySelector('.intro h2')
const mouseLeave = document.querySelector('.intro h2')
const keyUp = document.querySelector('.intro')

firstButton.addEventListener('click', function(eventObject){
    console.log(`I was clicked. Event: ${eventObject}`);
}); 

MouseOverThing.addEventListener('mouseover', function(eventObject){
    MouseOverThing.style.color = 'purple';
});

keyStuff.addEventListener('keydown', function(eventObject){
    console.log(`Key Pressed: ${eventObject}`)
})

doubleClick.addEventListener('dblclick', function(eventObject){
    console.log(`Double clicked: ${eventObject}`);
});

mouseDown.addEventListener('mousedown', function(eventObject){
    console.log(`mouse down on this: ${eventObject}`);
});

mouseUp.addEventListener('mouseup', function(eventObject){
    console.log(`mouse up on this: ${eventObject}`);
});

mouseMove.addEventListener('mousemove', function(eventObject){
    console.log(`mouse moved on this: ${eventObject}`);
});

mouseEnter.addEventListener('mouseenter', function(eventObject){
    console.log(`mouse entered this: ${eventObject}`);
});

mouseLeave.addEventListener('mouseleave', function(eventObject){
    console.log(`mouse left this: ${eventObject}`);
});

keyUp.addEventListener('keyup', function(eventObject){
    console.log(`key up: ${eventObject}`);
});

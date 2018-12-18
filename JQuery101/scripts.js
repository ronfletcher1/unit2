// jQuery is a JavaScript library
// That means jQuery IS JS
// JQuery CANNOT live without JS.

// jQuery allows you to change stuff, but doesn't keep track of the changes
// in a big ... this is confusing!!!
// React, Angular, and Vue are the answer to this

// jQuery directly manipulates the DOM
// This is expensive - takes a lot of resources
// React and others use "virtualDom" which is efficient

// A $ means I'm writing JS, but not just any JS, I'm writing jQuery
// console.log($)

// targeting stuff // console.log($('.container'));
console.dir(document.getElementsByTagName('div'));
console.dir(document.querySelector('.container'));
console.dir(document.getElementsByClassName('container'));
console.dir($('.container'));
$('row')
// documet.getElementByID('row').childern[0]
console.log($('#row p'))

// jQuery targets with CSS rules.
// jQuery adds listeners as methods... ie, click = .click()
// a listenenr takes 1 arg: code to run when event happens
$('#hide').click(function(){
    //console.log("someone clidked on hide!!")
    $('#thing').hide();
})

$('#show').click(function(){
    $('#thing').show();
})

$('#toggle').click(function(){
    $('#thing').toggle();
})

$('#html').onmouseover(function(){
    // document.querySelector.(#thing).innerHTML = "<p></p>"
    $('#thing').html("<p>New Html here</p>");
})

$('#text').click(function(){
    $('#thing').text("<p>Change the text!</p>");
})

$('#css').click(function(){
    // .css takes a JS Object...
    // key is a string for any css property
    // value is want you apply
    $('#thing').css({
        "background-color": "orange",
        "border-radius": "50%",
        "font-size": "100px"
    });
})

$('#add-class').click(function(){
    $('#thing').addClass('btn-danger')
})

$('#toggle-class').click(function(){
    $('#thing').toggleClass('btn-danger')
})

$('#prepend').click(function(){
    $('#thing').prepend('Some prepended text')
})

$('#append').click(function(){
    $('#thing').append('Some appended text')
})
// fadeToggle works the same as toggle, but it adds
// an aniamted fade
$('#fade-out').click(function(){
    $('#thing').fadeToggle(1500)
})

$('#slide').click(function(){
    $('#thing').slideToggle(1500)
})

$('#animate').click(function(){
    $('#thing').animate({
        'background-color': 'red',
        'height': '200px',
        'margin-left': '100px',
    },3000)
})

$('#goodbye').click(function(){
    $('#thing').animate({
        'margin-left': '10000px',
    },500)
})

$('#hello').click(function(){
    $('#thing').animate({
        'margin-left': '0px',
    },500)
})

$('#slide-Down').click(function(){
    $('#thing').slideDown()
    // console.log("clicked")
})

$('#slide-Up').click(function(){
    $('#thing').slideUp()
    console.log("clicked")
})
// Native JS way
// document.getElementById('hide').addEventListener('click',function(){
//     console.log("SOmeone clicked on hide!!")
// })

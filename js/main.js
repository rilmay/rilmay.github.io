document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

console.log('hi');
$(window).ready(console.log('hi'));

$(window).scroll(function() {
	// console.log('hello');
	// console.log($(window).scrollTop());	
	// console.log($(window).height());
    if($(window).scrollTop() == $(window).height()) {
    	$('body').append('<div>Hello its popup</div>');
    	console.log('hi')
           // ajax call get data from server and append to the div
    }
});

$( document ).click(function() {
	console.log('hello');
    $( "#toggle2" ).toggle( "bounce", { times: 1 }, "slow" );
});
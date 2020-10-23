document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

let map = new Map([
	[".nguzov_message_pack_2", {
		scrollTopRateCondition: function(scrollTopRate){return scrollTopRate > 1.5 && !this.isShown},
		resultStyle: {'marginTop': '40px', opacity: '1',}
	}],
	[".nguzov_message_pack_1",{
		scrollTopRateCondition: function(scrollTopRate){return scrollTopRate < 0.2 && !this.isShown},
		resultStyle: {'marginTop': ($(window).height() / 2 - $(".nguzov_message_pack_1").outerHeight() / 2) + 'px', opacity: '1',}
	}]
]);


const messageAnimation = function(){
	return function(){
		let yOffset = ($(window).scrollTop())? $(window).scrollTop(): window.pageYOffset;
		let scrollTopRate = yOffset / $(window).height();

		map.forEach(function(value, key, map){
			if(value.scrollTopRateCondition(scrollTopRate)){
				console.log($(window).height());
				console.log($(".nguzov_message_pack_1").height());
				console.log(($(window).height() /2 - $(".nguzov_message_pack_1").outerHeight() / 2) + 'px');
					

				$(key).animate(value.resultStyle, 1000);
				value.isShown = true;
			}
		});
	}
}

$(window).ready(messageAnimation());
$(window).scroll(messageAnimation());

// $(window).scroll(function() {
// 	let scrollTopRate = $(window).scrollTop() / $(window).height();
// 	if(scrollTopRate > 1.4 && !isShown){
// 		$('.nguzov_message_pack_2').animate({
// 			'marginTop': '40px',
// 			opacity: '1',
// 		}, 1000);
// 		// $('.nguzov_message_pack_2').fadeTo("slow", 1);
// 		isShown = true;
// 	}
// });


$( "#toggle2" ).click(function() {
	console.log('hello');
    $( "#toggle2" ).toggle( "bounce", { times: 1 }, "slow" );
});


// $( "#avatar" ).hover(function(){
// 	// $( "#avatar" ).animate({width: (currentAvatarWandH * 1.05) + 'px', height: (currentAvatarWandH * 1.05) + 'px'}, 500);
// 	$( "#avatar" ).css({ transform: 'scale(1.005)' });
// }, function(){
// 	$( "#avatar" ).css({ transform: 'scale(0.995)' });
// }
// );
$(function(){

	$('.list__inner .tab, .reviews__tab').on('click', function(){
		var id = $(this).attr('data-id');
		$('.list__inner, .reviews__inner').find('.tab-item, .reviews__content-item').removeClass('active-tab').hide();
		$('.list__inner .tabs, .reviews__tabs').find('.tab, .reviews__tab').removeClass('active');
		$(this).addClass('active');
		$('#' + id).addClass('active-tab').fadeIn();
		return false;
	});

// ----- hover effect ----
	// 	$('.list__inner .tab').hover(function(){
	// 	var id = $(this).attr('data-id');
	// 	$('.list__inner').find('.tab-item').removeClass('active-tab').hide();
	// 	$('.list__inner .tabs').find('.tab').removeClass('active');
	// 	$(this).addClass('active');
	// 	$('#' + id).addClass('active-tab').fadeIn();
	// 	return false;
	// });

});
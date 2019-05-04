$(document).ready(function () {

	function onEmpty (id_value) {
		return $(id_value).val() == "";
	}


	$(".selectpicker").select2();

	$( ".select2-single" ).select2({
	});

	$( '#id_category option:first-child' ).before('<option selected value="">Все категории</option>');



 	$( '#id_category' ).change(function(eventObject) {
 		$('.la').remove();
 		if ($(event.target).val() == "") 
 			$('#id_product_item option').each(function( index ) { 
 				$(this).show();
 			})
 		else {

	 		start_w = $(event.target).val() + '_';
	 		$('#id_product_item option').each(function( index ) {
	 			if ( $(this).val().startsWith(start_w) )
	 				$(this).show();
	 			else
	 				$(this).hide();
			});
			$( '#id_product_item option:first-child' ).before('<option class="la" disabled selected value="">Выберете что-нибудь</option>');
		}

  	});

 	$('.calc').click(function () {
 		if ((amount = $('#id_amount').val())
	 		&& (product = $('#id_product_item').val())
	 		&& (place = $('#id_place').val())
	 		&& (truck = $('#id_truck').val())) {
	 			product = product.substr(product.indexOf('_')+1);
			 	$.ajax({
		            url: $('.calc-from').data("url") + "?place=" + place + '&truck=' + truck + '&product_item=' + product + '&amount=' + amount,
		                
		            success: function (data) {
		            	if (data.result == "Failed")
		            		alert(data.mes);
		            	else
			                $('#result').val(data.result);
		            },
		        });
	 		} else {
	 			alert('Заполни все поля!!!!')
	 		}

 	});


	screen_width = 960;
	$('#sidebar').removeClass( "init" );

	key = true
    if ($( window ).width() < screen_width) {
	        key = false;
	        $('#sidebar').addClass( "active" );
    }


	$( window ).resize(function() {
	    if ($( window ).width() < screen_width) {
	    	if (key)
		        $('#sidebar').addClass( "active" );
	    } else {
	        $('#sidebar').removeClass( "active" );
	        $('#sidebar').removeClass('s-shadow');
	    }
	});



	$('.overlay').on('click', function () {
		$('#sidebar').addClass('active');
		$('.overlay').removeClass('active');
		$('#sidebar').removeClass('s-shadow');
		key = false;
	});

	$('#sidebarCollapse').on('click', function () {
		key = ('#sidebar').hasClass ? true: false;
		$('#sidebar').toggleClass('active');
		$('.overlay').toggleClass('active');
		if ($( window ).width() < screen_width)
			$('#sidebar').toggleClass('s-shadow');

	});
});

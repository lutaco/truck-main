$(document).ready(function () {

	function onEmpty (id_value) {
		return $(id_value).val() == "";
	}


	$(".selectpicker").select2();

	$('.calc').on( "click", function() {

		if ( !onEmpty('#id_place') && !onEmpty('#id_truck') && !onEmpty('#id_product') && !onEmpty('#id_amount')) {

			var Ur = $( '.calc' ).data( "url_calc" ) + "?amount=" + $('#id_amount').val() + "&truck=" + $('#id_truck').val() + "&product=" + $('#id_product').val() + "&place=" + $('#id_place').val() + '&method=master';
			$.ajax({
				url: Ur, 

				success: function(data) {
					$('#calc-result').val(data.result);
				},
			});
		}
		else alert('Заполни все поля!!!')
	});


	screen_width = 960;

	key = true
    if ($( window ).width() < screen_width) {
	        key = false;
    } else {
        $('#sidebar').removeClass( "active" );
    }

	$( window ).resize(function() {
	    if ($( window ).width() < screen_width) {
	    	if (key)
		        $('#sidebar').addClass( "active" );
	    } else {
	        $('#sidebar').removeClass( "active" );
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

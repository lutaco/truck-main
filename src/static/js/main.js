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

    if ($( window ).width() < 960) {
	        $('#sidebar').addClass( "active" );
    } else {
        $('#sidebar').removeClass( "active" );
    }

	$( window ).resize(function() {
	    if ($( window ).width() < 960) {
	        $('#sidebar').addClass( "active" );
	    } else {
	        $('#sidebar').removeClass( "active" );
	    }
	});

	$('#sidebarCollapse').on('click', function () {
	    $('#sidebar').toggleClass('active');
	});

	$(function () {
		$('[data-toggle="popover"]').popover()
	})
});

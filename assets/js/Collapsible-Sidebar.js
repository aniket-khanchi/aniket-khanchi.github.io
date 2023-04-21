$(document).ready(function () {
    
    var lin = document.querySelectorAll('.h--timeline-line > ol > li');
	id = setInterval(frame, 4000);
	var j = 0 ;
	function frame() {
	if (j === lin.length) {
	j = 0 ;
	} else {
	lin[j].childNodes[0].click();
	  if (j === lin.length){
		  j = 0 ;
	  } else { j +=1 ;}
	}
	};
	
	
	
	// For infra pages
    $('#machine_shop_row').hide() ;
    $('#tool_room_row').hide() ;
    $('#standard_room_row').hide() ;
    
    // For Product Page 
    $('#automotive_cont').hide() ;
    $('#electric_motor_cont').hide() ;
    $('#oil_cont').hide() ;
    $('#water_cont').hide() ;
    $('#furniture_cont').hide() ;


    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
        $(this).toggleClass('active');
    });
     
    $("#hpdc_machines_btn").on('click', function () {
        $("#hpdc_machines_row").show();
        $('#machine_shop_row').hide() ;
        $('#tool_room_row').hide() ;
        $('#standard_room_row').hide() ;
      });
    
      $("#machine_shop_btn").on('click', function () {
        $("#hpdc_machines_row").hide();
        $('#machine_shop_row').show() ;
        $('#tool_room_row').hide() ;
        $('#standard_room_row').hide() ;
      });

      $("#tool_room_btn").on('click', function () {
        $("#hpdc_machines_row").hide();
        $('#machine_shop_row').hide() ;
        $('#tool_room_row').show() ;
        $('#standard_room_row').hide() ;
      });

      $("#standard_room_btn").on('click', function () {
        $("#hpdc_machines_row").hide();
        $('#machine_shop_row').hide() ;
        $('#tool_room_row').hide() ;
        $('#standard_room_row').show() ;
      });

});


// For Product Pages

$("#agriculture_cont_btn").on('click', function () {
  $('#agriculture_cont').show() ;
  $('#automotive_cont').hide() ;
  $('#electric_motor_cont').hide() ;
  $('#oil_cont').hide() ;
  $('#water_cont').hide() ;
  $('#furniture_cont').hide() ;
});

$("#automotive_cont_btn").on('click', function () {
  $('#agriculture_cont').hide() ;
  $('#automotive_cont').show() ;
  $('#electric_motor_cont').hide() ;
  $('#oil_cont').hide() ;
  $('#water_cont').hide() ;
  $('#furniture_cont').hide() ;
});

$("#electric_motor_cont_btn").on('click', function () {
  $('#agriculture_cont').hide() ;
  $('#automotive_cont').hide() ;
  $('#electric_motor_cont').show() ;
  $('#oil_cont').hide() ;
  $('#water_cont').hide() ;
  $('#furniture_cont').hide() ;
});

$("#oil_cont_btn").on('click', function () {
  $('#agriculture_cont').hide() ;
  $('#automotive_cont').hide() ;
  $('#electric_motor_cont').hide() ;
  $('#oil_cont').show() ;
  $('#water_cont').hide() ;
  $('#furniture_cont').hide() ;
});

$("#water_cont_btn").on('click', function () {
  $('#agriculture_cont').hide() ;
  $('#automotive_cont').hide() ;
  $('#electric_motor_cont').hide() ;
  $('#oil_cont').hide() ;
  $('#water_cont').show() ;
  $('#furniture_cont').hide() ;
});

$("#furniture_cont_btn").on('click', function () {
  $('#agriculture_cont').hide() ;
  $('#automotive_cont').hide() ;
  $('#electric_motor_cont').hide() ;
  $('#oil_cont').hide() ;
  $('#water_cont').hide() ;
  $('#furniture_cont').show() ;
});
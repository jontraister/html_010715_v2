/*thumbnail fades*/
$(document).ready(function(){
	
	$("#icon_live").mouseover(
      function () {
		   $('#rollOver_live').stop(true, true).delay(200).fadeIn(200);
		   $('#rollOver_discover').stop(true, true).delay(200).hide(0);
		   $('#rollOver_share').stop(true, true).delay(200).hide(0);
		   $('#rollOver_look').stop(true, true).delay(200).hide(0);
		   $('#rollOver_collect').stop(true, true).delay(200).hide(0);
		   $('#rollOver_explore').stop(true, true).delay(200).hide(0);
		   $('#rollOver_meet').stop(true, true).delay(200).hide(0);
		   $('#rollOver_collect').stop(true, true).delay(200).hide(0);
		   $('#icon_live').addClass('icon_live_active');
		   $('#icon_meet').removeClass('icon_meet_active');
		   $('#icon_explore').removeClass('icon_explore_active');
		   $('#icon_collect').removeClass('icon_collect_active');
		   $('#icon_look').removeClass('icon_look_active');
		   $('#icon_share').removeClass('icon_share_active');
		   $('#icon_discover').removeClass('icon_discover_active');
      }
    );
	$(".btn_live").mouseover(
      function () {
		   $('#rollOver_live').stop(true, true).delay(200).fadeIn(200);
		   $('#rollOver_discover').stop(true, true).delay(200).hide(0);
		   $('#rollOver_share').stop(true, true).delay(200).hide(0);
		   $('#rollOver_look').stop(true, true).delay(200).hide(0);
		   $('#rollOver_collect').stop(true, true).delay(200).hide(0);
		   $('#rollOver_explore').stop(true, true).delay(200).hide(0);
		   $('#rollOver_meet').stop(true, true).delay(200).hide(0);
		   $('#rollOver_collect').stop(true, true).delay(200).hide(0);
		   $('#icon_live').addClass('icon_live_active');
		   $('#icon_meet').removeClass('icon_meet_active');
		   $('#icon_explore').removeClass('icon_explore_active');
		   $('#icon_collect').removeClass('icon_collect_active');
		   $('#icon_look').removeClass('icon_look_active');
		   $('#icon_share').removeClass('icon_share_active');
		   $('#icon_discover').removeClass('icon_discover_active');
      }
    );
	$("#icon_live").mouseout(
      function () {
		   $('#rollOver_meet').stop(true, true).hide(0);
		   $('#rollOver_discover').stop(true, true).hide(0);
		   $('#rollOver_share').stop(true, true).hide(0);
		   $('#rollOver_look').stop(true, true).hide(0);
		   $('#rollOver_collect').stop(true, true).hide(0);
		   $('#rollOver_explore').stop(true, true).hide(0);
		   //$('#icon_live').removeClass('icon_live_active');
      }
    );
	$(".btn_live").mouseout(
      function () {
		   $('#rollOver_meet').stop(true, true).hide(0);
		   $('#rollOver_discover').stop(true, true).hide(0);
		   $('#rollOver_share').stop(true, true).hide(0);
		   $('#rollOver_look').stop(true, true).hide(0);
		   $('#rollOver_collect').stop(true, true).hide(0);
		   $('#rollOver_explore').stop(true, true).hide(0);
		   //$('#icon_live').removeClass('icon_live_active');
      }
    );
	$("#icon_meet").mouseover(
      function () {
		   $('#rollOver_meet').stop(true, true).delay(200).fadeIn(200);
		   $('#rollOver_live').stop(true, true).hide(0);
		   $('#rollOver_discover').stop(true, true).hide(0);
		   $('#rollOver_share').stop(true, true).hide(0);
		   $('#rollOver_look').stop(true, true).hide(0);
		   $('#rollOver_collect').stop(true, true).hide(0);
		   $('#rollOver_explore').stop(true, true).hide(0);
		   $('#rollOver_collect').stop(true, true).hide(0);  
		   $('#icon_live').removeClass('icon_live_active');
		   $('#icon_meet').addClass('icon_meet_active');
		   $('#icon_explore').removeClass('icon_explore_active');
		   $('#icon_collect').removeClass('icon_collect_active');
		   $('#icon_look').removeClass('icon_look_active');
		   $('#icon_share').removeClass('icon_share_active');
		   $('#icon_discover').removeClass('icon_discover_active');
      }
    );
	$(".btn_meet").mouseover(
      function () {
		   $('#rollOver_meet').stop(true, true).delay(200).fadeIn(200);
		   $('#rollOver_live').stop(true, true).hide(0);
		   $('#rollOver_discover').stop(true, true).hide(0);
		   $('#rollOver_share').stop(true, true).hide(0);
		   $('#rollOver_look').stop(true, true).hide(0);
		   $('#rollOver_collect').stop(true, true).hide(0);
		   $('#rollOver_explore').stop(true, true).hide(0);
		   $('#icon_live').removeClass('icon_live_active');
		   $('#icon_meet').addClass('icon_meet_active');
		   $('#icon_explore').removeClass('icon_explore_active');
		   $('#icon_collect').removeClass('icon_collect_active');
		   $('#icon_look').removeClass('icon_look_active');
		   $('#icon_share').removeClass('icon_share_active');
		   $('#icon_discover').removeClass('icon_discover_active');
      }
    );
	$(".btn_meet").mouseout(
      function () {
		   $('#rollOver_live').stop(true, true).hide(0);
		   $('#rollOver_discover').stop(true, true).hide(0);
		   $('#rollOver_share').stop(true, true).hide(0);
		   $('#rollOver_look').stop(true, true).hide(0);
		   $('#rollOver_collect').stop(true, true).hide(0);
		   $('#rollOver_explore').stop(true, true).hide(0);
		   //$('#icon_meet').removeClass('icon_meet_active');
      }
    );
	$("#icon_meet").mouseout(
      function () {
		   $('#rollOver_live').stop(true, true).hide(0);
		   $('#rollOver_discover').stop(true, true).hide(0);
		   $('#rollOver_share').stop(true, true).hide(0);
		   $('#rollOver_look').stop(true, true).hide(0);
		   $('#rollOver_collect').stop(true, true).hide(0);
		   $('#rollOver_explore').stop(true, true).hide(0);
		   //$('#icon_meet').removeClass('icon_meet_active');
      }
    );
	$("#icon_explore").mouseover(
      function () {
		   $('#rollOver_explore').stop(true, true).delay(200).fadeIn(200);
		   $('#rollOver_live').stop(true, true).hide(0);
		   $('#rollOver_meet').stop(true, true).hide(0);
		   $('#rollOver_collect').stop(true, true).hide(0);
		   $('#rollOver_look').stop(true, true).hide(0);
		   $('#rollOver_discover').stop(true, true).hide(0);
		   $('#icon_live').removeClass('icon_live_active');
		   $('#icon_meet').removeClass('icon_meet_active');
		   $('#icon_explore').addClass('icon_explore_active');
		   $('#icon_collect').removeClass('icon_collect_active');
		   $('#icon_look').removeClass('icon_look_active');
		   $('#icon_share').removeClass('icon_share_active');
		   $('#icon_discover').removeClass('icon_discover_active');
      }
    );
	$(".btn_explore").mouseover(
      function () {
		   $('#rollOver_explore').stop(true, true).fadeIn(200);
		   $('#rollOver_live').stop(true, true).hide(0);
		   $('#rollOver_meet').stop(true, true).hide(0);
		   $('#rollOver_collect').stop(true, true).hide(0);
		   $('#rollOver_look').stop(true, true).hide(0);
		   $('#icon_live').removeClass('icon_live_active');
		   $('#icon_meet').removeClass('icon_meet_active');
		   $('#icon_explore').addClass('icon_explore_active');
		   $('#icon_collect').removeClass('icon_collect_active');
		   $('#icon_look').removeClass('icon_look_active');
		   $('#icon_share').removeClass('icon_share_active');
		   $('#icon_discover').removeClass('icon_discover_active');
      }
    );
	$(".btn_explore").mouseout(
      function () {
		   $('#rollOver_live').stop(true, true).hide(0);
		   $('#rollOver_discover').stop(true, true).hide(0);
		   $('#rollOver_share').stop(true, true).hide(0);
		   $('#rollOver_look').stop(true, true).hide(0);
		   $('#rollOver_collect').stop(true, true).hide(0);
		   $('#rollOver_meet').stop(true, true).hide(0);
		   //$('#icon_explore').removeClass('icon_explore_active');
      }
    );
	$("#icon_explore").mouseout(
      function () {
		   $('#rollOver_live').stop(true, true).hide(0);
		   $('#rollOver_discover').stop(true, true).hide(0);
		   $('#rollOver_share').stop(true, true).hide(0);
		   $('#rollOver_look').stop(true, true).hide(0);
		   $('#rollOver_collect').stop(true, true).hide(0);
		   $('#rollOver_meet').stop(true, true).hide(0);
		   //$('#icon_explore').removeClass('icon_explore_active');
      }
    );
	$("#icon_collect").mouseover(
      function () {
		   $('#rollOver_collect').stop(true, true).delay(200).fadeIn(200);
		   $('#rollOver_live').stop(true, true).hide(0);
		   $('#rollOver_discover').stop(true, true).hide(0);
		   $('#rollOver_share').stop(true, true).hide(0);
		   $('#rollOver_look').stop(true, true).hide(0);
		   $('#rollOver_explore').stop(true, true).hide(0);
		   $('#rollOver_meet').stop(true, true).hide(0);
		   $('#icon_live').removeClass('icon_live_active');
		   $('#icon_meet').removeClass('icon_meet_active');
		   $('#icon_explore').removeClass('icon_explore_active');
		   $('#icon_collect').addClass('icon_collect_active');
		   $('#icon_look').removeClass('icon_look_active');
		   $('#icon_share').removeClass('icon_share_active');
		   $('#icon_discover').removeClass('icon_discover_active');
      }
    );
	$(".btn_collect").mouseover(
      function () {
		   $('#rollOver_collect').stop(true, true).delay(200).fadeIn(200);
		   $('#rollOver_explore').stop(true, true).hide(0);
		   $('#rollOver_live').stop(true, true).hide(0);
		   $('#rollOver_meet').stop(true, true).hide(0);
		   $('#rollOver_look').stop(true, true).hide(0);
		   $('#icon_live').removeClass('icon_live_active');
		   $('#icon_meet').removeClass('icon_meet_active');
		   $('#icon_explore').removeClass('icon_explore_active');
		   $('#icon_collect').addClass('icon_collect_active');
		   $('#icon_look').removeClass('icon_look_active');
		   $('#icon_share').removeClass('icon_share_active');
		   $('#icon_discover').removeClass('icon_discover_active');
      }
    );
	$(".btn_collect").mouseout(
      function () {
		  $('#rollOver_live').stop(true, true).hide(0);
		   $('#rollOver_discover').stop(true, true).hide(0);
		   $('#rollOver_share').stop(true, true).hide(0);
		   $('#rollOver_look').stop(true, true).hide(0);
		   $('#rollOver_explore').stop(true, true).hide(0);
		   $('#rollOver_meet').stop(true, true).hide(0);
		   //$('#icon_collect').removeClass('icon_collect_active');
      }
    );
	$("#icon_collect").mouseout(
      function () {
		   $('#rollOver_live').stop(true, true).hide(0);
		   $('#rollOver_discover').stop(true, true).hide(0);
		   $('#rollOver_share').stop(true, true).hide(0);
		   $('#rollOver_look').stop(true, true).hide(0);
		   $('#rollOver_explore').stop(true, true).hide(0);
		   $('#rollOver_meet').stop(true, true).hide(0);
		   //$('#icon_collect').removeClass('icon_collect_active');
      }
    );
	$("#icon_look").mouseover(
      function () {
		   $('#rollOver_look').stop(true, true).delay(200).fadeIn(200);
		   $('#rollOver_collect').stop(true, true).hide(0);
		   $('#rollOver_explore').stop(true, true).hide(0);
		   $('#rollOver_live').stop(true, true).hide(0);
		   $('#rollOver_meet').stop(true, true).hide(0);
		   $('#rollOver_collect').stop(true, true).hide(0);
		   $('#rollOver_share').stop(true, true).hide(0);
		   $('#rollOver_discover').stop(true, true).hide(0);
		   $('#icon_live').removeClass('icon_live_active');
		   $('#icon_meet').removeClass('icon_meet_active');
		   $('#icon_explore').removeClass('icon_explore_active');
		   $('#icon_collect').removeClass('icon_collect_active');
		   $('#icon_look').addClass('icon_look_active');
		   $('#icon_share').removeClass('icon_share_active');
		   $('#icon_discover').removeClass('icon_discover_active');
      }
    );
	$(".btn_look").mouseover(
      function () {
		   $('#rollOver_look').stop(true, true).delay(200).fadeIn(200);
		   $('#rollOver_collect').stop(true, true).hide(0);
		   $('#rollOver_explore').stop(true, true).hide(0);
		   $('#rollOver_live').stop(true, true).hide(0);
		   $('#rollOver_meet').stop(true, true).hide(0);
		   $('#rollOver_collect').stop(true, true).hide(0);
		   $('#rollOver_share').stop(true, true).hide(0);
		   $('#icon_live').removeClass('icon_live_active');
		   $('#icon_meet').removeClass('icon_meet_active');
		   $('#icon_explore').removeClass('icon_explore_active');
		   $('#icon_collect').removeClass('icon_collect_active');
		   $('#icon_look').addClass('icon_look_active');
		   $('#icon_share').removeClass('icon_share_active');
		   $('#icon_discover').removeClass('icon_discover_active');
      }
    );
	$(".btn_look").mouseout(
      function () {
		   $('#rollOver_live').stop(true, true).hide(0);
		   $('#rollOver_discover').stop(true, true).hide(0);
		   $('#rollOver_share').stop(true, true).hide(0);
		   $('#rollOver_collect').stop(true, true).hide(0);
		   $('#rollOver_explore').stop(true, true).hide(0);
		   $('#rollOver_meet').stop(true, true).hide(0);
		   //$('#icon_look').removeClass('icon_look_active');
      }
    );
	$("#icon_look").mouseout(
      function () {
		   $('#rollOver_live').stop(true, true).hide(0);
		   $('#rollOver_discover').stop(true, true).hide(0);
		   $('#rollOver_share').stop(true, true).hide(0);
		   $('#rollOver_collect').stop(true, true).hide(0);
		   $('#rollOver_explore').stop(true, true).hide(0);
		   $('#rollOver_meet').stop(true, true).hide(0);
		   //$('#icon_look').removeClass('icon_look_active');
      }
    );
	$("#icon_share").mouseover(
      function () {
		   $('#rollOver_discover').stop(true, true).hide(0);
		   $('#rollOver_share').stop(true, true).delay(200).fadeIn(200);
		   $('#rollOver_look').stop(true, true).hide(0);
		   $('#rollOver_collect').stop(true, true).hide(0);
		   $('#rollOver_explore').stop(true, true).hide(0);
		   $('#rollOver_live').stop(true, true).hide(0);
		   $('#rollOver_meet').stop(true, true).hide(0);
		   $('#rollOver_collect').stop(true, true).hide(0);
		   $('#icon_live').removeClass('icon_live_active');
		   $('#icon_meet').removeClass('icon_meet_active');
		   $('#icon_explore').removeClass('icon_explore_active');
		   $('#icon_collect').removeClass('icon_collect_active');
		   $('#icon_look').removeClass('icon_look_active');
		   $('#icon_share').addClass('icon_share_active');
		   $('#icon_discover').removeClass('icon_discover_active');
      }
    );
	$(".btn_share").mouseover(
      function () {
		   $('#rollOver_discover').stop(true, true).hide(0);
		   $('#rollOver_share').stop(true, true).delay(200).fadeIn(200);
		   $('#rollOver_look').stop(true, true).hide(0);
		   $('#rollOver_collect').stop(true, true).hide(0);
		   $('#rollOver_explore').stop(true, true).hide(0);
		   $('#rollOver_live').stop(true, true).hide(0);
		   $('#rollOver_meet').stop(true, true).hide(0);
		   $('#rollOver_collect').stop(true, true).hide(0);
		   $('#icon_live').removeClass('icon_live_active');
		   $('#icon_meet').removeClass('icon_meet_active');
		   $('#icon_explore').removeClass('icon_explore_active');
		   $('#icon_collect').removeClass('icon_collect_active');
		   $('#icon_look').removeClass('icon_look_active');
		   $('#icon_share').addClass('icon_share_active');
		   $('#icon_discover').removeClass('icon_discover_active');
      }
    );
	$("#icon_share").mouseout(
      function () {
		   $('#rollOver_live').stop(true, true).hide(0);
		   $('#rollOver_discover').stop(true, true).hide(0);
		   $('#rollOver_look').stop(true, true).hide(0);
		   $('#rollOver_collect').stop(true, true).hide(0);
		   $('#rollOver_explore').stop(true, true).hide(0);
		   $('#rollOver_meet').stop(true, true).hide(0);
		   //$('#icon_share').removeClass('icon_share_active');
      }
    );$(".btn_share").mouseout(
      function () {
		   $('#rollOver_live').stop(true, true).hide(0);
		   $('#rollOver_discover').stop(true, true).hide(0);
		   $('#rollOver_look').stop(true, true).hide(0);
		   $('#rollOver_collect').stop(true, true).hide(0);
		   $('#rollOver_explore').stop(true, true).hide(0);
		   $('#rollOver_meet').stop(true, true).hide(0);
		   //$('#icon_share').removeClass('icon_share_active');
      }
    );
	$("#icon_discover").mouseover(
      function () {
		   $('#rollOver_discover').stop(true, true).delay(200).fadeIn(200);
		   $('#rollOver_share').stop(true, true).hide(0);
		   $('#rollOver_look').stop(true, true).hide(0);
		   $('#rollOver_collect').stop(true, true).hide(0);
		   $('#rollOver_explore').stop(true, true).hide(0);
		   $('#rollOver_live').stop(true, true).hide(0);
		   $('#rollOver_meet').stop(true, true).hide(0);
		   $('#rollOver_collect').stop(true, true).hide(0);
		   $('#icon_live').removeClass('icon_live_active');
		   $('#icon_meet').removeClass('icon_meet_active');
		   $('#icon_explore').removeClass('icon_explore_active');
		   $('#icon_collect').removeClass('icon_collect_active');
		   $('#icon_look').removeClass('icon_look_active');
		   $('#icon_share').removeClass('icon_share_active');
		   $('#icon_discover').addClass('icon_discover_active');
      }
    );
	$(".btn_discover").mouseover(
      function () {
		   $('#rollOver_discover').stop(true, true).delay(200).fadeIn(200);
		   $('#rollOver_share').stop(true, true).hide(0);
		   $('#rollOver_look').stop(true, true).hide(0);
		   $('#rollOver_collect').stop(true, true).hide(0);
		   $('#rollOver_explore').stop(true, true).hide(0);
		   $('#rollOver_live').stop(true, true).hide(0);
		   $('#rollOver_meet').stop(true, true).hide(0);
		   $('#rollOver_collect').stop(true, true).hide(0);
		   $('#icon_live').removeClass('icon_live_active');
		   $('#icon_meet').removeClass('icon_meet_active');
		   $('#icon_explore').removeClass('icon_explore_active');
		   $('#icon_collect').removeClass('icon_collect_active');
		   $('#icon_look').removeClass('icon_look_active');
		   $('#icon_share').removeClass('icon_share_active');
		   $('#icon_discover').addClass('icon_discover_active');
      }
    );
	$("#icon_discover").mouseout(
      function () {
		   $('#rollOver_live').stop(true, true).hide(0);
		   $('#rollOver_share').stop(true, true).hide(0);
		   $('#rollOver_look').stop(true, true).hide(0);
		   $('#rollOver_collect').stop(true, true).hide(0);
		   $('#rollOver_explore').stop(true, true).hide(0);
		   $('#rollOver_meet').stop(true, true).hide(0);
		   //$('#icon_discover').removeClass('icon_discover_active');
      }
    );
	$(".btn_discover").mouseout(
      function () {
		   $('#rollOver_live').stop(true, true).hide(0);
		   $('#rollOver_share').stop(true, true).hide(0);
		   $('#rollOver_look').stop(true, true).hide(0);
		   $('#rollOver_collect').stop(true, true).hide(0);
		   $('#rollOver_explore').stop(true, true).hide(0);
		   $('#rollOver_meet').stop(true, true).hide(0);
		   //$('#icon_discover').removeClass('icon_discover_active');
      }
    );
	$(".All_rollOut").mouseover(
      function () {
		   $('#rollOver_discover').stop(true, true).hide(0);
		   $('#rollOver_share').stop(true, true).hide(0);
		   $('#rollOver_look').stop(true, true).hide(0);
		   $('#rollOver_collect').stop(true, true).hide(0);
		   $('#rollOver_explore').stop(true, true).hide(0);
		   $('#rollOver_live').stop(true, true).hide(0);
		   $('#rollOver_meet').stop(true, true).hide(0);
		   $('#rollOver_collect').stop(true, true).hide(0);
		   $('#icon_live').removeClass('icon_live_active');
		   $('#icon_meet').removeClass('icon_meet_active');
		   $('#icon_explore').removeClass('icon_explore_active');
		   $('#icon_collect').removeClass('icon_collect_active');
		   $('#icon_look').removeClass('icon_look_active');
		   $('#icon_share').removeClass('icon_share_active');
		   $('#icon_discover').removeClass('icon_discover_active');
      }
    );
	
	
});

















function calculateAmount() {
	var spring16BlueCount = $("#spring16Blue").val();
	var spring16BlackCount = $("#spring16Black").val();
	var fall16RedCount = $("#fall16Red").val();
	var fall16BlackCount = $("#fall16Black").val();
	var spring16PatchCount = $("#spring16Patch").val();
	var fall16PatchCount = $("#fall16Patch").val();
	var padfolioCount = $("#padfolio").val();
	var drinksCount = $("#drinks").val();
	var lunchCount = $("#lunch").val();

	var spring16Blue = spring16BlueCount * 8;
	var spring16Black = spring16BlackCount * 7;
	var fall16Red =  fall16RedCount * 10;
	var fall16Black = fall16BlackCount *10;
	var spring16Patch = spring16PatchCount * 5;
	var fall16Patch = fall16PatchCount * 5;
	var padfolio = padfolioCount * 40;
	var drinks = drinksCount * 1;
	var lunch = lunchCount * 7;
	var total = spring16Blue + spring16Black + fall16Red + fall16Black + spring16Patch + fall16Patch + padfolio + drinks + lunch;

	$("#amount").val(total);
	return false;
}

$(function () {
    $('#calculate-amount').on('submit',function (e) {
	    var spring16BlueCount = $("#spring16Blue").val();
		var spring16BlackCount = $("#spring16Black").val();
		var fall16RedCount = $("#fall16Red").val();
		var fall16BlackCount = $("#fall16Black").val();
		var spring16PatchCount = $("#spring16Patch").val();
		var fall16PatchCount = $("#fall16Patch").val();
		var padfolioCount = $("#padfolio").val();
		var drinksCount = $("#drinks").val();
		var lunchCount = $("#lunch").val();

		var spring16Blue = spring16BlueCount * 8;
		var spring16Black = spring16BlackCount * 7;
		var fall16Red =  fall16RedCount * 10;
		var fall16Black = fall16BlackCount *10;
		var spring16Patch = spring16PatchCount * 5;
		var fall16Patch = fall16PatchCount * 5;
		var padfolio = padfolioCount * 40;
		var drinks = drinksCount * 1;
		var lunch = lunchCount * 7;
		var total = spring16Blue + spring16Black + fall16Red + fall16Black + spring16Patch + fall16Patch + padfolio + drinks + lunch;

		$("#amount").val(total);
		return false;
              
        e.preventDefault();
        });
});
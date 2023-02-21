//The code that adds and removes extra text input boxes for the field that requires it
function add_i() {
  var i_new_chq_no = parseInt($("#i_total_chq").val()) + 1;
  var i_new_input =
    "<input type='text' class='form' id='i_new_" + i_new_chq_no + "'/>";
  console.log(i_new_chq_no);
  console.log(i_new_input);
  $("#i_chq").append(i_new_input);
  $("#i_total_chq").val(i_new_chq_no);
}

function remove_i() {
  var i_last_chq_no = $("#i_total_chq").val();
  if (i_last_chq_no > 1) {
    $("#i_new_" + i_last_chq_no).remove();
    $("#i_total_chq").val(i_last_chq_no - 1);
  }
}

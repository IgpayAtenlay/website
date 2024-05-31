showInputBoxes()

$("input.damageType").on( "change", function() {
  if ($(this).is(":checked")) {
    $("input.damageType").prop("checked", false);
    $(this).prop("checked", true);
  }
  showInputBoxes()
});

$("input[name=fortune], input[name=misfortune]").on( "change", function() {
  if ($(this).is(":checked")) {
    $("input.fortune").prop("checked", false);
    $(this).prop("checked", true);
  }
});

$("input.fortune").on( "change", function() {
  if ($(this).is(":checked")) {
    $("input[name=fortune], input[name=misfortune]").prop("checked", false);
    $(this).prop("checked", true);
  }
});

$("input.degreeOfSuccess").on( "change", function() {
  if ($(this).is(":checked")) {
    degreesOfSuccess($(this).prop("name"));
  }
});

$("input[name=investigator]").on( "change", function() {
  showInputBoxes();
});

function degreesOfSuccess(degreeChecked) {
  if (degreeChecked === "FtoS") {
    $("input[name=FtoCF]").prop("checked", false);
  } else if (degreeChecked === "CFtoF") {
    $("input[name=CFtoS]").prop("checked", false);
    $("input[name=FtoCF]").prop("checked", false);
  } else if (degreeChecked === "CFtoS") {
    $("input[name=CFtoF]").prop("checked", false);
  } else if (degreeChecked === "FtoCF") {
    $("input[name=FtoS]").prop("checked", false);
    $("input[name=CFtoF]").prop("checked", false);
  }
}

function showInputBoxes() {
  $(".investigator").removeClass("hide");
  if ($("input[name=strike]").is(":checked")) {
    $(".damage").addClass("hide");
    $("[for=successDice], [name=successDice], [for=stratagemSuccessDice], [name=stratagemSuccessDice]").removeClass("hide");
    $(".damage").removeClass("newLine");
    $("[for=successDice], [for=stratagemSuccessDice]").addClass("newLine");
  } else if ($("input[name=basicSave]").is(":checked")) {
    $(".damage").addClass("hide");
    $("[for=failDice], [name=failDice], [for=stratagemFailDice], [name=stratagemFailDice]").removeClass("hide");
    $(".damage").removeClass("newLine");
    $("[for=failDice], [for=stratagemFailDice]").addClass("newLine");
  } else {
    $(".damage").removeClass("hide");
    $(".damage").removeClass("newLine");
    $("[for=critSuccessDice], [for=stratagemCritSuccessDice]").addClass("newLine");
  }

  if (!$("input[name=investigator]").is(":checked")) {
    $(".investigator").addClass("hide");
  }
}
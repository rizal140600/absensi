function onClickHeader(ele) {
  var radio = document.getElementsByClassName("masuk");
  if (ele.click) {
    for (var i = 0; i < radio.length; i++) {
      if (radio[i].type == "radio") {
        radio[i].checked = true;
      }
    }
  } else {
    for (var i = 0; i < radio.length; i++) {
      if (radio[i].type == "radio") {
        radio[i].checked = false;
      }
    }
  }
}
$(".masuk").click(function() {
  if ($(this).is(":checked")) {
    var isAllChecked = 0;

    $(".masuk").each(function() {
      if (!this.checked) isAllChecked = 1;
    });

    if (isAllChecked == 0) {
      $("#masukSemua").prop("checked", true);
    }
  } else {
    $("#masukSemua").prop("checked", false);
  }
});

$(".sakit").click(function() {
  if ($(this).is(":checked")) {
    var isAllChecked = 0;

    $(".sakit").each(function() {
      if (!this.checked) isAllChecked = 1;
    });

    if (isAllChecked == 0) {
      $("#sakitSemua").prop("checked", true);
    }
  } else {
    $("#sakitSemua").prop("checked", false);
  }
});
$(".izin").click(function() {
  if ($(this).is(":checked")) {
    var isAllChecked = 0;

    $(".izin").each(function() {
      if (!this.checked) isAllChecked = 1;
    });

    if (isAllChecked == 0) {
      $("#izinSemua").prop("checked", true);
    }
  } else {
    $("#izinSemua").prop("checked", false);
  }
});

$(".alpha").click(function() {
  if ($(this).is(":checked")) {
    var isAllChecked = 0;

    $(".alpha").each(function() {
      if (!this.checked) isAllChecked = 1;
    });

    if (isAllChecked == 0) {
      $("#alphaSemua").prop("checked", true);
    }
  } else {
    $("#alphaSemua").prop("checked", false);
  }
});

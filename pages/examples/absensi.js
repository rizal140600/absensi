const masuk = "#masukSemua";
$(masuk).change(function() {
    if (this.checked) {
        $(".masuk").each(function() {
            this.checked=true;
        });
    } else {
        $(".masuk").each(function() {
            this.checked=false;
        });
    }
});
$(".masuk").click(function () {
    if ($(this).is(":checked")) {
        var isAllChecked = 0;

        $(".masuk").each(function() {
            if (!this.checked)
                isAllChecked = 1;
        });

        if (isAllChecked == 0) {
            $("#masukSemua").prop("checked", true);
        }     
    }
    else {
        $("#masukSemua").prop("checked", false);
    }
});

const sakit = "#sakitSemua";
$(sakit).change(function() {
    if (this.checked) {
        $(".sakit").each(function() {
            this.checked=true;
        });
    } else {
        $(".sakit").each(function() {
            this.checked=false;
        });
    }
});
$(".sakit").click(function () {
    if ($(this).is(":checked")) {
        var isAllChecked = 0;

        $(".sakit").each(function() {
            if (!this.checked)
                isAllChecked = 1;
        });

        if (isAllChecked == 0) {
            $("#sakitSemua").prop("checked", true);
        }     
    }
    else {
        $("#sakitSemua").prop("checked", false);
    }
});

const izin = "#izinSemua";
$(izin).change(function() {
    if (this.checked) {
        $(".izin").each(function() {
            this.checked=true;
        });
    } else {
        $(".izin").each(function() {
            this.checked=false;
        });
    }
});
$(".izin").click(function () {
    if ($(this).is(":checked")) {
        var isAllChecked = 0;

        $(".izin").each(function() {
            if (!this.checked)
                isAllChecked = 1;
        });

        if (isAllChecked == 0) {
            $("#izinSemua").prop("checked", true);
        }     
    }
    else {
        $("#izinSemua").prop("checked", false);
    }
});

const alpha = "#alphaSemua";
$(alpha).change(function() {
    if (this.checked) {
        $(".alpha").each(function() {
            this.checked=true;
        });
    } else {
        $(".alpha").each(function() {
            this.checked=false;
        });
    }
});
$(".alpha").click(function () {
    if ($(this).is(":checked")) {
        var isAllChecked = 0;

        $(".alpha").each(function() {
            if (!this.checked)
                isAllChecked = 1;
        });

        if (isAllChecked == 0) {
            $("#alphaSemua").prop("checked", true);
        }     
    }
    else {
        $("#alphaSemua").prop("checked", false);
    }
});

// the selector will match all input controls of type :checkbox
// and attach a click event handler 
$("input:checkbox").on('click', function() {
    // in the handler, 'this' refers to the box clicked on
    var $box = $(this);
    if ($box.is(":checked")) {
      // the name of the box is retrieved using the .attr() method
      // as it is assumed and expected to be immutable
      var group = "input:checkbox[name='" + $box.attr("name") + "']";
      // the checked state of the group/box on the other hand will change
      // and the current value is retrieved using .prop() method
      $(group).prop("checked", false);
      $box.prop("checked", true);
    } else {
      $box.prop("checked", false);
    }
  });
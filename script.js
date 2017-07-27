/**
 * Created by Donatas on 2017-07-27.
 */
var buttonArray = [
    {
        "type": "action",
        "value": "C",
        "buttonClass": "btn btn-success"
    },
    {
        "type": "action",
        "value": "<<",
        "buttonClass": "btn btn-success"
    },
    {
        "type": "action",
        "value": "%",
        "buttonClass": "btn btn-success off"
    },
    {
        "type": "action",
        "value": "/",
        "buttonClass": "btn btn-success off"
    },
    {
        "type": "number",
        "value": 9,
        "buttonClass": "btn btn-default"
    },
    {
        "type": "number",
        "value": 8,
        "buttonClass": "btn btn-default"
    },
    {
        "type": "number",
        "value": 7,
        "buttonClass": "btn btn-default"
    },
    {
        "type": "action",
        "value": "*",
        "buttonClass": "btn btn-success off"
    },
    {
        "type": "number",
        "value": 4,
        "buttonClass": "btn btn-default"
    },
    {
        "type": "number",
        "value": 5,
        "buttonClass": "btn btn-default"
    },
    {
        "type": "number",
        "value": 6,
        "buttonClass": "btn btn-default"
    },
    {
        "type": "action",
        "value": "-",
        "buttonClass": "btn btn-success off"
    },
    {
        "type": "number",
        "value": 1,
        "buttonClass": "btn btn-default"
    },
    {
        "type": "number",
        "value": 2,
        "buttonClass": "btn btn-default"
    },
    {
        "type": "number",
        "value": 3,
        "buttonClass": "btn btn-default"
    },
    {
        "type": "action",
        "value": "+",
        "buttonClass": "btn btn-success off"
    },
    {
        "type": "action",
        "value": "+-",
        "buttonClass": "btn btn-success off"
    },
    {
        "type": "number",
        "value": 0,
        "buttonClass": "btn btn-default"
    },
    {
        "type": "number",
        "value": ".",
        "buttonClass": "btn btn-success"
    },
    {
        "type": "action",
        "value": "=",
        "buttonClass": "btn btn-danger off"
    }


];

var $a = '0';
// script creates html div tag, inserts input field and table of buttons

$(document).ready(function () {
    $('body').prepend("<div id='buttonField'></div>");
    $('#buttonField').append("<input>"); // change to read only, give value

    $.each(buttonArray, function (index, buttonArray) {
        $("#buttonField").append($("<button s>" + buttonArray.value + "</button>")
            .attr("class", buttonArray.buttonClass).attr("type", buttonArray.type).attr("value", buttonArray.value));
    });
});

// when clicked gets button value


function handleClick(e) {
    var $b = $(e.currentTarget);

    if ($b.attr('type') === 'number') {
        switch ($b.val()) {
            case '.':
                if ($a.indexOf('.') === -1) {
                    $a += $b.val();
                }
                break;
            case '0':
                if ($a.length === 1 && $a === '0') {
                }
                else {
                    $a += $b.val();
                }

                break;
            default:
                if ($a.length === 1 && $a === '0')
                    $a = $b.val();
                else {
                    $a += $b.val();
                    console.log(action)
                }

        }

        $('input').val($a);
    }


    else if ($b.attr('type') === 'action') {
        switch ($b.val()) {

            case "+":
            case "-":
            case "*":
            case "/":
            case "%":

                action = ($b.val());
                $('.off').attr('disabled', true);

                $a += ' ' + action + ' ';
                $('input').val($a);
                console.log(action)
                break;

            case 'C':
                action = 'C';
                $('.off').attr('disabled', false);
                $a = '0';
                $('input').val($a);
                break;

            case "<<":
                $a = $a.substring(0, $a.length - 1)
                if ($a.length === 0) {
                    $a = '0';
                }
                $('input').val($a);
                break;

            case"+-":
                if ($a[0] === "-") {
                    $a = $a.substring(1, $a.length);
                } else {
                    if ($a !== '0')
                        $a = "-" + $a;
                }
                $('input').val($a);
                break;


        }

    }
    console.log($a)
}
$(document).ready(function () {
    $("button").click(handleClick);

});
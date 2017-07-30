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

var numbers = ['0', ''];
var actions = [];


var ACTION_INCREMENT = 'INCRE',
    ACTION_REPLACE = 'REP',
    ACTION_DELETE = 'DELETE',
    ACTION_PLUSMINUS = '+-',
    ACTION_CALCULATE = 'CALKU';


$(document).ready(function () {
    $('body').prepend("<div id='buttonField'></div>");
    $('#buttonField').append("<input>"); // change to read only, give value

    $.each(buttonArray, function (index, buttonArray) {
        $("#buttonField").append($("<button s>" + buttonArray.value + "</button>")
            .attr("class", buttonArray.buttonClass).attr("type", buttonArray.type).attr("value", buttonArray.value));
    });
});

// when clicked gets button value

function updateInput() {
    var res = '';
    for (var i = 0; i < numbers.length; i++) {

        if (numbers[i] !== '0') {
            res += numbers[i];
        }

        if (actions[i]) {
            res += "" + actions[i] + "";
        }
    }
    $('input').val(res);
    console.log(numbers, actions);
}


function handleClick(e) {
    var $b = $(e.currentTarget);

    function updateNumber(action, value) {
        switch (action) {

            case ACTION_INCREMENT:
                var n = numbers [actions.length];

                switch (value) {
                    case '.':
                        if (n.indexOf('.') === -1) {
                            n += value;

                        }
                        break;

                    case '0':
                        if (n.length === 1 && n === '0') {
                        }
                        else {
                            n += value;

                        }
                        break;

                    default:
                        if (n.length === 1 && n === '0')
                            n = value;
                        else {
                            n += value;
                        }

                }

                numbers [actions.length] = n;
                break;

            case ACTION_CALCULATE:

                break;

            case ACTION_REPLACE:

                break;
            case ACTION_DELETE:

                break;
            case ACTION_PLUSMINUS:

                break;
        }


    }

    if ($b.attr('type') === 'number') {
        updateNumber(ACTION_INCREMENT, $b.val())
    }


    else if ($b.attr('type') === 'action') {
        switch ($b.val()) {

            case "+":
            case "-":
            case "*":
            case "/":
            case "%":

                // updateNumber($b.val(), ACTION_INCREMENT);
                if (numbers[numbers.length - 1] !== '0') {
                    actions.push($b.val());
                    numbers [actions.length] = '0';
                }
                else {
                    actions.pop();
                    actions.push($b.val());

                }
                // action = ($b.val());
                // $('.off').attr('disabled', true);
                //
                // $a += ' ' + action + ' ';
                // $('input').val($a);
                // console.log(action)
                break;

            case 'C':
                // action = 'C';
                // $('.off').attr('disabled', false);
                // $a = '0';
                // $('input').val($a);
                updateNumber(ACTION_DELETE);

                break;
            case '=':

                var a = numbers[0];
                var b;

                for (var i = 1; i < numbers.length; i++) {

                    b = numbers[i];

                    switch (actions[i - 1]) {
                        case '+':
                            a += b;
                            break;
                        case '-':
                            a -= b;
                            break;
                        case '%':
                            a %= b;
                            break;
                        case '/':
                            a /= b;
                            break;
                        case '*':
                            a *= b;
                            break;
                    }

                }
                console.log(a);

                break;

            case "<<":
                // $a = $a.substring(0, $a.length - 1)
                updateNumber(ACTION_DELETE);

                // if ($a.length === 0) {
                //     $a = '0';
                // }
                // $('input').val($a);
                break;

            case"+-":
                // if ($a[0] === "-") {
                updateNumber(ACTION_PLUSMINUS, $b.val());

                // } else {
                //     if ($a !== '0')
                //         // $a = "-" + $a;
                //         updateNumber($b.val,ACTION_PLUSMINUS )
                // }
                // // $('input').val($a);
                break;
        }

    }
    updateInput(numbers, actions);
}


$(document).ready(function () {
    $("button").click(handleClick);

});


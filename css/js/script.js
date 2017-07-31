/**
 * Created by Donatas on 2017-07-27.
 */
var numbers = ['0'];
var actions = [];

var ACTION_INCREMENT = 'INCRE',
    ACTION_DELETE = 'DELETE',
    ACTION_PLUSMINUS = '+-',
    ACTION_CALCULATE = 'CALKU',
    ACTION_DELETE_LAST = '<<',
    ACTION_PER = '%';

// script creates html div tag, inserts input field and table of buttons
$(document).ready(function () {
    $('body').prepend("<div id='buttonField'></div>");

    // change to read only, give value
    $('#buttonField').append("<input value='0' disabled>");

    $.each(buttonArray, function (index, buttonArray) {
        $("#buttonField").append($("<button s>" + buttonArray.value + "</button>")
            .attr("class", buttonArray.buttonClass).attr("type", buttonArray.type).attr("value", buttonArray.value));
    });
});


function updateInput() {
    var res = '';
    if (numbers.length === 1) {
        res = numbers[0]
    } else {
        for (var i = 0; i < numbers.length; i++) {

            if (numbers[i] !== '0') {
                res += numbers[i];
            }

            if (actions[i]) {
                res += "" + actions[i] + "";
            }
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
                var a = parseFloat(numbers[0]);
                var b;

                for (var i = 1; i < numbers.length; i++) {

                    b = parseFloat(numbers[i]);

                    switch (actions[i - 1]) {
                        case '+':
                            a += b;
                            break;

                        case '-':
                            a -= b;
                            break;

                        case '/':
                            a /= b;
                            break;

                        case '*':
                            a *= b;
                            break;
                    }
                }
                numbers = [a.toString()];
                actions = [];
                break;

            case ACTION_PER:
                var a = parseFloat(numbers[0]);
                var b;


                for (var i = 1; i < numbers.length - 1; i++) {

                    b = parseFloat(numbers[i]);

                    switch (actions[i - 1]) {
                        case '+':
                            a += b;
                            break;

                        case '-':
                            a -= b;
                            break;

                        case '/':
                            a /= b;
                            break;

                        case '*':
                            a *= b;
                            break;
                    }
                    console.log(a)
                }

                if (numbers.length === 1)
                    numbers = ['0'];
                else
                    numbers[actions.length] = (numbers[actions.length] * (a / 100)).toString();
                break;

            case ACTION_DELETE_LAST:

                if (numbers[actions.length] === '0') {

                    if (numbers.length > 1) {
                        numbers.pop();
                        actions.pop();
                    }
                } else {
                    numbers[actions.length] = numbers[actions.length].substring(0, numbers[actions.length].length - 1);
                }
                if (
                    numbers[actions.length].length === 0)
                    numbers[actions.length] = '0';
                break;

            case ACTION_DELETE:
                $('input').val("0");
                actions = [];
                numbers = ['0'];
                break;

            case ACTION_PLUSMINUS:
                if (numbers[actions.length][0] === '-') {
                    numbers[actions.length] = numbers[actions.length].substring(1, numbers[actions.length].length);
                } else {

                    if (numbers[actions.length] !== '0') {
                        numbers[actions.length] = '-' + numbers[actions.length];
                    }
                }
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

                var n = numbers[actions.length];

                if (n[n.length - 1] === '.') {
                    n = n.substring(0, n.length - 1);
                }
                numbers[actions.length] = n;

                if (numbers[numbers.length - 1] !== '0') {
                    actions.push($b.val());
                    numbers [actions.length] = '0';
                }
                else {
                    actions.pop();
                    actions.push($b.val());

                }
                break;

            case 'C':
                updateNumber(ACTION_DELETE);
                break;

            case '=':
                updateNumber(ACTION_CALCULATE);
                break;

            case "<<":
                updateNumber(ACTION_DELETE_LAST);
                break;

            case"+-":
                updateNumber(ACTION_PLUSMINUS, $b.val());
                break;

            case "%":
                updateNumber(ACTION_PER);
                break;
        }
    }
    updateInput(numbers, actions);
}


$(document).ready(function () {
    $("button").click(handleClick);

});


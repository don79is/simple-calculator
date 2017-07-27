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
        "buttonClass": "btn btn-success"
    },
    {
        "type": "action",
        "value": "/",
        "buttonClass": "btn btn-success"
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
        "buttonClass": "btn btn-success"
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
        "buttonClass": "btn btn-success"
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
        "buttonClass": "btn btn-success"
    },
    {
        "type": "number",
        "value": "+-",
        "buttonClass": "btn btn-success"
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
        "buttonClass": "btn btn-danger"
    }


];

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
    $('input').val($b.val());
    console.log($b.attr('type'), $b.attr('value'));

    if ($b.attr('type') === 'action') {
        alert('action');


    }
    else if ($b.attr('type') === 'number') {
        alert('number');

        
    }
}
    $(document).ready(function () {
        $("button").click(handleClick);

    });
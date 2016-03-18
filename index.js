/*

javascript: a rigorous introductory course

function myFunction() {
    var q = 7
    if (q < 10) {
        do something
    }
    else if (q = 5) {
        do something else
    }
    else {
        do something else
    }

    for (var i = 0; i < 8; i++) {
        blah
    }

    while (q < 12) {
        blah blah
    }
}

*/

function post_event_handler() {
    alert("aha!")
}

function on_doc_ready() {
    $(".post").click(post_event_handler)
}

$(document).ready(on_doc_ready)
$(document).ready(function() {
    $("#openBtn").on('click', function() {
        $("#mySidenav").css("width", "17.5%");
        $(this).css("left", "17.5%");
    });

    $("#closeBtn").on('click', function() {
        $("#mySidenav").css("width", "0");
        $("#openBtn").css("left", "10px");
    });

    $("h3").on('click', function() {
        var nextDiv = $(this).next(".inner");

        if (!nextDiv.is(":visible")) {
            $(".inner").slideUp();
            nextDiv.slideDown();
        } else {
            nextDiv.slideUp();
        }
    });

    // Countdown Timer
    function updateCountdown() {
        var eventDate = new Date("October 25, 2024 00:00:00").getTime();
        var now = new Date().getTime();
        var distance = eventDate - now;

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        $("#days").text(days);
        $("#hours").text(hours);
        $("#minutes").text(minutes);
        $("#seconds").text(seconds);

        if (distance < 0) {
            clearInterval(countdownInterval);
            $("#countdown").html("<div>Event has started!</div>");
        }
    }

    var countdownInterval = setInterval(updateCountdown, 1000);
    updateCountdown();
});


$(document).ready(function() {
    var maxLength = 100;

    $(document).on('keyup', '#userInput', function() {
        var length = $(this).val().length;
        var charactersLeft = maxLength - length;
        $('#charCount').text(charactersLeft);

        if (length > maxLength) {
            $(this).val($(this).val().substring(0, maxLength));
            $('#charCount').text('0');
        }
    });
});




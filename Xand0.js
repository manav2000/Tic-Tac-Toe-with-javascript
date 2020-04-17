$(function () {
    var player, computer, currentPlayer;
    var count = 1;
    var win;

    //conditions for winning the tic-tac-toe game
    function gameWin() {
        if ($('#1').html() === currentPlayer && $('#2').html() === currentPlayer && $('#3').html() === currentPlayer) {
            win = true;
            $('#text').text(currentPlayer + ' Wins !');
            $('.decision').css('display', 'block');
        } else if ($('#4').html() === currentPlayer && $('#5').html() === currentPlayer && $('#6').html() === currentPlayer) {
            win = true;
            $('#text').text(currentPlayer + ' Wins !');
            $('.decision').css('display', 'block');
        } else if ($('#7').html() === currentPlayer && $('#8').html() === currentPlayer && $('#9').html() === currentPlayer) {
            win = true;
            $('#text').text(currentPlayer + ' Wins !');
            $('.decision').css('display', 'block');
        } else if ($('#1').html() === currentPlayer && $('#4').html() === currentPlayer && $('#7').html() === currentPlayer) {
            win = true;
            $('#text').text(currentPlayer + ' Wins !');
            $('.decision').css('display', 'block');
        } else if ($('#2').html() === currentPlayer && $('#5').html() === currentPlayer && $('#8').html() === currentPlayer) {
            win = true;
            $('#text').text(currentPlayer + ' Wins !');
            $('.decision').css('display', 'block');
        } else if ($('#3').html() === currentPlayer && $('#6').html() === currentPlayer && $('#9').html() === currentPlayer) {
            win = true;
            $('#text').text(currentPlayer + ' Wins !');
            $('.decision').css('display', 'block');
        } else if ($('#1').html() === currentPlayer && $('#5').html() === currentPlayer && $('#9').html() === currentPlayer) {
            win = true;
            $('#text').text(currentPlayer + ' Wins !');
            $('.decision').css('display', 'block');
        } else if ($('#3').html() === currentPlayer && $('#5').html() === currentPlayer && $('#7').html() === currentPlayer) {
            win = true;
            $('#text').text(currentPlayer + ' Wins !');
            $('.decision').css('display', 'block');
        } else {
            win = false;
            draw();
        }
    }

    // conditions for draw
    function draw() {
        if (count === 10) {
            $('#text').text('Draw !');
            $('.decision').css('display', 'block');
        }
    }

    // computer logic
    function cpu() {
        function randomNumber(min, max) {
            return (Math.random() * (max - min) + min);
        }
        var id;

        while (count < 10) {
            id = Math.floor(randomNumber(1, 10));
            if ($('#' + id).html() != computer && $('#' + id).html() != player) {
                currentPlayer = computer;
                console.log("computer: ", count++);
                setTimeout(function () {
                    $('#' + id).html(computer);
                    gameWin();
                }, 500);
                break;
            }

        }

    }

    // functions for reset button
    $('#reset').on('click', function () {
        $('.squares').html("");
        $('.choice').css('visibility', 'visible');
        player = '';
        computer = '';
        currentPlayer = '';
        count = 1;
        $('.board').css('visibility', 'hidden');
        $('.squares').bind('click', function () {
            //If the box is empty only then insert player element
            if ($(this).html() != computer && $(this).html() != player) {
                currentPlayer = player;
                $(this).html(player);
                console.log("player: ", count++);
                gameWin();
                //computer stops inserting after the winner is decided
                if (!win) {
                    cpu();
                }
            }
        });
    });


    $('.squares').on('click', function () {
        //If the box is empty only then insert player element
        if ($(this).html() != computer && $(this).html() != player) {
            currentPlayer = player;
            $(this).html(player);
            console.log("player: ", count++);
            gameWin();
            //computer stops inserting after the winner is decided
            if (!win) {
                cpu();
            }
        }
    });

    $('#x').on('click', function () {
        player = 'X';
        computer = 'O';
        $('.choice').css('visibility', 'hidden');
        $('.board').css('visibility', 'visible');
    });

    $('#o').on('click', function () {
        player = 'O';
        computer = 'X';
        $('.choice').css('visibility', 'hidden');
        $('.board').css('visibility', 'visible');
        cpu();
    });

});

var overlay = document.getElementById('overlay');
overlay.addEventListener('click', function () {
    this.style.display = 'none';
    $('.squares').text('');
    $('.squares').unbind();
});
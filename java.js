  var played = [];

  var draw = function(){
    var i=0;
    while (i < 1){
    var random = Math.round((Math.random()-0.49)*100);
    if (random > -1 && played.indexOf(random) < 0){
      console.log(random);
      i++;
      played.push(random);
      return random;}
    }
  };

  var player1Total = 200;
  var player2Total = 200;
  var player1Bet = 0;
  var player2Bet = 0;

  //callCount must be > 1 in a round to proceed
  var player2Moved = false;
  // if currentRound = 1 (next fourth); if currentRound = 2 (river)
  var currentRound = 1;


$( document ).ready(function() {

  console.log("ready");

  $('.p1total').text("$"+player1Total);
  $('.p2total').text("$"+player2Total);
  $('.p1bet').text("$"+player1Bet);
  $('.p2bet').text("$"+player2Bet);


  $sa = {suite: "s",value: 14, image: "spade/sa.png"};
  $s2 = {suite: "s",value: 2, image: "spade/s2.png"};
  $s3 = {suite: "s",value: 3, image: "spade/s3.png"};
  $s4 = {suite: "s",value: 4, image: "spade/s4.png"};
  $s5 = {suite: "s",value: 5, image: "spade/s5.png"};
  $s6 = {suite: "s",value: 6, image: "spade/s6.png"};
  $s7 = {suite: "s",value: 7, image: "spade/s7.png"};
  $s8 = {suite: "s",value: 8, image: "spade/s8.png"};
  $s9 = {suite: "s",value: 9, image: "spade/s9.png"};
  $s10 = {suite: "s",value: 10, image: "spade/s10.png"};
  $sj = {suite: "s",value: 11, image: "spade/sj.png"};
  $sq = {suite: "s",value: 12, image: "spade/sq.png"};
  $sk = {suite: "s",value: 13, image: "spade/sk.png"};

  $ha = {suite: "h",value: 14, image: "hearts/ha.png"};
  $h2 = {suite: "h",value: 2, image: "hearts/h2.png"};
  $h3 = {suite: "h",value: 3, image: "hearts/h3.png"};
  $h4 = {suite: "h",value: 4, image: "hearts/h4.png"};
  $h5 = {suite: "h",value: 5, image: "hearts/h5.png"};
  $h6 = {suite: "h",value: 6, image: "hearts/h6.png"};
  $h7 = {suite: "h",value: 7, image: "hearts/h7.png"};
  $h8 = {suite: "h",value: 8, image: "hearts/h8.png"};
  $h9 = {suite: "h",value: 9, image: "hearts/h9.png"};
  $h10 = {suite: "h",value: 10, image: "hearts/h10.png"};
  $hj = {suite: "h",value: 11, image: "hearts/hj.png"};
  $hq = {suite: "h",value: 12, image: "hearts/hq.png"};
  $hk = {suite: "h",value: 13, image: "hearts/hk.png"};


  $ca = {suite: "c",value: 14, image: "clover/ca.png"};
  $c2 = {suite: "c",value: 2, image: "clover/c2.png"};
  $c3 = {suite: "c",value: 3, image: "clover/c3.png"};
  $c4 = {suite: "c",value: 4, image: "clover/c4.png"};
  $c5 = {suite: "c",value: 5, image: "clover/c5.png"};
  $c6 = {suite: "c",value: 6, image: "clover/c6.png"};
  $c7 = {suite: "c",value: 7, image: "clover/c7.png"};
  $c8 = {suite: "c",value: 8, image: "clover/c8.png"};
  $c9 = {suite: "c",value: 9, image: "clover/c9.png"};
  $c10 = {suite: "c",value: 10, image: "clover/c10.png"};
  $cj = {suite: "c",value: 11, image: "clover/cj.png"};
  $cq = {suite: "c",value: 12, image: "clover/cq.png"};
  $ck = {suite: "c",value: 13, image: "clover/ck.png"};

  $da = {suite: "d",value: 14, image: "diamond/da.png"};
  $d2 = {suite: "d",value: 2, image: "diamond/d2.png"};
  $d3 = {suite: "d",value: 3, image: "diamond/d3.png"};
  $d4 = {suite: "d",value: 4, image: "diamond/d4.png"};
  $d5 = {suite: "d",value: 5, image: "diamond/d5.png"};
  $d6 = {suite: "d",value: 6, image: "diamond/d6.png"};
  $d7 = {suite: "d",value: 7, image: "diamond/d7.png"};
  $d8 = {suite: "d",value: 8, image: "diamond/d8.png"};
  $d9 = {suite: "d",value: 9, image: "diamond/d9.png"};
  $d10 = {suite: "d",value: 10, image: "diamond/d10.png"};
  $dj = {suite: "d",value: 11, image: "diamond/dj.png"};
  $dq = {suite: "d",value: 12, image: "diamond/dq.png"};
  $dk = {suite: "d",value: 13, image: "diamond/dk.png"};

  var deck =  [$sa,$s2,$s3,$s4,$s5,$s6,$s7,$s8,$s9,$s10,$sj,$sq,$sk,
      $ha,$h2,$h3,$h4,$h5,$h6,$h7,$h8,$h9,$h10,$hj,$hq,$hk,
      $ca,$c2,$c3,$c4,$c5,$c6,$c7,$c8,$c9,$c10,$cj,$cq,$ck,
      $da,$d2,$d3,$d4,$d5,$d6,$d7,$d8,$d9,$d10,$dj,$dq,$dk];

    var dealerCard1 = deck[draw()];
    var dealerCard2 = deck[draw()];
    var dealerCard3 = deck[draw()];
    var dealerCard4 = deck[draw()];
    var dealerCard5 = deck[draw()];

    var player1Card1 = deck[draw()];
    var player1Card2 = deck[draw()];

    var player2Card1 = deck[draw()];
    var player2Card2 = deck[draw()];

    var player1hand = [dealerCard1.value, dealerCard2.value, dealerCard3.value, player1Card1.value, player1Card2.value];
    player1hand = player1hand.sort(function(a, b){return a-b;});

    var player1suites = [dealerCard1.suite, dealerCard2.suite, dealerCard3.suite, player1Card1.suite, player1Card2.suite];
    player1suites = player1suites.sort();


    console.log("P1 Hand: "+ player1hand + " "+player1suites);

    var player2hand = [dealerCard1.value, dealerCard2.value, dealerCard3.value, player2Card1.value, player2Card2.value];
    player2hand = player2hand.sort(function(a, b){return a-b;});

    var player2suites = [dealerCard1.suite, dealerCard2.suite, dealerCard3.suite, player2Card1.suite, player2Card2.suite];
    player2suites = player2suites.sort();

    console.log("P2 Hand: "+player2hand + " "+player2suites);

  $('.next').on('click',function(){
    player1Total -= 5;
    player2Total -= 10;
    player1Bet += 5;
    player2Bet += 10;
    $('.p1bet').text('$'+player1Bet);
    $('.p1total').text('$'+player1Total);
    $('.p2bet').text('$'+player2Bet);
    $('.p2total').text('$'+player2Total);

    moveDC1();
    setTimeout(moveDC2,1000);
    setTimeout(moveDC3,2000);
    $('.playerContainer.player2').slideDown(300);
    $('.playerContainer.player1').slideDown(300);
    $('.playerContainer.player2').hide(2000, function(){
      $('.playerContainer.player1').hide(2000, function(){
        $('.playerContainer.hide').hide(200, flopDelay);
      });
    });


    var flopDelay = function(){
      setTimeout(displayFlop,500);
    };

    var displayFlop = function(){
      $('#cardA').attr('src',dealerCard1.image);
      $('#cardB').attr('src',dealerCard2.image);
      $('#cardC').attr('src',dealerCard3.image);
      $('#cardP1C1').attr('src',player1Card1.image);
      $('#cardP1C1').css('opacity',1);
      $('#cardP1C2').attr('src',player1Card2.image);
      $('#cardP1C2').css('opacity',1);
      $('#cardP2C1').attr('src',player2Card1.image);
      $('#cardP2C1').css('opacity',1);
      $('#cardP2C2').attr('src',player2Card2.image);
      $('#cardP2C2').css('opacity',1);
    };

//done raising button *********************
$('.done').on('click', function(){
  // $('.playerContainer.active').removeClass('active');
  // $('.playerContainer.player2').addClass('active');
  $(".playerTab.highlight").removeClass('highlight');
  $(".playerHide").addClass('highlight');
  $('.playerContainer.player2').slideUp(500);
  $('.playerContainer.player1').slideUp(500);
});

  });

  // var addMovep1c1 = function(){
  //   var tops = 20;
  //   var right = 50;
  //
  //   var cardmove = setInterval(function(){
  //     console.log("works");
  //     if(tops < 330 && right < 620){
  //     tops = tops + 14.31;
  //     right = right + 26.5;
  //     $('#cardX1').css('top',tops);
  //     $('#cardX1').css('right',right);
  //     }else{
  //       clearInterval(cardmove);
  //     }
  //
  //   },20);
  // };

  var moveDC1 = function(){
    var tops = 20;
    var right = 50;

    var cardmove = setInterval(function(){
      console.log("works");
      if(tops < 46 && right < 642){
      tops = tops + 1.13;
      right = right + 26.28;
      $('#cardA').css('top',tops);
      $('#cardA').css('right',right);
      }else{
        clearInterval(cardmove);
      }

    },40);
  };

  var moveDC2 = function(){
    var tops = 20;
    var right = 50;

    var cardmove = setInterval(function(){
      console.log("works");
      if(tops < 46 && right < 540){
      tops = tops + 1.27;
      right = right + 24.8;
      $('#cardB').css('top',tops);
      $('#cardB').css('right',right);
      }else{
        clearInterval(cardmove);
      }

    },40);
  };

  var moveDC3 = function(){
    var tops = 20;
    var right = 50;

    var cardmove = setInterval(function(){
      console.log("works");
      if(tops < 46 && right < 430){
      tops = tops + 1.1;
      right = right + 16.05;
      $('#cardC').css('top',tops);
      $('#cardC').css('right',right);
      }else{
        clearInterval(cardmove);
      }

    },40);
  };


//highlight  player1 tab when selected *************************
    $(".player1tab").on('click',function(){
    $('.playerContainer.active').slideUp(500, function(){
          $('.playerContainer.player1').slideDown(800);
    });
    $('.playerContainer.active').removeClass('active');
    $('.playerContainer.player1').addClass('active');
    $(".playerTab.highlight").removeClass('highlight');
    $(".player1tab").addClass('highlight');

  });

//highlight  player2 tab when selected *************************
  $(".player2tab").on('click',function(){
    $('.playerContainer.active').slideUp(500, function(){
          $('.playerContainer.player2').slideDown(800);
    });
    $('.playerContainer.active').removeClass('active');
    $('.playerContainer.player2').addClass('active');
    $(".playerTab.highlight").removeClass('highlight');
    $(".player2tab").addClass('highlight');

  });

//clear both tabs when selected  *************************
  $(".playerHide").on('click',function(){
    $('.playerContainer.active').removeClass('active');
    $('.playerContainer.hide').addClass('active');
    $(".playerTab.highlight").removeClass('highlight');
    $(".playerHide").addClass('highlight');
    $('.playerContainer.player2').slideUp(500);
    $('.playerContainer.player1').slideUp(500);
  });


//move fourth card code *************************

  var addMove4 = function(){
    var topp = 20;
    var right = 50;

    var card4move = setInterval(function(){
      console.log("works");
      if(topp < 46 || right < 325){
      topp = topp + 0.591;
      right = right + 6;
      $('#card').css('top',topp);
      $('#card').css('right',right);
      }else{
        $('#card').attr('src',dealerCard4.image);
        $('#cardD').hide();
        player2Moved = false;
        currentRound++;
        clearInterval(card4move);
      }

    },18);

    // player1hand = [dealerCard1.value, dealerCard2.value, dealerCard3.value, dealerCard4.value, player1Card1.value, player1Card2.value];
    // player1hand = player1hand.sort(function(a, b){return a-b;});
    //
    // player1suites = [dealerCard1.suite, dealerCard2.suite, dealerCard3.suite, dealerCard4.suite, player1Card1.suite, player1Card2.suite];
    // player1suites = player1suites.sort();
    //
    //
    // console.log("P1 Hand: "+ player1hand + " "+player1suites);
    //
    // player2hand = [dealerCard1.value, dealerCard2.value, dealerCard3.value, dealerCard4.value, player2Card1.value, player2Card2.value];
    // player2hand = player2hand.sort(function(a, b){return a-b;});
    //
    // player2suites = [dealerCard1.suite, dealerCard2.suite, dealerCard3.suite, dealerCard4.suite, player2Card1.suite, player2Card2.suite];
    // player2suites = player2suites.sort();
    //
    // console.log("P2 Hand: "+player2hand + " "+player2suites);
  };

$('#card').on('click',addMove4);


//move river card code *************************


  var addMove5 = function(){
    var top1 = 18;
    var right1 = 48;
    var card5move = setInterval(function(){
      console.log("works");
      if(top1 < 46 || right1 < 167){
      top1 = top1 + 0.71;
      right1 = right1 + 4.23;
      $('#card1').css('top',top1);
      $('#card1').css('right',right1);
      }else{
        $('#card1').attr('src',dealerCard5.image);
        $('#cardE').hide();
        player2Moved = false;
        currentRound++;
        clearInterval(card5move);
      }
    },18);

    player1hand = [dealerCard1.value, dealerCard2.value, dealerCard3.value, player1Card1.value, player1Card2.value, dealerCard4.value, dealerCard5.value];
    player1hand = player1hand.sort(function(a, b){return a-b;});

    player1suites = [dealerCard1.suite, dealerCard2.suite, dealerCard3.suite, dealerCard4.suite, dealerCard5.suite, player1Card1.suite, player1Card2.suite];
    player1suites = player1suites.sort();

    console.log("P1 Hand: "+ player1hand + " "+player1suites);

    player2hand = [dealerCard1.value, dealerCard2.value, dealerCard3.value, player2Card1.value, player2Card2.value, dealerCard4.value, dealerCard5.value];
    player2hand = player2hand.sort(function(a, b){return a-b;});

    player2suites = [dealerCard1.suite, dealerCard2.suite, dealerCard3.suite, dealerCard4.suite, dealerCard5.suite, player2Card1.suite, player2Card2.suite];
    player2suites = player2suites.sort();

    console.log("P2 Hand: "+player2hand + " "+player2suites);
  };

$('#card1').on('click',addMove5);

//Player 1 raise  bid ********************************
  var raisep1 = function(){
    if (player1Total === 0 || player1Bet >= (player2Bet + player2Total)){
      return null;
    } else{
        player1Bet = player1Bet + 5;
        player1Total = player1Total - 5;
        $('.p1bet').text('$'+player1Bet);
        $('.p1total').text('$'+player1Total);
      }
  };
$('#p1raise').on('click',raisep1);

//Player 2 raise  bid ********************************
  var raisep2 = function(){
    if (player2Total === 0 || player2Bet >= (player1Bet + player1Total)){
      return null;
    } else{
        player2Bet = player2Bet + 5;
        player2Total = player2Total - 5;
        $('.p2bet').text('$'+player2Bet);
        $('.p2total').text('$'+player2Total);
        player2Moved = true;
      }
  };
$('#p2raise').on('click',raisep2);

//Player 1 fold   ********************************
  var foldp1 = function(){
    player2Total = player2Total + player1Bet + player2Bet;
    player2Bet = 0;
    player1Bet = 0;
    $('.p1bet').text('$'+player1Bet);
    $('.p1total').text('$'+player1Total);

    $('.p2bet').text('$'+player2Bet);
    $('.p2total').text('$'+player2Total);

    //hide player containers
    $('.playerContainer.active').removeClass('active');
    $('.playerContainer.hide').addClass('active');
    $(".playerTab.highlight").removeClass('highlight');
    $(".playerHide").addClass('highlight');
    $('.playerContainer.player2').slideUp(500);
    $('.playerContainer.player1').slideUp(500);
    currentRound = 0;
  };

$('#p1fold').on('click',foldp1);

//Player 2 fold   ********************************
  var foldp2 = function(){
    player1Total = player1Total + player2Bet + player1Bet;
    player1Bet = 0;
    player2Bet = 0;
    $('.p2bet').text('$'+player2Bet);
    $('.p2total').text('$'+player2Total);

    $('.p1bet').text('$'+player1Bet);
    $('.p1total').text('$'+player1Total);

    //hide player containers
    $('.playerContainer.active').removeClass('active');
    $('.playerContainer.hide').addClass('active');
    $(".playerTab.highlight").removeClass('highlight');
    $(".playerHide").addClass('highlight');
    $('.playerContainer.player2').slideUp(500);
    $('.playerContainer.player1').slideUp(500);
    player2Moved = true;
    currentRound = 1;

  };

$('#p2fold').on('click',foldp2);

//Player 1 Call   ********************************
  var callp1 = function(){

    if (player1Bet > player2Bet){
      return null;
    } else {
      var oldP1Bet = player1Bet;
      player1Bet = player1Bet + (player2Bet - player1Bet);
      player1Total = player1Total - player1Bet + oldP1Bet;

      $('.p1bet').text('$'+player1Bet);
      $('.p1total').text('$'+player1Total);
      $('.p2bet').text('$'+player2Bet);
      $('.p2total').text('$'+player2Total);

    }

    if(player1Bet === player2Bet && currentRound === 1 && player2Moved === false){
      $('.playerContainer.active').removeClass('active');
      $('.playerContainer.hide').addClass('active');
      $(".playerTab.highlight").removeClass('highlight');
      $(".playerHide").addClass('highlight');
      $('.playerContainer.player2').slideUp(500);
      $('.playerContainer.player1').slideUp(500);

    }

    if(player1Bet === player2Bet && currentRound === 1 && player2Moved === true){
      setTimeout(addMove4,2000);
      $('.playerContainer.active').removeClass('active');
      $('.playerContainer.hide').addClass('active');
      $(".playerTab.highlight").removeClass('highlight');
      $(".playerHide").addClass('highlight');
      $('.playerContainer.player2').slideUp(500);
      $('.playerContainer.player1').slideUp(500);
      // $('.playerContainer.active').removeClass('active');
      // $('.playerContainer.player2').addClass('active');
      // $(".playerTab.highlight").removeClass('highlight');
      // $(".playerHide").addClass('highlight');
      // $('.playerContainer.player2').slideUp(500);
      // $('.playerContainer.player1').slideUp(500);

    }

    if(player1Bet === player2Bet && currentRound === 2 && player2Moved === false){
      $('.playerContainer.active').removeClass('active');
      $('.playerContainer.hide').addClass('active');
      $(".playerTab.highlight").removeClass('highlight');
      $(".playerHide").addClass('highlight');
      $('.playerContainer.player2').slideUp(500);
      $('.playerContainer.player1').slideUp(500);

    }

    if(player1Bet === player2Bet && currentRound === 2 && player2Moved === true){
      setTimeout(addMove5,2000);
      $('.playerContainer.active').removeClass('active');
      $('.playerContainer.hide').addClass('active');
      $(".playerTab.highlight").removeClass('highlight');
      $(".playerHide").addClass('highlight');
      $('.playerContainer.player2').slideUp(500);
      $('.playerContainer.player1').slideUp(500);

    }

    if(player1Bet === player2Bet && currentRound === 3 && player2Moved === false){
      $('.playerContainer.active').removeClass('active');
      $('.playerContainer.hide').addClass('active');
      $(".playerTab.highlight").removeClass('highlight');
      $(".playerHide").addClass('highlight');
      $('.playerContainer.player2').slideUp(500);
      $('.playerContainer.player1').slideUp(500);

    }

    if(player1Bet === player2Bet && currentRound === 3 && player2Moved === true){
      // $('.playerContainer.active').removeClass('active');
      // $('.playerContainer.player2').addClass('active');
      // $(".playerTab.highlight").removeClass('highlight');
      // $(".playerHide").addClass('highlight');
      // $('.playerContainer.player2').slideUp(10);
      // $('.playerContainer.player1').slideUp(10);
      winna();

      $('.playerContainer.active').removeClass('active');
      $('.playerContainer.hide').addClass('active');
      $(".playerTab.highlight").removeClass('highlight');
      $(".playerHide").addClass('highlight');
      $('.playerContainer.hide').fadeIn(1000);
      // $('.playerContainer.player2').fadeIn(1000);
      $('.playerContainer.player1').fadeIn(1000);
      $('.playerContainer.player2').fadeIn(1000);
    }

  };

$('#p1call').on('click',callp1);

//Player 2 Call   ********************************
  var callp2 = function(){

    if (player2Bet > player1Bet){
      return null;
    } else {
      var oldP2Bet = player2Bet;
      player2Bet = player2Bet + (player1Bet - player2Bet);
      player2Total = player2Total - player2Bet + oldP2Bet;

      $('.p1bet').text('$'+player1Bet);
      $('.p1total').text('$'+player1Total);
      $('.p2bet').text('$'+player2Bet);
      $('.p2total').text('$'+player2Total);
      player2Moved = true;

    }

    if(player1Bet === player2Bet && currentRound === 1){
      setTimeout(addMove4,2000);
      $('.playerContainer.active').removeClass('active');
      $('.playerContainer.hide').addClass('active');
      $(".playerTab.highlight").removeClass('highlight');
      $(".playerHide").addClass('highlight');
      $('.playerContainer.player2').slideUp(500);
      $('.playerContainer.player1').slideUp(500);


    }

    if(player1Bet === player2Bet && currentRound === 2){
      setTimeout(addMove5,2000);
      $('.playerContainer.active').removeClass('active');
      $('.playerContainer.hide').addClass('active');
      $(".playerTab.highlight").removeClass('highlight');
      $(".playerHide").addClass('highlight');
      $('.playerContainer.player2').slideUp(500);
      $('.playerContainer.player1').slideUp(500);

    }

    if(player1Bet === player2Bet && currentRound === 3){
      $('.playerContainer.active').removeClass('active');
      // $('.playerContainer.player2').addClass('active');
      // $(".playerTab.highlight").removeClass('highlight');
      // $(".playerHide").addClass('highlight');
      // $('.playerContainer.player2').slideUp(10);
      // $('.playerContainer.player1').slideUp(10);
      winna();

      $('.playerContainer.hide').addClass('active');
      $('.playerContainer.hide').fadeIn(1000);
      $(".playerTab.highlight").removeClass('highlight');
      $(".playerHide").addClass('highlight');
      // $('.playerContainer.player2').fadeIn(1000);
      $('.playerContainer.player1').fadeIn(1000);
    }

  };

$('#p2call').on('click',callp2);


// winner evaluation *************************************

var p1BestHand;
var p2BestHand;
var p1flush;
var p2flush;
var p1final;
var p2final;
var winner;

var winna = function() {
// //testing hands:
// player1hand = [1,2,3,12,14,14,14];
// player2hand = [2,3,6,9,14,14,14];
// // player1suites = ["c","c","c","c","c","s","s"];

// evaluate highest single card
  p1BestHand = null;
  p2BestHand = null;


//splice hand to check for pairs
  var p1pairsCheck = [];

  for(i = 0; i < player1hand.length; i++){
    p1pairsCheck[i] = player1hand[i];
  }

  var p1pairs = false;
  for (i = p1pairsCheck.length-1; i > 0; i-=1){
    if(p1pairsCheck[i] === p1pairsCheck[i-1] && p1pairs === false){
    p1BestHand = "pair";
    p1pairs = true;
    p1duos = p1pairsCheck[i];
    p1pairsCheck.splice(i,1);
    p1pairsCheck.splice(i-1,1);
    p1final = [p1pairsCheck[p1pairsCheck.length-3],p1pairsCheck[p1pairsCheck.length-2],p1pairsCheck[p1pairsCheck.length-1], p1duos,p1duos];

    //check for pair after pair
    for (i = p1pairsCheck.length; i > 0; i-=1){
      if(p1pairsCheck[i] === p1pairsCheck[i-1]){
      p1BestHand = "twopair";
      p1duo = p1pairsCheck[i];
      p1pairsCheck.splice(i,1);
      p1pairsCheck.splice(i-1,1);
      p1final = [p1pairsCheck[p1pairsCheck.length-1],p1duo,p1duo,p1duos,p1duos];
      }
    }
    }
  }

  //splice hand to check for pairs
    var p2pairsCheck = [];

    for(i = 0; i < player2hand.length; i++){
      p2pairsCheck[i] = player2hand[i];
    }
  var p2pairs = false;
  for (i = p2pairsCheck.length-1; i > 0; i-=1){
    if(p2pairsCheck[i] === p2pairsCheck[i-1] && p2pairs === false){
    p2BestHand = "pair";
    p2pairs = true;
    p2duos = p2pairsCheck[i];
    p2pairsCheck.splice(i,1);
    p2pairsCheck.splice(i-1,1);
    p2final = [p2pairsCheck[p2pairsCheck.length-3],p2pairsCheck[p2pairsCheck.length-2],p2pairsCheck[p2pairsCheck.length-1], p2duos,p2duos];

    //check for pair after pair
    for (i = p2pairsCheck.length; i > 0; i-=1){
      if(p2pairsCheck[i] === p2pairsCheck[i-1]){
      p2BestHand = "twopair";
      p2duo = p2pairsCheck[i];
      p2pairsCheck.splice(i,1);
      p2pairsCheck.splice(i-1,1);
      p2final = [p2pairsCheck[p2pairsCheck.length-1],p2duo,p2duo,p2duos,p2duos];
      }
    }
    }
  }

//splice hand to remove pairs for straight evaluation
var p1StraightCheck = [];

for(i = 0; i < player1hand.length; i++){
  p1StraightCheck[i] = player1hand[i];
}

for (i = p1StraightCheck.length-1; i > 0; i-=1){
  if(p1StraightCheck[i] === p1StraightCheck[i-1]){
    p1StraightCheck.splice(i,1);
  }
}

  for (i = p1StraightCheck.length-1; i > 3; i-=1){
    if(p1StraightCheck[i-1] === p1StraightCheck[i]-1 && p1StraightCheck[i-2] === p1StraightCheck[i]-2 && p1StraightCheck[i-3] === p1StraightCheck[i]-3  && p1StraightCheck[i-4] === p1StraightCheck[i]-4){
      p1BestHand = "straight";
    }
  }
//*****************************************************

//splice hand to remove pairs for straight evaluation
  var p2StraightCheck = [];

  for(i = 0; i < player2hand.length; i++){
    p2StraightCheck[i] = player2hand[i];
  }

  for (i = p2StraightCheck.length-1; i > 0; i-=1){
    if(p2StraightCheck[i] === p2StraightCheck[i-1]){
      p2StraightCheck.splice(i,1);
    }
  }

  for (i = p2StraightCheck.length-1; i > 3; i-=1){
    if(p2StraightCheck[i-1] === p2StraightCheck[i]-1 && p2StraightCheck[i-2] === p2StraightCheck[i]-2 && p2StraightCheck[i-3] === p2StraightCheck[i]-3  && p2StraightCheck[i-4] === p2StraightCheck[i]-4){
      p2BestHand = "straight";
    }
  }

//*****************************************************

//check for flush evaluations
  for (i = player1suites.length-1; i > 3; i-=1){
    if(player1suites[i] === player1suites[i-1] && player1suites[i] === player1suites[i-2] && player1suites[i] === player1suites[i-3]  && player1suites[i] === player1suites[i-4]){
      p1BestHand = "flush";
    }
  }

  for (i = player2suites.length; i > 3; i-=1){
    if(player2suites[i] === player2suites[i-1] && player2suites[i] === player2suites[i-2] && player2suites[i] === player2suites[i-3]  && player2suites[i] === player2suites[i-4]){
      p2BestHand = "flush";
    }
  }
//**************************************************************

//splice hand to remove pairs for FH / triple evaluation
    var p1FHCheck = [];

    for(i = 0; i < player1hand.length; i++){
      p1FHCheck[i] = player1hand[i];
    }

  var p1trio = false;
  for (i = p1FHCheck.length-1; i > 1; i-=1){
    if(p1FHCheck[i] === p1FHCheck[i-1] && p1FHCheck[i] === p1FHCheck[i-2] && p1trio === false){

    p1BestHand = "triple";
    p1trio = true;
    p1tres = p1FHCheck[i];
    p1FHCheck.splice(i,1);
    p1FHCheck.splice(i-1,1);
    p1FHCheck.splice(i-2,1);
    p1final = [p1FHCheck[p1FHCheck.length-2],p1FHCheck[p1FHCheck.length-1],p1tres,p1tres,p1tres];

    //check for pair after trio
    for (i = p1FHCheck.length-1; i > 0; i-=1){
      if(p1FHCheck[i] === p1FHCheck[i-1]){

      p1BestHand = "fullhouse";
      p1final = [p1FHCheck[i],p1FHCheck[i],p1tres,p1tres,p1tres];
      }
    }
    }
  }

  //splice hand to remove pairs for FH / triple evaluation
    var p2FHCheck = [];

    for(i = 0; i < player2hand.length; i++){
      p2FHCheck[i] = player2hand[i];
    }

  var p2trio = false;
  for (i = p2FHCheck.length-1; i > 1; i-=1){
    if(p2FHCheck[i] === p2FHCheck[i-1] && p2FHCheck[i] === p2FHCheck[i-2] && p2trio === false){

    p2BestHand = "triple";
    p2trio = true;
    p2tres = p2FHCheck[i];
    p2FHCheck.splice(i,1);
    p2FHCheck.splice(i-1,1);
    p2FHCheck.splice(i-2,1);
    p2final = [p2FHCheck[p2FHCheck.length-2],p2FHCheck[p2FHCheck.length-1],p2tres,p2tres,p2tres];

    //check for pair after trio
    for (i = p2FHCheck.length-1; i > 0; i-=1){
      if(p2FHCheck[i] === p2FHCheck[i-1]){
        p2BestHand = "fullhouse";
        p2final = [p2FHCheck[i],p2FHCheck[i],p2tres,p2tres,p2tres];
        }
      }
    }

    }
//*******************************************************

//****check for 4 of a kind **********************************

//evaluate highest possible 4-of-a0kind hand
    var p1fourCheck = [];

    for(i = 0; i < player1hand.length; i++){
      p1fourCheck[i] = player1hand[i];
    }

  var p1four = false;
  for (i = p1fourCheck.length-1; i > 2; i-=1){
    if(p1fourCheck[i] === p1fourCheck[i-1] && p1fourCheck[i] === p1fourCheck[i-2] && p1fourCheck[i] === p1fourCheck[i-3] && p1four === false){

    p1BestHand = "quads";
    p1four = true;
    p1quatro = p1fourCheck[i];
    p1fourCheck.splice(i,1);
    p1fourCheck.splice(i-1,1);
    p1fourCheck.splice(i-2,1);
    p1fourCheck.splice(i-3,1);
    p1final = [p1fourCheck[p1fourCheck.length-1],p1quatro,p1quatro,p1quatro,p1quatro];

    }
  }

//evaluate highest possible 4-of-a0kind hand
      var p2fourCheck = [];

      for(i = 0; i < player2hand.length; i++){
        p2fourCheck[i] = player2hand[i];
      }

    var p2four = false;
    for (i = p2fourCheck.length-1; i > 2; i-=1){
      if(p2fourCheck[i] === p2fourCheck[i-1] && p2fourCheck[i] === p2fourCheck[i-2] && p2fourCheck[i] === p2fourCheck[i-3] && p2four === false){

      p2BestHand = "quads";
      p2four = true;
      p2quatro = p2fourCheck[i];
      p2fourCheck.splice(i,1);
      p2fourCheck.splice(i-1,1);
      p2fourCheck.splice(i-2,1);
      p2fourCheck.splice(i-3,1);
      p2final = [p2fourCheck[p1fourCheck.length-1],p2quatro,p2quatro,p2quatro,p2quatro];

      }
    }

  // for (i = player1hand.length-1; i > 2; i-=1){
  //   if(player1hand[i] === player1hand[i-1] && player1hand[i] === player1hand[i-2] && player1hand[i] === player1hand[i-3]){
  //   p1BestHand = "quads";
  //   p1Final = [player1hand[player1hand.length-1],player1hand[i],player1hand[i-1],player1hand[i-2],player1hand[i-3]];
  //   }
  // }
  //
  //
  // for (i = player2hand.length-1; i > 2; i-=1){
  //   if(player2hand[i] === player2hand[i-1] && player2hand[i] === player2hand[i-2] && player2hand[i] === player2hand[i-3]){
  //   p2BestHand = "quads";
  //   }
  // }

//single hand calculation
  if(p1BestHand === null){ p1final = [player1hand[player1hand.length-1],player1hand[player1hand.length-2],player1hand[player1hand.length-3],player1hand[player1hand.length-4],player1hand[player1hand.length-5]];}

  if(p2BestHand === null){ p2Final = [player2hand[player2hand.length-1],player2hand[player2hand.length-2],player2hand[player2hand.length-3],player2hand[player2hand.length-4],player2hand[player2hand.length-5]];}

  console.log(p1BestHand);
  console.log(p2BestHand);

var sfWinner = function(x,y,p){
  if(x === "straightFlush" && z === "quads" || x === "straightFlush" && y === "fullhouse" || x === "straightFlush" && y === "fullhouse" || x === "straightFlush" && y === "flush" || x === "straightFlush" && y === "straight" || x === "straightFlush" && y === "triple" || x === "straightFlush" && y === "twopair" || x === "straightFlush" && y === "pair" || x === "straightFlush" && y === null){
      winner = p;
  }
};
  sfWinner(p1BestHand,p2BestHand,"player1");
  sfWinner(p2BestHand,p1BestHand,"player2");

var fourWinner = function(x,y,p){
  if(x === "quads" && y === "fullhouse" || x === "quads" && y === "fullhouse" || x === "quads" && y === "flush" || x === "quads" && y === "straight" || x === "quads" && y === "triple" || x === "quads" && y === "twopair" || x === "quads" && y === "pair" || x === "quads" && y === null){
      winner = p;
  }
  };

  fourWinner(p1BestHand,p2BestHand,"player1");
  fourWinner(p2BestHand,p1BestHand,"player2");

var fhWinner = function(x,y,p){
    if(x === "fullhouse" && y === "flush" || x === "fullhouse" && y === "straight" || x === "fullhouse" && y === "triple" || x === "fullhouse" && y === "twopair" || x === "fullhouse" && y === "pair" || x === "fullhouse" && y === null){
        winner = p;
    }
    };

  fhWinner(p1BestHand,p2BestHand,"player1");
  fhWinner(p2BestHand,p1BestHand,"player2");

var flushWinner = function(x,y,p){
    if(x === "flush" && y === "straight" || x === "flush" && y === "triple" || x === "flush" && y === "twopair" || x === "flush" && y === "pair" || x === "flush" && y === null){
          winner = p;
    }
    };

  flushWinner(p1BestHand,p2BestHand,"player1");
  flushWinner(p2BestHand,p1BestHand,"player2");

var straightWinner = function(x,y,p){
    if(x === "straight" && y === "triple" || x === "straight" && y === "twopair" || x === "straight" && y === "pair" || x === "straight" && y === null){
          winner = p;
    }
    };

    straightWinner(p1BestHand,p2BestHand,"player1");
    straightWinner(p2BestHand,p1BestHand,"player2");

var tripleWinner = function(x,y,p){
    if( x === "triple" && y === "twopair" || x === "triple" && y === "pair" || x === "triple" && y === null){
            winner = p;
      }
      };

  tripleWinner(p1BestHand,p2BestHand,"player1");
  tripleWinner(p2BestHand,p1BestHand,"player2");

var twoPairWinner = function(x,y,p){
    if( x === "twopair" && y === "pair" || x === "twopair" && y === null){
            winner = p;
      }
      };

  twoPairWinner(p1BestHand,p2BestHand,"player1");
  twoPairWinner(p2BestHand,p1BestHand,"player2");

var pairWinner = function(x,y,p){
    if( x === "pair" && y === null){
              winner = p;
      }
      };

  pairWinner(p1BestHand,p2BestHand,"player1");
  pairWinner(p2BestHand,p1BestHand,"player2");

var singleTieBreaker = function(x,y,j,l,p){
if(j === l && j === null && l === null){
console.log(x);
console.log(y);
    if(x[x.length-1] > y[y.length-1]){
      winner = p;
    }else if(x[x.length-1] < y[y.length-1]){
      return null;
    }else if(x[x.length-2] > y[y.length-2]){
      winner = p;
    }else if(x[x.length-2] < y[y.length-2]){
      return null;
    }else if(x[x.length-3] > y[y.length-3]){
      winner = p;
    }else if(x[x.length-3] < y[y.length-3]){
      return null;
    }else if(x[x.length-4] > y[y.length-4]){
      winner = p;
    }else if(x[x.length-4] < y[y.length-4]){
      return null;
    }else if(x[x.length-5] > y[y.length-5]){
      winner = p;
    }else if(x[x.length-5] < y[y.length-5]){
      return null;
    } else{
      winner = "tie";
    }

}
};

  singleTieBreaker(player1hand,player2hand,p1BestHand,p2BestHand,"player1");
  singleTieBreaker(player2hand,player1hand,p2BestHand,p1BestHand,"player2");

// same hand evaluation *********************************
var fourCompare = function(x,y,p){
  if(x[x.length-1] > y[y.length-1]){
    winner = p;
  } else if(x[x.length-1] < y[y.length-1]){
    return null;
  } else if (x[x.length-5] > y[y.length-5]){
      winner = p;
    } else if(x[x.length-5] < y[y.length-5]){
      return null;
    } else{
      winner = "tie";
    }
    console.log(p1final);
    console.log(p2final);
  };


if(p1BestHand === p2BestHand && p1BestHand === "quads"){
  fourCompare(p1final,p2final,"player1");
  fourCompare(p2final,p1final,"player2");
}
//*********************************************************
var fhCompare = function(x,y,p){
  if(x[x.length-1] > y[y.length-1]){
    winner = p;
  } else if(x[x.length-1] < y[y.length-1]){
    return null;
  } else if(x[x.length-4] > y[y.length-4]){
      winner = p;
    } else if(x[x.length-4] < y[y.length-4]){
      return null;
    }else{
      winner = "tie";
    }

};

if(p1BestHand === p2BestHand && p1BestHand ==="fullhouse"){
  fhCompare(p1final,p2final,"player1");
  fhCompare(p2final,p1final,"player2");
}

//*********************************************************
var tripleCompare = function(x,y,p){
  if(x[x.length-1] > y[y.length-1]){
    winner = p;
    } else if(x[x.length-1] < y[y.length-1]){
      return null;
    } else if (x[x.length-4] > y[y.length-4]){
        winner = p;
    } else if (x[x.length-4] < y[y.length-4]){
        return null;
    }  else if (x[x.length-5] > y[y.length-5]){
          winner = p;
    } else if(x[x.length-5] < y[y.length-5]){
        return null;
      } else{
      winner = "tie";
    }
  };

if(p1BestHand === p2BestHand && p1BestHand ==="triple"){
  tripleCompare(p1final,p2final,"player1");
  tripleCompare(p2final,p1final,"player2");
}
//*********************************************************
var twopairCompare = function(x,y,p){
  if(x[x.length-1] > y[y.length-1]){
    winner = p;
  } else if(x[x.length-1] < y[y.length-1]){
    return null;
  }else if (x[x.length-3] > y[y.length-3]){
      winner = p;
    } else if(x[x.length-3] < y[y.length-3]){
      return null;
    } else if (x[x.length-5] > y[y.length-5]){
        winner = p;
      }else if(x[x.length-5] < y[y.length-5]){
        return null;
      } else{
      winner = "tie";
    }
  };

if(p1BestHand === p2BestHand && p1BestHand ==="twopair"){
  twopairCompare(p1final,p2final,"player1");
  twopairCompare(p2final,p1final,"player2");
}
//*********************************************************
var pairCompare = function(x,y,p){
  if(x[x.length-1] > y[y.length-1]){
    winner = p;
  }  else if(x[x.length-1] < y[y.length-1]){
    return null;
  } else if (x[x.length-3] > y[y.length-3]){
      winner = p;
    }  else if(x[x.length-3] < y[y.length-3]){
      return null;
    } else if (x[x.length-4] > y[y.length-4]){
        winner = p;
      }  else if(x[x.length-4] < y[y.length-4]){
        return null;
      } else if (x[x.length-5] > y[y.length-5]){
          winner = p;
        }  else if(x[x.length-5] < y[y.length-5]){
          return null;
        }else{
      winner = "tie";
    }
  };

if(p1BestHand === p2BestHand && p1BestHand ==="pair"){
  pairCompare(p1final,p2final,"player1");
  pairCompare(p2final,p1final,"player2");
}
//*********************************************************
    console.log("Winner was "+winner);

};

//take p1 total cards   *********
var p1suiteHand = [dealerCard1,dealerCard2,dealerCard3,dealerCard4,dealerCard5,player1Card1,player1Card2];
//sort p1 total cards by suite  *********
p1suiteHand.sort(function(a, b){
    if(a.suite < b.suite) return -1;
    if(a.suite > b.suite) return 1;
    return 0;
});

//check for p1 flush and store winning suite  *********
var p1flushSuit="";

for (i = p1suiteHand.length-1; i > 3 ; i-=1){
  if(p1suiteHand[i].suite === p1suiteHand[i-1].suite && p1suiteHand[i].suite === p1suiteHand[i-2].suite && p1suiteHand[i].suite === p1suiteHand[i-3].suite && p1suiteHand[i].suite === p1suiteHand[i-4].suite){
    console.log("flush");
    p1BestHand = "flush";
    p1flushSuit = p1suiteHand[i].suite;
  }
  }
//take out any non winning suite cards *********
  var kp = 0;
  while(kp < p1suiteHand.length){
    if(p1suiteHand[kp].suite === p1flushSuit){
      kp++;
    } else {
      p1suiteHand.splice(kp,1);
    }
  }
  if(p1flushSuit !==""){
//sort all like suite cards by value  *********
    p1suiteHand.sort(function(a, b){
      if(a.value < b.value) return -1;
      if(a.value > b.value) return 1;
      return 0;
    });
    if(p1BestHand === "flush"){
      p1final = [p1suiteHand[p1suiteHand.length-5].value, p1suiteHand[p1suiteHand.length-4].value, p1suiteHand[p1suiteHand.length-3].value, p1suiteHand[p1suiteHand.length-2].value, p1suiteHand[p1suiteHand.length-1].value];
      }

  //check for straight flush
    var str8 = false;
    for (f = p1suiteHand.length-1; f > 3; f-=1){

      if(
        p1suiteHand[f].value-1 === p1suiteHand[f-1].value && p1suiteHand[f].value-2 === p1suiteHand[f-2].value && p1suiteHand[f].value-3 === p1suiteHand[f-3].value && p1suiteHand[f].value-4 === p1suiteHand[f-4].value && str8 === false){
          p1BestHand = "straightFlush";
          p1final = [p1suiteHand[f-4].value, p1suiteHand[f-3].value, p1suiteHand[f-2].value, p1suiteHand[f-1].value, p1suiteHand[f].value];
          str8 = true;
        }
      }
  }

console.log(p1BestHand);
console.log(p1final);


});

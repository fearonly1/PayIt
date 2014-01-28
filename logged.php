<!DOCTYPE html>
<!--[if IE 9]><html class="lt-ie10" lang="en" > <![endif]-->
<html class="no-js" lang="en" >

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PayIt</title>

  <!-- If you are using CSS version, only link these 2 files, you may add app.css to use for your overrides if you like. -->
  <link rel="stylesheet" href="foundation-5/css/normalize.css">
  <link rel="stylesheet" href="foundation-5/css/foundation.css">

  <!-- If you are using the gem version, you need this only -->
  <link rel="stylesheet" href="foundation-5/css/app.css">

  <script src="foundation-5/js/vendor/custom.modernizr.js"></script>

</head>
<body>
  <!-- body content here -->

  <nav class="top-bar">
    <ul class="title-area">
      <li class="name">
        <h1><a href="logged.php">PayIt</a></h1>
        <li class="divider"></li>
      </li>
    </ul>
  </nav>
  <hr>

  <div align="center">
    <h1>VENUE LOGO</h1>
  </div>
  <hr>

  <div style="width: 80%; margin:0 auto">
    <form action="confirmed.php" method="post">
      <fieldset>
      <legend>Transaction:</legend>

        <div class="row">
          <div class="small-4 columns">
            <label>Total Cost:</label>
            <input type="text" name="amount" id='amount' placeholder="Total Amount in $ USD">
            <input type="submit">
          </div>
      </fieldset>
    </form>
  </div>

  <div id="myModal" class="reveal-modal" data-reveal>
    <h2>Attention Patron</h2>
    <p>ALL TRANSACTIONS ARE ONE TIME. YOUR ACCOUNT CREDENTIALS WILL NOT BE SAVED. BY CLICKING PROCEDD YOU ARE AGREEING TO BE CHARGED BY THE AMOUNT ENTERED BY THE VENUE.</p>
    <a href="#" class="button">Proceed</a>
    <a class="close-reveal-modal">&#215;</a>
  </div>

  <script src="foundation-5/js/vendor/jquery.js"></script>
  <script src="foundation-5/js/foundation.min.js"></script>
  <script>
    $(document).foundation();

    (function(){

    })();
  </script>
</body>
</html>
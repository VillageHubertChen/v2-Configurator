<?php
$conn = new mysqli("localhost","root","","test");
if ($conn->connect_error) {
 die("Connection failed: " . $conn->connect_error);
}
?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <title>Lukas Chen</title>
    <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="css/bootstrap-theme.min.css">
    <link rel="stylesheet" type="text/css" href="css/font-awesome.min.css">
    <link rel="stylesheet" type="text/css" href="css/screen.css">
    <link rel="icon" href="images/my_face_icon.ico">
    <style type="text/css">
        #background-1 {
            background-image: url();
        }
    </style>
</head>

<body>
    <!--Begin nvbar-->
    <div id="navbar" class="navbar navbar-fixed-top">
        <button href="#" class="btn btn-default toggle-panel"><i class="fa fa-bars"></i></button>
        <div class="container">
            <div class="navbar-header">
                <div class="logo"><a href="/"><span class="navbar-brand">Home</span></a></div>
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span class="sr-only">Toggle Navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
            </div>
            <div class="navbar-collapse collapse">
                <ul class="nav navbar-nav">
                    <li><a href="#" class="active">Home</a></li>
                    <li><a href="#">link1</a></li>
                </ul>
            </div>
        </div>
    </div>
    <!--End Navbar-->
    <!--Begin Jumbotron-->
    <div class="jumbotron jumbotron-primary masthead">
        <div class="container">
            <h1>Lukas Chen</h1>
            <p>This is price caculator test page</p>
            <p>
                <a href="#check-me-out" class="btn btn-primary btn-border btn-lg">Check Me Out</a>
            </p>
        </div>
    </div>
    <!--End Jumbotron-->
    <div class="section">
        <!--Begin Configurator-->
        <div class="container" ng-app="configApp" ng-controller="myCtrl">
            <div class="row">
                <div class="col-md-9">
                    <h1 id="check-me-out">ViCase & ViDock Configuration</h1>
                    <div ng-repeat="item in data" class="panel panel-default">
                        <div class="panel-heading con-fig-header">
                            <h2><i class="fa fa-play"></i> {{item.name}}</h2>
                        </div>
                        <div class="panel-body" >
                            <ng-include src="'./templates/s'+($index)+'.html'"></ng-include>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="price-sidebar" data-spy="affix" data-offset-top="520">
                        <h3 style="color:#07b;" id="radiocheckednumber">0 items in cart</h3>
                        <hr>
                        <p id="resultstring"></p>
                        <p style="color:#07b;"><b><span id="villageSum">$0 US</span> - Village (cart)</b></p>
                        <p><b><span id="thirdSum">$0 US</span> - Third Party</b></p>
                        <hr>
                        <h3>
                            <span style="color:#07b;" id="total">$0</span> <span style="color:#07b;">US</span>
                            <hr style="margin-bottom:2px">
                            <hr style="margin-top:0;">
                        </h3>
                    </div>
                </div>
            </div>
        </div>
        <!--End Configurator-->
    </div>
    <hr>
 <div class="section">
     <div class="container">
         <div class="row">
             <div class="col-sm-12">
                 <h1 class="text-center">ABOUT</h1>
                 <h2>Price Caculator</h2>
                 <p>It have it own price caculator bulit in! So you can compare betwwen the prize of village tronic product and thirld party!</p>
                 <h2>Shipping Caculator</h2>
                 <p>This is a feature that will make people who buy product in indiegogo muck easier. You just need to copy the shipping cost and paste to indiegogo and you are done!</p>
             </div>
         </div>
     </div>
 </div>

 <div class="section blue">
     <div class="container">
         <div class="row">
             <div class="col-sm-12">
                 <h1 class="text-center">BOOKMARKLET</h1>
                 <p class="text-center">Install this link in your bookmark and you can always configure your ViCase!</p>
             </div>
         </div>
     </div>
 </div>

 <div class="footer">
     <div class="container">
         <div class="row">
             <div class="col-sm-12">
                 
             </div>
         </div>
     </div>
 </div>

 <script type="text/javascript" src="js/jquery-2.1.3.min.js"></script>
 <script type="text/javascript" src="js/jquery-calx-1.1.8.min.js"></script>
 <script type="text/javascript" src="js/scotchPanels.min.js"></script>
 <script src="js/holder.js" type="text/javascript"></script>
 <script type="text/javascript" src="js/angular.min.js"></script>
  <script type="text/javascript" src="js/bootstrap.min.js"></script>
 <script type="text/javascript" src="js/app.js"></script>
 
</body>

</html>
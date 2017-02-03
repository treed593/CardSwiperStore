<?php
// Set your secret key: remember to change this to your live secret key in production
// See your keys here: https://dashboard.stripe.com/account/apikeys
require_once('vendor/stripe/stripe-php/init.php');
\Stripe\Stripe::setApiKey("{{Stripe Secret Key Here}}");

// Get the credit card details submitted by the form
$token = $_POST['stripeToken'];
$amount = $_POST['amount'] * 100;
$email = $_POST['email'];



// Create a charge: this will charge the user's card
try {
  $charge = \Stripe\Charge::create(array(
    "amount" => $amount,
    "currency" => "usd",
    "source" => $token,
    "description" => "{{This will show in the stripe window and receipt}}",
    "receipt_email" => $email
    ));
  ?>
	<title>RMU MBC :: Card Approved</title>
	<h1 style="text-align: center;">You're card has been approved</h1> 
	<br /> 
	<p style="text-align: center;">Thank you for your purchase! </p> 
	<br /> 
	<img style="display: block;margin: auto;" src='https://media.giphy.com/media/opmIBtljGbwZi/giphy.gif' alt='Success'>
	<a href="{{Home Page URL}}">Back to Store</a>
	<?php

} catch(\Stripe\Error\Card $e) {
	?>
	<title>RMU MBC :: Card Declined</title>
	<h1 style="text-align: center;"> Swiper No Swiping </h1> 
	<br /> 
	<p style="text-align: center;">We're sorry but your card has been declined. Please try again. </p> 
	<br /> 
	<img style="display: block;margin: auto;" src='https://media.giphy.com/media/GSRdhg838moBW/giphy.gif' alt='Swiper no Swiping'>
	<a href="{{Home Page URL}}">Back to Store</a>
	<?php
}

?>
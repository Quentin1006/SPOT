<?php
// Check for empty fields
if(empty($_POST['name'])  		||
   empty($_POST['email']) 		||
   empty($_POST['message'])	||
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
	echo "No arguments Provided!";
	return false;
   }
	
$name = $_POST['name'];
$email_address = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];
	
// Create the email and send the message
$to = 'info@spot-app.net'; // Add your email address inbetween the '' replacing yourname@yourdomain.com - This is where the form will send a message to.
$email_subject = "Demande de contact:  $name";
$email_body = "Vous avez recu un nouveau message du formulaire de contact spot-app.net.\n\n"."Voici les infos:\n\nNom: $name\n\nEmail: $email_address\n\nTelephone: $phone\n\nMessage:\n$message";
$headers = "From: noreply@yourdomain.com\n"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.
$headers .= "Reply-To: $email_address";	
mail($to,$email_subject,$email_body,$headers);

$returnTo = $email_address;
$header = "From: noreply@spot-app.net\n";
$header .= "MIME-Version: 1.0\n";
$header .= "Content-Type: text/html;charset=UTF-8\n";
$header .= "Content-Transfer-Encoding: 8bit\n";
$email_reply = "<html><body>Bonjour,<br/><p>Nous avons bien reçu votre message et nous vous remercions de l'interêt que vous portez à Spot.</p><p>Nous vous répondrons sous 48h.</p><p>Cordialement,</p><p>L'équipe Spot</p></body></html>";
mail($returnTo,'Demande de contact spot',$email_reply,$header);

return true;			
?>
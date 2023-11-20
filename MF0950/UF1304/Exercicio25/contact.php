<?php

if(!$_POST) exit;

// Email verification, do not edit.
function isEmail($email_contact ) {
	return(preg_match("/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,})$/",$email_contact ));
}

if (!defined("PHP_EOL")) define("PHP_EOL", "\r\n");

$name_contact     = $_POST['first_name'];
$lastname_contact = $_POST['last_name'];
$email_contact    = $_POST['email'];
$phone_contact   = $_POST['phone'];
$city_contact   = $_POST['city'];
// $message_contact = $_POST['message_contact'];
// $verify_contact   = $_POST['verify_contact'];

if(trim($name_contact) == '') {
	echo '<div class="error_message">Debes introducir un nombre.</div>';
	exit();
} else if(trim($lastname_contact ) == '') {
	echo '<div class="error_message">Debes introducir un apellido.</div>';
	exit();
} else if(trim($email_contact) == '') {
	echo '<div class="error_message">Por favor, introduce un email válido.</div>';
	exit();
} else if(!isEmail($email_contact)) {
	echo '<div class="error_message">Has introducido un email no válido, por favor inténtalo otra vez.</div>';
	exit();
} else if(trim($phone_contact) == '') {
	echo '<div class="error_message">Por favor introduce un teléfono válido.</div>';
	exit();
} else if(!is_numeric($phone_contact)) {
	echo '<div class="error_message">El teléfono solo admite números.</div>';
	exit();
}	else if(trim($city_contact) == '') {
	echo '<div class="error_message">Por favor introduce una cidade válido.</div>';
	exit();
} 
// else if(trim($message_contact) == '') {
// 	echo '<div class="error_message">Por favor, introduce tu mensaje.</div>';
// 	exit();
// } else if(!isset($verify_contact) || trim($verify_contact) == '') {
// 	echo '<div class="error_message"> Por favor, introduce el número de verificación.</div>';
// 	exit();
// } else if(trim($verify_contact) != '4') {
// 	echo '<div class="error_message">El número de verificación es erróneo.</div>';
// 	exit();
// }

if(get_magic_quotes_gpc()) {
	$message_contact = stripslashes($message_contact);
}


$address = "info@rubenterre.com";


// Below the subject of the email
$e_subject = 'Has sido contactado por' . $name_contact . '.';

// You can change this if you feel that you need to.
$e_body = "Has sido contactado por $name_contact $lastname_contact con el siguiente mensaje a continuación:" . PHP_EOL . PHP_EOL;
// $e_content = "\"$message_contact\"" . PHP_EOL . PHP_EOL;
$e_reply = "Tu puedes contactar $lastname_contact via email, $email_contact o via telefónica: $phone_contact";

$msg = wordwrap( $e_body . $e_content . $e_reply, 70 );

$headers = "From: $email_contact" . PHP_EOL;
$headers .= "Reply-To: $email_contact" . PHP_EOL;
$headers .= "MIME-Version: 1.0" . PHP_EOL;
$headers .= "Content-type: text/plain; charset=utf-8" . PHP_EOL;
$headers .= "Content-Transfer-Encoding: quoted-printable" . PHP_EOL;

$user = "$email_contact";
$usersubject = "Gracias";
$userheaders = "From: info@rubenterre.com\n";
$usermessage = "Gracias por contactar conmigo, te responderé lo antes posible.";
mail($user,$usersubject,$usermessage,$userheaders);

if(mail($address, $e_subject, $msg, $headers)) {

	// Success message
	echo "<div id='success_page' style='padding:20px 20px 20px 0'>";
	echo "<strong >Email enviado.</strong>";
	echo "Gracias <strong>$name_contact</strong>,<br> tu mensaje ha sido enviado correctamente. Te contactaremos lo antes posible.";
	echo "</div>";

} else {

	echo 'ERROR!';

}

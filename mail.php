<?php

$method = $_SERVER['REQUEST_METHOD'];

//Script Foreach
$c = true;
if ( $method === 'POST' ) {
	$project_name = "UROPOTEN заявка";
	$admin_email  = "litvinov_yuriy@inbox.ru";
	$form_subject = "Form Subject";

	foreach ( $_POST as $key => $value ) {
			$message .= "
			" . ( ($c = !$c) ? '<tr>':'<tr style="background-color: #f8f8f8;">' ) . "
				<td style='padding: 10px; border: #e9e9e9 1px solid;'><b>$key</b></td>
				<td style='padding: 10px; border: #e9e9e9 1px solid;'>$value</td>
			</tr>
			";
	}
}

$message = "<table style='width: 100%;'>$message</table>";

mail($admin_email, $form_subject, $message, "From: $project_name <$admin_email>" . "\r\n" . "Reply-To: $admin_email" . "\r\n" . "X-Mailer: PHP/" . phpversion() . "\r\n" . "Content-type: text/html; charset=\"utf-8\"");

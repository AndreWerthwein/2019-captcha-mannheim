<?php
//Spam-Kontrolle, durch ein unsichtbares Formularfeld
// if(isset($_POST['Kontrolle']) && $_POST['Kontrolle']) {
//     //Abbruch, da Spam verdacht
// 	header('Location: index.html');
// } else {

//Platzhalter-Absender, falls kein Absender angegeben wurde.
//Absender = Pflichtfeld (CSS, Java Script)
$email_from = "team@captcha-mannheim.de";

//Sender-e-Mail-Adresse als Absender
$sendermail_antwort = true;

//e-Mail-Adresse des Senders aus Formularfeld
$emailsender = "eMail";

//Empfänger des Kontaktformulars
$empfaenger = "team@captcha-mannheim.de";

//Empfänger einer Kopie des Kontaktformulars
$mail_cc = "";

//Betreff der e-Mail
$betreff = "Es gab eine neue Registrierung für einen der Workshops";

//Erfolgsmeldung — e-Mail-Versand
$url_versand = "index.html";

//Umleitung auf Startseite
$url_home = "index.html";

//Errormeldung - Bei fehlerhaftem Versand
$ulr_error = "index.html";

//Datum, wann die Mail erstellt wurde
//Füllen eines Arrays mit den Wochentagen zur Zuweisung durch PHP
$name_Tag = array();
$name_Tag[0] = "Sonntag";
$name_Tag[1] = "Montag";
$name_Tag[2] = "Dienstag";
$name_Tag[3] = "Mittwoch";
$name_Tag[4] = "Donnerstag";
$name_Tag[5] = "Freitag";
$name_Tag[6] = "Samstag";

//Abrufen des aktuellen Tages
$num_Tag = date("w");
$Tag = $name_Tag[$num_Tag];

//Abrufen des aktuellen Jahres
$Jahr = date("Y");
$n = date("d");

//Abrufen des aktuellen Monats
$Monat = date("m");

//Abrufen der aktuellen Uhrzeit
$Time = date("H:i");

//Erste Zeile der e-Mail
$msg = "$Tag, den $n.$Monat.$Jahr - $Time Uhr \n\n";

//While-Schleife, die alle Fomularfelder auf name="" und value="" durchläuft.
while (list($name,$value) = each($_POST)) {
   //if-Clause-Abfrage, ob das Feld ingoriert werden soll.
   //Zu ignorierende Felder werden einzeln festgelegt.
   // if (in_array($name, $ignore_fields)) {
   //      continue;
   // }
   // "/n" beginnt eine neue Zeile
   //Hier wir der Mail-Body mit den Werten aus den Formularfeldern befüllt.
   //Nimm das Formularfeld beim name="" und ordne ihm den Inhalt vale="" zu.
   $msg .= "$name\n$value\n\n";
}

//E-Mail Adresse des Besuchers als Absender
if ($sendermail_antwort and isset($_POST[$emailsender]) and filter_var($_POST[$emailsender], FILTER_VALIDATE_EMAIL)) {
   $email_from = $_POST[$emailsender];
}

$header="From: $email_from";

if (!empty($mail_cc)) {
   $header .= "\n";
   $header .= "Cc: $mail_cc";
}

$mail_senden = mail($empfaenger,$betreff,$msg,$header);

//Weiterleitung auf die "erfolg.html" oder "error.html"
if($mail_senden){
  header("Location: ".$url_versand); //Mail wurde gesendet
  exit();
} else{
  header("Location: ".$url_error); //Fehler beim Senden
  exit();
}
//  }
?>

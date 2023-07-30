<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST["name"];
  $email = $_POST["email"];
  $message = $_POST["message"];
  
  // Adres e-mail, na który ma zostać wysłane zapytanie
  $recipient = "twojemail@example.com";
  
  // Temat wiadomości e-mail
  $subject = "Nowe zapytanie ze strony kontaktowej";
  
  // Pobranie adresu IP użytkownika
  $ip = $_SERVER['REMOTE_ADDR'];
  
  // Pobranie informacji o sieci z której wysyłane jest zapytanie
  $network_info = gethostbyaddr($_SERVER['REMOTE_ADDR']);
  
  // Treść wiadomości e-mail
  $email_content = "Imię i nazwisko: $name\n";
  $email_content .= "Adres e-mail: $email\n";
  $email_content .= "Treść zapytania:\n$message\n";
  $email_content .= "Adres IP: $ip\n";
  $email_content .= "Informacje o sieci: $network_info\n";
  
  // Nagłówki e-maila
  $headers = "From: $name <$email>\r\n";
  $headers .= "Reply-To: $email\r\n";
  
  // Wysłanie wiadomości e-mail
  if (mail($recipient, $subject, $email_content, $headers)) {
    // Wyświetlenie potwierdzenia na stronie
    echo "Dziękujemy za wysłanie zapytania!";
  } else {
    // Wyświetlenie informacji o błędzie
    echo "Przepraszamy, wystąpił problem podczas wysyłania zapytania.";
  }
}
?>

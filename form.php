<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $from = 'From: jorgecaceres.com'; 
    $to = 'mannkyleca@gmail.com'; 
    $subject = 'Subscription';

    $body = "From: $name\n E-Mail: $email\n Message:\n $message";
?>

<?php
if ($_POST['submit']) {
    if (mail ($to, $subject, $body, $from)) { 
        echo '<p>Thank you for your Subscrition!<a href="">Return to Homepage</a></p>';
    } else { 
        echo '<p>Oops! An error occurred. Try sending your message again.</p>'; 
    }
}
?>

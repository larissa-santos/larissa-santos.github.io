<?php
require_once("../class/class.phpmailer.php");

/* link de apoio: http://www.devmedia.com.br/enviando-e-mail-com-o-phpmailer/9642 */
function SendEmailSMP($email_from, $email_subject, $email_body, $headers){	 
	// Inicia a classe PHPMailer
	$mail = new PHPMailer(true);
	 
	// Define os dados do servidor e tipo de conexão
	// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
	$mail->IsSMTP(); // Define que a mensagem será SMTP
	 
	try 
	{
		$mail->Host = 'smtp.seudominio.com.br'; // Endereço do servidor SMTP (Autenticação, utilize o host smtp.seudomínio.com.br)
		$mail->SMTPAuth   = true;  // Usar autenticação SMTP (obrigatório para smtp.seudomínio.com.br)
		$mail->Port       = 587; //  Usar 587 porta SMTP
		$mail->Username = 'usuário de smtp'; // Usuário do servidor SMTP (endereço de email)
		$mail->Password = 'senha de smtp'; // Senha do servidor SMTP (senha do email usado)

		// Define o remetente
		// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=    
		$mail->SetFrom('seu@e-mail.com.br', 'Nome'); //Seu e-mail
		$mail->AddReplyTo('seu@e-mail.com.br', 'Nome'); //Seu e-mail
		$mail->Subject = 'Assunto';//Assunto do e-mail


		// Define os destinatário(s)
		//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
		$mail->AddAddress('e-mail@destino.com.br', 'Teste Locaweb');

		//Campos abaixo são opcionais 
		//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
		//$mail->AddCC('destinarario@dominio.com.br', 'Destinatario'); // Copia
		//$mail->AddBCC('destinatario_oculto@dominio.com.br', 'Destinatario2`'); // Cópia Oculta
		//$mail->AddAttachment('images/phpmailer.gif');      // Adicionar um anexo


		//Define o corpo do email
		$mail->MsgHTML('corpo do email'); 

		////Caso queira colocar o conteudo de um arquivo utilize o método abaixo ao invés da mensagem no corpo do e-mail.
		//$mail->MsgHTML(file_get_contents('arquivo.html'));

		$mail->Send();
		echo "Mensagem enviada com sucesso</p>\n";

		//caso apresente algum erro é apresentado abaixo com essa exceção.
	} 
	catch (phpmailerException $e) 
	{
		echo $e->errorMessage(); //Mensagem de erro costumizada do PHPMailer
	}
}

function IsInjected($str)
{
    $injections = array('(\n+)',
           '(\r+)',
           '(\t+)',
           '(%0A+)',
           '(%0D+)',
           '(%08+)',
           '(%09+)'
           );
                
    $inject = join('|', $injections);
    $inject = "/$inject/i";
     
    if(preg_match($inject,$str))
    {
      return true;
    }
    else
    {
      return false;
    }
}

if (isset($_POST['name']) && isset($_POST['email']) && isset($_POST['mensagem'])) {
	
	$nome = $_POST['name'];
	$email = $_POST['email'];
	$mensagem = $_POST['mensagem'];
	$assunto = (isset($_POST['assunto']))? $_POST['assunto'] : '';

	$email_from = 'larissapcsantos@gmail.com';
 
    $email_subject = '[Enacomp]' . $assunto;
 
    $email_body = 'You have received a new message from the user ' . $nome . '.\n Here is the message:\n ' .$mensagem;
    
    $headers = 'From: '.$email_from .'\r\n';
 	$headers .= 'Reply-To: '.$email.'\r\n';
 	
 	if (IsInjected($email)) {
	    echo "Bad email value!";
	    die();
	}
    
    mail($email_from, $email_subject, $email_body, $headers);

}
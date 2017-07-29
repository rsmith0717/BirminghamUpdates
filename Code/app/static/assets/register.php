<?php
if($_SERVER["REQUEST_METHOD"] == "POST")
{
include('connect.php');
	$jsonArray = json_decode(file_get_contents('php://input'), true);
	
$userEmail=$jsonArray['UserEmail'];
$userName=$jsonArray['UserName'];
$userpasword=$jsonArray['UserPassword'];
$randumNum= mt_rand(100000, 999999);
 $current_date = date("Y-m-d H:i:s");
$returnArray = array();

			$CheckEmail = "SELECT * FROM `users` where  UserEmail ='$userEmail'";
			$runQuery = mysqli_query($conn,$CheckEmail);
			$row = mysqli_num_rows($runQuery);
			if($row >= 1)
			{
				$returnArray[]=$row;
				$returnArray['Developer_Message']='Email Alredy Exist';
				$returnArray['status']=1;
			}
			else
			{
			$insertUser ="INSERT INTO `users`(`FullName`,`UserEmail`,`Password`,`TimeStamp`,`VerifyToken`) VALUES
('$userName','$userEmail','$userpasword','$current_date','$randumNum')";
			if(mysqli_query($conn,$insertUser))
			{
				//$to= "$userEmail";
//				$subject = 'Verification Code';
//				$message = "Your Verification Code is: $randumNum";
//				$headers = 'From: arbishpalla@hotmail.com' . "\r\n" .
//				'Reply-To: noreply@noreply.com' . "\r\n" .
//				'X-Mailer: PHP/' . phpversion();
//				mail($to, $subject, $message, $headers);
				
			require "sendgrid-php/sendgrid-php.php";
      		$sendgrid = new SendGrid('azure_bbb84fcdf903bb59e30466c7fce5e760@azure.com',		'tF9Dadl2AXQQ27o');
				$mail = new SendGrid\Email();
                      try
                         {
                            $mail
                            ->addTo($BrokerEmailArray) 
                            ->addBcc('rajiv@hariinc.com')
                            ->setFrom('LocationUpdate@dispatchOn.com')
                            ->setFromName('Dispatch')
                            ->setSubject("This is check In call for Load # $LoadNo")
                            ->setHtml($CheckInNotes);
                            $sendgrid->send($mail);
                        }
                    catch (\SendGrid\Exception $e)
                        {
                            $DeliveredMail = new SendGrid\Email();
                            $mails = array('arbishpalla@gmail.com','zohairhemani1@gmail.com');
                            $DeliveredMail
                            ->addTo($mails) 
                            //->addBcc('rajiv@hariinc.com')
                            ->setFrom('LocationUpdate@dispatchOn.com')
                            ->setFromName('Dispatch')
                            ->setSubject('Message: ' .$e->getMessage())
                            ->setHtml("$e <br /> 
                            Load #: <u>$LoadNo</u><br /> 
                            UserEmail: <u>$LoginEmail</u><br />
                            Destination Email: $BrokerEmail<br />
                            Message From: Add Loads Page when check in call button is on");
                            $sendgrid->send($DeliveredMail); 
							
							$returnArray['Developer_Message']='Insert user SuccessFully';
							$returnArray['status']=2;             
                        }

				
			}
			
else
{
	$returnArray['Developer_Message']='Failed to Execute query';
	$returnArray['status']=-1;
}
}
echo json_encode($returnArray);	
}
?>
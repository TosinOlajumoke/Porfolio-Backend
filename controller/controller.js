const nodemailer = require ("nodemailer");

const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "meet.tosinolajumoke@gmail.com",
      pass: "wtemouqsqrncitho",
    },
  });




exports.hello = async (req, res) => {
    res.status(200).json({msg:"Welcome to my API"});
}

exports.sendMailer = async (req, res) => {

    const { name, number, email, to, subject, message } = req.body;
  
    // Create the email body for the recipient
    const recipientMailBody = `
      <p>Hi Tosin,</p>
      <p>${message}</p>
       <p>${name}</p>
       <p>${email}</p>
       <p>${number}</p>
    `;
  
    // Create the email body for the sender
    const senderMailBody = `
      <p>Hello ${name},</p>
      <p>You have sent the following message to Tosin Olajumoke:</p>
      <p>${message}</p>
      <p>Kindly wait for response</p>
      <p>Regards,</p>
      <p>Tosin</p>
    `;
  
    // Mail options for the recipient
    const recipientMailOptions = {
      from: name + email,
      to: to, // Allow any email address to receive the message
      subject: subject,
      html: recipientMailBody,
    };
  
    // Mail options for the sender
    const senderMailOptions = {
      from: email,
      to: email, // Send a copy to the sender
      subject: subject,
      html: senderMailBody,
    };
  
    try {
      // Send email to the recipient
      await transporter.sendMail(recipientMailOptions);
  
      // Send email to the sender
      await transporter.sendMail(senderMailOptions);
      res.status(200).json({msg:"Email sent"});
      // Respond with success message
    } catch (error) {
        res.status(500).json({msg:"Error occur"});
    }
    
  };
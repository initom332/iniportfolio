function SendMail(){
    let parms = {
        name : DocumentTimeline.getElementById("name").value,
        email : DocumentTimeline.getElementById("email").value,
        subject : DocumentTimeline.getElementById("subject").value,
        message : DocumentTimeline.getElementById("message").value,
    }
    emailjs.send{"service_qgvjkf2","template_znmd9m6",parms}.then(alert("Email sent!"))
}
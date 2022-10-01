import emailjs from "emailjs-com";


const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm(
      `${process.env.REACT_APP_YOUR_SERVICE_ID}`,
      `${process.env.REACT_APP_YOUR_TEMPLATE_ID}`,
      data,
      `${process.env.REACT_APP_YOUR_PUBLIC_KEY}`
    )
    .then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
};

export { sendEmail };

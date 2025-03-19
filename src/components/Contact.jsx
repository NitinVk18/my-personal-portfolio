import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "",   // Replace with your EmailJS Service ID
        "yZVsnO2a15HSOkXr3",  // Replace with your EmailJS Template ID
        form.current,
        "YDUW1JqeYAOwzMQoUyaoH"    // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          setIsSent(true);
          form.current.reset(); // Reset form after submission
        },
        (error) => {
          console.log("Error:", error.text);
        }
      );
  };

  return (
    <div className="p-8 mt-8">
    <div className="max-w-2xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md mt-10">
      <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white">
        Contact Me
      </h2>
      <p className="text-center text-gray-600 dark:text-gray-300">
        Feel free to send me a message!
      </p>

      <form ref={form} onSubmit={sendEmail} className="mt-6 space-y-4">
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          required
          className="w-full p-3 border rounded-md dark:bg-gray-700 dark:text-white"
        />
        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          required
          className="w-full p-3 border rounded-md dark:bg-gray-700 dark:text-white"
        />
        <textarea
          name="message"
          rows="4"
          placeholder="Your Message"
          required
          className="w-full p-3 border rounded-md dark:bg-gray-700 dark:text-white"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md transition-all"
        >
          Send Message
        </button>
        <h1>OR manually send mail to chamolinitin7@gmail.com | 9815679841</h1>
      </form>

      {isSent && (
        <p className="text-green-500 text-center mt-3">
          ✅ Message sent successfully!
        </p>
      )}
      </div>
    </div>
  );
};

export default Contact;

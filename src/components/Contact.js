import React, { useRef } from "react";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";
import {SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY} from '../constant';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(SERVICE_ID,TEMPLATE_ID, form.current, {
        publicKey: PUBLIC_KEY,
      })
      .then(
        () => {
          console.log("SUCCESS!");
          toast.success("Your Message send Sucessfully");

        },
        (error) => {
          console.log("FAILED...", error.text);
          toast.error("Something went Wrong!!");
        }
      );
  };

  return (
    <div name="contact" className="w-full bg-gray-100">
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="flex justify-center">
          <p className="text-4xl font-bold inline border-b-4 p-1 border-gray-500 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text mb-8">
            Contact Us
          </p>
        </div>
        <div className="flex justify-center items-center">
          <form ref={form} className="flex flex-col w-full md:w-1/2" onSubmit={sendEmail}>
            <input
              type="text"
              name="from_name"
              placeholder="Enter Your Name"
              className="p-2 mb-1 bg-transparent border-2 border-black rounded-md text-black"
            />
            <input
              type="text"
              name="from_email"
              placeholder="Enter Your Email"
              className="p-2 mb-1 bg-transparent border-2 border-black rounded-md text-black"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows={10}
              className="p-2 bg-transparent border-2 border-black rounded-md text-black"
            ></textarea>
            <input
              className="text-black bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-4 mx-auto flex items-center rounded-md hover::scale-110 duration-300 cursor-pointer"
              type="submit"
              value="Let's Talk"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

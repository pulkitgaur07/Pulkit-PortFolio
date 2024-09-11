import React, { useRef, useState } from "react";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(process.env.REACT_APP_SERVICE_ID,process.env.REACT_APP_TEMPLATE_ID, form.current, {
        publicKey: process.env.REACT_APP_PUBLIC_KEY,
      })
      .then(
        () => {
          console.log("SUCCESS!");
          toast.success("Your Message send Sucessfully");
          form.current.reset();
          setLoading(false);
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast.error("Something went Wrong!!");
          setLoading(false);
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
              required
              className="p-2 mb-1 bg-transparent border-2 border-black rounded-md text-black"
            />
            <input
              type="text"
              name="from_email"
              required
              placeholder="Enter Your Email"
              className="p-2 mb-1 bg-transparent border-2 border-black rounded-md text-black"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              required
              rows={10}
              className="p-2 bg-transparent border-2 border-black rounded-md text-black"
            ></textarea>
            <input
              className={`text-black bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-4 mx-auto flex items-center rounded-md hover::scale-110 duration-300 ${loading ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
              type="submit"
              value={loading ? "Sending..." : "Let's Talk"}
              disabled = {loading}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

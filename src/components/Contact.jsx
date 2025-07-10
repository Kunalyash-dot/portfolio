import React, { useRef, useState } from 'react'
import { motion } from "motion/react"
import emailjs from "@emailjs/browser";
import mailImg from '../assets/email-image.png'

function Contact() {
  const [formData, setFormData] = useState({
  name: "",
    email: "",
    message: ""
  });
  const [success, setSuccess] = useState("");
  const form = useRef();
  const handleChange = (e) => {
    setFormData({
      ...formData, [e.target.id]: e.target.value,
    });
  };
  console.log(formData);
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_yepiocl", "template_96x3p5r", form.current, {
        publicKey: "QsizFcc_Om3ZOZWQS",
      })
      .then(
        () => {
          setFormData({
            name: "",
            email: "",
            message: ""
          })
          setSuccess("Message Sent Succesfully 🎉");
         
        setTimeout(() => {
          setSuccess("");
        }, 5000);

        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div className='border-b border-neutral-900 pb-20'>
      <motion.h2 whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 2 }} className='my-10 text-center text-4xl'>Contact Me</motion.h2>

      <div className='flex flex-wrap'>
        {/* left */}
        <div className='w-full lg:w-1/2 lg:p-8'>
          <h2 className='font-semibold text-3xl text-purple-500 mb-4'>Get In Touch</h2>
          <p className='p-1'>Feel free to reach out. You are just a few clicks away! 
            </p>
          <p className="text-green-700 m-2 text-xl font-semibold  ">{success}</p>
          {/* form  */}
          <form ref={form} onSubmit={sendEmail} className='flex flex-col gap-4'>
            <input type="text" placeholder='Your Name' name="name" className='border p-3 rounded-lg' id='name' value={formData.name} onChange={handleChange} required />

            <input type="email" placeholder='email' className='border p-3 rounded-lg' name="email" id='email' value={formData.email} onChange={handleChange} required />
            <textarea
              type="text" placeholder='Message' rows='5' cols='50' className='border p-3 rounded-lg' id='message' name="message" onChange={handleChange} value={formData.message} required />
            <button className='bg-green-700 text-white p-3 rounded-lg  hover:bg-green-500 ' type="submit" >Send Message</button>
          </form>
        </div>

        {/* right */}
        <div className='w-full lg:w-1/2 lg:p-8'>
          <div className='flex items-center justify-center py-6'>
          <img src={mailImg} alt="mail-Image" className='p-4' width='350' height='200' /></div>
        </div>
      </div>

    </div>
  )
}

export default Contact

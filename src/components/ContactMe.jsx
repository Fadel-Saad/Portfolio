import { useState, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import emailjs from "@emailjs/browser";

function ContactMe() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const form = useRef();

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm("service_ci4uu9b", "contact_form", form.current, {
        publicKey: "aVC-FOiy2y14LZDav",
      })
      .then(
        () => {
          setName("");
          setEmail("");
          setMessage("");
          toast.success("✅ Message Sent!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  }

  return (
    <div id="Contact" className="w-full text-center mb-25 md:scroll-mt-30">
      <h2 className="mb-20 text-primary text-3xl xl:text-4xl 2xl:text-5xl inline-block underline underline-offset-12">
        Get in Touch
      </h2>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col items-center w-[70%] md:w-[50%] lg:w-[30%] mx-auto"
      >
        <input
          className="input input-md lg:input-xl validator w-full"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          name="user_email"
          placeholder="Email*"
        />
        <div className="validator-hint self-start">Enter valid email address</div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          name="user_name"
          required
          className="input input-md lg:input-xl mt-2 mb-6 w-full"
        />
        <textarea
          className="textarea textarea-md lg:textarea-xl mb-5 h-60 w-full"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          placeholder="Message"
          name="message"
        ></textarea>
        <button
          value="Send"
          type="submit"
          className="btn btn-primary btn-sm xl:btn-lg w-15 lg:w-25 self-end"
        >
          Send
        </button>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </form>
    </div>
  );
}

export default ContactMe;

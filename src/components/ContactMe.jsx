function ContactMe() {
  return (
    <div id="Contact" className="w-full text-center mb-25 scroll-mt-30">
      <h2 className="mb-20 text-primary text-3xl xl:text-4xl 2xl:text-5xl inline-block underline underline-offset-12">
        Get in Touch
      </h2>
      <form
        action=""
        className="flex flex-col items-center w-[70%] md:w-[50%] lg:w-[30%] mx-auto"
      >
        <input
          className="input input-md lg:input-xl validator w-full"
          type="email"
          required
          placeholder="Email*"
        />
        <div className="validator-hint self-start">Enter valid email address</div>
        <input
          type="text"
          placeholder="Name"
          className="input input-md lg:input-xl mt-2 mb-6 w-full"
        />
        <textarea
          className="textarea textarea-md lg:textarea-xl mb-5 h-60 w-full"
          placeholder="Message"
        ></textarea>
        <button className="btn btn-primary btn-sm xl:btn-lg w-15 lg:w-25 self-end">
          Send
        </button>
      </form>
    </div>
  );
}

export default ContactMe;

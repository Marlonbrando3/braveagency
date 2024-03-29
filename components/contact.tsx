import React from "react";
import { useRef, useState } from "react";

export default function Contact() {
  const name: any = useRef();
  const phone: any = useRef();
  const email: any = useRef();
  const msg: any = useRef();
  const submitButton: any = useRef();

  const handleFormSending = async (e: any) => {
    submitButton.current.innerText = "I'm sending...";
    submitButton.current.style.backgroundColor = "green";
    submitButton.current.style.border = "1px green solid";
    submitButton.current.style.color = "white";
    console.log("przed fetch");

    e.preventDefault();
    const res = await fetch("/api/sendform", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name.current.value,
        email: email.current.value,
        phone: phone.current.value,
        msg: msg.current.value,
      }),
    });
    const data = await res.json();
    console.log(data.info);

    if (data.info === "true") {
      setTimeout(() => {
        submitButton.current.innerText = "Wysłano!";
        submitButton.current.style.border = "1px green solid";
        submitButton.current.style.backgroundColor = "green";
        submitButton.current.style.color = "white";
      }, 350);
    } else {
      submitButton.current.style.backgroundColor = "red";
      submitButton.current.style.border = "1px red solid";
      submitButton.current.style.color = "white";
      submitButton.current.innerText = "Nie wysłano. Spróbuj ponownie";
    }
  };

  return (
    <>
      <div id="contact" className="h-[1px] w-full"></div>
      <div className="lg:w-[1140px] mx-auto relative mb-4 lg:my-28">
        <div className="flex w-full lg:flex-row flex-col">
          <div className="h-28 lg:mt-36 lg:w-[200px] w-[20px] relative">
            <div className="bg-[#423e59] lg:text-[64.6px] text-[40px] absolute lg:rotate-90 lg:h-[108px] h-[80px] lg:mt-0 mt-[60px] left-[1px] text-white whitespace-nowrap">
              Napisz do nas.
            </div>
          </div>
          <form
            onSubmit={handleFormSending}
            className="lg:w-8/12 w-11/12 form-style p-8 bg-[#423e59] flex flex-col"
          >
            <input
              ref={name}
              className="input lg:ml-10 my-2 p-2"
              type="text"
              placeholder="your name"
              required
            ></input>
            <input
              ref={email}
              className="input lg:ml-10 my-2 p-2"
              type="email"
              placeholder="your email"
              required
            ></input>
            <input
              ref={phone}
              className="input lg:ml-10 my-2 p-2"
              type="number"
              placeholder="your phone number"
            ></input>
            <textarea
              ref={msg}
              className="input h-[160px]  lg:ml-10 my-2 p-2"
              placeholder="your message e.g. how can i help you?"
            ></textarea>
            <button
              ref={submitButton}
              className="border border-text-[#423e59] bg-white text-[#423e59] rounded-md py-3 text-2xl duration-300 font-bold mt-10 hover:bg-[#423e59] hover:text-white"
            >
              Wyślij
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

import React from 'react';
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import * as vars from '../key/Keys';
export default function Form(props) {
  const form = useRef();
  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(vars.SERVICE_ID, vars.TEMPLATE_ID, form.current, vars.PUBLIC_KEY).then(
      (result) => {
        alert('Wiadomość została wysłana pomyślnie');
      },
      (error) => {
        alert('Spróbuj ponownie');
      }
    );
  };
  return (
    <div class="block w-full lg:w-[35%] md:w-1/2">
      <form class="flex justify-between flex-col h-auto lg:h-[400px]" ref={form} onSubmit={handleOnSubmit}>
        <div class="flex flex-col">
        <div class="form-group mb-6">
          <input
            placeholder="Imię"
            type="name"
            name="name"
            class="        
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                font-lato
                text-gray-700
                border-x-0 border-t-0 border-b border-solid border-gray-300
                transition
                ease-in-out
                m-0
                bg-transparent
                duration-300
                hover:text-gray-700 hover:border-[#343434] hover:outline-none
                focus:text-gray-700 focus:border-[#343434] focus:outline-none"
            id="name"
          />
        </div>

        <div class="form-group mb-6">
          <input
            type="email"
            name="email"
            class="  
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            font-lato
            text-gray-700
            border-x-0 border-t-0 border-b border-solid border-gray-300
            transition
            ease-in-out
            m-0
            bg-transparent
            duration-300
            hover:text-gray-700 hover:border-[#343434] hover:outline-none
            focus:text-gray-700 focus:border-[#343434] focus:outline-none"
            id="email"
            placeholder="Email"
          />
        </div>
        <div class="form-group mb-6">
          <input
            type="text"
            name="subject"
            class="         
            w-full
            px-3
            py-1.5
            text-base
            font-lato
            font-normal
            text-gray-700
            border-x-0 border-t-0 border-b border-solid border-gray-300
            transition
            ease-in-out
            m-0
            bg-transparent
            duration-300

            hover:text-gray-700 hover:border-[#343434] hover:outline-none
            focus:text-gray-700 focus:border-[#343434] focus:outline-none"
            id="subject"
            placeholder="Temat"
          />
        </div>
        <div class="form-group mb-6">
          <textarea
            rows="3"
            type="text"
            name="message"
            class="
            w-full
            px-3
            py-1.5
            font-lato
            text-base
            font-normal
            text-gray-700
            border-x-0 border-t-0 border-b border-solid border-gray-300
            transition
            ease-in-out
            m-0
            bg-transparent
            duration-300
            hover:text-gray-700 hover:border-[#343434] hover:outline-none
            focus:text-gray-700 focus:border-[#343434] focus:outline-none"
            id="message"
            placeholder="Wiadomość"
          />
        </div>
        </div>
        <div className="flex">
          <button
            type="submit"
            class="w-full flex justify-center
                px-6
                py-2.5
                bg-teal-700
                text-white
                font-vol
                items-end
                tracking-widest
                font-bold
                text-xs
                leading-tight
                uppercase
                rounded
                shadow-md

                hover:bg-teal-800 hover:shadow-lg
                focus:bg-teal-800 focus:shadow-lg focus:outline-none focus:ring-0
                active:bg-teal-900 active:shadow-lg
                transition
                duration-150
                ease-in-out"
          >
            Wyślij
          </button>
        </div>
      </form>
    </div>
  );
}

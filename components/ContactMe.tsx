import React, { FormEventHandler, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Toaster, toast } from 'react-hot-toast';

export const ContactMe = () => {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail: FormEventHandler<HTMLFormElement> = (e) => {
    const target = e.target as HTMLFormElement;
    console.log(e);
    e.preventDefault();

    emailjs
      .sendForm(
        'service_qn7w2vb',
        'contact_form',
        form.current || '',
        '9OZhUrWFpJmldgmJ6'
      )
      .then(
        (result) => {
          console.log(result.text);
          target?.reset();
          //react hot toast function for successful form notification
          toast.success('Message sent successfully! Thanks!', {
            duration: 4000,
            position: 'bottom-center',
          });
        },
        (error) => {
          console.log(error.text);
          target?.reset();
          //unsuccessful notification
          toast.error(
            'Something went wrong, try again, or contact me elsewhere please!',
            {
              duration: 4000,
              position: 'bottom-center',
            }
          );
        }
      );
  };

  return (
    <div className="flex flex-col justify-center align-middle items-center shadow-md bg-white  dark:bg-gray-200 w-3/4 h-2/4 py-4">
      {/* react-hot-toast notification component with styling*/}
      <Toaster
        toastOptions={{
          success: {
            style: {
              background: 'green',
            },
          },
          error: {
            style: {
              background: 'red',
            },
          },
          style: {
            border: '1px solid #713200',
            padding: '16px',
            color: 'white',
          },
        }}
      />

      <h3 className="text-lg py-3 text-center  dark:text-cyan-800 text-cyan-700">
        Contact Me:
      </h3>
      <form className="flex flex-col w-2/4" ref={form} onSubmit={sendEmail}>
        <label className="text-lg py-2 text-center  dark:text-cyan-800 text-cyan-700">
          Name:
        </label>
        <input
          required
          className="border-cyan-700 border  dark:text-cyan-800 dark:bg-gray-200"
          type="text"
          name="user_name"
        />
        <label className="text-lg py-2 text-center  dark:text-cyan-800 text-cyan-700">
          Email:
        </label>
        <input
          required
          className="border-cyan-700 border   dark:text-cyan-800 dark:bg-gray-200"
          type="email"
          name="user_email"
        />
        <label className="text-lg py-2 text-center  dark:text-cyan-800 text-cyan-700">
          Message:
        </label>
        <textarea
          required
          className="border-cyan-700 border py-3 my-3  dark:text-cyan-800  dark:bg-gray-200"
          name="message"
        />
        <button
          formAction="submit"
          className="cursor-pointer hover:shadow-md hover:opacity-90  bg-gradient-to-r from-cyan-900 to-cyan-600 text-white px-4 py-2 rounded-md"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

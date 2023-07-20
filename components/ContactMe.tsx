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
    <div className="flex flex-col justify-center align-middle items-center w-3/4 h-3/4 py-4">
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

      <h3 className="text-5xl font-bold mt-12 py-3 text-center text-white">
        Let&apos;s Talk
      </h3>
      <form
        className="flex flex-col justify-center w-2/4"
        ref={form}
        onSubmit={sendEmail}
      >
        <div className="lg:grid lg:grid-cols-2 gap-4 flex flex-col">
          <div className="flex flex-col">
            <label className="text-lg font-bold py-2  text-white">Name</label>
            <input
              required
              className="border-white border rounded-md py-2"
              type="text"
              name="user_name"
              placeholder="Enter your name"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-lg py-2 font-bold text-white">Email</label>
            <input
              placeholder="Enter your email"
              required
              className="border-white border rounded-md py-2 "
              type="email"
              name="user_email"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <label className="text-lg py-2 font-bold text-white">Message</label>
          <textarea
            placeholder="Enter your message"
            required
            className="border-white border  py-5 my-3 rounded-md bg-[rgba(255, 255, 255, 0.12)]"
            name="message"
          />
        </div>
        <div className="flex justify-center">
          <button
            formAction="submit"
            className="cursor-pointer hover:opacity-80 border border-white font-bold text-lg align-middle  text-white w-24 px-4 py-2 rounded-md"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

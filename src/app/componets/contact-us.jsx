import { useState } from 'react';
// import { useCollection } from 'react-firebase-hooks/firestore';
import { collection, doc, FieldValue, setDoc } from 'firebase/firestore';

import db from '../utils/firebase';
import addData from '../utils/firebase';


const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const info = {
        name: name,
        email: email,
        message: message,
        createdAt: new Date(),
      }
      const id = Math.random(4) * 10000;
      console.log(id);
      // const id = 'digitalethics' + idNumber;
      await addData(info);
      setName('');
      setEmail('');
      setMessage('');
      setSubmitted(true);
      console.log('Submission worked');
    } catch (err) {
      setError(err);
    }
  };

  return (
    <section id='contactus' className="bg-neutral-900 dark:bg-neutral-900 pt-28">
      <div className='gap-16 items-start content-center py-8 px-4 mx-auto max-w-screen-xl md:grid md:grid-cols-2 lg:py-16 lg:px-6'>
        <div>                 <h1 className="text-5xl font-extrabold text-white dark:text-white sm:text-7xl">READY?
                  </h1>
                  <h1 className="text-5xl font-extrabold text-white dark:text-white sm:text-7xl">
                  LET'S GO</h1>
                <p className="mt-4 text-lg text-white dark:text-white">We specialise in driving revenue using paid and organic social marketing tactics. If you are a brand looking to scale, get in touch to discuss your goals.</p>
          </div>
        {/* <div className="py-20 lg:py-32"> */}
        <div className="">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center">
              <div className="w-full lg:w-2/3 xl:w-1/2">

                <form className="mt-9" onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="name" className="text-white">Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="block w-full shadow-sm py-3 px-4 bg-transparent placeholder-white text-white focus:ring-neutral-500 focus:border-neutral-500 border-white border-b-2 "
                      placeholder=""
                    />
                  </div>
                  <div className="mt-6">
                    <label htmlFor="email" className="text-white">Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="block w-full shadow-sm py-3 px-4 bg-transparent placeholder-white text-white focus:ring-neutral-500 focus:border-neutral-500 border-white border-b-2 "
                      placeholder=""
                    />
                  </div>
                  <div className="mt-6">
                    <label htmlFor="message" className="text-white">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                      className="block w-full shadow-sm py-3 px-4 bg-transparent placeholder-white focus:ring-neutral-500 focus:border-neutral-500 border-white border-b-2  text-white"
                      placeholder=""
                    ></textarea>
                  </div>
                  <div className="mt-6">
                    <button
                      type="submit" 
                      className="transition duration-150 ease-in-out lg:text-xl lg:font-bold hover:bg-transparent hover:text-white hover:text-base font-black hover:border-transparent  text-lime-400 px-4 sm:px-4 border-x-2 border-lime-400 py-2 sm:py-2 ">
                      Hit Us Up !
                    </button>
                  </div>
                </form>
                {submitted && <div className="mt-6 text-white">Message sent!</div>}
                {error && <div className="mt-6 text-red-600">Error: {error.message}</div>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;

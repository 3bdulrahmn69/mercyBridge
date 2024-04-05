import { useTranslation } from 'react-i18next';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import EmailAlert from './EmailAlert';

const ContactForm = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isAlertVisible, setIsAlertVisible] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm('service_dvspcyq', 'template_b9nf4nb', form.current, {
        publicKey: 'utVudGUqBXmHDJHrK',
      })
      .then(
        () => {
          setFormData({ name: '', email: '', message: '' });
          setIsAlertVisible(true);
          setInterval(() => {
            setIsAlertVisible(false);
          }, 2000);
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <>
      {isAlertVisible && <EmailAlert Message={'Message sent successfully'} />}
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col gap-2 w-full"
      >
        <label htmlFor="name">
          {t('Full_Name')} <span className="text-red-600 select-none">*</span>
          <input
            type="text"
            name="name"
            placeholder={t('Full_Name')}
            className="w-full px-4 py-2 rounded bg-transparent text-xl border-b-2 border-black text-black placeholder:text-gray-500 focus:outline-none"
            value={formData.name}
            onChange={(e) => {
              setFormData({ ...formData, name: e.target.value });
            }}
          />
        </label>
        <label htmlFor="email">
          {t('Email')} <span className="text-red-600 select-none">*</span>
          <input
            type="email"
            name="email"
            placeholder={t('Email')}
            className="w-full px-4 py-2 rounded bg-transparent text-xl border-b-2 border-black text-black placeholder:text-gray-500 focus:outline-none"
            value={formData.email}
            onChange={(e) => {
              setFormData({ ...formData, email: e.target.value });
            }}
          />
        </label>
        <label htmlFor="message">
          {t('Message')} <span className="text-red-600 select-none">*</span>
          <textarea
            name="message"
            placeholder={t('Message')}
            className="w-full min-h-60 px-4 py-2 bg-slate-50 rounded mt-2 bg-transparent text-xl border border-gray-300 border-b-2 border-b-black text-black placeholder:text-gray-500 focus:outline-none resize-none"
            value={formData.message}
            onChange={(e) => {
              setFormData({ ...formData, message: e.target.value });
            }}
          />
        </label>
        <div className="w-full">
          {isSubmitting ? (
            <div className="bg-green-500 rounded w-full py-4 flex justify-center items-center">
              <span className="w-3 h-3 bg-white rounded-full mx-2 animate-pulse"></span>
              <span className="w-3 h-3 bg-white rounded-full mx-2 animate-pulse"></span>
              <span className="w-3 h-3 bg-white rounded-full mx-2 animate-pulse"></span>
            </div>
          ) : (
            <input
              type="submit"
              value={t('Send_Message')}
              disabled={!formData.name || !formData.email || !formData.message}
              className={`bg-green-500 text-white p-2 rounded w-full ${
                !formData.name || !formData.email || !formData.message
                  ? 'opacity-50 cursor-not-allowed'
                  : 'cursor-pointer hover:bg-green-600 transition-colors'
              }`}
              title={
                !formData.name || !formData.email || !formData.message
                  ? 'Please fill out all fields'
                  : 'Send Message'
              }
            />
          )}
        </div>
      </form>
    </>
  );
};

export default ContactForm;

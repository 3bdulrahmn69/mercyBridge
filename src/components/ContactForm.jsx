import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const ContactForm = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log(formData);
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      }}
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
      <input
        type="submit"
        value={t('Send_Message')}
        disabled={!formData.name || !formData.email || !formData.message}
        className={`bg-green-500 text-white p-2 rounded ${
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
    </form>
  );
};

export default ContactForm;

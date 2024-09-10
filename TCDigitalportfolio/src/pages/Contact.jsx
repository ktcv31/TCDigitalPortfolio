import React, { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!form.name) setErrors({ ...errors, name: 'Name is required' });
    if (!form.email) setErrors({ ...errors, email: 'Email is required' });
    else if (!/\S+@\S+\.\S+/.test(form.email)) setErrors({ ...errors, email: 'Email is invalid' });
 
  };

  return (
    <section>
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={form.name} onChange={handleChange} />
          {errors.name && <span>{errors.name}</span>}
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={form.email} onChange={handleChange} />
          {errors.email && <span>{errors.email}</span>}
        </div>
        <div>
          <label>Message:</label>
          <textarea name="message" value={form.message} onChange={handleChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default Contact;

import React, { useState } from 'react';
import axios from 'axios';
import SimpleReactValidator from 'simple-react-validator';

const ContactForm = () => {
  const [forms, setForms] = useState({
    name: '',
    email: '',
    subject: '',
    phone: '',
    message: ''
  });

  const [validator] = useState(new SimpleReactValidator({
    className: 'errorMessage'
  }));

  const changeHandler = e => {
    setForms({ ...forms, [e.target.name]: e.target.value });
    validator.showMessages();
  };

  const submitHandler = async e => {
    e.preventDefault();
    if (validator.allValid()) {
      validator.hideMessages();

      try {
        await axios.post('https://sheetdb.io/api/v1/8rxstbl9zlukw', {
          data: forms
        });

        alert("Message sent successfully!");

        setForms({
          name: '',
          email: '',
          subject: '',
          phone: '',
          message: ''
        });
      } catch (error) {
        console.error("SheetDB error:", error);
        alert("Something went wrong while submitting the form.");
      }

    } else {
      validator.showMessages();
    }
  };

  return (
    <form method="post" className="contact-validation-active" onSubmit={submitHandler}>
      <div className="row align-items-center">
        <div className="col-md-6 col-12">
          <div className="form-group">
            <label>Name*</label>
            <input
              value={forms.name}
              type="text"
              name="name"
              onBlur={changeHandler}
              onChange={changeHandler}
              className="form-control"
              placeholder="Your Name" />
            {validator.message('name', forms.name, 'required|alpha_space')}
          </div>
        </div>
        <div className="col-md-6 col-12">
          <div className="form-group">
            <label>Email*</label>
            <input
              value={forms.email}
              type="email"
              name="email"
              onBlur={changeHandler}
              onChange={changeHandler}
              className="form-control"
              placeholder="Your Email" />
            {validator.message('email', forms.email, 'required|email')}
          </div>
        </div>
        <div className="col-md-6 col-12">
          <div className="form-group">
            <label>Subject</label>
            <input
              value={forms.subject}
              type="text"
              name="subject"
              onBlur={changeHandler}
              onChange={changeHandler}
              className="form-control"
              placeholder="Subject" />
          </div>
        </div>
        <div className="col-md-6 col-12">
          <div className="form-group">
            <label>Phone</label>
            <input
              value={forms.phone}
              type="text"
              name="phone"
              onBlur={changeHandler}
              onChange={changeHandler}
              className="form-control"
              placeholder="Phone" />
          </div>
        </div>
        <div className="col-md-12">
          <div className="fullwidth form-group">
            <label>Message*</label>
            <textarea
              onBlur={changeHandler}
              onChange={changeHandler}
              value={forms.message}
              type="text"
              name="message"
              className="form-control"
              placeholder="Message">
            </textarea>
            {validator.message('message', forms.message, 'required')}
          </div>
        </div>
        <div className="col-md-5 order-md-1 order-2 col-12">
          <div className="submit-area">
            <button type="submit" className="theme-btn">Submit now</button>
            <div id="loader">
              <i className="ti-reload"></i>
            </div>
          </div>
        </div>
        <div className="col-md-7 order-md-2 order-1 col-12">
          <div className="contact-info">
            <ul>
              <li><i className="fi flaticon-phone-call"></i> +91 8802546244</li>
              <li><i className="fi flaticon-mail"></i> vaibhavdhameja40@gmail.com</li>
            </ul>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;

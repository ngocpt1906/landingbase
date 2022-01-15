import React, { useEffect, useState } from 'react';
import { Button, Row, Col, notification } from "antd";
import { Formik } from "formik";
import styles from './style.module.scss';
import CommingSoon from '../CommingSoon';
import Fade from 'react-reveal/Fade';

const ContactForm = ({ onSubmit, emailResponse, loading }) => {
  useEffect(() => {
    emailResponse && notification["success"]({
      placement: 'bottomRight',
      duration: 3,
      message: 'Success',
      description: "Thanks, we will contact with you soon! ",
      getContainer: () => document.getElementById('contactForm')
    });
  }, [emailResponse]);
  return (
    <div className={styles.WrapContactForm} id="contactForm">
      <Row>
        <Col xs={24} md={12}>
          {/* <CommingSoon> */}
          <Fade>
            <Formik
              initialValues={{ name: '', email: '', phone: '', message: '' }}
              validate={values => {
                const errors = {};
                if (!values.email) {
                  errors.email = 'Required';
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email = 'Invalid email address';
                }
                return errors;
              }}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  onSubmit(values);
                  setSubmitting(false);
                }, 400);
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                /* and other goodies */
              }) => (
                <form className={styles.FormWrap} onSubmit={handleSubmit}>
                  <label htmlFor="name" >Name</label>
                  <input
                    type="name"
                    name="name"
                    id="name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                  />
                  {errors.name && touched.name && errors.name}
                  <label htmlFor="email" >Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                  {errors.email && touched.email && errors.email}
                  <label htmlFor="phone" >Phone Number</label>
                  <input
                    type="phone"
                    name="phone"
                    id="phone"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.phone}
                  />
                  {errors.phone && touched.phone && errors.phone}
                  <label htmlFor="message" >Message</label>
                  <textarea
                    type="message"
                    name="message"
                    id="message"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.message}
                  />
                  {errors.message && touched.message && errors.message}
                  <div className={styles.WrapSubmit}>
                    <Button loading={loading} htmlType="submit" disabled={isSubmitting}>Submit</Button>
                  </div>
                </form>
              )}
            </Formik>
          </Fade>
          {/* </CommingSoon> */}
        </Col>
        <Col xs={24} md={12}>
          <div className={styles.WrapContactInfo}>
            <div>
              <img src="/logo.png"
                alt="Logo"
                className={styles.Image}
              ></img>
              <div className={styles.EmailAndPhone}>Jeff@techsearch.com.au</div>
              <div className={styles.EmailAndPhone}>+61 435 81 22 55</div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default ContactForm;
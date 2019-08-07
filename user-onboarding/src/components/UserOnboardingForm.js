import React, { useState } from 'react';
import axios from 'axios';
import { Form, Field, withFormik } from 'formik'
import * as Yup from 'yup'

const UserOnboardingForm = ({ errors, touched, values }) => {

  return (
    <div>
      <Form >
        <Field type='text' name='name' placeholder='Name' />
        {touched.name && errors.name && <p className>{errors.name}</p>}

        <Field type='text' name='email' placeholder='Email' />
        {touched.email && errors.email && <p className>{errors.email}</p>}

        <Field type='text' name='password' placeholder='Password' />
        {touched.password && errors.password && <p className>{errors.password}</p>}

        <label>
          <Field 
          type='checkbox' 
          name='termsOfService' 
          checked={values.termsOfService} />
        </label>
          Terms of Service
        <button type='submit'> Submit </button>
      </Form>
    </div>
  );
};


const FormikUserOnboardingForm = withFormik({
  mapPropsToValues({ name, email, password, termsOfService }){
    return{
      name: name ||'',
      email: email || '',
      password: password || '',
      termsOfService: termsOfService || false,
    }
  },
  validationSchema: Yup.object().shape({
    name: Yup.string().required(),
    email: Yup.string().required(),
    password: Yup.string().required(),
  }),
  handleSubmit(values){
    axios
    .post('https://reqres.in/api/users/ ')
    .then(res => console.log('res', res))
    .catch(err => console.log(err.message));
  }

})(UserOnboardingForm); //currying funtions in JavaScript

export default FormikUserOnboardingForm;

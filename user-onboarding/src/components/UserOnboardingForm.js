import React, { useState } from 'react';
import axios from 'axios';
import { Form, Field, withFormik } from 'formik'
import * as Yup from 'yup'

const UserOnboardingForm = ({ errors, touched, values }) => {

  return (
    <div>
      <Form >
        <Field type='text' name='name' placeholder='Name' />
        {touched.species && errors.species && <p className>{errors.species}</p>}

        <Field type='text' name='email' placeholder='Email' />
        {touched.size && errors.size && <p className>{errors.size}</p>}

        <Field type='text' name='password' placeholder='Password' />



        {/* <Field component='select' className='food-select' name='food'>
        <option>Please Chose an Option</option>

          <option value='herbivore'>herbivore</option>
          <option value='carnivore'>carnivore</option>
          <option value='omnivore'>omnivore</option>

        </Field>
 */}
        <label>
          <Field 
          type='checkbox' 
          name='termsOfService' 
          checked={values.vaccionantions} />
          <span className='checkmark'></span>
        </label>
          Terms of Service

        <Field type='text' name='notes' placeholder='Notes' />
        {touched.notes && errors.notes && <p className>{errors.notes}</p>}

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
    species: Yup.string().required(),
    size: Yup.string().required(),
    notes: Yup.string()
  }),
//   handleSubmit(values){
//     axios
//     .post('https://reqres.in/api/users/ ')
//     .then(res => console.log(res))
//     .catch(err => console.log(err.message));
//   }

})(UserOnboardingForm); //currying funtions in JavaScript

export default FormikUserOnboardingForm;

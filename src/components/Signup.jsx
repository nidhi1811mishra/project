import { useFormik } from 'formik';
import React from 'react'
// import'./contact.css'
import * as Yup from 'yup';
const signupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
});

const Signup = () => {
  const signupForm = useFormik ({
    initialValues:{
      name:'',
      email:'',
      password:'',
    },

    onSubmit:(values)=> {
      console.table(values);
    },
    validationSchema: signupSchema
  })
  return (
    <div >
        
        <div className='col-md-4 col-sm-6 mx-auto mt-5'>
          
            <div className=' card m-auto bg-primary-subtle '>
                <h3 className='m-auto  p-4 text-align-center'>Signup</h3>

              <div className='card-body m-3 '>
              <form onSubmit={signupForm.handleSubmit}>

              <label htmlFor="">User Name</label>
            <input id='text' onChange={signupForm.handleChange} value={signupForm.values.name} type="name" className='form-control' placeholder='User Name' />


            <label htmlFor="">Email</label>
            <input id='email' onChange={signupForm.handleChange} value={signupForm.values.email} type="email" className='form-control' placeholder='Email' />

            <label htmlFor="">Password</label>
            <input id='password' onChange={signupForm.handleChange} value={signupForm.values.password} type="password" className='form-control' placeholder='Password' />

            <button type='submit' className='btn btn-primary d-grid mx-auto mt-3'>Login </button>
          </form>
         </div>
            </div>

           

            </div>
             
        </div>
    
  )
}

export default Signup;
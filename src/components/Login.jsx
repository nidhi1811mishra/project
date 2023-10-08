import { useFormik } from 'formik';
import React from 'react'
// import'./contact.css'
import * as Yup from 'yup';
const loginSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
});

const Login = () => {
  const loginForm = useFormik ({
    initialValues:{
      email:'',
      password:'',
    },

    onSubmit:(values)=> {
      console.table(values);
    },
    validationSchema: loginSchema
  })
  return (
    <div >
        
        <div className='col-md-4 col-sm-6 mx-auto mt-5'>
          
            <div className=' card m-auto bg-primary-subtle '>
                <h3 className='m-auto  p-4 text-align-center'>Login</h3>

              <div className='card-body m-3 '>
              <form onSubmit={loginForm.handleSubmit}>

            <label htmlFor="">Email</label>
            <input id='email' onChange={loginForm.handleChange} value={loginForm.values.email} type="email" className='form-control' placeholder='Email' />

            <label htmlFor="">Password</label>
            <input id='password' onChange={loginForm.handleChange} value={loginForm.values.password} type="password" className='form-control' placeholder='Password' />
            <button type='submit' className='btn btn-primary d-grid mx-auto mt-3'>Login </button>
          </form>
         </div>
            </div>

           

            </div>
             
        </div>
    
  )
}

export default Login;
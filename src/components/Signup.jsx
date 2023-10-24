import { useFormik } from 'formik';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import'./signup.css'
import * as Yup from 'yup';

const signupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
});

const Signup = () => {
  
  const navigate= useNavigate()

   const signupForm = useFormik ({
    initialValues:{
      name:'',
      email:'',
      password:'',
    },

    onSubmit:async (values)=> {
      console.table(values);
      const res = await fetch('http://localhost:5000/user/add',{
        method: 'POST',
        body:JSON.stringify(values),
        headers:{
          'Content-Type':'application/json',
        }
    
    });
    
        
    
    console.log(res.status);
    if (res.status === 200) {
      Swal.fire({
        icon: 'success',
        title: 'Signup Success',
        text: 'Now Login to Continue'
      })
      navigate('/login');
    }
    else {
      Swal.fire({
        icon: 'error',
        title: 'Somthing went wrong',
        text: 'Please Try Again'
      })
    }

    },

    validationSchema: signupSchema
  })




  return (
    <div className='sign-img' >
         <div className='container py-5'> 
        <div className='col-md-4 col-sm-6'>
          
            <div className='card'>
                 <div className='sign-card'>
                <h3 className='m-auto  p-4 text-align-center '>Sign to HomeyCured</h3>

              <div className='card-body  justify-content-center align-items-center m-3 '>
                  
              <form onSubmit={signupForm.handleSubmit}>

              {/* <label>User Name</label> */}
              <span style={{ color: "blue", fontSize: 10, marginLeft: 10 }}>{signupForm.errors.name}</span>
            <input id='name' onChange={signupForm.handleChange} value={signupForm.values.name} type="text" className='form-control' placeholder='User Name' />


            {/* <label className='mt-2' htmlFor="">Email</label> */}
            <span style={{ color: "blue", fontSize: 10, marginLeft: 10 }}>{signupForm.errors.email}</span>
            <input id='email' onChange={signupForm.handleChange} value={signupForm.values.email} type="email" className='form-control' placeholder='Email' />

            {/* <label className='mt-2' htmlFor="">Password</label> */}
            <span style={{ color: "blue", fontSize: 10, marginLeft: 10 }}>{signupForm.errors.password}</span>
            <input id='password' onChange={signupForm.handleChange} value={signupForm.values.password} type="password" className='form-control' placeholder='Password' />

            <button type='submit' className='btn_1  d-grid text-white mx-auto mt-3'> Sign Up</button>
          </form>
                 </div>
         </div>
            </div>

           

            </div>
            </div> 
        </div>
    
  )
}

export default Signup;
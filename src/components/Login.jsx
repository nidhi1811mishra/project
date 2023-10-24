import { useFormik } from 'formik'
import React from 'react'
import Swal from 'sweetalert2'
// import'./contact.css'
import './login.css'
import * as Yup from 'yup';
import useAppContext from '../AppContext';
import { useNavigate } from 'react-router-dom';

const loginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
});

const Login = () => {
  const navigate = useNavigate()

  const { setLoggedin } = useAppContext();

  const loginForm = useFormik({
    initialValues: {
      email: '',
      password: '',
    },

    onSubmit: async (values) => {
      console.table(values);
      const res = await fetch('http://localhost:5000/user/authenticate', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json'
        }
      })


      console.log(res.status);
      if (res.status === 200) {
        Swal.fire({
          icon: 'success',
          title: 'Login Success'
        })
        navigate('/AddFurniture');

        setLoggedin(true);
        const data = await res.json();
        sessionStorage.setItem('user', JSON.stringify(data));

      } else if (res.status === 400) {
        Swal.fire({
          icon: 'error',
          title: 'Login Failed',
          text: 'Invalid email or password'
        })
      }

    },
    validationSchema: loginSchema
  })
  return (
    <div className='login-img'>
      <div className='container py-5'>

        <div className='col-mb-4 col-sm-4'>
          {/* <div className=''> */}
          <div className=' card'>
            <div className='log-card'>
              <h3 className='text-center mt-3'>Login</h3>

              <div className='card-body justify-content-center align-items-center m-3'>

                <form onSubmit={loginForm.handleSubmit}>

                  {/* <label htmlFor="">Email</label> */}
                  <input id='email' onChange={loginForm.handleChange} value={loginForm.values.email} type="email"
                    className='form-control input mt-4 ' placeholder='Email' />

                  {/* <label htmlFor="">Password</label> */}
                  <input id='password' onChange={loginForm.handleChange} value={loginForm.values.password} type="password" className='form-control input  mt-4 ' placeholder='Password' />
                  <button type='submit' className='log-btn d-grid mx-auto mt-4  '>Login </button>

                </form>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

  )
}

export default Login;
import { Form, useFormik } from 'formik';
import React, { useState } from 'react'
import Swal from 'sweetalert2'
import './add.css'


const AddFurniture = () => {

  const [selFile, setSelFile] = useState('');

  const furnitureForm = useFormik({
    initialValues: {
      title: '',
      price: '',
      age: '',
      type: '',
      category: '',
      description: '',
      createdAt: ''
    },
    onSubmit: async (values) => {
      values.image = selFile;
      console.log(values)
      const res = await fetch('http://localhost:5000/furniture/add', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json',
        }

      });

      console.log(res.status);
      if (res.status === 200) {
        Swal.fire({
          icon: 'success',
          title: 'Successfully Done'
        })
       

      } else if (res.status === 400) {
        Swal.fire({
          icon: 'error',
          title: 'Failed Request',
        
        })
      }

    

    },

  })
  const uploadfile = async (e) => {
    if (!e.target.files) return;

    const file = e.target.files[0];
    setSelFile(file.name);

    const fd = new FormData();
    fd.append('myfile', file);

    const res = await fetch('http://localhost:5000/util/uploadfile', { method: 'POST', body: fd })
    console.log(res.status);
  }

  return (

    <div className='add-img' >
      <div className="container py-5">

        <div className='col-md-4  col-sm-6 '>

          <div className=' card   '>
            <h3 className='m-auto text-align-center mt-5'>Add details</h3>

              <div className='card-body '>
                <form onSubmit={furnitureForm.handleSubmit}>

                  <label>Title</label>
                  <span style={{ color: "blue", fontSize: 10, marginLeft: 10 }}>{furnitureForm.errors.title}</span>
                  <input id='title' onChange={furnitureForm.handleChange} value={furnitureForm.values.title} type="text" className='form-control' placeholder='Name of Product' />


                  <div className="row">
                    <div className="col-md-6">

                      <label className='mt-2' htmlFor="">Price</label>
                      <span style={{ color: "blue", fontSize: 10, marginLeft: 10 }}>{furnitureForm.errors.price}</span>
                      <input id='price' onChange={furnitureForm.handleChange} value={furnitureForm.values.price} type="number" className='form-control' placeholder='Rs' />
                    </div>
                    <div className="col-md-6">
                      <label className='mt-2' htmlFor="">Age</label>
                      <span style={{ color: "blue", fontSize: 10, marginLeft: 10 }}>{furnitureForm.errors.age}</span>
                      <input id='age' onChange={furnitureForm.handleChange} value={furnitureForm.values.age} type="text" className='form-control' placeholder='how Old' />

                    </div>
                  </div>


                    <div className='row'>
                      <div className='col-md-6'>
                     <label className='mt-2'>Type</label>
                     <span style={{ color: "blue", fontSize: 10, marginLeft: 10 }}>{furnitureForm.errors.type}</span>
                     <input id='type' onChange={furnitureForm.handleChange} value={furnitureForm.values.type} type="text" className='form-control' placeholder='type' />
                      </div>

                      <div className='col-md-6'>
                     <label className='mt-2' htmlFor="">Category</label>
                     <span style={{ color: "blue", fontSize: 10, marginLeft: 10 }}>{furnitureForm.errors.category}</span>
                     <input id='category' onChange={furnitureForm.handleChange} value={furnitureForm.values.category} type="text" className='form-control' placeholder='' />
                      </div>
                  </div>

                  <label className='mt-2'>Descriptiion</label>
                  <span style={{ color: "blue", fontSize: 10, marginLeft: 10 }}>{furnitureForm.errors.description}</span>
                  <input id='description' onChange={furnitureForm.handleChange} value={furnitureForm.values.description} type="text" className='form-control' placeholder='Somthimg about the prodect' />



                  <label className='mt-3'>Uploade Image</label>
                  <input type="file" className='text-center  d-flex' onChange={uploadfile} />


                  <button type='submit' className='add-btn d-grid mx-auto mt-3'>Ok</button>
                </form>

              </div>
          </div>
        </div>


      </div>

    </div>





  )
}

export default AddFurniture;
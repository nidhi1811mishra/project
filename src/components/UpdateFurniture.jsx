import { Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react'
import {  useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateFurniture = () => {
    const {id}= useParams();     
   const navigate= useNavigate();   
    
    // const {id} = useParams();
    const [furnitreData, setfurnitureData] = useState(null);

     const fetchFurnitureData =async()=>{
        const res = await fetch ('http://localhost:5000/furniture/getbyid/'+id);
        const data = await res.json();

        console.log(data);
        setfurnitureData(data);
     }
     useEffect(()=>{
       fetchFurnitureData(); 
     },[])
     const submitForm = async (values)=>{
        const res = await fetch('http://localhost:5000/furniture/update/'+id,{
          method: 'PUT',
          body : JSON.stringify(values),
          headers:{
            'Content-Type':'application/json'
          }
        })
        console.log(res.status);
        if(res.status === 200){
          Swal.fire({
            icon : 'icon',
            title:'Furniture Update'
          });
          navigate('/manageFuniture')
        }
    }
    
                  

  return (
          <div>

            <div className='container mt-5'>
      <div className='card bg-light w-25 m-auto' >
        <h3 className='text-center mt-3'>Update  furniture</h3>
        <div className='card-body'> 
        { 
         furnitreData!==null ? (
            <Formik> 
            initialValues={furnitreData}
            onSubmit={submitForm}
      
      { (furnitureForm)=>( 
  <form onSubmit={furnitureForm.handleSubmit}>

 
  <label>Title</label>
  <span style={{ color: "blue", fontSize: 10, marginLeft: 10 }}>{furnitureForm.errors.title}</span>
  <input id='title' onChange={furnitureForm.handleChange} value={furnitureForm.values.title} type="text" className='form-control' placeholder='Name of Product' />


  <label className='mt-2' htmlFor="">Price</label>
  <span style={{ color: "blue", fontSize: 10, marginLeft: 10 }}>{furnitureForm.errors.price}</span>
  <input id='price' onChange={furnitureForm.handleChange} value={furnitureForm.values.price} type="number" className='form-control' placeholder='Rs' />

  <label className='mt-2' htmlFor="">Age</label>
  <span style={{ color: "blue", fontSize: 10, marginLeft: 10 }}>{furnitureForm.errors.age}</span>
  <input id='age' onChange={furnitureForm.handleChange} value={furnitureForm.values.age} type="text" className='form-control' placeholder='how Old' />

  <label>Type</label>
  <span style={{ color: "blue", fontSize: 10, marginLeft: 10 }}>{furnitureForm.errors.type}</span>
  <input id='type' onChange={furnitureForm.handleChange} value={furnitureForm.values.type} type="text" className='form-control' placeholder='type' />


  <label className='mt-2' htmlFor="">Category</label>
  <span style={{ color: "blue", fontSize: 10, marginLeft: 10 }}>{furnitureForm.errors.category}</span>
  <input id='category' onChange={furnitureForm.handleChange} value={furnitureForm.values.category} type="text" className='form-control' placeholder='' />

  <label>Descriptiion</label>
  <span style={{ color: "blue", fontSize: 10, marginLeft: 10 }}>{furnitureForm.errors.description}</span>
  <input id='description' onChange={furnitureForm.handleChange} value={furnitureForm.values.description} type="text" className='form-control' placeholder='Somthimg about the prodect' />


  <label className='mt-2' htmlFor="">Create At</label>
  <span style={{ color: "blue", fontSize: 10, marginLeft: 10 }}>{furnitureForm.errors.createdAt}</span>
  <input id='createAt' onChange={furnitureForm.handleChange} value={furnitureForm.values.createdAt} type="date" className='form-control' placeholder='Time of made ' />

    
  <button type='submit' className='btn btn-primary d-grid mx-auto mt-3'>Ok</button>

  </form>
  )}
       </Formik>
         ): <h1 className='text-center'>Loding...</h1>
       }


</div>
</div>
</div>
</div>

    
  )
}

export default UpdateFurniture;
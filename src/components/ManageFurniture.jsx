import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const ManageFurniture = () => {

  const [furnitureList, setfurnitureList] = useState([])

  const fetchfurnitureData = async () => {
    const res = await fetch('http://localhost:5000/furniture/getall')
    console.log(res.status);
    const data = await res.json();
    console.table(data);
    setfurnitureList(data);
  };

  useEffect(() => {
    fetchfurnitureData();

  }, []);


  const deletefurniture = async (id) => {
    console.log(id);
    const res = await fetch('http://localhost:5000/furniture/delete/' + id, { method: 'DELETE' });
    console.log(res.status)
    if (res.status === 200) {
      fetchfurnitureData();
      toast.success('Furniture Remove successfully');
    }

  }

  return (
    <div>
      <div className=' bg-body-secondary'>
        <div className='container'>
          <h1 className='text-center py-5'>Manage furniture</h1>

          <table className="table">
            <thead>
              <tr>
                <th scope="col">S. No.</th>
                <th scope="col">Title</th>
                <th scope="col">Price</th>
                <th scope="col">Type</th>
                <th scope="col">Age</th>
                <th scope='col'>Category</th>
                <th scope='col'>Description</th>
                <th scope='col'>CreatedAt</th>
                <th scope='col'>Image</th>
                <th colSpan={2}> </th>
              </tr>
            </thead>
            <tbody>
              {
                furnitureList.map((furniture, index) => (

                  <tr key={furniture}>

                    <td>{index + 1}</td>
                    {/* <td> {furniture._id} </td> */}
                    <td>{furniture.title}</td>
                    <td>{furniture.price}</td>
                    <td>{furniture.type}</td>
                    <td>{furniture.age}</td>
                    <td>{furniture.category}</td>
                    <td>{furniture.description}</td>
                    <td>{furniture.createdAt}</td>
                    <td>{furniture.image}</td>
                    <td>

                      <Link to={'/updatefurniture/' + furniture._id} className='btn btn-primary'>Edit</Link>
                    </td>
                    <td>
                      <button className='btn btn-danger' onClick={() => { deletefurniture(furniture._id) }}>Delete</button>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>

      </div>
    </div>
  )
}

export default ManageFurniture;
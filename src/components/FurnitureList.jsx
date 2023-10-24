import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import './furniturelist.css'
const FurnitureList = () => {

  const [FurnitureData, setFurnitureData] = useState([]);

  const fetchFurnitureData = async () => {

    const res = await fetch('http://localhost:5000/furniture/getall');
    console.log(res.status);

    const data = await res.json();
    console.log(data)
    setFurnitureData(data);
  }
  useEffect(() => {
    fetchFurnitureData();
  }, []);

  const displayFurnitureData = () => {

    return FurnitureData.map((furniture) => {

      return<div className="col-md-3 mb-4">
        <div className='card'>
          <img className='card-img-top' width={350} height={200} src={'http://localhost:5000/' + furniture.image} />
          <div className="card-body">

            <h5>{furniture.title}</h5>
            <h4>₹{furniture.price}</h4>
            <h6>{furniture.description.substring(1, 20)}</h6>
            {/* <button className='btn btn-primary'>Get</button> */}
            <Link className='btn btn-primary' to={'/furnituredetails/' + furniture._id}>Know More</Link>
          </div>
        </div>
      </div>
      {/* </div> */}
    }
    )

  }



  return (
    
    <div className='card'>
      <div className='list-img'>
      <h1 className='text-center text-white mt-3'><b>HomeyCured</b> <b></b></h1>
      <div className="container py-5">

        <div className='row mt-4'>
          {displayFurnitureData()}

        </div>
      </div>
    </div>

    </div>
  )
}

export default FurnitureList;
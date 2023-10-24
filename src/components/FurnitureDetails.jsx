import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const FurnitureDetails = () => {
  const { id } = useParams()
  const [FurnitureData, setFurnitureData] = useState(null);

  const fetchFurnitureDetail = async () => {

    const res = await fetch('http://localhost:5000/furniture/getbyid/' + id);
    console.log(res.status);

    const data = await res.json();
    console.log(data)
    setFurnitureData(data);
  }
  useEffect(() => {
    fetchFurnitureDetail();
  }, [])

  const displayFurnitureDetail = () => {

    // return FurnitureData.map((furniture) => {
    if (FurnitureData != null) {

      return <div className='card bg-danger-subtle'>
        <div className="card-body">
          <div className="row">
            <div className="col-md-4">
              <img width={400} height={400} src={'http://localhost:5000/' + FurnitureData.image} />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h4>{FurnitureData.title}</h4>
                <h4>{FurnitureData.price}</h4>
                <h4> {FurnitureData.type}</h4>
                <h4> {FurnitureData.age}</h4>
                <h4>  {FurnitureData.category}</h4>
                <h4>{FurnitureData.description}</h4>
                <h4>{FurnitureData.createdAt}</h4>

              </div>

            </div>
          </div>
        </div>
      </div>
      // })
    }

  }



  return (
    <div className='deatail-img bg-primary-subtle vh-100'>
      <h1 className='text-center py-3'>furniture Details</h1>

      <div className="container">
        {/* <div className='card'> */}
        {/* <div className='card-body'> */}

        {displayFurnitureDetail()}
        {/* </div> */}

        {/* </div> */}
      </div>

    </div>
  )
}

export default FurnitureDetails;
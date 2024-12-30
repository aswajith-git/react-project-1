import React from 'react'

const ProductSpec = () => {
  return (
    <div>
       
       <div className="container">
        <div className="raw">
            <col className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12" />

            <div className="row g-3">
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">Product Name</label>
                    <input type="text" className="form control" />
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">Category</label>
                    <input type="text" className="form control" />
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">Price</label>
                    <input type="number" className="form control" />
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">Manufacturing Date</label>
                    <input type="date" className="form control" />
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">Expiry Date</label>
                    <input type="date" className="form control" />
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">Manufacturer Name</label>
                    <input type="text" className="form control" />
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <button className="btn btn-info">Submit</button>
                </div>
              
            </div>
        </div>
       </div>
    </div>
  )
}

export default ProductSpec
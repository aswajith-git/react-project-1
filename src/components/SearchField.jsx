import React from 'react'

const SearchField = () => {
  return (
    <div>
        <div className="continer">
          <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
              <div className="row">
                <div className="col col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                  <input type="search" placeholder="search" className="form-search" />
                  <input type="submit" value="search" />                  
                </div>
              </div>

            </div>
          </div>
        </div>
    </div>
  )
}

export default SearchField
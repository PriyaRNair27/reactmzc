import React from 'react'
import Navbar from './Navbar'

const Register = () => {
  return (
    <div>
        
        <Navbar />
        <div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 cl-xl-12 col-xxl-12">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 cl-xl-12 col-xxl-12">
                    <label for="" className="form label">username</label>
                    <input placeholder="enter username" type="text" className="form-control" />
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 cl-xl-12 col-xxl-12">
                    <label for="" className="form label">password</label>
                 <input  placeholder="enter password" type="password" name="" id="" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 cl-xl-12 col-xxl-12">
                    <button className="btn btn-success">login</button>
                </div>
            </div>
        </div>
    </div>
</div>
         </div>
  )
}

export default Register
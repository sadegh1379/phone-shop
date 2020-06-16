import React, { Component } from 'react'

export class SinUP extends Component {

    state = {
        name  : '',
        lastName : '',
        phone : '',
        pass_1 : '',
        pass_2 : ''

    }

    handleChange = (e)=>{
        this.setState({
            [e.target.name] : e.target.value 
        })
    }

    handleSubmit = (e)=>{
        e.preventDefault();
        alert("adw")

    }



    render() {

       const {name , lastName , phone , pass_1 , pass_2} = this.state ;

        return (
            <div>
            <div className="py-4 wow bounceInRight" data-wow-dely="1s" data-wow-duration="2s">
            <div dir="ltr"  className="container h-100 mt-4 login-h">
                <div className="d-flex justify-content-center h-100">
                 <div className="user_card_2">
                         <div className="d-flex justify-content-center">
                 <div className="brand_logo_container">
                     <img src="https://png.pngtree.com/png-clipart/20190925/original/pngtree-mobile-shopping-mall-online-shopping-png-image_4986602.jpg" className="brand_logo" alt="Logo"/>
                 </div>
             </div>
             <div className="d-flex justify-content-center form_container">
                 <form onSubmit={this.handleSubmit} className="text-right">
                     <div className="input-group mb-3">
                         <div className="input-group-append">
                             <span className="input-group-text"><i className="fa fa-user"></i></span>
                         </div>
                         <input onChange={this.handleChange} type="text" name="name" className="form-control input_user text-right" value={name} required placeholder="نام "/>
                     </div>
                     <div className="input-group mb-3">
                         <div className="input-group-append">
                             <span className="input-group-text"><i className="fa fa-user"></i></span>
                         </div>
                         <input onChange={this.handleChange} type="text" name="lastName" className="form-control input_user-o text-right" value={lastName} required placeholder="نام خانوادگی "/>
                     </div>
                     <div className="input-group mb-2">
                         <div className="input-group-append">
                             <span className="input-group-text"><i className="fa fa-phone"></i></span>
                         </div>
                         <input onChange={this.handleChange} type="text" maxlength="" name="phone" className="form-control input_pass text-right" value={phone} required placeholder="شماره همراه"/>
                     </div>
                     <div className="input-group mb-2">
                         <div className="input-group-append">
                             <span className="input-group-text"><i className="fa fa-key"></i></span>
                         </div>
                         <input onChange={this.handleChange} type="password" name="pass_1" className="form-control input_pass text-right" value={pass_1} required placeholder="رمز ورود"/>
                     </div>
                     <div className="input-group mb-2">
                         <div className="input-group-append">
                             <span className="input-group-text"><i className="fa fa-key"></i></span>
                         </div>
                         <input onChange={this.handleChange} type="password" name="pass_2" className="form-control input_pass text-right" value={pass_2} required placeholder=" تکرار رمز ورود "/>
                     </div>
                     
                         <div className="d-flex justify-content-center mt-3 login_container">
                  <button type="submit" name="button" className="btn login_btn">ثبت نام</button>
                </div>
                 </form>
             </div>
     
            
             </div>
         </div>
     </div>
 </div>
         </div>
        )
    }
}

export default SinUP

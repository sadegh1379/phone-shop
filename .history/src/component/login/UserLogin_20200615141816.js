import React, { Component } from 'react'
import GetId from '../static/GetId';
import './login.css'

 class UserLogin extends Component {
     constructor(){
         super();
         GetId();
     }


     
    render() {
        return (
            <div className="py-4">
               <div dir="ltr"  className="container h-100 mt-4 login-h">
		<div className="d-flex justify-content-center h-100">
			<div className="user_card">
				<div className="d-flex justify-content-center">
					<div className="brand_logo_container">
						<img src="https://png.pngtree.com/png-clipart/20190925/original/pngtree-mobile-shopping-mall-online-shopping-png-image_4986602.jpg" className="brand_logo" alt="Logo"/>
					</div>
				</div>
				<div className="d-flex justify-content-center form_container">
					<form className="text-right">
						<div className="input-group mb-3">
							<div className="input-group-append">
								<span className="input-group-text"><i className="fa fa-user"></i></span>
							</div>
							<input type="text" name="" className="form-control input_user text-right" value="" placeholder="نام کاربری"/>
						</div>
						<div className="input-group mb-2">
							<div className="input-group-append">
								<span className="input-group-text"><i className="fa fa-key"></i></span>
							</div>
							<input type="password" name="" className="form-control input_pass text-right" value="" placeholder="رمز ورود"/>
						</div>
						<div class="form-group">
							<div class="custom-control custom-checkbox">
								<input type="checkbox" class="custom-control-input" id="customControlInline"/>
								<label class="custom-control-label " htmlFor="customControlInline">مرا به خاطر بسپار</label>
							</div>
						</div>
							<div class="d-flex justify-content-center mt-3 login_container">
				 	<button type="button" name="button" class="btn login_btn">ورود</button>
				   </div>
					</form>
				</div>
		
				<div class="mt-4">
					<div class="d-flex justify-content-center links">
						حساب کاربری ندارید? <a href="#" class="ml-2">ثبت نام</a>
					</div>
					<div class="d-flex justify-content-center links">
						<a href="#">فراموشی رمز?</a>
					</div>
				</div>
			</div>
		</div>
	</div>
            </div>
        )
    }
}

export default UserLogin

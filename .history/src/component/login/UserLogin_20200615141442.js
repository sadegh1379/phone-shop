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
               <div dir="ltr"  class="container h-100 mt-4 login-h">
		<div class="d-flex justify-content-center h-100">
			<div class="user_card">
				<div class="d-flex justify-content-center">
					<div class="brand_logo_container">
						<img src="https://png.pngtree.com/png-clipart/20190925/original/pngtree-mobile-shopping-mall-online-shopping-png-image_4986602.jpg" class="brand_logo" alt="Logo"/>
					</div>
				</div>
				<div class="d-flex justify-content-center form_container">
					<form className="text-right">
						<div class="input-group mb-3">
							<div class="input-group-append">
								<span class="input-group-text"><i class="fa fa-user"></i></span>
							</div>
							<input type="text" name="" class="form-control input_user text-right" value="" placeholder="نام کاربری"/>
						</div>
						<div class="input-group mb-2">
							<div class="input-group-append">
								<span class="input-group-text"><i class="fa fa-key"></i></span>
							</div>
							<input type="password" name="" class="form-control input_pass text-right" value="" placeholder="رمز ورود"/>
						</div>
						<div class="form-group">
							<div class="custom-control custom-checkbox">
								<input type="checkbox" class="custom-control-input" id="customControlInline"/>
								<label class="custom-control-label " htmlFor="customControlInline">مرا به خاطر بسپار</label>
							</div>
						</div>
							<div class="d-flex justify-content-center mt-3 login_container">
				 	<button type="button" name="button" class="btn login_btn">Login</button>
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

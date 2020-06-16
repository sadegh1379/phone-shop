import React, { Component } from 'react'
import GetId from '../static/GetId';
import {Link } from 'react-router-dom'
import './login.css';


 class SinIn extends Component {
     constructor(){
         super();
         GetId();
	 }
	 
	 state ={
		 name : '',
		 passWord : '' ,
		 remember : false
	 }

	 handleChange = (e)=>{
        this.setState({
            [e.target.name] : e.target.value 
        })
	}
	handleCheck = ()=>{
        this.setState({
            remember : !this.state.remember 
        })
    }

    handleSubmit = (e , func)=>{
        e.preventDefault();

            let newUser = this.state ;
            func(newUser);
            this.setState({
                name : '',
                passWord : ''
            })

            setTimeout(()=>this.props.history.push('/') , 3000)
    
    }



     
    render() {
        return (
            <div  className="py-4  ">
               <div dir="ltr"   className="container   h-100 mt-4 login-h">
		<div className="d-flex justify-content-center h-100">
			<div className="user_card">
				<div className="d-flex justify-content-center">
					<div className="brand_logo_container">
						<img src="https://png.pngtree.com/png-clipart/20190925/original/pngtree-mobile-shopping-mall-online-shopping-png-image_4986602.jpg" className="brand_logo" alt="Logo"/>
					</div>
				</div>
				<div className="d-flex justify-content-center form_container">
					<form className="text-right" onSubmit={}>
						<div className="input-group mb-3">
							<div className="input-group-append">
								<span className="input-group-text"><i className="fa fa-user"></i></span>
							</div>
							<input type="text" name="name" className="form-control input_user text-right" onChange={this.handleChange} value={this.state.name} placeholder="نام کاربری"/>
						</div>
						<div className="input-group mb-2">
							<div className="input-group-append">
								<span className="input-group-text"><i className="fa fa-key"></i></span>
							</div>
							<input type="password" name="passWord" className="form-control input_pass text-right" onChange={this.handleChange} value={this.state.passWord} placeholder="رمز ورود"/>
						</div>
						<div className="form-group">
							<div className="custom-control custom-checkbox">
								<input type="checkbox" checked={this.state.remember} onChange={this.handleCheck} className="custom-control-input" id="customControlInline"/>
								<label className="custom-control-label " htmlFor="customControlInline">مرا به خاطر بسپار</label>
							</div>
						</div>
							<div className="d-flex justify-content-center mt-3 login_container">
				 	<button type="button" name="button" className="btn login_btn">ورود</button>
				   </div>
					</form>
				</div>
		
				<div className="mt-4">
					<div className="d-flex justify-content-center links">
						حساب کاربری ندارید? <Link to="/sinup" className="ml-2">ثبت نام</Link>
					</div>
					<div className="d-flex justify-content-center links">
						<Link to="/forgetpassword">فراموشی رمز?</Link>
					</div>
				</div>
			</div>
		</div>
	</div>
            </div>
        )
    }
}

export default SinIn

import React from 'react';
import {Link} from 'react-router-dom';

function Footer() {
    return (
        // <!-- Footer -->
        <footer dir="rtl" data-wow-dely="2s" data-wow-duration="1s"  className=" wow bounceInUp page-footer font-small stylish-color-dark pt-4">
        
          {/* <!-- Footer Links --> */}
          <div className="container text-center text-md-left">
        
            {/* <!-- Grid row --> */}
            <div className="row text-center ">
        
              {/* <!-- Grid column --> */}
             
              {/* <!-- Grid column --> */}
        
              <hr className="clearfix w-100 d-md-none"/>

              
        
              {/* <!-- Grid column --> */}
              <div className="col-md-4 mx-auto footer-q">
        
                {/* <!-- Links --> */}
                <h5 className="font-weight-bold text-uppercase mt-3 mb-4 footer-q">پرسش های متداول</h5>
        
                <ul className="list-unstyled text-right">
                  <li>
                    <a  style={{fontSize:'13px' , lineHeight:'26px'}} href="#!">از وضعیت سفارشی که ثبت کرده ام چگونه  مطلع شوم؟</a>
                  </li>
                  <li>
                    <a href="#!" style={{fontSize:'13px' , lineHeight:'26px'}}>آیا میتونم کالا هایی که موجود نیستند سفارش بدم؟</a>
                  </li>
                  <li>
                    <a href="#!" style={{fontSize:'13px' , lineHeight:'26px'}}>آیا میتونم سفارشمو حذف یا تغییر دهم؟</a>
                  </li>
                  <li>
                    <a href="#!" style={{fontSize:'13px' , lineHeight:'26px'}}><a href="">برای خرید و انتخاب کالا در سایت نباز به مشاوره دارم راهی وجود دارد؟</a></a>
                  </li>
                </ul>
        
              </div>
              {/* <!-- Grid column --> */}
        
              <hr className="clearfix w-100 d-md-none"/>
        
              {/* <!-- Grid column --> */}
              <div className="col-md-4 mx-auto footer-i">
        
                {/* <!-- Links --> */}
                <h5 className="font-weight-bold text-uppercase mt-3 mb-4 ">راه های ارتباط با ما</h5>
        
                <ul className="list-unstyled">
                  <li>
                    <span className="fa fa-telegram text-info p-1"></span><a href="https://t.me/sadeghakbarias">Telegram</a>
                  </li>
                  <li>
                    <span className="fa fa-instagram text-danger p-1"></span><a href="https://www.instagram.com/_.sadegh79/">Instagram</a>
                  </li>
                  <li>
                     <span className="fa fa-chrome text-info p-1"></span><a href="http://sadeghakbari.gigfa.com/">WebSite</a>

                  </li>
                  <li>
                    <span className="fa fa-github text-info p-1"></span><a href="https://github.com/sadegh1379">Github</a>
                  </li>
                </ul>
        
              </div>
              {/* <!-- Grid column --> */}
        
              <hr className="clearfix w-100 d-md-none"/>
        
              {/* <!-- Grid column --> */}
            

              <div className="col-md-4 mx-auto footer-s">
        
            {/* <!-- Content --> */}
            <h5 className=" mt-3 mb-4">قوانین و مقررات</h5>
            <p className="cost" style={{fontSize:'13px' , lineHeight:'26px'}}>تمامی کالا ها و خدمات این فروشگاحسب مورد دارای مجوز های لازم از مراجع مربوط میباشد و فعالیت های این سایت تابع قوانین و مقررات جمهوری اسلامی ایران است</p>

                </div>
              
              {/* <!-- Grid column --> */}
        
            </div>
            {/* <!-- Grid row --> */}
        
          </div>
          {/* <!-- Footer Links --> */}
        
          <hr/>
        
          {/* <!-- Call to action --> */}
          <ul className="list-unstyled list-inline text-center py-2 register">
           
            <li className="list-inline-item">
              <Link to="/login" className="btn btn-danger btn-rounded mx-3">ثبت نام</Link>
            </li>
            <li className="list-inline-item">
              <h6 className="mb-1" >ثبت نام رایگان</h6>
            </li>
          </ul>
          {/* <!-- Call to action --> */}
        
          <hr/>
        
          {/* <!-- Social buttons --> */}
          <ul className="list-unstyled buttons list-inline text-center ">
            <li class="list-inline-item">
              <a class="btn-floating btn-fb mx-1">
                <i class="fa fa-facebook-f"> </i>
              </a>
            </li>
            <li class="list-inline-item">
              <a class="btn-floating btn-tw mx-1">
                <i class="fa fa-twitter"> </i>
              </a>
            </li>
            <li class="list-inline-item">
              <a class="btn-floating btn-gplus mx-1">
                <i class="fa fa-google-plus"> </i>
              </a>
            </li>
            <li class="list-inline-item">
              <a class="btn-floating btn-li mx-1">
                <i class="fa fa-linkedin"> </i>
              </a>
            </li>
            <li class="list-inline-item">
              <a class="btn-floating btn-dribbble mx-1">
                <i class="fa fa-dribbble"> </i>
              </a>
            </li>
          </ul>
          {/* <!-- Social buttons --> */}
        
          {/* <!-- Copyright --> */}
          <div class="footer-copyright text-center py-3 down">© 2020 designed by:
            <a href="http://sadeghakbari.gigfa.com"> sadeghakbari.gigfa.com</a>
          </div>
          {/* <!-- Copyright --> */}
        
        </footer>
        
    )
}

export default Footer

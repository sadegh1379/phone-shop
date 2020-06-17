import React , {useState} from 'react';
import GetId from '../static/GetId'


function UserPhone() {
    
  const [value, setValue] = useState();
  const []
  const [send , setSend] = useState(false);

  React.useEffect(()=>GetId() , [])
  return (
      <div className="row mt-4">
          <div className="col-10 col-md-5  text-center mx-auto text-right">
            <form>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput">شماره خو د را وارد کنید</label>
                        <input type="text" className="form-control form-control-lg" id="formGroupExampleInput" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput"> کد تایید را وارد کنید </label>
                        <input type="text" className="form-control form-control-lg text-center" id="formGroupExampleInput" />
                    </div>
                    <div className="form-group">
                                <button className="btn btn-success ">ارسال کد تایید</button>
                    </div>
             </form>
          </div>
      </div>
   
  )
}

export default UserPhone;
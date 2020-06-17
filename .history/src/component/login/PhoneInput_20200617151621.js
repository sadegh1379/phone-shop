import React , {useState} from 'react';
import GetId from '../static/GetId'


function UserPhone() {
    
  const [value, setValue] = useState();
  React.useEffect(()=>GetId() , [])
  return (
      <div className="row mt-4">
          <div className="col-10 col-md-5  text-center mx-auto text-right">
            <form>
                    <div class="form-group">
                        <label htmlFor="formGroupExampleInput">شماره خو د را وارد کنید</label>
                        <input type="text" class="form-control form-control-lg" id="formGroupExampleInput" placeholder="Example input"/>
                    </div>
                    <div class="form-group">

                    </div>
             </form>
          </div>
      </div>
   
  )
}

export default UserPhone;
import React , {useState} from 'react';
import GetId from '../static/GetId'


function UserPhone() {
    
  const [value, setValue] = useState();
  React.useEffect(()=>GetId() , [])
  return (
      <div className="row mt-4">
          <div className="col-2 col-md-8  text-center mx-auto text-right">
            <form>
                    <div class="form-group">
                        <label htmlFor="formGroupExampleInput">شماره خو د را وارد کنید</label>
                        <input type="text" class="form-control form-control-lg" id="formGroupExampleInput" placeholder="Example input"/>
                    </div>
                    <div class="form-group">
                        <label htmlFor="formGroupExampleInput2">Another label</label>
                        <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Another input"/>
                    </div>
             </form>
          </div>
      </div>
   
  )
}

export default UserPhone;
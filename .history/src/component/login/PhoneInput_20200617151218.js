import React , {useState} from 'react';
import GetId from '../static/GetId'


function UserPhone() {
    GetId();
  const [value, setValue] = useState()
  return (
      <div className="row mt-4">
          <div className="col-4 col-md-10  text-center mx-auto text-right">
            <form>
                    <div class="form-group">
                        <label htmlFor="formGroupExampleInput">Example label</label>
                        <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input"/>
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
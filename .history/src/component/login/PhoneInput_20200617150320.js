import React , {useState} from 'react'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css'

function UserPhone() {
  const [value, setValue] = useState()
  return (
      <div className="row">
          <div className="col-8 text-center mx-auto">
                    <PhoneInput className="form-control"
                placeholder="Enter phone number"
                value={value}
                onChange={setValue}/>
          </div>
      </div>
   
  )
}

export default UserPhone;
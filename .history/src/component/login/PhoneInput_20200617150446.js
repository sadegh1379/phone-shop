import React , {useState} from 'react'


function UserPhone() {
  const [value, setValue] = useState()
  return (
      <div className="row">
          <div className="col-8 text-center mx-auto text-right">
                    <PhoneInput className="form-control"
                placeholder="Enter phone number"
                value={value}
                onChange={setValue}/>
          </div>
      </div>
   
  )
}

export default UserPhone;
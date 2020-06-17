import React , {useState} from 'react'


function UserPhone() {
  const [value, setValue] = useState()
  return (
      
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
        
   
  )
}

export default UserPhone;
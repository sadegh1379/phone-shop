import React , {useState} from 'react';
import GetId from '../static/GetId'


function UserPhone() {
    
  const [value, setValue] = useState();
  const [changeBtn , setChangeBtn] = useState('ارسال کد تایید')
  const [send , setSend] = useState(false);

  React.useEffect(()=>GetId() , [])
  return (
      <div className="row mt-4">
          <div className="col-10 col-md-5  text-center mx-auto text-right">
            <form>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput">شماره خود را وارد کنید</label>
                        <input type="text" value={value} onChange={} required className="form-control form-control-lg" id="formGroupExampleInput" />
                    </div>
                    {send && (<div className="form-group">
                        <label htmlFor="formGroupExampleInput"> کد تایید را وارد کنید </label>
                        <input type="text" className="form-control form-control-lg text-center" id="formGroupExampleInput" />
                    </div>)}
                    <div className="form-group">
                                <button onClick={()=>{
                                    if(value===''){
                                        alert('شماره خود را به درستی وارد کنید')
                                    }else{
                                        setSend(true)   ;
                                        setChangeBtn('کد تایید ارسال شد')
                                    }
                                   
                                }
                                } className="btn btn-success ">
                                    {changeBtn}
                                </button>
                    </div>
             </form>
          </div>
      </div>
   
  )
}

export default UserPhone;
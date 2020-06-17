import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

function Example() {
  const [value, setValue] = useState()
  return (
    <PhoneInput
      placeholder="Enter phone number"
      value={value}
      onChange={setValue}/>
  )
}
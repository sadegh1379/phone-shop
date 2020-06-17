import React, { Component } from 'react';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
 
<PhoneInput
  country={'us'}
  value={this.state.phone}
  onChange={phone => this.setState({ phone })}
/>

export default class PhoneInput extends Component {
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

import React, { Component } from 'react';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
 


export default class UserPhone extends Component {
    render() {
        return (
            
            <PhoneInput
            //  inputProps={{
            //     name: 'phone',
            //     required: true,
            //     autoFocus: true
            //   }}
            //     country={'us'}
            //     value={this.state.phone}
            //     onChange={phone => this.setState({ phone })}
                    />
        )
    }
}

import React from 'react';
import styled from 'styled-components';


function Modal(props) {
    return (
        <MyModal>
                <div className="my-modal position-absolute position-fixed">
                    hello from modal
                </div>
        </MyModal>
       
    )
}

const MyModal = styled.div`
.my-modal{
    
// position : fixed-top;
// color : red;


`







export default Modal

import React from 'react';
import styled from 'styled-components';


function Modal(props) {
    return (
        <MyModal>
                <div className="my-modal position-absolute">
                    <p>{props.product.title}</p>
                </div>
        </MyModal>
       
    )
}

const MyModal = styled.div`
.my-modal{
    
position : fixed-top;
color : red;


`







export default Modal

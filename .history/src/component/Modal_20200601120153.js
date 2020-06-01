import React from 'react';
import styled from 'styled-components';


function Modal(props) {
    return (
        <MyModal>
 <div className="my-modal">
            <p>{props.product.title}</p>
        </div>
        </MyModal>
       
    )
}

const myModal = styled.div`
position : fixed-top;


`



export default Modal

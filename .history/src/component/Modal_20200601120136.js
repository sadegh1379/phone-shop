import React from 'react';
import styled from 'styled-components';


function Modal(props) {
    return (
        <myModal
        <div className="my-modal">
            <p>{props.product.title}</p>
        </div>
    )
}

const myModal = styled.div`
position : fixed-top;


`



export default Modal

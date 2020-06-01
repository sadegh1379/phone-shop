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

const MyModal = styled.div`
.


`



export default Modal

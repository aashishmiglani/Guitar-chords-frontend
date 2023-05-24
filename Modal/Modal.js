import React from 'react'
import Modals from "./Modal.module.css"


const Modal = (props) => {
    return (
        <>
            <div className={Modals.modalCenter}>
                <div className={Modals.formOne}>
                    {props.children}

                </div>
            </div>
        </>
    )
}

export default Modal
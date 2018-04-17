import React from 'react';
import '../css/Modal.css';

function Modal(children) {
    document.onclick = function detectClick(e) {
        const modalHide = document.querySelector('.modal-content');
        if (modalHide && e.target !== modalHide.children[0] && e.target !== modalHide.children[1]) {
            if (e.target !== modalHide && e.target.tagName !== 'INPUT' && e.target.tagName !== 'BUTTON') {
                children.close();
            }
        }
    };

    return (
        <div className="modal" >
            <div className="modal-content">
                {children}
            </div>
        </div>);
}

export default Modal;

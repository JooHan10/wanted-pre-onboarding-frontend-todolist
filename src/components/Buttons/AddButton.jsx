
import React from 'react';

function AddButton({ onClick }) {
    return (
        <button onClick={onClick} className="add-button">
            추가
        </button>
    );
}

export default AddButton;

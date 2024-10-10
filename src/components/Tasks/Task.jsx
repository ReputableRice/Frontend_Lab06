import { useState } from 'react'

export default function Task({ task, handleDeletion, index, handleCheck, isComplete }) {

    return (
        <>
            <div className="task">
                <input type="checkbox" onChange={() => handleCheck(index)} checked={isComplete} />
                <h3 style={{ textDecoration: isComplete ? "line-through" : "none" }}>{task}</h3>
                <button onClick={() => handleDeletion(index)}>Remove</button>
            </div>
        </>
    )
}
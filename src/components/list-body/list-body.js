import React from 'react'
import './list-body.css'

const Listbody = props => {

    const removeItem = props.removeItem
    const items = props.items
    const listItems = items.length ?
        items.map(item => {
        return (
        <div key={Math.random() * 1000}>
        <div>- {item.taskName}</div>
        <div onClick={() => removeItem(item.id)}>&times;</div>
        </div>
        )
    }): (<p>Enter a task ...</p> ) 
    
    return (
        <div className="body-container">

            {listItems}
                
            
        </div>
    )

}

export default Listbody
import React from 'react'
import './IndividualTemplate.css'

const IndividualTemplate = (props) => {
    return(
        <div className='grid-container'>
            {props.template.map((item) => 
                <div className='grid-item' key={item.created}> 
                <p className='name'>{item.name}</p>
                <p className='description'>{item.description}</p>
                <a href={item.link} className='link'>Use Template</a>
                </div>
            )}
        </div>
    )
}

export default IndividualTemplate
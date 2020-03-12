import React from 'react'
import Stars from '../Stars/Stars.jsx'


class Reviews extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
        <div className= "reviews container">
          Reviews rendering from Reviews Module
          <div>
              <Stars />
          </div>
        </div>
        )
    }
}

export default Reviews
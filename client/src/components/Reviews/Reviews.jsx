import React from 'react'
import Masthead from '../Masthead/Masthead';



class Reviews extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
        <div className= "reviews container">
         
          <div>
              <Masthead />
          </div>
        </div>
        )
    }
}

export default Reviews
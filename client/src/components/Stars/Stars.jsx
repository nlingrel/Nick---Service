import React from 'react'
import styles from './styles.css'

class Stars extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
              <span className= {styles.starRating}>&real; &real; &real; &real; &real;</span>  
              <div className= {styles.ratingRatioNumber}>
                 <span className= {styles.rating}>
                    <span>
                      4.9
                    </span>
                 </span>
              </div>
            </div>
        )
    }
}

export default Stars;
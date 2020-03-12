import React from 'react'
import styles from './styles.css'

class Stars extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          ratio: 3.2
        }
    }
    
    render(){
        return(
            <div>
              <div className= {`starRatingWidthContainer ${styles.starRatingWidthContainer}`}>
                <span className= {`starRating ${styles.starRating}` } style={{clipPath: `inset(0% ${ 100 - this.state.rating * 20}% 0% 0%)`}}>
                  &real; &real; &real; &real; &real;
                </span>  
                <span className= {`starRatingEmpty ${styles.starRatingEmpty}`}>
                  &real; &real; &real; &real; &real;
                </span>
              </div>
              <div className= {`ratingRatioNumber ${styles.ratingRatioNumber}`}>
                <span className= {`rating ${styles.rating}`}>
                  <span>
                    {this.state.ratio}
                  </span>
                </span>
              </div>
            </div>
        )
    }
}

export default Stars;
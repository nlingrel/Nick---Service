import React from 'react'
import styles from './styles.css'

class Stars extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          ratio: 4,
          ratioCount: 1,
          plural: {
            true: 'Reviews',
            false: 'Review'
          }
        }
    }
    
    render(){
        return(
            <div>
              <div className= {`starRatingWidthContainer ${styles.starRatingWidthContainer}`}>
                <span className= {`starRating ${styles.starRating}` } style={{clipPath: `inset(0% ${ 100 - this.state.ratio * 20}% 0% 0%)`}}>
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
              <div className= {`ratingRatioCount ${styles.ratingRatioCount}`}>
                <span className= {`ratingCountLabel ${styles.ratingCountLabel}`}>
                  <span>
                    {`${this.state.ratioCount} `}{ this.state.ratioCount !== 1? `${this.state.plural.true}` : `${this.state.plural.false}` }
                  </span>
                </span>
              </div>
            </div>
        )
    }
}

export default Stars;
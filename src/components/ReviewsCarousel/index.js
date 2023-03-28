// Write your code here
import './index.css'

import {Component} from 'react'

class ReviewsCarousel extends Component {
  state = {index: 0}

  onClickLeftArrow = () => {
    const {index} = this.state

    const updateValue = index > 0 ? index - 1 : index

    this.setState({index: updateValue})
  }

  onClickRightArrow = () => {
    const {index} = this.state
    const {reviewsList} = this.props

    const updateValue = index < reviewsList.length - 1 ? index + 1 : index

    this.setState({index: updateValue})
  }

  render() {
    const {reviewsList} = this.props
    const {index} = this.state

    const reviewList = reviewsList[index]
    const {imgUrl, username, companyName, description} = reviewList

    return (
      <div className="reviews-carousel-container">
        <h1 className="heading">Reviews</h1>
        <div className="reviews-container">
          <button
            type="button"
            data-testid="leftArrow"
            className="left-arrow"
            onClick={this.onClickLeftArrow}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
              className="left-arrow"
            />
          </button>
          <div className="reviewer-container">
            <img src={imgUrl} alt={username} className="reviewer-image" />
            <p className="reviewer-name">{username}</p>
            <p className="company-name">{companyName}</p>
            <p className="description">{description}</p>
          </div>
          <button
            type="button"
            data-testid="rightArrow"
            className="right-arrow"
            onClick={this.onClickRightArrow}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
              className="right-arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel

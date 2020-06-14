import React, {Component} from 'react';

class Banner extends Component{
    render() {
        return(
            <div className="banner">
                <h1 className="banner__title">
                    Sell More!
                </h1>
                <p className="banner__text">
                    Open shop on our platform and increase your sales
                </p>
                <div className="banner__button">
                    <a href="/" className="banner__button-btn">
                        Open your shop
                    </a>
                </div>
                <div className="banner__bkg"></div>
            </div>
        )
    }
}

export default Banner;
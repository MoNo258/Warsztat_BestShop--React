import React, {Component} from "react";

class SectionBenefits extends Component {
    render() {
        return (
            <section className="section section-benefits" id="benefits">
                <div className="container container--benefits">

                    <article className="benefits-card">
                        <div className="benefit-order__one benefit-order__one1">
                            <h3 className="benefit-info__title">
                                Be always first
                            </h3>
                            <p className="benefit-info__text benefit-info__text1">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                            </p>
                        </div>
                        <div className="benefit-order__two benefit-order__two1">
                            <img src={"../images/macbook.png"} alt="Macbook picture"
                                 className="benefit-card_img benefit-card_img-first"/>
                        </div>
                    </article>

                    <article className="benefits-card">
                        <div className="benefit-order__one benefit-order__one2">
                            <img src={"../images/iphone.png"} alt="iPhone picture"
                                 className="benefit-card_img benefit-card_img-second"/>
                        </div>
                        <div className="benefit-order__two benefit-order__two2">
                            <h3 className="benefit-info__title">
                                Your shop is where you are!
                            </h3>
                            <p className="benefit-info__text benefit-info__text2">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                            </p>
                        </div>
                    </article>

                    <article className="benefits-card benefits-card__space">
                        <div className="benefit-order__one benefit-order__one3">
                            <h3 className="benefit-info__title benefit-info__title3">
                                Increase recognition your brand!
                            </h3>
                            <p className="benefit-info__text benefit-info__text3">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                            </p>
                        </div>
                        <div className="benefit-order__two benefit-order__two3">
                            <img src={"../images/trumpet.png"} alt="Trumpet picture"
                                 className="benefit-card_img benefit-card_img-third"/>
                        </div>
                    </article>
                </div>
            </section>
        )
    }
}

export default SectionBenefits;
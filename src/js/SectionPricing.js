import React, {Component} from "react";

class SectionPricing extends Component{
    render(){
        return(
            <section className="section section-pricing" id="pricing">
                <h2 className="pricing-title">
                    Pricing
                </h2>

                <div className="pricing-cards__container">
                    <article className="pricing-card pricing-card__first">
                        <div className="pricing-card__left">
                            <h3 className="pricing-card__title">
                                Basic
                            </h3>
                            <p className="pricing-card__cost pricing-card__cost-first">
                                $0
                            </p>
                            <p className="pricing-card__info">

                            </p>
                        </div>

                        <ul className="card-list">
                            <li className="card-list__item card-list__item-yes">
                                100 MB HDD
                            </li>
                            <li className="card-list__item card-list__item-yes">
                                1 Subdomain
                            </li>
                            <li className="card-list__item card-list__item-yes">
                                2 E-mails
                            </li>
                            <li className="card-list__item card-list__item-no">
                                Two years license
                            </li>
                            <li className="card-list__item card-list__item-no">
                                Full support
                            </li>
                        </ul>
                        <a href="#" className="pricing-card__button pricing-card__button-first">Begin</a>
                    </article>

                    <article className="pricing-card pricing-card__second pricing-card__hover">
                        <div className="pricing-card__left">
                            <h3 className="pricing-card__title pricing-card__title-hover">
                                Professional
                            </h3>
                            <p className="pricing-card__cost pricing-card__cost-second">
                                $25
                            </p>
                            <p className="pricing-card__info pricing-card__info-hover">
                                Limited offer
                            </p>
                        </div>

                        <ul className="card-list">
                            <li className="card-list__item card-list__item-yes card-list__item-hover">
                                500 MB HDD
                            </li>
                            <li className="card-list__item card-list__item-yes card-list__item-hover">
                                2 Subdomains
                            </li>
                            <li className="card-list__item card-list__item-yes card-list__item-hover">
                                5 E-mails
                            </li>
                            <li className="card-list__item card-list__item-yes card-list__item-hover">
                                One year license
                            </li>
                            <li className="card-list__item card-list__item-no card-list__item-hover">
                                Full support
                            </li>
                        </ul>
                        <a href="#"
                           className="pricing-card__button pricing-card__button-second pricing-card__button-hover">Begin</a>
                    </article>

                    <article className="pricing-card pricing-card__third">
                        <div className="pricing-card__left">
                            <h3 className="pricing-card__title">
                                Premium
                            </h3>
                            <p className="pricing-card__cost pricing-card__cost-third">
                                $60
                            </p>
                            <p className="pricing-card__info">
                                Limited offer
                            </p>
                        </div>

                        <ul className="card-list">
                            <li className="card-list__item card-list__item-yes">
                                2 GB HDD
                            </li>
                            <li className="card-list__item card-list__item-yes">
                                5 Subdomains
                            </li>
                            <li className="card-list__item card-list__item-yes">
                                20 E-mails
                            </li>
                            <li className="card-list__item card-list__item-yes">
                                Two years license
                            </li>
                            <li className="card-list__item card-list__item-yes">
                                Full support
                            </li>
                        </ul>
                        <a href="#" className="pricing-card__button pricing-card__button-third">Begin</a>
                    </article>
                </div>

            </section>
        )
    }
}

export default SectionPricing;
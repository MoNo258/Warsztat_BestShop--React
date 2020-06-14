import React, {Component} from "react";

class SectionStats extends Component{
    render() {
        return (
            <section className="section section-stats" id="stats">
                <div className="container container--stats">
                    <h2 className="stats-title">
                        The most popular sales platform in country
                    </h2>
                    <div className="stats-list">

                        <article className="stats-card">
                            <div className="stats-card_pseudo stats-card_pseudo-first">
                                <img src={"../images/person.svg"} alt="" className="stats-card_img" />
                            </div>
                            <h2 className="stats-card__title stats-card__title-first">
                                100000+
                            </h2>
                            <p className="stats-card__text">
                                daily entries
                            </p>
                        </article>
                        <article className="stats-card">
                            <div className="stats-card_pseudo stats-card_pseudo-second">
                                <img src={"../images/eye.svg"} alt="" className="stats-card_img stats-card_img-eye" />
                            </div>
                            <h2 className="stats-card__title stats-card__title-second">
                                2000000+
                            </h2>
                            <p className="stats-card__text">
                                seen products every day
                            </p>
                        </article>
                        <article className="stats-card">
                            <div className="stats-card_pseudo stats-card_pseudo-third">
                                <img src={"../images/catalog.svg"} alt="" className="stats-card_img" />
                            </div>
                            <h2 className="stats-card__title stats-card__title-third">
                                10000+
                            </h2>
                            <p className="stats-card__text">
                                added posts daily
                            </p>
                        </article>

                    </div>
                </div>
            </section>
        )
    }
}

export default SectionStats;
import React, {Component} from "react";
import StatsArticle from "./StatsArticle";

class SectionStats extends Component{
    render() {
        return (
            <section className="section section-stats" id="stats">
                <div className="container container--stats">
                    <h2 className="stats-title">
                        The most popular sales platform in country
                    </h2>
                    <div className="stats-list">
                        <StatsArticle />
                    </div>
                </div>
            </section>
        )
    }
}

export default SectionStats;
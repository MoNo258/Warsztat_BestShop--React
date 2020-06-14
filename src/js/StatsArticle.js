import React, {Component} from "react";

const articleParams = [
    {
        divClass: 'stats-card_pseudo stats-card_pseudo-first',
        imgSrc: '../images/person.svg',
        imgClass: 'stats-card_img',
        headerClass: 'stats-card__title stats-card__title-first',
        headerText: '100000+',
        paragraphClass: 'stats-card__text',
        paragraphText: 'daily entries'
    },
    {
        divClass: 'stats-card_pseudo stats-card_pseudo-second',
        imgSrc: '../images/eye.svg',
        imgClass: 'stats-card_img stats-card_img-eye',
        headerClass: 'stats-card__title stats-card__title-second',
        headerText: '2000000+',
        paragraphClass: 'stats-card__text',
        paragraphText: 'seen products every day'
    },
    {
        divClass: 'stats-card_pseudo stats-card_pseudo-third',
        imgSrc: '../images/catalog.svg',
        imgClass: 'stats-card_img',
        headerClass: 'stats-card__title stats-card__title-third',
        headerText: '10000+',
        paragraphClass: 'stats-card__text',
        paragraphText: 'added posts daily'
    }
];

class StatsArticle extends Component {
    render() {
        return (
            <>
                {articleParams.map(param => {
                    return (
                        <article className='stats-card'>
                            <div className={param.divClass}>
                                <img src={param.imgSrc} alt="" className={param.imgClass}/>
                            </div>
                            <h2 className={param.headerClass}>
                                {param.headerText}
                            </h2>
                            <p className={param.paragraphClass}>
                                {param.paragraphText}
                            </p>
                        </article>
                    )
                })}
            </>
        )
    }
}


export default StatsArticle;
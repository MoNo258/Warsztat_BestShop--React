import React, {Component} from "react";

class SectionContact extends Component{
    render(){
        return(
            <section className="section section-contact" id="contact">

                <div className="contact-container">
                    <div className="contact-info">
                        <h2 className="contact-title">
                            Any questions?
                        </h2>
                        <p className="contact-text">
                            Leave your email address or call us!
                        </p>
                        <ul className="contact-details">
                            <li className="contact-details__el contact-details__el-mail">
                                info@bestshop.xyz
                            </li>
                            <li className="contact-details__el contact-details__el-phone">
                                123 456 789
                            </li>
                        </ul>
                    </div>

                    <form action="" className="contact-form">
                        <div className="form-row">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="text" id="name" placeholder="" className="form-input form-input__name" />
                        </div>
                        <div className="form-row">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" id="email" placeholder="" className="form-input form-input__email" />
                        </div>
                        <div className="form-row">
                            <div className="form-checkbox">
                                <input type="checkbox" id="agreement" value="agreement"
                                       className="form-checkbox__input" />
                                    <label htmlFor="agreement" className="form-checkbox__label">
                                        I hereby give consent for my personal data included in my application to be
                                        processed for the purposes of the recruitment process under the European
                                        Parliament’s and Council of the European Union Regulation on the Protection of
                                        Natural Persons as of 27 April 2016, with regard to the processing of personal
                                        data and on the free movement of such data, and repealing Directive 95/46/EC
                                        (Data Protection Directive)
                                    </label>
                            </div>
                        </div>
                        <div className="form-row">
                            <button className="form-button">Send</button>
                        </div>
                    </form>
                </div>
            </section>
        )
    }
}

export default SectionContact;
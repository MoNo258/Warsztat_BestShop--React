import React, {Component} from 'react';

class Footer extends Component{
    render(){
        return(
            <footer className="footer">
                <div className="footer__container">
                    <div className="footer__container-left">
                        <a href="/" className="footer-logo">BestShop</a>
                        <p className="footer-copyright">
                            © 2019 BestShop LTD, All Rights Reserved
                        </p>
                    </div>
                    <div className="footer__container-right">
                        <a href="/" className="footer-twitter"></a>
                        <a href="/" className="footer-facebook"></a>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;
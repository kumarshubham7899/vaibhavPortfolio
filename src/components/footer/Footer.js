import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../images/logo.png'

const Footer = (props) => {
    return (
        <div className="tp-site-footer text-center">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="footer-image">
                        
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="link-widget">
                            <ul>
                                <li><Link to="/"><i className=""></i></Link></li>
                                <li><Link to="/"><i className=""></i></Link></li>
                                <li><Link to="/"><i className=""></i></Link></li>
                                <li><Link to="/"><i className=""></i></Link></li>
                                <li><Link to="/"><i className=""></i></Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="copyright">
                            <p>© 2023. All rights reserved by themepresss.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
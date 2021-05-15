import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons"
import { faDesktop, faServer, faDatabase, faFile} from '@fortawesome/free-solid-svg-icons'


const Services = () => {
    return (
        <div id="services" className="services">
            <h1 className="py-5">My Skills</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="box">
                                <div className="circle">
                                    <FontAwesomeIcon className="icon" icon={faDesktop} six="2x" />
                                </div>
                                <h3>Browser Based Technologies</h3>
                                <p>HTML5, CSS, JavaScript, jQuery, Bootstrap</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="box">
                                <div className="circle">
                                    <FontAwesomeIcon className="icon" icon={faDatabase} six="2x" />
                                </div>
                                <h3>Databases</h3>
                                <p>MySQL, MongoDB</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="box">
                                <div className="circle">
                                    <FontAwesomeIcon className="icon" icon={faServer} six="2x" />
                                </div>
                                <h3>Server Side Development</h3>
                                <p>MERN Stack, Progressive Web Applications</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="box">
                                <div className="circle">
                                    <FontAwesomeIcon className="icon" icon={faFile} six="2x" />
                                </div>
                                <h3>API Interaction</h3>
                                <p>API, JSON, AJAX</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Services

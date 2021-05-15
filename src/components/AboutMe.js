import React from 'react'
import BioImage from "../bio_photo.jpeg"

const AboutMe = () => {
    return (
        <div id="about" className="container py-5">
            <div className="row">
                 <div className="col-lg-6 col-xm-12">
                     <div className="photo-wrap">
                     </div>
                 <img className="profile-img" src={BioImage} alt="author" style={{width: "inherit"}}/>
                </div> 
                <div className="col-lg-6 col-xm-12">
                    <h1 className="about-heading">About Me</h1>
                    <p >I was born and raised in the city of Chicago, Illinois. A son of immigrant parents from
                            Mexican descent and the second oldest of two brothers and a sister diagnosed with down syndrome. Even
                            though my sister needs were a priority, my parents supported and loved each of us individually and as a
                            whole. Growing up, I realized how full their plate was so I did my best to support them as much as I can
                            by attending to my brothers needs. These unique challenges help me develop a level of maturity at a
                young age.</p>

                            <p>In high school, I was given the privilege to work as a
                            student aid for the Driver's Education program until I graduated. Ive worked in fast food as a
                            chasier, managed a gas station, and climb my way up in the hospitality industry at a fine dining
                            restaurant called Momotaro. I attended collage for a computer science degree and attended Illinois
                            institute of technology for a short period of time. During my free time, I write music and mix vocals
                            for local artist. I enjoy reading as it reveals things in a new light, and brew Kombucha to share with
                my friends and family.</p>
                </div> 
            </div>
        </div>
    )
}

export default AboutMe
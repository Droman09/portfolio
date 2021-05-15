import React, { useState } from 'react'
import emailjs from "emailjs-com"
import { useForm } from "react-hook-form";


const Contacts = () => {
    const [successMessage, setSuccessMessage] = useState("");
    const { register, handleSubmit, formState: { errors } } = useForm();
    const serviceID = "service_ID";
    const templateID = "template_ID";
    const userID = "user_IDlf2zhULFhlw2ZYbJoKu";

    const onSubmit = (data, r) => {
        sendEmail(
            serviceID,
            templateID,
            {
                name: data.name,
                phone: data.phone,
                email: data.email,
                subject: data.subject,
                description: data.description
            },
            userID
        )
        r.target.reset();
    }



    function sendEmail(serviceID, templateID, variables, userID) {
        emailjs.send(serviceID, templateID, variables, userID)
            .then(() => {
                setSuccessMessage("Form sent successfully! I'll contact you as soon as possible.");
            }).catch(err => console.error(`Something went wrong ${err}`));
    }


    return (
        <div id="contacts" className="contacts">
            <div className="text-center">
                <h1>Contacts</h1>
                <p>Please fill up the form and I will contact you as soon as possible</p>
                <span className="success-message">{successMessage}</span>
            </div>
            <div className="container">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                        <div className="col-md-6 col-xs-12">
                            <div className="text-center">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Name"
                                    name="name"
                                    {...register("name", {
                                        required: "Please enter your name",
                                        maxLength: {
                                            value: 20,
                                            message: "Please enter a name with fewer than 20 characters"
                                        }
                                    })
                                    }
                                />
                                <div className="line"></div>
                            </div>
                            {errors.name && <span className="error-message">No name?</span>}
                            <div className="text-center">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Phone number"
                                    name="phone"
                                    {...register("phone", {
                                        required: "Please add your phone number",
                                    })}
                                />
                                <div className="line"></div>
                            </div>
                            {errors.phone && <span className="error-message">Please add your phone number</span>}
                            <div className="text-center">
                                <input
                                    typeof="text"
                                    className="form-control"
                                    placeholder="Email"
                                    name="email"
                                    {...register("email", {
                                        required: "Please provide you email",
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: "invalid Email"
                                        }
                                    })}
                                />
                                <div className="line"></div>
                            </div>
                            {errors.email && <span className="error-message">Email is required</span>}
                            <div className="text-center">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Subject"
                                    name="subject"
                                    {...register("subject", {
                                        required: "You forget to add the subject.",
                                    })}
                                />
                                <div className="line"></div>
                            </div>
                            {errors.subject && <span className="error-message">You forget to add the subject.</span>}
                        </div>
                        <div className="col-md-6 col-xs-12">
                            <div className="text-center">
                                <textarea
                                    type="text"
                                    className="form-control"
                                    placeholder="Description"
                                    name="description"
                                    {...register("description", {
                                        required: "Please describe shortly your project needs..."
                                    })}
                                ></textarea>
                                <div className="line"></div>
                            </div>
                            {errors.description && <span className="error-message">Please describe shortly your project needs.</span>}
                            <button className="btn-main-offer contact-btn" type="submit">Contact Me</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contacts

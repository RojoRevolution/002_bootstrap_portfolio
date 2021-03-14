import React from "react";
import Button from "../Button";

function About(props) {

    return (
        <div className="container-fluid top-m-150">
            <div className="container">
                <div className="card c-updates">
                    <div className="card-body">
                        <div className="row p-5">
                            <div className="col-md-5"><img src="../images/me.png" className="img-fluid" alt="David Rojo" /><br />
                            </div>
                            <div className="col-md-7">
                                <p className="my-5">My name is David Red, and over the past 15 years I've been working
                                as a
                                designer in
                                    Branding, Print, Web, and UI/UX Design. <br /><br />
                                            I am currently working on expanding my skill
                                            set
                                    to include full-stack web development through the UT-Austin Bootcamp.</p>
                            </div>
                        </div>
                        <div class="container my-5 form-max-width">
                            <h2 class="text-center">Drop me a line:</h2>
                            <form>
                                <div class="mb-3">
                                    <label for="name" class="form-label">Name:</label>
                                    <input type="text" class="form-control" id="name" placeholder="First Last" />
                                </div>
                                <div class="mb-3">
                                    <label for="email" class="form-label">Email address:</label>
                                    <input type="email" class="form-control" id="email" placeholder="name@example.com" />
                                </div>
                                <div class="mb-3">
                                    <label for="message" class="form-label">Message:</label>
                                    <textarea class="form-control" id="message" placeholder="Start typing here..."
                                        rows="3"></textarea>
                                </div>
                                <div class="mb-3">
                                    <button type="submit"
                                        class="btn btn-primary mb-3 rounded-pill viewProject my-2 px-4">Send
                                        Message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default About;
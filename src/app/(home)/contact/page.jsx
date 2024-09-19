import React from 'react'

const Contact = () => {
  return (
    <div>
        {/* <!--contact Page header--> */}
    <section id="contact-page-header" class="text-center text-light bg-dark">
        <div class="container">
            <div class="row">
                <div class="col pt-5">
                    <h2 class="text-light">Contact Me</h2>
                    <div class="m-auto">
                        <div class="site-header-line">

                        </div>
                    </div>
                    <p class="lead">Let's get you connected with me. Hit the 'send' button to deliver your message or
                        contact me using other social media platform. I am available 24/7 online.</p>
                </div>
            </div>
        </div>
    </section>
    {/* <!--contact section--> */}
    <section id="contact" class="py-5">
        <div class="container">
            <div class="row">
                <div class="col-md-8">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="text-center">Please fill out this form to contact me</h4>
                            <div class="row mt-4">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <input type="text" placeholder="First Name" class="form-control"/>
                                    </div>
                                </div>

                                <div class="col-md-6">
                                    <div class="form-group">
                                        <input type="text" placeholder="Last Name" class="form-control"/>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <input type="email" placeholder="Email" class="form-control"/>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <input type="text" placeholder="Phone Number" class="form-control"/>
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <textarea cols="30" rows="5" class="form-control"
                                            placeholder="Message"></textarea>
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <input type="submit" class="btn btn-block btn-dark" value="Send"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="">Get In Touch</h4>
                            <p>Let`&quot`s get you connected with me. Hit the send button to deliver your message or contact
                                me using other social media platform. I am available 24/7 online.</p>
                            <h4>Address</h4>
                            <p>219, West Agargaon,<br/>Dhaka-1207.Bangladesh.</p>
                            <h4>Email</h4>
                            <p>zabed87@gmail.com</p>
                            <h4>Phone</h4>
                            <p>+8801921385283</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Contact
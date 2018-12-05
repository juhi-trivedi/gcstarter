import React, { Component } from 'react';
import Layout from '../components/layout';
import Map from '../components/Map'

class Contact extends Component {
  render() {
    return (
      <Layout>
        <div className="container">
          <div className="contactform">
            <h3>Contact Form</h3>
            <form action="https://formspree.io/juhi.trivedi@multidots.com" method="POST">
            <input type="hidden" name="_next" value="thanks"/>
            <p>
                <label>Your name: </label>
                  <input type="text" name="name" />
              </p>
              <p>
                <label>Your email: </label>
                  <input type="email" name="email" />
              </p>
              <p>
                <label>Message: </label>
                  <textarea name="message" />
              </p>
              <p>
                <input type="submit" value="Send" />
              </p>
            </form>
            <div className="gmap">
              <Map />
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default Contact;
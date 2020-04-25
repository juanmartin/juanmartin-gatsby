import React from 'react';
import config from '../../config';
export default function Footer() {
  return (
    <section id="footer">
      <div className="inner">
        <h2 className="major">PEGAME UN TUBAZO DIGITAL // GET IN TOUCH</h2>
        {/* <p>
          Mandame un mail.
        </p> */}
        {/* <form method="post" action="/#">
          <div className="fields">
            <div className="field">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
          </div>
          <ul className="actions">
            <li>
              <input type="submit" value="Send Message" />
            </li>
          </ul>
        </form> */}
        <ul className="contact">
          {/* <li className="fa-home">{config.address}</li> */}

          {/* <li className="fa-phone">{config.phone}</li> */}

          {config.socialLinks.map(social => {
            const { icon, url, text } = social;
            return (
              <li className={`${icon}`} key={url}>
                <a href={url}>{text}</a>
              </li>
            );
          })}
        </ul>
        <ul className="copyright">
          <li>&copy; JMSM</li>
          <li>
            
          </li>
        </ul>
      </div>
    </section>
  );
}

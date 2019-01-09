import React from 'react';

const Services = () => {
    return(
       <section id="services">
      <div className="wrapper">
        <h1>Services</h1>
        <p></p>
        <ul>
          <li>
            <img src={require('./assets/img/icon-1.png')} />
            <a href="#">Recording<br />services</a>
          </li>
          <li>
          <img src={require('./assets/img/icon-2.png')} />
            <a href="#">Get a printed<br />certificate</a>
          </li>
          <li>
          <img src={require('./assets/img/icon-3.png')} />
            <a href="#">Lessons via<br />Skype</a>
          </li>
        </ul>
      </div>
    </section>
    )
}

export default Services;
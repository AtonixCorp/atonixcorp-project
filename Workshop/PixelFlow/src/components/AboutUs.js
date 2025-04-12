import React from 'react';
import './AboutUs.css'; // Import the same CSS file

const AboutUs = () => {
  return (
    <div className="container-aboutus my-4">
      <header className="text-center mb-3">
        <h1>AtonixCorp: Empowering Innovation Through Data Analytics 🌐</h1>
      </header>

      <section className="mb-4">
        <h2>Company Biography</h2>
        <p>
          Founded on the principles of innovation and excellence, AtonixCorp is
          a leading technology company specializing in advanced data analytics
          solutions tailored to meet the diverse needs of modern industries.
          With a dedicated team of passionate developers, security researchers,
          and software engineers, we are committed to building cutting-edge
          services that drive efficiency, sustainability, and growth across
          various sectors.
        </p>
      </section>

      <section className="mb-4">
        <h2>Our Vision</h2>
        <p>
          At AtonixCorp, we envision a world where data empowers organizations
          to make informed decisions, optimize operations, and enhance user
          experiences. We believe that through the intelligent application of
          data analytics, we can unlock new opportunities and create lasting
          impact in industries ranging from agriculture to energy.
        </p>
      </section>

      <section className="mb-4">
        <h2>Our Expertise</h2>
        <ul className="list-group">
          <li className="list-group-item">
            <strong>IoT Solutions:</strong> We leverage the transformative power
            of the Internet of Things (IoT) to develop smart, interconnected
            ecosystems. Our solutions span various domains, including precision
            agriculture and industrial automation, facilitating seamless data
            exchange and actionable insights that drive operational excellence.
          </li>
          <li className="list-group-item">
            <strong>Agriculture Technology:</strong> Committed to fostering
            sustainable agriculture, we design innovative solutions that
            optimize irrigation, fertigation, and solar power systems. Our
            technologies empower small farmers by enhancing crop yields and
            resource efficiency, ensuring food security for future generations.
          </li>
          <li className="list-group-item">
            <strong>Oil Technology Research:</strong> AtonixCorp is deeply
            engaged in research and development efforts aimed at improving the
            efficiency and sustainability of oil extraction and processing. Our
            cutting-edge technologies assist in minimizing environmental impacts
            while maximizing resource recovery.
          </li>
        </ul>
      </section>

      <section className="text-center">
        <h2>Join Us on Our Journey!</h2>
        <p>
          At AtonixCorp, we are always looking for talented individuals who
          share our passion for innovation and sustainability. If you are
          interested in making a difference through data analytics and
          technology, we invite you to explore career opportunities with us.
        </p>
      </section>
    </div>
  );
};

export default AboutUs;

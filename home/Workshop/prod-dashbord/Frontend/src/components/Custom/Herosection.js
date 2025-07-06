import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

// ✅ Import images from local path
import buildFuture from '../../images/build-future-256381.jpg';
import cybersecurity from '../../images/cybersecurity.jpg';
import innovation from '../../images/innovation.jpg';
import medresarch from '../../images/medresarch.jpg';
import networking from '../../images/networking.jpg';

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 600,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false,
};

const Herosection = () => {
  const slides = [
    {
      image: buildFuture,
      title: 'Build the Future with',
      highlight: 'AtonixCorp',
      text: 'Developer Preview Program now live—your ideas shape our next evolution.',
    },
    {
      image: cybersecurity,
      title: 'Innovate Securely',
      text: 'Our cybersecurity solutions are built for speed, scale, and peace of mind.',
    },
    {
      image: innovation,
      title: 'Pioneering Innovation',
      text: 'Exploring scalable systems for research, health, and enterprise.',
    },
    {
      image: medresarch,
      title: 'Medical Research',
      text: 'Empowering discoveries with secure platforms and advanced analytics.',
    },
    {
      image: networking,
      title: 'Global Networking',
      text: 'Collaborate, connect, and deploy with the AtonixCorp ecosystem.',
    },
  ];

  return (
    <header className="container my-5 position-relative">
      {/* 🌀 SVG Animated Waves */}
      <svg
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
        }}
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="#6610f2"
          fillOpacity="0.3"
          d="M0,160L40,154.7C80,149,160,139,240,144C320,149,400,171,480,165.3C560,160,640,128,720,117.3C800,107,880,117,960,128C1040,139,1120,149,1200,160C1280,171,1360,181,1400,186.7L1440,192L1440,320L1400,320L0,320Z"
        >
          <animate
            attributeName="d"
            dur="10s"
            repeatCount="indefinite"
            values="
              M0,160L40,154.7C80,149,160,139,240,144C320,149,400,171,480,165.3C560,160,640,128,720,117.3C800,107,880,117,960,128C1040,139,1120,149,1200,160C1280,171,1360,181,1400,186.7L1440,192L1440,320L1400,320L0,320Z;
              M0,200L60,180C120,160,240,120,360,128C480,136,600,192,720,186.7C840,181,960,123,1080,117.3C1200,112,1320,160,1380,186.7L1440,213L1440,320L1380,320L0,320Z;
              M0,160L40,154.7C80,149,160,139,240,144C320,149,400,171,480,165.3C560,160,640,128,720,117.3C800,107,880,117,960,128C1040,139,1120,149,1200,160C1280,171,1360,181,1400,186.7L1440,192L1440,320L1400,320L0,320Z
            "
          />
        </path>
      </svg>

      <div className="hero-section" style={{ position: 'relative', borderRadius: '20px', overflow: 'hidden' }}>
        <Slider {...sliderSettings}>
          {slides.map((slide, index) => (
            <div key={index} className="position-relative">
              {/* 💡 Image fills background */}
              <img
                src={slide.image}
                alt={slide.title}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  filter: 'brightness(0.6)',
                  zIndex: 0,
                }}
              />
              {/* 📝 Text overlays on top */}
              <div
                style={{
                  padding: '6rem 2rem',
                  textAlign: 'center',
                  color: '#fff',
                  position: 'relative',
                  zIndex: 1,
                }}
              >
                <h1 style={{ fontSize: '3.5rem', fontWeight: 800, textShadow: '0 0 12px rgba(0,0,0,0.4)' }}>
                  {slide.title}{' '}
                  {slide.highlight && (
                    <span style={{ color: '#ffd700' }}>{slide.highlight}</span>
                  )}
                </h1>
                <p style={{ fontSize: '1.25rem', lineHeight: '1.7' }}>{slide.text}</p>
              </div>
            </div>
          ))}
        </Slider>

        {/* CTA Button */}
        <div className="text-center mt-4">
          <a
            href="https://developer.atonix.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-light btn-lg fw-semibold px-4 py-2"
            style={{
              boxShadow: '0 0 12px rgba(255,255,255,0.4)',
              color: '#0d6efd',
              borderRadius: '8px',
              zIndex: 2,
              position: 'relative',
            }}
          >
            Join the Preview Program
          </a>
        </div>
      </div>
    </header>
  );
};

export default Herosection;
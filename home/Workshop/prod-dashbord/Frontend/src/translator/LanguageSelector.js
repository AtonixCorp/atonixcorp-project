import React, { useEffect } from 'react';

const LanguageSelector = () => {
  useEffect(() => {
    // Inject Google Translate API
    const addGoogleTranslateScript = () => {
      if (
        !document.querySelector(
          'script[src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"]'
        )
      ) {
        const script = document.createElement('script');
        script.src =
          '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
      }
    };

    // Inject CSS for styling the widget
    const injectStyles = () => {
      const style = document.createElement('style');
      style.textContent = `
        .goog-te-banner-frame.skiptranslate {
          display: none !important;
        }
        body {
          top: 0px !important;
        }
        #google_translate_element .goog-te-gadget-simple {
          background-color: #000000;
          border: 1px solid #ffffff;
          color: #ffffff;
          border-radius: 4px;
          padding: 5px;
        }
        #google_translate_element .goog-te-gadget-simple .goog-te-menu-value span {
          color: #ffffff;
        }
        .goog-te-menu-frame {
          background-color: #000000 !important;
          border: 1px solid #ffffff !important;
        }
        .goog-te-menu2-item div,
        .goog-te-menu2-item-selected div {
          color: #ffffff !important;
          background-color: #000000 !important;
        }
        .goog-te-menu2-item div:hover {
          background-color: #333333 !important;
        }
      `;
      document.head.appendChild(style);
    };

    // Google Translate Initialization Callback
    window.googleTranslateElementInit = () => {
      if (window.google && window.google.translate) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: 'en',
            includedLanguages: 'en,es,fr,de,it,ja,zh-CN,ru,af,zu,ig',
          },
          'google_translate_element'
        );
      }
    };

    // Trigger setup
    addGoogleTranslateScript();
    injectStyles();
  }, []);

  return <div id="google_translate_element"></div>;
};

export default LanguageSelector;
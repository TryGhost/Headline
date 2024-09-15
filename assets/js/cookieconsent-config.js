// constant cs = require('./assets/built/cookieconsent.umd.js');
import '../built/cookieconsent.umd.js';

// obtain plugin
// var CookieConsent = initCookieConsent();

// run plugin with your configuration
CookieConsent.run({
    guiOptions: {
        consentModal: {
            layout: "box",
            position: "bottom left",
            equalWeightButtons: true,
            flipButtons: false
        },
        preferencesModal: {
            layout: "box",
            position: "right",
            equalWeightButtons: true,
            flipButtons: false
        }
    },
    categories: {
        necessary: {
            readOnly: true
        },
        analytics: {}
    },
    language: {
        default: "fr",
        autoDetect: "browser",
        translations: {
            en: async () => {
                const res = await fetch('./cc_en.js');
                return await res.json();
            },
            fr: async () => {
                const res = await fetch('./cc_fr.js');
                return await res.json();
            }            
        }
    }
);
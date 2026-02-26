module.exports = {
    name: "Magic Animals",
    email: "magic.animals@outlook.com",
    phoneForTel: "691 146 468",
    phoneFormatted: "(352) 691146468",
    address: {
        lineOne: "15 Rue Zénon Bernard",
        city: "Differdange",
        zip: "4515",
        country: "LU",
        mapLink: "https://maps.app.goo.gl/QDa4D6kkPh5LjS1K6",
    },
    socials: {
        facebook: "https://www.facebook.com/",
        instagram: "https://www.instagram.com/magicanimals2024/",
    },
    //! Make sure you include the file protocol (e.g. https://) and that NO TRAILING SLASH is included
    domain: "https://www.example.com",
    // Passing the isProduction variable for use in HTML templates
    isProduction: process.env.ELEVENTY_ENV === "PROD",
};

import React from "react";

const ShishyaEnrollForm = () => {
  const pageData = {
    instruction: {
      h1: "Sri Vanamamalai/Thothadri Mutt - Sishyas/Volunteers Register",
      p: "As per the wish of our current pontiff Srimath paramahamsEthyAdhi Madhurakavi VAnamAmalai RAmAnuja JIyar SwAmy, we are building a database of our Mutt Sishyas.",

      li: [
        "- Please fill in all the details and register yourself for kainkaryams coordinated by our Mutt.",
        "- Use another form and enter again for another person of your family.",
      ],

      h2: "For any questions/comments about this form, please contact :",
      email: "vanamamalai.mutt@gmail.com ",
      phone: ["9677035530", "9500086417"],
      website: "http://vanamamalai.us",

      h2: "Please note: ",
      star_li: [
        "Some kainkaryams require the person to have undergone Samasrayanam.",
        "Some kainkaryams require the person to have undergone Samasrayanam and Granthanvayam.",
      ],
    },

    questions_content: [
      {
        h1: "Name",
        required: true,
        answer: "",
        type: "text",
      },

      {
        h1: "Age Group",
        required: true,
        answer: "",
        type: "select",
        select_options: [
          "Less than 15",
          "16 to 20",
          "20 to 25",
          "26 to 30",
          "31 to 35",
          "36 to 40",
          "41 to 50",
          "51 to 60",
          "Above 60",
        ],
      },

      {
        h1: "Gender",
        required: true,
        answer: "",
        type: "radio",
        radio_options: ["Male", "Female"],
      },

      {
        h1: "Contact number (WhatsApp preferred)*",
        h2: "Enter your primary contact number.",
        required: true,
        answer: "",
        type: "tel",
      },

      {
        h1: "Contact number (WhatsApp preferred)",
        h2: "Enter your primary contact number.",
        required: true,
        answer: "",
        type: "text",
      },

      {
        h1: "Email ID",
        h2: "Enter your email address",
        required: true,
        answer: "",
        type: "email",
      },

      {
        h1: "Samasrayanam done?",
        h2: "Have you undergone pancha samskaram?",
        required: true,
        answer: "",
        type: "radio",
        radio_options: ["Yes", "No"],
      },

      {
        h1: "Native Place",
        required: false,
        answer: "",
        type: "select",
        select_options: [
          "Vanamamalai / Nanguneri",
          "Chennai - Triplicane",
          "Chennai - Others",
          "Madurai",
          "Trichy",
          "Srirangam",
          "Kanchipuram",
          "Hyderabad",
          "United States",
          "United Kingdom",
          "Australia",
          "Canada",
          "France",
          "Singapore",
          "Japan",
          "Perungulam",
          "Thenthirupperai",
          "Alwar Thirunagari",
          "Vadakarai",
          "Dusi-Mamandur",
          "Mannargudi",
          "Serangulam",
          "Mannarkoil",
          "Salem",
          "Coimbatore",
          "Athalanallur",
          "Thirukkurungudi",
          "Nathankoil",
          "Secunderabad",
          "Vijayawada",
          "Bengaluru",
          "Nepal",
          "Uttar Pradesh",
          "Orissa",
          "New Delhi",
          "Other",
        ],
      },

      {
        h1: "If other location where you preferred to do kainkaryam",
        h2: "Do not enter anything if you have already chosen your preferred location, above.",
        required: false,
        answer: "",
        type: "text",
      },

      {
        h1: "Current Location",
        h2: "Where are you currently residing?",
        required: false,
        answer: "",
        type: "select",
        select_options: [
          "Vanamamalai / Nanguneri",
          "Chennai - Triplicane",
          "Chennai - Others",
          "Madurai",
          "Trichy",
          "Srirangam",
          "Kanchipuram",
          "Hyderabad",
          "United States",
          "United Kingdom",
          "Australia",
          "Canada",
          "France",
          "Singapore",
          "Japan",
          "Perungulam",
          "Thenthirupperai",
          "Alwar Thirunagari",
          "Vadakarai",
          "Dusi-Mamandur",
          "Mannargudi",
          "Serangulam",
          "Mannarkoil",
          "Salem",
          "Coimbatore",
          "Athalanallur",
          "Thirukkurungudi",
          "Nathankoil",
          "Secunderabad",
          "Vijayawada",
          "Bengaluru",
          "Nepal",
          "Uttar Pradesh",
          "Orissa",
          "New Delhi",
          "Other",
        ],
      },

      {
        h1: "If other location where you residing in currently",
        h2: "Do not enter anything if you have already chosen your current location, above.",
        required: false,
        answer: "",
        type: "text",
      },
    ],
  };
  return <div>ShishyaEnrollForm</div>;
};

export default ShishyaEnrollForm;

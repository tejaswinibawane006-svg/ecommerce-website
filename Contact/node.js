const contactStyles = {
  contact: {
    background: "#f7f7f7",
  },

  contactContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "40px",
    flexWrap: "wrap",
    marginTop: "30px",
  },

  // Contact Info
  contactInfo: {
    flex: 1,
    minWidth: "280px",
    background: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
  },

  contactInfoHeading: {
    marginBottom: "15px",
  },

  // Contact Form
  contactForm: {
    flex: 1,
    minWidth: "280px",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },

  input: {
    padding: "12px",
    border: "1px solid #ccc",
    borderRadius: "6px",
    fontSize: "14px",
    outline: "none",
  },

  textarea: {
    padding: "12px",
    border: "1px solid #ccc",
    borderRadius: "6px",
    fontSize: "14px",
    outline: "none",
    resize: "vertical",
  },

  // Button
  button: {
    padding: "12px",
    background: "#f4b400",
    border: "none",
    fontWeight: "bold",
    cursor: "pointer",
    borderRadius: "6px",
  },

  buttonHover: {
    background: "#ffcc33",
  },
};

export default contactStyles;
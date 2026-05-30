const styles = {
  // Global
  body: {
    lineHeight: 1.6,
    color: "#333",
    backgroundColor: "#fff",
    fontFamily: "Arial, sans-serif",
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  },

  // Header
  header: {
    background: "#111",
    color: "#fff",
    padding: "15px 40px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  headerTitle: {
    fontSize: "24px",
  },

  navLink: {
    color: "#fff",
    marginLeft: "20px",
    textDecoration: "none",
  },

  // Hero Section
  hero: {
    backgroundImage:
      "url('https://images.unsplash.com/photo-1551882547-ff40c63fe5fa')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "90vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    color: "white",
    position: "relative",
  },

  heroOverlay: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    background: "rgba(0,0,0,0.5)",
  },

  heroContent: {
    position: "relative",
    zIndex: 1,
  },

  heroHeading: {
    fontSize: "48px",
    marginBottom: "10px",
  },

  heroParagraph: {
    fontSize: "18px",
    marginBottom: "20px",
  },

  // Button
  btn: {
    display: "inline-block",
    padding: "12px 25px",
    background: "#f4b400",
    color: "#000",
    fontWeight: "bold",
    textDecoration: "none",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
  },

  // Sections
  section: {
    padding: "60px 40px",
    textAlign: "center",
  },

  // Rooms
  rooms: {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
    justifyContent: "center",
  },

  roomCard: {
    width: "300px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    overflow: "hidden",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
    background: "#fff",
  },

  roomImage: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
  },

  roomTitle: {
    margin: "10px 0",
  },

  roomText: {
    padding: "0 10px 15px",
  },

  // Services
  services: {
    background: "#f7f7f7",
  },

  serviceList: {
    display: "flex",
    justifyContent: "center",
    gap: "40px",
    flexWrap: "wrap",
  },

  service: {
    width: "200px",
    padding: "15px",
    background: "#fff",
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  },

  // Contact
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

  contactInfo: {
    flex: 1,
    minWidth: "280px",
    background: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
  },

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
  },

  textarea: {
    padding: "12px",
    border: "1px solid #ccc",
    borderRadius: "6px",
    fontSize: "14px",
  },

  submitButton: {
    padding: "12px",
    background: "#f4b400",
    border: "none",
    fontWeight: "bold",
    cursor: "pointer",
    borderRadius: "6px",
  },

  // Footer
  footer: {
    background: "#111",
    color: "#fff",
    textAlign: "center",
    padding: "20px",
    marginTop: "20px",
  },

  // Mobile Styles
  mobileHeader: {
    flexDirection: "column",
    textAlign: "center",
  },

  mobileNav: {
    marginTop: "10px",
  },

  mobileHeroHeading: {
    fontSize: "32px", // Fixed from 200px (likely typo)
  },

  mobileRooms: {
    flexDirection: "column",
    alignItems: "center",
  },

  mobileServiceList: {
    flexDirection: "column",
    alignItems: "center",
  },
};

export default styles;
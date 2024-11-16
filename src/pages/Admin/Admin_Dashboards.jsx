import React, { useState } from "react";
import Maintainance from "../Firebase/Maintainance";
import Booking from "../Firebase/Booking";
import Contact from "../Firebase/Contact";

const styles = {
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "20px",
    fontFamily: "Arial, sans-serif"
  },
  loginContainer: {
    maxWidth: "400px",
    margin: "100px auto",
    padding: "30px",
    borderRadius: "8px",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
    background: "white"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "20px"
  },
  input: {
    padding: "10px",
    border: "1px solid #ddd",
    borderRadius: "4px",
    fontSize: "16px",
    width: "100%"
  },
  button: {
    padding: "12px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "16px",
    transition: "background-color 0.2s"
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "30px",
    paddingBottom: "20px",
    borderBottom: "1px solid #eee"
  },
  nav: {
    display: "flex",
    gap: "10px",
    marginBottom: "30px"
  },
  navButton: {
    padding: "10px 20px",
    backgroundColor: "#f8f9fa",
    border: "1px solid #ddd",
    borderRadius: "4px",
    cursor: "pointer"
  },
  activeNavButton: {
    backgroundColor: "#007bff",
    color: "white",
    border: "1px solid #007bff"
  },
  content: {
    background: "white",
    padding: "30px",
    borderRadius: "8px",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)"
  },
  logoutButton: {
    padding: "8px 16px",
    backgroundColor: "#dc3545",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer"
  }
};

const AdminDashboard = () => {
  const [accessGranted, setAccessGranted] = useState(false);
  const [selectedSchema, setSelectedSchema] = useState("");
  const adminCode = "89548954";

  const handleLogin = (event) => {
    event.preventDefault();
    const enteredCode = event.target.elements.adminCode.value;
    if (enteredCode === adminCode) {
      setAccessGranted(true);
    } else {
      alert("Wrong admin code. Please try again.");
    }
  };

  const handleLogout = () => {
    setAccessGranted(false);
    setSelectedSchema("");
  };

  const renderSelectedSchema = () => {
    switch (selectedSchema) {
      case "Maintainance":
        return <Maintainance />;
      case "Booking":
        return <Booking />;
      case "Contact":
        return <Contact />;
      default:
        return (
          <div style={{ textAlign: "center", color: "#6c757d" }}>
            <h2>Welcome to Admin Dashboard</h2>
            <p>Please select a module from the navigation menu above.</p>
          </div>
        );
    }
  };

  return (
    <div style={styles.container}>
      {!accessGranted ? (
        <div style={styles.loginContainer}>
          <h1>Admin Portal</h1>
          <form onSubmit={handleLogin} style={styles.form}>
            <div>
              <label htmlFor="adminCode">Admin Access Code</label>
              <input
                type="password"
                id="adminCode"
                name="adminCode"
                required
                style={styles.input}
              />
            </div>
            <button type="submit" style={styles.button}>
              Access Dashboard
            </button>
          </form>
        </div>
      ) : (
        <div>
          <header style={styles.header}>
            <h1>Admin Dashboard</h1>
            <button onClick={handleLogout} style={styles.logoutButton}>
              Logout
            </button>
          </header>
          
          <nav style={styles.nav}>
            <button
              onClick={() => setSelectedSchema("Maintainance")}
              style={{
                ...styles.navButton,
                ...(selectedSchema === "Maintainance" && styles.activeNavButton)
              }}
            >
              Maintenance
            </button>
            <button
              onClick={() => setSelectedSchema("Booking")}
              style={{
                ...styles.navButton,
                ...(selectedSchema === "Booking" && styles.activeNavButton)
              }}
            >
              Booking
            </button>
            <button
              onClick={() => setSelectedSchema("Contact")}
              style={{
                ...styles.navButton,
                ...(selectedSchema === "Contact" && styles.activeNavButton)
              }}
            >
              Contact
            </button>
          </nav>
          
          <main style={styles.content}>
            {renderSelectedSchema()}
          </main>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;

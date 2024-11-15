import React, { useState, useEffect } from "react";
import { database } from "../../firebaseConfig";
import { ref, onValue } from "firebase/database";

const styles = {
  // ... (keep existing styles)
  
  contactLink: {
    color: "#007bff",
    textDecoration: "none",
    cursor: "pointer",
    transition: "color 0.2s",
    "&:hover": {
      color: "#0056b3"
    }
  },
  emailLink: {
    color: "#6c757d",
    fontSize: "12px",
    textDecoration: "none",
    "&:hover": {
      color: "#007bff"
    }
  }
};

const Maintenance = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hoveredRow, setHoveredRow] = useState(null);

  useEffect(() => {
    const dbRef = ref(database, "Maintainance");
    
    onValue(dbRef, (snapshot) => {
      const fetchedData = snapshot.val();
      if (fetchedData) {
        const formattedData = Object.keys(fetchedData).map((key) => ({
          id: key,
          ...fetchedData[key],
        }));
        setData(formattedData);
      } else {
        setData([]);
      }
      setLoading(false);
    });
  }, []);

  const formatPhoneNumber = (phone) => {
    return phone.replace(/\D/g, '');
  };

  if (loading) {
    return (
      <div style={styles.loadingSpinner}>
        <div>Loading maintenance data...</div>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Maintenance Services Dashboard</h1>
      
      {data.length === 0 ? (
        <div style={styles.noData}>
          <h3>No Maintenance Records</h3>
          <p>There are currently no maintenance requests in the system.</p>
        </div>
      ) : (
        <div style={styles.tableContainer}>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>Name</th>
                <th style={styles.th}>Service</th>
                <th style={styles.th}>Category</th>
                <th style={styles.th}>Contact</th>
                <th style={styles.th}>Location</th>
                <th style={styles.th}>Details</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr
                  key={item.id}
                  style={{
                    ...styles.tr,
                    ...(hoveredRow === item.id && styles.trHover)
                  }}
                  onMouseEnter={() => setHoveredRow(item.id)}
                  onMouseLeave={() => setHoveredRow(null)}
                >
                  <td style={styles.td}>
                    {item.firstName} {item.lastName}
                  </td>
                  <td style={styles.td}>{item.service}</td>
                  <td style={styles.td}>{item.category}</td>
                  <td style={styles.td}>
                    <a 
                      href={`tel:${formatPhoneNumber(item.phone)}`}
                      style={styles.contactLink}
                    >
                      {item.phone}
                    </a>
                    <div>
                      <a 
                        href={`mailto:${item.email}`}
                        style={styles.emailLink}
                      >
                        {item.email}
                      </a>
                    </div>
                  </td>
                  <td style={styles.td}>
                    <div>{item.address}</div>
                    <div style={{ color: "#6c757d", fontSize: "12px" }}>
                      {item.latitude}, {item.longitude}
                    </div>
                  </td>
                  <td style={styles.td}>{item.details}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Maintenance;

import React, { useState, useEffect } from "react";
import { database } from "../../firebaseConfig";
import { ref, onValue } from "firebase/database";

const styles = {
  container: {
    padding: "24px",
    backgroundColor: "#ffffff",
    borderRadius: "12px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  },
  header: {
    color: "#1e293b",
    fontSize: "28px",
    fontWeight: "600",
    marginBottom: "24px",
  },
  tableContainer: {
    overflowX: "auto",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0,0,0,0.08)",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    fontSize: "14px",
    whiteSpace: "nowrap",
  },
  th: {
    backgroundColor: "#3b82f6",
    color: "white",
    padding: "16px",
    fontWeight: "500",
    textAlign: "left",
    position: "sticky",
    top: 0,
  },
  td: {
    padding: "14px 16px",
    borderBottom: "1px solid #e2e8f0",
    maxWidth: "200px",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  loadingState: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "40px",
    fontSize: "16px",
    color: "#64748b",
  },
  emptyState: {
    textAlign: "center",
    padding: "40px",
    backgroundColor: "#f8fafc",
    borderRadius: "8px",
    color: "#64748b",
  },
  link: {
    color: "#3b82f6",
    textDecoration: "none",
  },
  badge: {
    padding: "4px 8px",
    borderRadius: "4px",
    fontSize: "12px",
    fontWeight: "500",
    backgroundColor: "#e2e8f0",
  }
};

const Booking = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hoveredRow, setHoveredRow] = useState(null);

  useEffect(() => {
    const dbRef = ref(database, "booking");
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

  if (loading) {
    return (
      <div style={styles.loadingState}>
        <div>Loading booking information...</div>
      </div>
    );
  }

  if (data.length === 0) {
    return (
      <div style={styles.emptyState}>
        <h3>No Bookings Available</h3>
        <p>There are currently no service bookings in the system.</p>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Service Bookings</h1>
      <div style={styles.tableContainer}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Customer Details</th>
              <th style={styles.th}>Contact Information</th>
              <th style={styles.th}>Service Details</th>
              <th style={styles.th}>Location</th>
              <th style={styles.th}>Additional Info</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr
                key={item.id}
                style={{
                  backgroundColor: hoveredRow === item.id ? "#f8fafc" : "transparent",
                  transition: "background-color 0.2s"
                }}
                onMouseEnter={() => setHoveredRow(item.id)}
                onMouseLeave={() => setHoveredRow(null)}
              >
                <td style={styles.td}>
                  <div style={{ fontWeight: "500" }}>{item.fullName}</div>
                </td>
                <td style={styles.td}>
                  <div>
                    <a href={`mailto:${item.email}`} style={styles.link}>
                      {item.email}
                    </a>
                  </div>
                  <div>
                    <a href={`https://wa.me/${item.whatsappNumber}`} style={styles.link}>
                      WhatsApp: {item.whatsappNumber}
                    </a>
                  </div>
                  {item.alternateNumber && (
                    <div>Alternate Number: {item.alternateNumber}</div>
                  )}
                </td>
                <td style={styles.td}>
                  <div style={{ fontWeight: "500" }}>{item.serviceName}</div>
                  <div style={styles.badge}>{item.selectedVariant}</div>
                  <div>{item.selectedDuration}</div>
                </td>
                <td style={styles.td}>
                  <div>{item.deliveryAddress}</div>
                  <div style={{ fontSize: "12px", color: "#64748b" }}>
                    {item.latitude}, {item.longitude}
                  </div>
                </td>
                <td style={styles.td}>
                  {item.message || "No additional message"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Booking;

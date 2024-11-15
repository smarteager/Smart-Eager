import React, { useState, useEffect } from "react";
import { database } from "../../firebaseConfig";
import { ref, onValue } from "firebase/database";

const styles = {
  container: {
    padding: "24px",
    backgroundColor: "#ffffff",
    borderRadius: "10px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.08)",
  },
  header: {
    color: "#1a1a1a",
    fontSize: "28px",
    fontWeight: "600",
    marginBottom: "24px",
  },
  tableWrapper: {
    overflowX: "auto",
    backgroundColor: "#ffffff",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    fontSize: "14px",
  },
  th: {
    backgroundColor: "#2563eb",
    color: "#ffffff",
    padding: "16px",
    fontWeight: "500",
    textAlign: "left",
    whiteSpace: "nowrap",
  },
  td: {
    padding: "14px 16px",
    borderBottom: "1px solid #e5e7eb",
    color: "#4b5563",
  },
  messageCell: {
    maxWidth: "300px",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
  row: {
    transition: "background-color 0.2s ease",
  },
  loadingState: {
    textAlign: "center",
    padding: "40px",
    color: "#6b7280",
    fontSize: "16px",
  },
  emptyState: {
    textAlign: "center",
    padding: "40px",
    color: "#6b7280",
    backgroundColor: "#f9fafb",
    borderRadius: "8px",
    fontSize: "16px",
  }
};

const Contact = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hoveredRow, setHoveredRow] = useState(null);

  useEffect(() => {
    const dbRef = ref(database, "contact");

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
        <div>Loading contact information...</div>
      </div>
    );
  }

  if (data.length === 0) {
    return (
      <div style={styles.emptyState}>
        <h3>No Contact Entries</h3>
        <p>There are currently no contact form submissions.</p>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Contact Submissions</h1>
      <div style={styles.tableWrapper}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={{ ...styles.th, borderRadius: "8px 0 0 0" }}>Name</th>
              <th style={styles.th}>Email</th>
              <th style={styles.th}>Mobile</th>
              <th style={{ ...styles.th, borderRadius: "0 8px 0 0" }}>Message</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr
                key={item.id}
                style={{
                  ...styles.row,
                  backgroundColor: hoveredRow === item.id ? "#f8fafc" : "transparent"
                }}
                onMouseEnter={() => setHoveredRow(item.id)}
                onMouseLeave={() => setHoveredRow(null)}
              >
                <td style={styles.td}>{item.name}</td>
                <td style={styles.td}>
                  <a 
                    href={`mailto:${item.email}`}
                    style={{ color: "#2563eb", textDecoration: "none" }}
                  >
                    {item.email}
                  </a>
                </td>
                <td style={styles.td}>
                  <a 
                    href={`tel:${item.mobile}`}
                    style={{ color: "#2563eb", textDecoration: "none" }}
                  >
                    {item.mobile}
                  </a>
                </td>
                <td style={{ ...styles.td, ...styles.messageCell }}>
                  {item.message || "N/A"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Contact;

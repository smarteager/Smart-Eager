import React, { useState, useEffect } from "react";
import { database } from "../../firebaseConfig";
import { ref, onValue, set, get } from "firebase/database";

const Maintenance = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hoveredRow, setHoveredRow] = useState(null);
  const [checkedItems, setCheckedItems] = useState(() => {
    const savedChecks = localStorage.getItem('checkedMaintenanceItems');
    return savedChecks ? new Set(JSON.parse(savedChecks)) : new Set();
  });

  const styles = {
    mainContainer: {
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
    tableWrapper: {
      overflowX: "auto",
      borderRadius: "8px",
      boxShadow: "0 4px 6px rgba(0,0,0,0.08)",
      WebkitOverflowScrolling: "touch",
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
    row: {
      cursor: "pointer",
      transition: "background-color 0.2s ease",
    },
    newRow: {
      backgroundColor: "#f0f9ff",
    },
    hoveredRow: {
      backgroundColor: "#f8f9fa",
    },
    checkedRow: {
      backgroundColor: "#f1f5f9",
      opacity: 0.8,
    },
    newBadge: {
      backgroundColor: "#22c55e",
      color: "white",
      padding: "4px 8px",
      borderRadius: "4px",
      fontSize: "12px",
      fontWeight: "500",
      display: "inline-block",
    },
    contactCell: {
      display: "flex",
      flexDirection: "column",
      gap: "4px",
    },
    phoneLink: {
      color: "#3b82f6",
      textDecoration: "none",
      cursor: "pointer",
    },
    emailLink: {
      color: "#64748b",
      fontSize: "12px",
      textDecoration: "none",
    },
    locationCell: {
      maxWidth: "200px",
    },
    coordinates: {
      color: "#64748b",
      fontSize: "12px",
      marginTop: "4px",
    },
    loading: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "40px",
      fontSize: "16px",
      color: "#64748b",
    },
    noData: {
      textAlign: "center",
      padding: "40px",
      backgroundColor: "#f8fafc",
      borderRadius: "8px",
      color: "#64748b",
    },
  };

  useEffect(() => {
    const maintenanceRef = ref(database, "Maintainance");
    const checkedRef = ref(database, "checkedMaintenanceItems");

    get(checkedRef).then((snapshot) => {
      if (snapshot.exists()) {
        setCheckedItems(new Set(snapshot.val()));
      }
    });

    const maintenanceListener = onValue(maintenanceRef, (snapshot) => {
      const fetchedData = snapshot.val();
      if (fetchedData) {
        const formattedData = Object.keys(fetchedData).map((key) => ({
          id: key,
          isNew: !checkedItems.has(key),
          timestamp: fetchedData[key].timestamp || Date.now(),
          ...fetchedData[key],
        }));
        
        formattedData.sort((a, b) => b.timestamp - a.timestamp);
        setData(formattedData);
      } else {
        setData([]);
      }
      setLoading(false);
    });

    const checkedListener = onValue(checkedRef, (snapshot) => {
      if (snapshot.exists()) {
        setCheckedItems(new Set(snapshot.val()));
      }
    });

    return () => {
      maintenanceListener();
      checkedListener();
    };
  }, []);

  const handleRowClick = (id) => {
    const updatedCheckedItems = new Set([...checkedItems, id]);
    setCheckedItems(updatedCheckedItems);
    
    const checkedRef = ref(database, "checkedMaintenanceItems");
    set(checkedRef, [...updatedCheckedItems]);
    
    localStorage.setItem(
      'checkedMaintenanceItems',
      JSON.stringify([...updatedCheckedItems])
    );
  };

  const formatPhoneNumber = (phone) => {
    return phone.replace(/\D/g, "");
  };

  if (loading) {
    return <div style={styles.loading}>Loading maintenance data...</div>;
  }

  return (
    <div style={styles.mainContainer}>
      <h1 style={styles.header}>Maintenance Services Dashboard</h1>

      {data.length === 0 ? (
        <div style={styles.noData}>
          <h3>No Maintenance Records</h3>
          <p>There are currently no maintenance requests in the system.</p>
        </div>
      ) : (
        <div style={styles.tableWrapper}>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>Status</th>
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
                    ...styles.row,
                    ...(item.isNew && !checkedItems.has(item.id) && styles.newRow),
                    ...(hoveredRow === item.id && styles.hoveredRow),
                    ...(checkedItems.has(item.id) && styles.checkedRow),
                  }}
                  onMouseEnter={() => setHoveredRow(item.id)}
                  onMouseLeave={() => setHoveredRow(null)}
                  onClick={() => handleRowClick(item.id)}
                >
                  <td style={styles.td}>
                    {item.isNew && !checkedItems.has(item.id) && (
                      <span style={styles.newBadge}>New</span>
                    )}
                  </td>
                  <td style={styles.td}>{`${item.firstName} ${item.lastName}`}</td>
                  <td style={styles.td}>{item.service}</td>
                  <td style={styles.td}>{item.category}</td>
                  <td style={styles.td}>
                    <div style={styles.contactCell}>
                      <a
                        href={`tel:${formatPhoneNumber(item.phone)}`}
                        style={styles.phoneLink}
                      >
                        {item.phone}
                      </a>
                      <a 
                        href={`mailto:${item.email}`}
                        style={styles.emailLink}
                      >
                        {item.email}
                      </a>
                    </div>
                  </td>
                  <td style={styles.td}>
                    <div style={styles.locationCell}>
                      <div>{item.address}</div>
                      <div style={styles.coordinates}>
                        {item.latitude}, {item.longitude}
                      </div>
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

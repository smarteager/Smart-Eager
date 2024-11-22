import React, { useState, useEffect } from "react";
import { database } from "../../firebaseConfig";
import { ref, onValue, set, get } from "firebase/database";

const Maintenance = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hoveredRow, setHoveredRow] = useState(null);
  const [checkedItems, setCheckedItems] = useState(() => {
    const savedChecks = localStorage.getItem("checkedMaintenanceItems");
    return savedChecks ? new Set(JSON.parse(savedChecks)) : new Set();
  });
  const MobileCard = ({
    item,
    checkedItems,
    openInMaps,
    formatPhoneNumber,
  }) => (
    <div style={styles.responsiveCard} onClick={() => handleRowClick(item.id)}>
      <div style={styles.cardLabel}>Status</div>
      <div style={styles.cardValue}>
        {item.isNew && !checkedItems.has(item.id) && (
          <span style={styles.newBadge}>New</span>
        )}
      </div>

      <div style={styles.cardLabel}>Name</div>
      <div style={styles.cardValue}>{`${item.firstName} ${item.lastName}`}</div>

      <div style={styles.cardLabel}>Service</div>
      <div style={styles.cardValue}>{item.service}</div>

      <div style={styles.cardLabel}>Category</div>
      <div style={styles.cardValue}>{item.category}</div>

      <div style={styles.cardLabel}>Contact</div>
      <div style={styles.cardValue}>
        <a
          href={`tel:${formatPhoneNumber(item.phone)}`}
          style={styles.phoneLink}
          onClick={(e) => e.stopPropagation()}
        >
          {item.phone}
        </a>
        <a
          href={`mailto:${item.email}`}
          style={styles.emailLink}
          onClick={(e) => e.stopPropagation()}
        >
          {item.email}
        </a>
      </div>

      <div style={styles.cardLabel}>Location</div>
      <div style={styles.cardValue}>
        <div>{item.address}</div>
        {item.latitude && item.longitude ? (
          <div
            style={{ ...styles.coordinates, ...styles.mapLink }}
            onClick={(e) => openInMaps(item.latitude, item.longitude, e)}
          >
            📍 View on Map
          </div>
        ) : (
          <div style={{ ...styles.coordinates, color: "#94a3b8" }}>
            Location not available
          </div>
        )}
      </div>

      <div style={styles.cardLabel}>Details</div>
      <div style={styles.cardValue}>
        {item.details || "No details provided"}
      </div>
    </div>
  );
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
      cursor: "pointer",
      "&:hover": {
        color: "#3b82f6",
        textDecoration: "underline",
      },
    },
    mapLink: {
      color: "#3b82f6",
      textDecoration: "underline",
      cursor: "pointer",
      display: "inline-block",
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
    tooltipContainer: {
      position: "relative",
      display: "inline-block",
    },
    tooltip: {
      position: "absolute",
      bottom: "100%",
      left: "50%",
      transform: "translateX(-50%)",
      padding: "4px 8px",
      backgroundColor: "#333",
      color: "white",
      borderRadius: "4px",
      fontSize: "12px",
      whiteSpace: "nowrap",
      opacity: 0,
      visibility: "hidden",
      transition: "opacity 0.2s, visibility 0.2s",
    },
    responsiveCard: {
      display: "none",
      "@media (max-width: 768px)": {
        display: "block",
        padding: "16px",
        marginBottom: "16px",
        backgroundColor: "#fff",
        borderRadius: "8px",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        cursor: "pointer",
      },
    },

    cardLabel: {
      fontWeight: "500",
      color: "#64748b",
      marginBottom: "4px",
    },

    cardValue: {
      marginBottom: "12px",
    },

    detailsCell: {
      maxWidth: "300px",
      whiteSpace: "normal",
      wordBreak: "break-word",
      lineHeight: "1.5",
    },

    table: {
      width: "100%",
      borderCollapse: "collapse",
      fontSize: "14px",
      "@media (max-width: 768px)": {
        display: "none",
      },
    },

    tableWrapper: {
      overflowX: "auto",
      borderRadius: "8px",
      boxShadow: "0 4px 6px rgba(0,0,0,0.08)",
      WebkitOverflowScrolling: "touch",
      "@media (max-width: 1024px)": {
        display: "block",
        width: "100%",
      },
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
      "checkedMaintenanceItems",
      JSON.stringify([...updatedCheckedItems])
    );
  };

  const formatPhoneNumber = (phone) => {
    return phone.replace(/\D/g, "");
  };

  const openInMaps = (latitude, longitude, e) => {
    e.stopPropagation();
    const mapsUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;
    window.open(mapsUrl, "_blank");
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
        <>
          {/* Mobile View */}
          {data.map((item) => (
            <MobileCard
              key={item.id}
              item={item}
              checkedItems={checkedItems}
              openInMaps={openInMaps}
              formatPhoneNumber={formatPhoneNumber}
            />
          ))}

          {/* Desktop View */}
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
                      ...(item.isNew &&
                        !checkedItems.has(item.id) &&
                        styles.newRow),
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
                    <td
                      style={styles.td}
                    >{`${item.firstName} ${item.lastName}`}</td>
                    <td style={styles.td}>{item.service}</td>
                    <td style={styles.td}>{item.category}</td>
                    <td style={styles.td}>
                      <div style={styles.contactCell}>
                        <a
                          href={`tel:${formatPhoneNumber(item.phone)}`}
                          style={styles.phoneLink}
                          onClick={(e) => e.stopPropagation()}
                        >
                          {item.phone}
                        </a>
                        <a
                          href={`mailto:${item.email}`}
                          style={styles.emailLink}
                          onClick={(e) => e.stopPropagation()}
                        >
                          {item.email}
                        </a>
                      </div>
                    </td>
                    <td style={styles.td}>
                      <div style={styles.locationCell}>
                        <div>{item.address}</div>
                        {item.latitude && item.longitude ? (
                          <div
                            style={{ ...styles.coordinates, ...styles.mapLink }}
                            onClick={(e) =>
                              openInMaps(item.latitude, item.longitude, e)
                            }
                          >
                            📍 View on Map
                          </div>
                        ) : (
                          <div
                            style={{ ...styles.coordinates, color: "#94a3b8" }}
                          >
                            Location not available
                          </div>
                        )}
                      </div>
                    </td>
                    <td style={{ ...styles.td, ...styles.detailsCell }}>
                      {item.details || "No details provided"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default Maintenance;

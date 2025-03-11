import React from "react";
import { Link } from "react-router-dom";

const Funds = () => {
  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <p style={styles.headerText}>Instant, zero-cost fund transfers with UPI</p>
        <div>
          <Link to="#" style={styles.addButton}>Add funds</Link>
          <Link to="#" style={styles.withdrawButton}>Withdraw</Link>
        </div>
      </div>

      <div style={styles.row}>
        {/* Equity Section */}
        <div style={styles.col}>
          <h3 style={styles.sectionTitle}>Equity</h3>

          <div style={styles.card}>
            <div style={styles.dataRow}>
              <p>Available margin</p>
              <p style={styles.blueText}>₹4,043.10</p>
            </div>
            <div style={styles.dataRow}>
              <p>Used margin</p>
              <p style={styles.redText}>₹3,757.30</p>
            </div>
            <div style={styles.dataRow}>
              <p>Available cash</p>
              <p style={styles.blackText}>₹4,043.10</p>
            </div>

            <hr style={styles.divider} />

            <div style={styles.dataRow}>
              <p>Opening Balance</p>
              <p>₹4,043.10</p>
            </div>
            <div style={styles.dataRow}>
              <p>Opening Balance</p>
              <p>₹3,736.40</p>
            </div>
            <div style={styles.dataRow}>
              <p>Payin</p>
              <p>₹4,064.00</p>
            </div>
            <div style={styles.dataRow}>
              <p>SPAN</p>
              <p>₹0.00</p>
            </div>
            <div style={styles.dataRow}>
              <p>Delivery margin</p>
              <p>₹0.00</p>
            </div>
            <div style={styles.dataRow}>
              <p>Exposure</p>
              <p>₹0.00</p>
            </div>
            <div style={styles.dataRow}>
              <p>Options premium</p>
              <p>₹0.00</p>
            </div>

            <hr style={styles.divider} />

            <div style={styles.dataRow}>
              <p>Collateral (Liquid funds)</p>
              <p>₹0.00</p>
            </div>
            <div style={styles.dataRow}>
              <p>Collateral (Equity)</p>
              <p>₹0.00</p>
            </div>
            <div style={styles.dataRow}>
              <p>Total Collateral</p>
              <p>₹0.00</p>
            </div>
          </div>
        </div>

        {/* Commodity Section - Centered Properly */}
        <div style={styles.col}>
          <div style={styles.centerWrapper}>
            <div style={styles.commodityCard}>
              <p>You don't have a commodity account</p>
              <Link to="#" style={styles.withdrawButton}>Open Account</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Styles Object
const styles = {
  container: {
    padding: "20px 50px",
    fontFamily: "Arial, sans-serif",
    color: "#333",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
  },
  headerText: {
    fontSize: "14px",
    color: "#666",
  },
  addButton: {
    backgroundColor: "#28a745",
    color: "white",
    padding: "8px 15px",
    borderRadius: "4px",
    textDecoration: "none",
    marginRight: "10px",
  },
  withdrawButton: {
    backgroundColor: "#007bff",
    color: "white",
    padding: "8px 15px",
    borderRadius: "4px",
    textDecoration: "none",
  },
  row: {
    display: "flex",
    gap: "20px",
    alignItems: "stretch", // Ensures both columns align properly
  },
  col: {
    flex: 1,
    minWidth: "300px",
    display: "flex",
    flexDirection: "column",
  },
  card: {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
    maxWidth: "600px",
  },
  sectionTitle: {
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "15px",
  },
  dataRow: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px 0",
    fontSize: "14px",
  },
  blueText: {
    color: "#007bff",
    fontWeight: "bold",
  },
  redText: {
    color: "#dc3545",
    fontWeight: "bold",
  },
  blackText: {
    fontWeight: "bold",
  },
  divider: {
    border: "0.5px solid #ddd",
    margin: "15px 0",
  },
  // Properly Centers the Commodity Card inside its Column
  centerWrapper: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  commodityCard: {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "8px",
    textAlign: "center",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
    maxWidth: "400px",
    border: "1px solid #ddd",
  },
};

export default Funds;

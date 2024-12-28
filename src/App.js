import React, { useState } from "react";

const TestFlow = () => {
  const [testStatus, setTestStatus] = useState({
    loginTest: "pending",
    registrationTest: "pending",
    profileTest: "pending",
  });

  const handleTestClick = (test) => {
    setTestStatus((prevStatus) => {
      if (test === "loginTest") {
        return { ...prevStatus, loginTest: "passed" };
      }
      if (test === "registrationTest") {
        return { ...prevStatus, registrationTest: "failed" };
      }
      if (test === "profileTest" && prevStatus.registrationTest !== "failed") {
        return { ...prevStatus, profileTest: "passed" };
      }
      return prevStatus;
    });
  };

  const resetTests = () => {
    setTestStatus({
      loginTest: "pending",
      registrationTest: "pending",
      profileTest: "pending",
    });
  };

  return (
    <div style={styles.container}>
      <h3 style={styles.header}>Test Flow: Login → Registration → Profile</h3>
      <div style={styles.testSequence}>
        {["loginTest", "registrationTest", "profileTest"].map((test) => (
          <div
            key={test}
            style={{
              ...styles.testStep,
              backgroundColor: getBackgroundColor(testStatus[test]),
            }}
            onClick={() => handleTestClick(test)}
          >
            {getTestLabel(test)}
          </div>
        ))}
      </div>
      <button onClick={resetTests} style={styles.resetButton}>
        Restart All Tests
      </button>
    </div>
  );
};

const getTestLabel = (test) => {
  switch (test) {
    case "loginTest":
      return "Login Test";
    case "registrationTest":
      return "Registration Test";
    case "profileTest":
      return "Profile Test";
    default:
      return "Test";
  }
};

const getBackgroundColor = (status) => {
  switch (status) {
    case "pending":
      return "#dcdcdc";
    case "passed":
      return "#28a745";
    case "failed":
      return "#dc3545";
    default:
      return "#dcdcdc";
  }
};

const styles = {
  container: {
    width: "300px",
    height: "400px",
    padding: "10px",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
    fontFamily: "'Arial', sans-serif",
    textAlign: "center",
  },
  header: {
    fontSize: "1.2rem",
    color: "#333",
    marginBottom: "15px",
  },
  testSequence: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "15px",
  },
  testStep: {
    width: "200%",
    padding: "10px",
    margin: "5px 0",
    borderRadius: "4px",
    fontSize: "0.9rem",
    color: "#fff",
    cursor: "pointer",
    fontWeight: "bold",
    textAlign: "center",
    transition: "background-color 0.3s ease",
  },
  resetButton: {
    padding: "8px 15px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "0.9rem",
    transition: "background-color 0.3s ease",
  },
};

export default TestFlow;

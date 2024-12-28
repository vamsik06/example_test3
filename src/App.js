import React, { useState } from "react";

const TestFlow = () => {
  const [testStatus, setTestStatus] = useState({
    loginTest: "pending",
    registrationTest: "pending",
    profileTest: "pending",
  });

  const handleTestClick = (test) => {
    if (test === "loginTest") {
      setTestStatus((prevStatus) => ({
        ...prevStatus,
        loginTest: "passed",
      }));
    } else if (test === "registrationTest") {
      setTestStatus((prevStatus) => ({
        ...prevStatus,
        registrationTest: "failed",
      }));
    } else if (test === "profileTest" && testStatus.registrationTest !== "failed") {
      setTestStatus((prevStatus) => ({
        ...prevStatus,
        profileTest: "passed",
      }));
    }
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
        {["loginTest", "registrationTest", "profileTest"].map((test, index) => (
          <div
            key={test}
            style={{
              ...styles.testStep,
              backgroundColor:
                testStatus[test] === "pending"
                  ? "#dcdcdc"
                  : testStatus[test] === "passed"
                  ? "#28a745"
                  : "#dc3545",
            }}
            onClick={() => handleTestClick(test)}
          >
            {test === "loginTest"
              ? "Login Test"
              : test === "registrationTest"
              ? "Registration Test"
              : "Profile Test"}
          </div>
        ))}
      </div>
      <button onClick={resetTests} style={styles.resetButton}>
        Restart All Tests
      </button>
    </div>
  );
};

const styles = {
  container: {
    width: "300px",
    padding: "10px",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    fontFamily: "'Arial', sans-serif",
  },
  header: {
    fontSize: "1.2rem",
    color: "#333",
    marginBottom: "15px",
  },
  testSequence: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "15px",
  },
  testStep: {
    padding: "10px",
    margin: "5px 0",
    borderRadius: "4px",
    fontSize: "0.9rem",
    color: "#fff",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "background-color 0.3s",
  },
  resetButton: {
    padding: "8px 15px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "0.9rem",
    transition: "background-color 0.3s",
  },
};

export default TestFlow;

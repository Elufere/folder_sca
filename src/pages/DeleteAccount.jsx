import React, { useState } from "react";
import { Navbar } from "../components/navbar/Navbar";
import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";

const DeleteAccount = () => {
  const [deleteModal, setDeleteModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [email, setEmail] = useState(false);
  const [deleteCode, setDeleteCode] = useState("");
  const [errorStat, setErrorStat] = useState("");
  const [errorStat2, setErrorStat2] = useState("");
  const [finalDeleteModal, setFinalDeleteModal] = useState(false);

  const handleDelete = async () => {
    setLoading(true);
    try {
      const res = await axios.post(
        "https://scavenge.michofat.com/scavenge/v1/getdeletecode",
        { email }
      );
      if (res) {
        setDeleteModal(true);
      }
      setLoading(false);
      setErrorStat("");
    } catch (error) {
      setLoading(false);
      setErrorStat(
        error?.response?.data?.message || error?.response?.data?.error
      );
    }
  };
  const handleFinalDelete = async () => {
    setLoading2(true);
    try {
      const res = await axios.post(
        "https://scavenge.michofat.com/scavenge/v1/deleteaccount",
        { email, deletecode: Number(deleteCode) }
      );
      if (res) {
        setFinalDeleteModal(true);
        setEmail("");
        setDeleteCode("");
        setErrorStat2("");
      }
      setLoading2(false);
    } catch (error) {
      setLoading2(false);
      setErrorStat2(error?.response?.data?.message);
    }
  };
  const handleClose = () => {
    setFinalDeleteModal(false);
    setDeleteModal(false);
  };
  return (
    <>
      <Navbar />
      <div style={{ margin: 10 }}>
        <h3>Please Enter the email registered to your account</h3>
        <div style={{ display: "flex", flexDirection: "row", gap: 2 }}></div>
        <input
          type="text"
          value={email}
          style={{
            borderWidth: 1,
            borderColor: "gray",
            marginTop: 60,
            padding: 10,
            borderRadius: 8,
            marginLeft: 10,
          }}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email"
        />
        <button
          onClick={handleDelete}
          style={{
            backgroundColor: "red",
            border: 0,
            color: "white",
            padding: 10,
            borderRadius: 8,
            marginLeft: 5,
          }}
        >
          {loading ? (
            <ClipLoader
              color={"white"}
              loading={loading}
              size={24}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          ) : (
            "Delete"
          )}
        </button>
        {errorStat && (
          <h3 style={{ color: "red", fontWeight: "bolder", fontSize: 12 }}>
            {errorStat}
          </h3>
        )}

        {deleteModal && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 1000,
            }}
          >
            <div
              style={{
                width: "300px",
                padding: "20px",
                backgroundColor: "white",
                borderRadius: "8px",
                textAlign: "center",
              }}
            >
              <h4>Please enter the code sent to {email}</h4>
              <div style={{ marginTop: 0 }}>
                <input
                  type="number"
                  style={{
                    borderWidth: 1,
                    borderColor: "gray",
                    marginTop: 20,
                    padding: 10,
                    borderRadius: 8,
                    marginLeft: 10,
                    width: "90%",
                  }}
                  value={deleteCode}
                  onChange={(e) => setDeleteCode(e.target.value)}
                  placeholder="Enter code"
                />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 1,
                    marginTop: 5,
                  }}
                >
                  <button
                    onClick={() => setDeleteModal(false)}
                    style={{
                      backgroundColor: "gray",
                      color: "white",
                      padding: "10px 20px",
                      border: "none",
                      borderRadius: "8px",
                      width: "100%",
                    }}
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleFinalDelete}
                    style={{
                      backgroundColor: "green",
                      color: "white",
                      padding: "10px 20px",
                      border: "none",
                      borderRadius: "8px",
                      marginRight: "10px",
                      width: "100%",
                    }}
                  >
                    {loading2 ? (
                      <ClipLoader
                        color={"white"}
                        loading={loading2}
                        size={24}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                      />
                    ) : (
                      "Confirm"
                    )}
                  </button>
                </div>
                {errorStat2 && (
                  <h3
                    style={{ color: "red", fontWeight: "bolder", fontSize: 12 }}
                  >
                    {errorStat2}
                  </h3>
                )}
              </div>
            </div>
          </div>
        )}
        {finalDeleteModal && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 1000,
            }}
          >
            <div
              style={{
                width: "300px",
                padding: "20px",
                backgroundColor: "white",
                borderRadius: "8px",
                textAlign: "center",
              }}
            >
              <div style={{ marginTop: 20 }}>
                <h3>ACCOUNT DELETED SUCCESSFULLY</h3>

                <button
                  onClick={handleClose}
                  style={{
                    backgroundColor: "gray",
                    color: "white",
                    padding: "10px 20px",
                    border: "none",
                    borderRadius: "8px",
                  }}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default DeleteAccount;

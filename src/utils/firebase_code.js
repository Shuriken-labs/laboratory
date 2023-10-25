import React, { useState } from "react";
import firebase from "firebase/app";
import "firebase/firestore";

// Initialize Firebase
const firebaseConfig = {
  // Your Firebase configuration goes here
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const WalletForm = () => {
  const [address, setAddress] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleAddWallet = async (e) => {
    e.preventDefault();

    // Check if the address already exists in the collection
    const snapshot = await db
      .collection("wallets")
      .where("address", "==", address)
      .get();
    if (!snapshot.empty) {
      setErrorMessage("Address already exists");
      return;
    }

    // Add the wallet address to the collection
    try {
      await db.collection("wallets").add({ address });
      setAddress("");
      setErrorMessage("");
      console.log("Wallet address added successfully!");
    } catch (error) {
      console.error("Error adding wallet address:", error);
    }
  };

  return (
    <form onSubmit={handleAddWallet}>
      <input
        type="text"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <button type="submit">Add Wallet</button>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
    </form>
  );
};

export default WalletForm;

import { React, useState } from "react";
import KhaltiCheckout from "khalti-checkout-web";
import config from "./khaltiConfig";
import Navbar from "components/Navbar/Navbar";

import Input from "components/Input/Input";

export default function Khalti() {
  const [amount, setAmount] = useState("");
  let checkout = new KhaltiCheckout(config);

  let buttonStyles = {
    backgroundColor: "purple",
    padding: "10px",
    color: "white",
    cursor: "pointer",
    fontWeight: "bold",
    border: "1px solid white",
  };
  let khaltiContainerStyles = {
    height: "50vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  };
  return (
    <>
      <Navbar />
      <div className="khalti-container" style={khaltiContainerStyles}>
        <Input
          id="amount"
          label="Enter Amount(In NRP.)"
          type="number"
          placeholder="Enter amount"
          name="amount"
          className="mb-2"
          onChange={(e) => {
            setAmount(e.target.value);
          }}
        />

        <button onClick={() => checkout.show({ amount })} style={buttonStyles}>
          Pay Via Khalti
        </button>
      </div>
    </>
  );
}

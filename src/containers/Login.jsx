import React, { useState } from "react";
import Box from "@mui/material/Box";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../firebaseSetup";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  const sendOtp = async () => {
    try {
      const recaptcha = new RecaptchaVerifier(auth, "recaptcha", {});
      const confirmation = await signInWithPhoneNumber(auth, phone, recaptcha);
      //   console.log(confirmation);
      setUser(confirmation);
    } catch (err) {
      console.error(err);
    }
  };

  const verifyOtp = async () => {
    try {
      const data = await user.confirm(otp);
      //   console.log(data);
      if (data) {
        navigate("/home");
      }
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <PhoneInput
        country={"in"}
        value={phone}
        onChange={(phone) => setPhone("+" + phone)}
      />

      <Button onClick={sendOtp} variant="contained">
        Send OTP
      </Button>
      <Box id="recaptcha"></Box>
      <TextField
        onChange={(e) => setOtp(e.target.value)}
        id="outlined-basic"
        label="Enter OTP"
        variant="outlined"
      />
      <Button onClick={verifyOtp} variant="contained">
        Login
      </Button>
    </Box>
  );
};

export default Login;

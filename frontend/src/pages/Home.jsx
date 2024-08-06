import React, { useEffect, useState } from "react";
import { upload } from "../assets";
import { Link, useNavigate, useLocation } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { RecaptchaVerifier,signInWithPhoneNumber} from "firebase/auth";
import {auth} from "../utils/firebase.config.js";
import toast from "react-hot-toast";


const Home = () => {
  const [phone, setPhone] = useState("");
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [confirmationResult, setConfirmationResult] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();


  const onCaptchaVerify = () => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(auth,
        "recaptcha-container",
        {
          size: "invisible",
          callback: (response) => {
            console.log("recaptcha verified");
            onSignup();
          },
          "expired-callback": () => {
            toast.error("reCaptacha expired. please try again.");
          },
        }
      );
    }
  };


  const onSignup = async () => {
    try {
      setLoading(true);

      const regex = /^[0-9]^/;
      if (!phone) {
        return toast.error("field cannot be empty");
      }
      if (regex.test(phone) || phone.length !== 12) {
        return toast.error("Please enter valid number");
      }

      // onCaptchaVerify();
      const formatPhone = `+${phone}`
      // const appVerifier = window.recaptchaVerifier;
      // const confirmationResult = await signInWithPhoneNumber(
      //   auth,
      //   formatPhone,
      //   appVerifier
      // );
      const confirmationResult = await signInWithPhoneNumber(auth, formatPhone, recaptchaVerifier)
      console.log(confirmationResult);
      if (confirmationResult) {
        setConfirmationResult(confirmationResult);
        // window.confirmationResult = confirmationResult;
        setLoading(false);
        setShow(true);
        toast.success("OTP sent successfully");
      }
    } catch (error) {
      setLoading(false);
      console.log("error while ->", error);
      return toast.error("Something went wrong. Please try again");
    } finally {
      setLoading(false);
    }
  };

  const onOptSubmit = (e) => {
    e.preventDefault();
    // Handle OTP submission
  };

  return (
    <>
      <div className="flex flex-col items-center mt-10 ">
        <h3 className="capitalize text-title font-light text-[32px] lg:text-[36px] ">
          {show ? "Enter Verification Code." : "Enter Phone Number."}
        </h3>
        <p className="text-desc font-light text-[16px] lg:text-[20px]">
          {show ? (
            <span>
              We sent you a verification code on your mobile number.
              <p className="text-center text-[14px] text-dark font-semibold">
                +{phone}
                <span
                  onClick={() => setShow(false)}
                  className="ml-2 duration-75 hover:text-blue-500 underline inline-block cursor-pointer hover:scale-105"
                >
                  Edit
                </span>
              </p>
            </span>
          ) : (
            `Enter your phone number and click on the button below`
          )}
        </p>
      </div>

      <div className="mt-20 flex-col items-center gap-5 flex w-full">
        {!show ? (
          <>
            <div className="flex justify-center w-full">
              <PhoneInput country={"in"} onChange={setPhone} value={phone} />
            </div>
            <div id="recaptcha-container"></div>
          </>
        ) : (
          <InputOpt length={4} onOptSubmit={onOptSubmit} />
        )}
      </div>

      <div className="w-full flex justify-center mt-10">
        {show ? (
          <button
            type="submit"
            className="bg-green px-10 py-3 rounded-[2px] hover:scale-105 duration-150 shadow font-light hover:shadow-md"
          >
            Verify OTP
          </button>
        ) : (
          <button
            onClick={onCaptchaVerify}
            className="bg-green px-10 py-3 rounded-[2px] hover:scale-105 duration-150 shadow font-light hover:shadow-md"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send OTP Via SMS"}
          </button>
        )}
      </div>
    </>
  );
};

export default Home;

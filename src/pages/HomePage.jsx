import axios from "axios";
import React from "react";
import { useNavigate } from "react-router";
import CustomButton from "../components/CustomButton";

function HomePage() {
  const navigate = useNavigate();
  const handleClick = () => {
    axios
      .post("http://localhost:5000/share")
      .then((res) =>navigate(res.data.streamId));
  };
  return <CustomButton onClick={handleClick}>Share Screen</CustomButton>;
}

export default HomePage;

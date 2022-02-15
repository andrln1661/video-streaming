import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

import CustomButton from "../components/custombutton";

import { useNavigate, useParams } from "react-router";

function SharerPage() {
  const chooseScreen = async () => {
    try {
      let display = await navigator.mediadevices.getDisplayMedia();
      console.log(display);
      setScreen(display);
    } catch (error) {
      alert("something went wrong");
      console.log(error);
    }
  };

  const minimizeScreen = async () => {
    const videoPlayer = document.getElementById("videoPlayer");
    try {
      if (document.exitPictureInPicture()) {
        await document.exitPictureInPicture();
      } else {
        await videoPlayer.requestPictureInPicture();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleDisconnect = () => {
    socket.disconnect();
    peer.destroy();
    navigate("/");
  };
  
  return (
    <Container>
      <VideoPlayer id="videoPlayer" preload="metadata" autoplay></VideoPlayer>{" "}
      <ButtonsBlock>
        <CustomButton onclick={chooseScreen}>choose screen</CustomButton>{" "}
        <CustomButton onclick={minimizeScreen}>minimize screen</CustomButton>{" "}
        <CustomButton onclick={handleDisconnect}>stop sharing</CustomButton>{" "}
      </ButtonsBlock>{" "}
    </Container>
  );
}

export default SharerPage;

const Container = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin: 20px;
`;

const ButtonsBlock = styled.div`
  width: 100%;
  border: 1px solid white;
  display: flex;
  justify-content: center;
  gap: 100px;
`;

const VideoPlayer = styled.video`
  width: 100%;
  height: 50vh;
  border: 1px solid white;
  padding: 1px;
`;

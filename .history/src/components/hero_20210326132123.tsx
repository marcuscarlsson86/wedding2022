import React from "react";
import { Image } from "antd";
import heroImg from "../assets/heroImg.jpg";

export const HeroImage = () => {
  return <Image width={"100%"} height={500} preview={false} src={heroImg} />;
};

import React from "react";

export interface LogoProps {
  src: string;
}

const Logo = (props: LogoProps) => {
  return <img src={props.src} />;
};

export default Logo;
// Background.js

import dynamic from "next/dynamic";
import { P5WrapperProps } from "react-p5-wrapper";
import sketch from "./module/sketch";

const ReactP5Wrapper = dynamic(
  () => import("react-p5-wrapper").then((mod) => mod.ReactP5Wrapper as any),
  {
    ssr: false,
  }
) as unknown as React.NamedExoticComponent<P5WrapperProps>;

const Background = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
      }}
    >
      <ReactP5Wrapper sketch={sketch} />
    </div>
  );
};

export default Background;

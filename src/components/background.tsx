import { useState, useEffect } from "react";
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
  const [transparency, setTransparency] = useState(255);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTransparency((prev) => Math.max(prev - 0.1, 0));
    }, 10); // 0.2秒ごとに透明度を減少

    const timeoutId = setTimeout(() => {
      clearInterval(intervalId);
      setTransparency(0);
    }, 4000);

    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };
  }, []); // 空のdependency arrayで一度だけ実行

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: transparency > 0 ? 1 : -1, // 透明でなければ1、透明なら-1
      }}
    >
      {transparency > 0 && (
        <ReactP5Wrapper sketch={sketch} style={{ opacity: transparency / 255 }} />
      )}
    </div>
  );
};

export default Background;

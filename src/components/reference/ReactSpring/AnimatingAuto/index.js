import { render } from "react-dom";
import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import useMeasure from "./useMeasure";
import "./styles.css";

export default function AnimatingAuto() {
  const [open, toggle] = useState(false);
  const [bind, { width }] = useMeasure();
  const props = useSpring({ width: open ? width : 0 });

  return (
    <div {...bind} className="main" onClick={() => toggle(!open)}>
      <animated.div className="fill" style={props} />
      <animated.div className="content">
        {props.width.interpolate((x) => x.toFixed(0))}
      </animated.div>
    </div>
  );
}

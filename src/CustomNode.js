import { useCallback, useState } from "react";
import { Handle, Position } from "react-flow-renderer";
import image from "./images/1.png";

const handleStyle = { left: 10 };

function CustomNode({ data }) {
  return (
    <div className="custom-node">
      <Handle type="target" position={Position.Top} />
      <div
        style={{
          border: "solid 1px",
          borderRadius: "50%",
          width: "40px",
          height: "40px",
          backgroundColor: "white",
          transform: "translate(-26px, 20px)",
          alignItems: "center ",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <img src={image} width="38px" style={{ margin: "auto auto" }}></img>
      </div>
      <div
        style={{
          height: "10px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h3 style={{ margin: 0 }}>{data.label}</h3>
        <p>{data.description}</p>
      </div>
      {/* <Handle type="source" position={Position.Bottom} id="a" style={handleStyle} /> */}
      <Handle type="source" position={Position.Bottom} id="b" />
    </div>
  );
}

export default CustomNode;

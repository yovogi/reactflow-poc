import { useCallback, useEffect, useRef, useState } from "react";
import { Handle, Position } from "react-flow-renderer";
import "./CustomGroupNode.css";

function CustomGroupNode({ data }) {
  return (
    <div className="container">
      <h1 style={{ marginLeft: "50px" }}>{data.label}</h1>
    </div>
  );
}

export default CustomGroupNode;

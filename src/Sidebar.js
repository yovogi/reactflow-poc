import React from "react";
import { edgesData, nodesData } from "./initial-elements";
import { edgesData2, nodesData2 } from "./data2";

const Sidebar = ({ setNodes, setEdges }) => {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <aside>
      <div className="description">
        You can drag these nodes to the pane on the right.
      </div>
      <div
        className="dndnode input"
        onDragStart={(event) => onDragStart(event, "input")}
        draggable
      >
        Input Node
      </div>
      <div
        className="dndnode"
        onDragStart={(event) => onDragStart(event, "default")}
        draggable
      >
        Default Node
      </div>
      <div
        className="dndnode output"
        onDragStart={(event) => onDragStart(event, "output")}
        draggable
      >
        Output Node
      </div>
      <div
        className="dndnode output"
        onDragStart={(event) => onDragStart(event, "CustomNode")}
        draggable
      >
        Custom Node
      </div>
      <div
        className="dndnode output"
        onDragStart={(event) => onDragStart(event, "CustomGroupNode")}
        draggable
      >
        Custom Group Node
      </div>
      <div>
        <button
          onClick={() => {
            setNodes(nodesData);
            setEdges(edgesData);
          }}
        >
          Model 1
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            setNodes(nodesData2);
            setEdges(edgesData2);
          }}
        >
          Model 2
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            setNodes([]);
            setEdges([]);
          }}
        >
          New Model
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;

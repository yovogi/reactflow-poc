import React from "react";
import { MarkerType } from "react-flow-renderer";

export const nodesData2 = [
  {
    id: "dndnode_7",
    type: "CustomGroupNode",
    position: {
      x: 388.81295391238876,
      y: -244.91113628187207,
    },
    data: {
      label: "Custom Group 500x200",
      description: "Add description",
    },
    style: {
      backgroundColor: "#ddc4b6",
      position: "fixed",
      zIndex: -1,
      width: 500,
      height: 200,
    },
    width: 500,
    height: 200,
    selected: false,
    positionAbsolute: {
      x: 388.81295391238876,
      y: -244.91113628187207,
    },
    dragging: false,
  },
  {
    id: "dndnode_8",
    type: "CustomGroupNode",
    position: {
      x: 388.3416083446761,
      y: -42.140689301669255,
    },
    data: {
      label: "Custom Group 500x200",
      description: "Add description",
    },
    style: {
      backgroundColor: "#bbf7c7",
      position: "fixed",
      zIndex: -1,
      width: 400,
      height: 1400,
    },
    width: 400,
    height: 1400,
    selected: false,
    positionAbsolute: {
      x: 388.3416083446761,
      y: -42.140689301669255,
    },
    dragging: false,
  },
  {
    id: "dndnode_9",
    type: "CustomNode",
    position: {
      x: 471.5861063948663,
      y: 176.67341985883132,
    },
    data: {
      label: "CustomNode node",
      description: "testvam",
    },
    style: {
      backgroundColor: "#ffffff",
      width: 312,
      height: 92,
    },
    width: 312,
    height: 92,
    selected: true,
    positionAbsolute: {
      x: 471.5861063948663,
      y: 176.67341985883132,
    },
    dragging: false,
  },
  {
    id: "dndnode_10",
    type: "CustomNode",
    position: {
      x: 589.3176107801357,
      y: -150.35853676691687,
    },
    data: {
      label: "CustomNode node",
      description: "Add description",
    },
    style: {
      backgroundColor: "#ffffff",
    },
    width: 312,
    height: 92,
  },
  {
    id: "dndnode_11",
    type: "input",
    position: {
      x: 577.4255396301086,
      y: -320.41515421230594,
    },
    data: {
      label: "input node",
      description: "Add description",
    },
    style: {
      backgroundColor: "#ffffff",
      width: 150,
      height: 36,
    },
    width: 150,
    height: 36,
    selected: false,
    positionAbsolute: {
      x: 577.4255396301086,
      y: -320.41515421230594,
    },
    dragging: false,
  },
];

export const edgesData2 = [
  {
    source: "dndnode_11",
    sourceHandle: null,
    target: "dndnode_10",
    targetHandle: null,
    type: "smoothstep",
    id: "reactflow__edge-dndnode_11-dndnode_10",
  },
  {
    source: "dndnode_10",
    sourceHandle: "b",
    target: "dndnode_9",
    targetHandle: null,
    type: "smoothstep",
    id: "reactflow__edge-dndnode_10b-dndnode_9",
  },
];

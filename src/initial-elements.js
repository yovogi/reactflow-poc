import React from "react";
import { MarkerType } from "react-flow-renderer";

export const nodesData = [
  {
    id: "2",
    data: {
      label: "LCS1: Cultivation of grain for malting",
    },
    position: {
      x: 0,
      y: 0,
    },
    className: "light",
    style: {
      backgroundColor: "#fdf6e2",
      width: 500,
      height: 150,
      borderRadius: 0,
      borderWidth: 2,
      borderStyle: "dotted",
      position: "fixed",
      zIndex: -1,
    },
    // type:'group',
    width: 400,
    height: 200,
    // "selected": true,
    positionAbsolute: {
      x: -22.51249999999999,
      y: 1.3093749999999957,
    },
    draggable: true,
  },
  {
    id: "2a",
    data: {
      label: "EU: Barley grain",
      isLifeCycle:true,
      nodes:[
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
    ],
    edges:[{
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
    }
  ]
    },
    position: {
      x: 173.3,
      y: 56.400000000000006,
    },
    // "type":"textUpdater",
    parentNode: "2",
    width: 150,
    height: 36,
    positionAbsolute: {
      x: 173.3,
      y: 56.400000000000006,
    },
    selected: false,
    extent: "parent",
    draggable: true,
  },
  {
    id: "3",
    data: {
      label: "LCS2: Malting",
    },
    position: {
      x: 0,
      y: 150,
    },
    className: "light",
    type: "group",
    style: {
      backgroundColor: "#e8f7f1",
      width: 500,
      height: 150,
      borderRadius: 0,
      borderWidth: 2,
      borderStyle: "dotted",
      borderTopStyle: "none",
      position: "fixed",
      zIndex: -1,
    },
    draggable: true,
  },
  {
    id: "3a",
    data: {
      label: "DE: Barley Malted",
    },
    position: {
      x: 173.3,
      y: 56.400000000000006,
    },
    parentNode: "3",
    width: 150,
    height: 36,
    positionAbsolute: {
      x: 173.3,
      y: 256.400000000000006,
    },
    selected: false,
    extent: "parent",
    draggable: true,
  },
  {
    id: "4",
    data: {
      label: "LCS3: Other raw materials and pre-processing",
    },
    position: {
      x: 0,
      y: 300,
    },
    className: "light",
    // type:'group',
    style: {
      backgroundColor: "#f1ebf0",
      width: 500,
      height: 300,
      borderRadius: 0,
      borderWidth: 2,
      borderStyle: "dotted",
      borderTopStyle: "none",
      position: "fixed",
      zIndex: -1,
    },
    draggable: true,
  },
  {
    id: "4a",
    data: {
      label: "EU: Hop pellets",
    },
    position: {
      x: 173.3,
      y: 56.400000000000006,
    },
    parentNode: "4",
    width: 150,
    height: 36,
    positionAbsolute: {
      x: 173.3,
      y: 356.400000000000006,
    },
    selected: false,
    draggable: true,
  },
  {
    id: "4b",
    data: {
      label: "EU: Hop pellets",
    },
    position: {
      x: 173.3,
      y: 122.400000000000006,
    },
    parentNode: "4",
    width: 150,
    height: 36,
    positionAbsolute: {
      x: 173.3,
      y: 356.400000000000006,
    },
    selected: false,
  },
  {
    id: "4c",
    data: {
      label: "EU: Hop pellets",
    },
    position: {
      x: 173.3,
      y: 186.400000000000006,
    },
    parentNode: "4",
    width: 150,
    height: 36,
    positionAbsolute: {
      x: 173.3,
      y: 356.400000000000006,
    },
    selected: false,
  },
  {
    id: "5",
    data: {
      label: "LCS4: Other raw materials and pre-processing",
    },
    position: {
      x: 0,
      y: 600,
    },
    className: "light",
    // type:'group',
    style: {
      backgroundColor: "#fce3de",
      width: 500,
      height: 600,
      borderRadius: 0,
      borderWidth: 2,
      borderStyle: "dotted",
      borderTopStyle: "none",
      position: "fixed",
      zIndex: -1,
    },
    draggable: true,
  },
  {
    id: "6",
    data: {
      label: "LCS5: Other raw materials and pre-processing",
    },
    position: {
      x: 500,
      y: 0,
    },
    className: "light",
    // type:'group',
    style: {
      backgroundColor: "#e5e6e9",
      width: 500,
      height: 1200,
      borderRadius: 0,
      borderWidth: 2,
      borderStyle: "dotted",
      position: "fixed",
      zIndex: -1,
    },
    draggable: true,
  },
  {
    id: "7",
    data: {
      label: "LCS6: Other raw materials and pre-processing",
    },
    position: {
      x: 1000,
      y: 0,
    },
    className: "light",
    // type:'group',
    style: {
      backgroundColor: "#dff0fb",
      width: 500,
      height: 1200,
      borderRadius: 0,
      borderWidth: 2,
      borderStyle: "dotted",
      position: "fixed",
      zIndex: -1,
    },
    draggable: true,
  },
];

export const edgesData = [
  {
    id: "e1-2",
    source: "2a",
    target: "3a",
    type: "smoothstep",
    label: "Barley grain",
    style: { stroke: "black" },
    selected: "false",
    labelStyle: {
      // fill: "none",
      // stroke: "#646464",
      // strokeWidth: "1px",
      // strokeDasharray: "2,2px",
      // strokeLinejoin: "round",
      outline: "1px solid black",
      outlineOffset: "2px",
    },
    labelBgPadding: [8, 4],
    labelBgBorderRadius: 15,
    labelBgStyle: {},
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  // { id: 'e1-2', source: '1', target: '2', animated: true, type:'smoothstep' },
  // { id: 'e1-3', source: '1', target: '3', type:'smoothstep' },
  // { id: 'e2a-4a', source: '2a', target: '4a', type:'smoothstep' },
  // { id: 'e3-4', source: '3', target: '4', type:'smoothstep' },
  // { id: 'e3-4b', source: '3', target: '4b', type:'smoothstep' },
  // { id: 'e4a-4b1', source: '4a', target: '4b1', type:'smoothstep' },
  // { id: 'e4a-4b2', source: '4a', target: '4b2' , type:'smoothstep'},
  // { id: 'e4b1-4b2', source: '4b1', target: '4b2', type:'smoothstep' },
];

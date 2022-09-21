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

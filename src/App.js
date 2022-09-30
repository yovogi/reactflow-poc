import { useCallback, useEffect, useRef, useState } from 'react';
import './custom-node.css';
import ReactFlow, {
    addEdge,
    Background,
    useNodesState,
    useEdgesState,
    MiniMap,
    Controls,
    MarkerType,
    ReactFlowProvider,
} from 'react-flow-renderer';
import CustomNode from './CustomNode';
import CustomGroupNode from './CustomGroupNode';
import Sidebar from './Sidebar';
import { edgesData, nodesData } from './initial-elements';

const nodeTypes = { CustomNode: CustomNode, CustomGroupNode };

let id = 0;
const getId = () => `dndnode_${id++}`;

const initialNodes = nodesData;
const initialEdges = edgesData;

const NestedFlow = () => {
    const reactFlowWrapper = useRef(null);
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
    const [reactFlowInstance, setReactFlowInstance] = useState(null);
    const [nodeName, setNodeName] = useState('Node 1');
    const [description, setDescription] = useState('Add description');
    const [width, setWidth] = useState(100);
    const [height, setHeight] = useState(100);
    const [color, setColor] = useState('#FF0000');
    const [isDraggable, setIsDraggable] = useState(true);
    const [isHighlight, setHiglight] = useState(true);

    const selectedNode = nodes?.find((n) => n.selected === true);

    const selectedEdge = edges.find((e) => e.selected === true);

    useEffect(() => {
        const timer = setTimeout(() => {
            console.log(nodes);
            console.log(edges);
        }, 2000);

        setNodes((nds) =>
            nds.map((node) => {
                if (node.id === selectedNode?.id) {
                    // it's important that you create a new object here
                    // in order to notify react flow about the change
                    node.data = {
                        ...node.data,
                        label: nodeName,
                        description: description,
                    };

                    node.style = {
                        ...node.style,
                        width: +width,
                        height: +height,
                    };

                    node.draggable = isDraggable;
                }

                return node;
            })
        );

        setNodes((nds) =>
            nds.map((node) => {
                node.style = {
                    ...node.style,
                };
                return node;
            })
        );

        return () => {
            clearInterval(timer);
        };
    }, [
        nodeName,
        setNodes,
        setEdges,
        selectedNode,
        description,
        width,
        height,
        color,
        isDraggable,
        isHighlight,
        setHiglight,
    ]);

    const onConnect = useCallback((connection) => {
        console.log(connection);
        connection.type = 'smoothstep';

        setEdges((eds) => addEdge(connection, eds));
    }, []);

    const onDragOver = useCallback((event) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move';
    }, []);

    const onDrop = useCallback(
        (event) => {
            event.preventDefault();

            const reactFlowBounds =
                reactFlowWrapper.current.getBoundingClientRect();
            const type = event.dataTransfer.getData('application/reactflow');
            console.log(type);
            // check if the dropped element is valid
            if (typeof type === 'undefined' || !type) {
                return;
            }

            const position = reactFlowInstance.project({
                x: event.clientX - reactFlowBounds.left,
                y: event.clientY - reactFlowBounds.top,
            });

            let newNode = '';
            if (type !== 'CustomGroupNode') {
                newNode = {
                    id: getId(),
                    type,
                    position,
                    draggable: true,
                    data: {
                        label: `${type} node`,
                        description: 'Add description',
                    },
                    style: {
                        backgroundColor: '#ffffff',
                    },
                };
            } else {
                newNode = {
                    id: getId(),
                    type,
                    position,
                    draggable: true,
                    data: {
                        label: `Custom Group 500x200`,
                        description: 'Add description',
                    },
                    style: {
                        backgroundColor: '#FFBC97',
                        position: 'fixed',
                        zIndex: -1,
                        width: 500,
                        height: 200,
                    },
                };
            }

            console.log('drop over');
            setNodes((nds) => nds.concat(newNode));
        },
        [reactFlowInstance]
    );

    const onSelect = ({ nodes, edges }) => {
        console.log('node selected');
        console.log(nodes);
        console.log(selectedNode);
        if (selectedNode) {
            setColor(
                nodes[0]?.style?.backgroundColor
                    ? nodes[0].style.backgroundColor
                    : '#ffffff'
            );
            setWidth(nodes[0].width);
            setHeight(nodes[0].height);
            setNodeName(selectedNode.data.label);
            setDescription(selectedNode.data.description);
            setIsDraggable(nodes[0].draggable);
        }
    };

    const onHighlight = () => {
        if (isHighlight) {
            setNodes(
                nodes.map((node) => {
                    if (node.style.backgroundColor) {
                        node.data.backgroundColor = node.style.backgroundColor;
                        node.style.backgroundColor = '#ffffff';
                    }
                    return node;
                })
            );
            setHiglight(false);
        } else {
            setNodes(
                nodes.map((node) => {
                    node.style.backgroundColor = node.data.backgroundColor;
                    return node;
                })
            );
            setHiglight(true);
        }
    };

    const onNodeClick = (event, node) => {
        if (node.data.isLifeCycle) {
            console.log('node is a life cycle itself');
            setNodes(node.data.nodes);
            setEdges(node.data.edges);
        }
    };

    return (
        <div>
            <div style={{ height: 800 }} className='dndflow'>
                <Sidebar
                    setNodes={setNodes}
                    setEdges={setEdges}
                    onHighlight={onHighlight}
                    isHighlight={isHighlight}
                />
                <ReactFlowProvider>
                    <div className='reactflow-wrapper' ref={reactFlowWrapper}>
                        <ReactFlow
                            nodes={nodes}
                            edges={edges}
                            onSelectionChange={onSelect}
                            onNodesChange={onNodesChange}
                            onEdgesChange={onEdgesChange}
                            onConnect={onConnect}
                            onInit={setReactFlowInstance}
                            onDrop={onDrop}
                            onDragOver={onDragOver}
                            onNodeClick={onNodeClick}
                            nodeTypes={nodeTypes}
                            fitView
                        >
                            <Controls />
                            <MiniMap />
                        </ReactFlow>
                    </div>
                    {selectedNode && (
                        <div className='label-form'>
                            <h3>Node editor and info</h3>
                            <p>Position x: {selectedNode.position.x}</p>
                            <p>Position y: {selectedNode.position.y}</p>
                            <p>Width: {selectedNode.width}</p>
                            <input
                                style={{
                                    width: '260px',
                                }}
                                value={width}
                                onChange={(evt) => {
                                    setWidth(evt.target.value);
                                    selectedNode.width = evt.target.value;
                                }}
                            />
                            <p>Height: {selectedNode.height}</p>
                            <input
                                style={{
                                    width: '260px',
                                }}
                                value={height}
                                onChange={(evt) => {
                                    setHeight(evt.target.value);
                                    selectedNode.height = evt.target.value;
                                }}
                            />
                            <input
                                type='color'
                                value={color}
                                onChange={(evt) => {
                                    setColor(evt.target.value);
                                    selectedNode.style.backgroundColor =
                                        evt.target.value;
                                    selectedNode.data.bgColor =
                                        evt.target.value;
                                }}
                            />
                            <p>Type: {selectedNode?.type}</p>
                            <p>
                                Parent node:{' '}
                                {
                                    nodes.find(
                                        (n) => n.id == selectedNode.parentNode
                                    )?.data.label
                                }
                            </p>
                            <label>label:</label>
                            <input
                                style={{
                                    width: '260px',
                                }}
                                value={nodeName}
                                onChange={(evt) =>
                                    setNodeName(evt.target.value)
                                }
                            />
                            {selectedNode.type == 'CustomNode' && (
                                <>
                                    <label>description:</label>
                                    <input
                                        style={{
                                            width: '260px',
                                        }}
                                        value={description}
                                        onChange={(evt) => {
                                            console.log('key pressed');
                                            setDescription(evt.target.value);
                                        }}
                                    />
                                </>
                            )}
                            <div>
                                <label>Draggable:</label>
                                <input
                                    type='checkbox'
                                    checked={isDraggable}
                                    onChange={(evt) => {
                                        setIsDraggable(
                                            (prevState) => !prevState
                                        );
                                    }}
                                />
                            </div>
                        </div>
                    )}
                </ReactFlowProvider>
            </div>
        </div>
    );
};

export default NestedFlow;

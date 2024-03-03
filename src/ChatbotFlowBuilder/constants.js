export const initialNodes = [
  {
    id: "1",
    type: "textUpdater",
    position: { x: 0, y: 0 },
    data: { label: "text message 1" },
  },
  {
    id: "2",
    type: "textUpdater",
    position: { x: 0, y: 100 },
    data: { label: "text message 2" },
  },
];

export const initialEdges = [{ id: "e1-2", source: "1", target: "2" }];

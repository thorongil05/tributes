export interface DependencyGraphEdge {
  id: string;
  source: string;
  target: string;
  label: string;
}

export interface DependencyGraphNode {
  id: string;
  label: string;
}

export interface DependencyGraph {
  depthLevel: number;
  focusNode: DependencyGraphNode;
  nodes: DependencyGraphNode[];
  edges: DependencyGraphEdge[];
}

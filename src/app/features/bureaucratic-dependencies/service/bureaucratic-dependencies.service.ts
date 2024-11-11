import { Injectable } from '@angular/core';
import { DependencyGraph } from 'src/app/model/dependency-graph';

@Injectable({
  providedIn: 'root',
})
export class BureaucraticDependenciesService {
  constructor() {}

  getDependencyGraph(id: string, depth: number): DependencyGraph {
    let focusNode = {
      id: 'first',
      label: 'A',
    };
    let nodes = [
      {
        id: 'first',
        label: 'A',
      },
      {
        id: 'second',
        label: 'B',
      },
      {
        id: 'third',
        label: 'C',
      },
    ];
    let edges = [
      {
        id: 'a',
        source: 'first',
        target: 'second',
        label: 'is parent of',
      },
      {
        id: 'b',
        source: 'first',
        target: 'third',
        label: 'custom label',
      },
    ];
    return {
      focusNode: focusNode,
      edges: edges,
      depthLevel: 1,
      nodes: nodes,
    };
  }
}

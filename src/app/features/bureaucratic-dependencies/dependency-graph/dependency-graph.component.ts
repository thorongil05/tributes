import { Component, OnInit } from '@angular/core';
import { BureaucraticDependenciesService } from '../service/bureaucratic-dependencies.service';
import { Edge, Node } from '@swimlane/ngx-graph';

@Component({
  selector: 'app-dependency-graph',
  templateUrl: './dependency-graph.component.html',
  styleUrls: ['./dependency-graph.component.scss'],
})
export class DependencyGraphComponent implements OnInit {
  nodes: Node[] = [];
  edges: Edge[] = [];

  constructor(
    private bureaucraticDependenciesService: BureaucraticDependenciesService
  ) {}

  ngOnInit(): void {
    let dependencyGraph =
      this.bureaucraticDependenciesService.getDependencyGraph('temp', 1);
    this.nodes = dependencyGraph.nodes;
    this.edges = dependencyGraph.edges;
  }
}

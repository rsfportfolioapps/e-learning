import { Component, OnInit, EventEmitter, Output, Input, ViewChild } from '@angular/core';
import { FlatTreeControl } from '@angular/cdk/tree';
import { Store } from '@ngrx/store';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { MenuNode, MenuFlatNode } from '../../models/shared.model';
import { ReferenceState } from '../../../modules/main/reference/store/reducers/reference.reducer';
import { MenuItem } from 'primeng/api';
import { GenericService } from 'src/app/services/generic.service';

@Component({
  selector: 'app-tree-menu',
  templateUrl: './tree-menu.component.html',
  styleUrls: ['./tree-menu.component.scss']
})
export class TreeMenuComponent implements OnInit {
  @Output()
  public selectedReferenceEmitter = new EventEmitter<number>();
  @Output()
  public closeRightbarEmitter = new EventEmitter<boolean>();

  public treeMenu: MenuNode[] = [
    {
      title: 'The lean philosphy',
      value: 1,
      children: [
        { title: 'Inheritance', value: 2 },
        { title: 'HealtCare', value: 3 },
        { title: 'history', value: 4 },
      ]
    }, {
      title: '4th Level Sub Menu',
      value: 5,
      children: [
        {
          title: 'First level nav', value: 6
        },
        {
          title: 'Second level',
          value: 7,
          children: [
            {
              title: 'Second level navitem', value: 8
            },
            {
              title: 'Third Level',
              value: 9,
              children: [
                {
                  title: 'third level navitem', value: 10
                },
                {
                  title: 'Fouth Level',
                  value: 11,
                  children: [
                    {
                      title: 'Fouth level navitem', value: 12
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
  ];

  constructor(private store: Store<ReferenceState>, private genericService: GenericService) { }

  public items: MenuItem[];
  ngOnInit() {
    this.items = [
      {
        label: 'The lean philosophy',
        icon: 'node-plus',
        expanded: true,
        items: [{
          label: 'The lean philosophy in healthcare',
          icon: 'node-plus',
          expanded: true,
          items: [
            { label: 'User', icon: 'node-line' },
            { label: 'Filter', icon: 'node-line' }
          ]
        },
        { label: 'The lean philosophy', icon: 'node-line' },
        { label: 'History and background', icon: 'node-line' }
        ]
      },
      {
        label: 'The five basic principles of Lean',
        icon: 'node-plus',
        items: [
          { label: 'Delete', icon: 'node-line' },
          { label: 'Refresh', icon: 'node-line' }
        ]
      },
      {
        label: 'Culture and Leadership',
        icon: 'node-plus',
        items: [
          {
            label: 'Contents',
            icon: 'node-line'
          },
          {
            label: 'Search',
            icon: 'node-plus',
            items: [
              {
                label: 'Text',
                icon: 'node-plus',
                items: [
                  {
                    label: 'Workspace',
                    icon: 'node-line'
                  }
                ]
              },
              {
                label: 'User',
                icon: 'node-line',
              }
            ]
          }
        ]
      },
      {
        label: 'Waste',
        icon: 'node-plus',
        items: [
          {
            label: 'Edit',
            icon: 'node-plus',
            items: [
              { label: 'Save', icon: 'node-line' },
              { label: 'Update', icon: 'node-line' },
            ]
          },
          {
            label: 'Other',
            icon: 'node-plus',
            items: [
              { label: 'Delete', icon: 'node-line' }
            ]
          }
        ]
      },
      {
        label: 'Lean Tools',
        icon: 'node-plus',
        items: [
          {
            label: 'Edit',
            icon: 'node-plus',
            items: [
              { label: 'Save', icon: 'node-line' },
              { label: 'Update', icon: 'node-line' },
            ]
          },
          {
            label: 'Other',
            icon: 'node-plus',
            items: [
              { label: 'Delete', icon: 'node-line' }
            ]
          }
        ]
      },
      {
        label: '4 Level Sub-menu',
        icon: 'node-plus',
        items: [
          {
            label: 'Edit',
            icon: 'node-plus',
            items: [
              { label: 'Save', icon: 'node-line' },
              { label: 'Update', icon: 'node-line' },
            ]
          },
          {
            label: 'Other',
            icon: 'node-plus',
            items: [
              { label: 'Delete', icon: 'node-line' }
            ]
          }
        ]
      }
    ];
  }

  public toggleRightbar(): void {
    this.closeRightbarEmitter.emit(false);
  }

  // tslint:disable-next-line: variable-name
  private _transformer = (node: MenuNode, lvl: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.title,
      id: node.value,
      level: lvl,
    };
  }

  // tslint:disable-next-line: member-ordering
  public treeControl = new FlatTreeControl<MenuFlatNode>(
    node => node.level, node => node.expandable);

  // tslint:disable-next-line: member-ordering
  public treeFlattener = new MatTreeFlattener(
    this._transformer, node => node.level, node => node.expandable, node => node.children);

  // tslint:disable-next-line: member-ordering
  public dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  hasChild = (_: number, node: MenuFlatNode) => node.expandable;

}

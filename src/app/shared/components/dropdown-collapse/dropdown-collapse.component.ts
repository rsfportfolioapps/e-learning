import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-dropdown-collapse',
  templateUrl: './dropdown-collapse.component.html',
  styleUrls: ['./dropdown-collapse.component.scss']
})
export class DropdownCollapseComponent implements OnInit {
  @Input()
  public categoriesMenu: any;
  @Input()
  public headerTitle: string;

  constructor() { }

  ngOnInit() { }
}

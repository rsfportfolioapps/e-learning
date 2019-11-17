import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
  @Input()
  public settingMenu: any;
  @Input()
  public headerTitle: string;
  
  constructor() { }

  ngOnInit() {
  }

}

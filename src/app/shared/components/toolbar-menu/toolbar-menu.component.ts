import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar-menu',
  templateUrl: './toolbar-menu.component.html',
  styleUrls: ['./toolbar-menu.component.scss']
})
export class ToolbarMenuComponent implements OnInit {
  public menus: string[] = [
    'Home',
    'Producten',
    'Over Ons',
    'Vacatures',
    'Contact',
    'Mijn Account'
  ]
  constructor() { }

  ngOnInit() {
  }

}
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-checkbox-switch',
  templateUrl: './checkbox-switch.component.html',
  styleUrls: ['./checkbox-switch.component.scss']
})
export class CheckboxSwitchComponent implements OnInit {
  @Input()
  public className: string;
  @Input()
  public checkboxId: string;
  @Input()
  public isChecked: boolean = false;

  constructor() { }

  ngOnInit() { }

}

import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @ViewChild('searchInput', { static: false }) searchInput: ElementRef;

  public searchResults: any;
  public searchData = [
    {
      title: 'Lean tools and improvement methods',
      description: `Lean tools and improvement methods. The Lean philosphy has a number of tools or instruments
                    and methods that can be used as guid for improving the organization and its processes.
                    The most commonly used tools and methidilofies are: 5S Value`,
      route: '/',
    },
    {
      title: 'The Lean philosophy',
      description: `Lean tools and improvement methods. The Lean philosphy has a number of tools or instruments
                    and methods that can be used as guid for improving the organization and its processes.
                    The most commonly used tools and methidilofies are: 5S Value`,
      route: '/',
    },
    {
      title: 'Improvement Culture',
      description: `Lean tools and improvement methods. The Lean philosphy has a number of tools or instruments
                    and methods that can be used as guid for improving the organization and its processes.
                    The most commonly used tools and methidilofies are: 5S Value`,
      route: '/',
    },
    {
      title: 'Improvement methods',
      description: `Lean tools and improvement methods. The Lean philosphy has a number of tools or instruments
                    and methods that can be used as guid for improving the organization and its processes.
                    The most commonly used tools and methidilofies are: 5S Value`,
      route: '/',
    }
  ];


  constructor(private dialogRef: MatDialogRef<SearchComponent>) { }

  ngOnInit() {
  }

  public onClose(): void {
    this.dialogRef.close();
  }

  public onClear(): void {
    this.searchInput.nativeElement.value = '';
  }

  public onSearch(): void {
    this.searchResults = this.searchData;
  }

  public highlightSearchString(desc: string) {
    const highlight = '<mark>' + this.searchInput.nativeElement.value + '</mark>';
    const find = this.searchInput.nativeElement.value;
    return desc.replace(new RegExp(find, 'g'), highlight);
  }

}

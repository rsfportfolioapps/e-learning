import { Component, OnInit } from '@angular/core';
import { slideInUpDown } from '../../../../../shared/animations/transition.animation';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
  animations: [ slideInUpDown ]
})
export class CategoryComponent implements OnInit {

  public showCategory = false;
  public showSetting = false;
  public showCategoryMenu = 'hidden';
  public showSettingMenu = 'hidden';
  public p: any;

  public breadcrumbs = [ {text: 'Categorieën', path: ''}];
  public cartegories = [
    {
      title: 'Verpleegtechnische handelingen',
      image: '1.png',
      courseCount: '1/4'
    },
    {
      title: 'handelingen',
      image: '2.png',
      courseCount: '1/4'
    },
    {
      title: 'Verpleegtechnische',
      image: '3.png',
      courseCount: '1/4'
    },
    {
      title: 'Voeding',
      image: '4.png',
      courseCount: '1/4'
    },
    {
      title: 'Wetgeving, beleid en organisatie',
      image: '5.png',
      courseCount: '1/4'
    },
    {
      title: 'Wonen en huishouden',
      image: '6.png',
      courseCount: '1/4'
    },
    {
      title: 'Evidence Based Practice',
      image: '7.png',
      courseCount: '1/4'
    },
    {
      title: 'Farmacologie',
      image: '8.png',
      courseCount: '1/4'
    },
    {
      title: 'Klinische interpretatie-ECG\'s',
      image: '9.png',
      courseCount: '1/4'
    },
    {
      title: 'Inleiding gezondheidszorg',
      image: '10.png',
      courseCount: '1/4'
    },
    {
      title: 'Professioneel communiceren in de zorg',
      image: '11.png',
      courseCount: '1/4'
    },
    {
      title: 'Psychiatrie in de verpleegkunde',
      image: '12.png',
      courseCount: '1/4'
    },
    {
      title: 'Zorgvuldig rekenen',
      image: '13.jpg',
      courseCount: '1/4'
    },
    {
      title: 'Pathologie',
      image: '14.jpg',
      courseCount: '1/4'
    },
    {
      title: 'Anatomie & Fysiologie',
      image: '15.jpg',
      courseCount: '1/4'
    },
    {
      title: 'Communicatie, advies en instructie',
      image: '16.jpg',
      courseCount: '1/4'
    },
    {
      title: 'Orientatie op de gezondheidszorg',
      image: '17.jpg',
      courseCount: '1/4'
    },
    {
      title: 'Verpleegkundige vaardigheden deel 2',
      image: '18.jpg',
      courseCount: '1/4'
    },
    {
      title: 'Verpleegkundige vaardigheden deel 2',
      image: '19.jpg',
      courseCount: '1/9'
    },
    {
      title: 'Verpleegkundige',
      image: '20.jpg',
      courseCount: '1/10'
    }
  ];

  public categoriesMenu = [
    {
      title: 'Verpleegtechnische handelingen',
      subMenu:  [
       { menuItem: 'e-Xpert VBH: Subcutaan injecteren 1', route: 'item'},
       { menuItem: 'e-Xpert VBH: Subcutaan injecteren 2', route: 'item'},
       { menuItem: 'e-Xpert VBH: Subcutaan injecteren 3', route: 'item'},
       { menuItem: 'e-Xpert VBH: Subcutaan injecteren 4', route: 'item'},
       { menuItem: 'e-Xpert VBH: Subcutaan injecteren 5', route: 'item'},
       { menuItem: 'e-Xpert VBH: Subcutaan injecteren 6', route: 'item'},
       { menuItem: 'e-Xpert VBH: Subcutaan injecteren 7', route: 'item'},
       { menuItem: 'e-Xpert VBH: Subcutaan injecteren 8', route: 'item'},
       { menuItem: 'e-Xpert VBH: Subcutaan injecteren 9', route: 'item'},
       { menuItem: 'e-Xpert VBH: Subcutaan injecteren 10', route: 'item'},
       { menuItem: 'e-Xpert VBH: Subcutaan injecteren 11', route: 'item'},
       { menuItem: 'e-Xpert VBH: Subcutaan injecteren 12', route: 'item'},
       { menuItem: 'e-Xpert VBH: Subcutaan injecteren 13', route: 'item'},
       { menuItem: 'e-Xpert VBH: Subcutaan injecteren 14', route: 'item'},
       { menuItem: 'e-Xpert VBH: Subcutaan injecteren 15', route: 'item'},
      ]
    },
    {
      title: 'handelingen',
      subMenu:  [{ menuItem: 'e-Xpert VBH: Subcutaan injecteren 1', route: 'item'}]
    },
    {
      title: 'Verpleegtechnische',
      subMenu:  [{ menuItem: 'e-Xpert VBH: Subcutaan injecteren 1', route: 'item'}]
    },
    {
      title: 'Voeding',
      subMenu:  [{ menuItem: 'e-Xpert VBH: Subcutaan injecteren 1', route: 'item'}]
    },
    {
      title: 'Wetgeving, beleid en organisatie',
      subMenu:  [{ menuItem: 'e-Xpert VBH: Subcutaan injecteren 1', route: 'item'}]
    },
    {
      title: 'Wonen en huishouden',
      subMenu:  [{ menuItem: 'e-Xpert VBH: Subcutaan injecteren 1', route: 'item'}]
    },
    {
      title: 'Evidence Based Practice',
      subMenu:  [{ menuItem: 'e-Xpert VBH: Subcutaan injecteren 1', route: 'item'}]
    },
    {
      title: 'Farmacologie',
      subMenu:  [{ menuItem: 'e-Xpert VBH: Subcutaan injecteren 1', route: 'item'}]
    },
    {
      title: 'Klinische interpretatie-ECG\'s',
      subMenu:  [{ menuItem: 'e-Xpert VBH: Subcutaan injecteren 1', route: 'item'}]
    },
    {
      title: 'Inleiding gezondheidszorg',
      subMenu:  [{ menuItem: 'e-Xpert VBH: Subcutaan injecteren 1', route: 'item'}]
    },
    {
      title: 'Professioneel communiceren in de zorg',
      subMenu:  [{ menuItem: 'e-Xpert VBH: Subcutaan injecteren 1', route: 'item'}]
    },
    {
      title: 'Psychiatrie in de verpleegkunde',
      subMenu:  [{ menuItem: 'e-Xpert VBH: Subcutaan injecteren 1', route: 'item'}]
    },
    {
      title: 'Zorgvuldig rekenen',
      subMenu:  [{ menuItem: 'e-Xpert VBH: Subcutaan injecteren 1', route: 'item'}]
    },
    {
      title: 'Pathologie',
      subMenu:  [{ menuItem: 'e-Xpert VBH: Subcutaan injecteren 1', route: 'item'}]
    },
    {
      title: 'Anatomie & Fysiologie',
      subMenu:  [{ menuItem: 'e-Xpert VBH: Subcutaan injecteren 1', route: 'item'}]
    },
    {
      title: 'Communicatie, advies en instructie',
      subMenu:  [{ menuItem: 'e-Xpert VBH: Subcutaan injecteren 1', route: 'item'}]
    },
    {
      title: 'Orientatie op de gezondheidszorg',
      subMenu:  [{ menuItem: 'e-Xpert VBH: Subcutaan injecteren 1', route: 'item'}]
    },
    {
      title: 'Verpleegkundige vaardigheden deel 2',
      subMenu:  [{ menuItem: 'e-Xpert VBH: Subcutaan injecteren 1', route: 'item'}]
    },
    {
      title: 'Verpleegkundige vaardigheden deel 2',
      subMenu:  [{ menuItem: 'e-Xpert VBH: Subcutaan injecteren 1', route: 'item'}]
    },
    {
      title: 'Verpleegkundige',
      subMenu:  [{ menuItem: 'e-Xpert VBH: Subcutaan injecteren 1', route: 'item'}]
    }
  ];

  public settingMenu = [
    { title: 'Admin' },
    { title: 'Toetsen' },
    { title: 'Certificaten' },
    { title: 'Wachtworrd/WijZigen' },
    { title: 'Privacy Instellingen' },
    { title: 'Uitloggen' }
  ];

  constructor() { }

  ngOnInit() {
  }

  public onShowCategoryDropdown() {
    this.showCategory = !this.showCategory;

    if (this.showCategory) {
      this.showCategoryMenu = 'shown';
    } else {
      this.showCategoryMenu = 'hidden';
    }
  }

  public onShowSettingDropdown() {
    this.showSetting = !this.showSetting;

    if (this.showSetting) {
      this.showSettingMenu = 'shown';
    } else {
      this.showSettingMenu = 'hidden';
    }
  }

}

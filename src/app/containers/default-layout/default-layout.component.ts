import { Component, OnInit } from '@angular/core';
import { navItems } from '../../_nav';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent implements OnInit {
  public sidebarMinimized = false;
  public navItems = navItems;
  public loginUsername: string;
  param = { title: 'ফ্লাইট-সিমুলেটার' };
  constructor(
    private router: Router,
    public translateService: TranslateService) {
    translateService.addLangs(['en', 'bn']);
    translateService.setDefaultLang('bn');

    const browserLang = translateService.getBrowserLang();
    translateService.use(translateService.defaultLang);
  }

  ngOnInit() {
  }

  translate(SelectedLang) {
    this.param.title = SelectedLang === 'bn' ? 'ফ্লাইট-সিমুলেটার' : 'flight-simulator';
    this.translateService.use(SelectedLang);
  }
}

import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html'
})
export class LanguageSelectorComponent implements OnInit {

  constructor(private translate: TranslateService, private adapter: DateAdapter<any>) { }

  ngOnInit() {console.log('init')
    this.translate.addLangs(['nl', 'fr', 'en']);
    this.translate.setDefaultLang('nl');

    const userLanguage = localStorage.getItem('userLang') || this.translate.getBrowserLang();
    this.translate.use(userLanguage.match(/nl|fr|en/) ? userLanguage : this.translate.getDefaultLang());
  }

  changeLanguage(lang: any) {
    this.translate.use(lang);
    this.adapter.setLocale(lang);
    localStorage.setItem('userLang', lang);
  }
}

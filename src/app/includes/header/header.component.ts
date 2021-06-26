import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { HeaderService } from 'src/app/appSevices/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  switchLang:string='';
  browserLang:any;

  constructor(private headerservice:HeaderService,public translate:TranslateService) { 
    this.headerservice.selectedLang.subscribe((res:any) =>{
      this.switchLang = res;
    })

    
    translate.addLangs(['en','hi']);
    translate.setDefaultLang('en');
    translate.use('en');

    this.browserLang = translate.getDefaultLang();
    this.languageChanged();
    this.headerservice.selectedLang.next(this.browserLang);
  }


  ngOnInit(): void {
  }

  

  selectedLanguage(lang:any){
    // this.switchLang=item;
    console.log(lang);
    this.headerservice.selectedLang.next(lang);
  }

  languageChanged(){
    this.translate.use(this.browserLang.match(/en|hi/) ? this.browserLang :'en')
  }

  


}

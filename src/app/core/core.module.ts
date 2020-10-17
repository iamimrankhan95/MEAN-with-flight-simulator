import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/modules/shared/shared.module';
import { P404Component } from '../modules/error/404.component';
import { P500Component } from '../modules/error/500.component';
import { HttpErrorHandler } from '../shared/services/http-error-handler.service';
import { AppService } from '../app.service';
import { NgbDateCustomParserFormatter } from '../shared/modules/shared/pipes/date-fomatter';
import { AppHttpService } from '../app-http.service';



@NgModule({
  declarations: [
    P404Component,
    P500Component,
  ],
  imports: [
    SharedModule
  ],
  providers: [
    AppService,
    AppHttpService,
    HttpErrorHandler,
    NgbDateCustomParserFormatter,
  ]
})
export class CoreModule { }

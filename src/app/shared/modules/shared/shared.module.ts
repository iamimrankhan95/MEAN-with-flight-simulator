import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DataFilterPipe } from './pipes/datafilterpipe';
import { ReplaceNullWithText } from './pipes/replace-null-with-text.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { transcode } from 'buffer';
@NgModule({
  declarations: [
    DataFilterPipe,
    ReplaceNullWithText,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    TranslateModule
  ],
  exports: [
    RouterModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    DataFilterPipe,
    ReplaceNullWithText,
    TranslateModule
  ]
})
export class SharedModule { }

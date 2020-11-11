import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { QuestionsComponent } from './source/components/questions/questions.component';
import { QuestionItemComponent } from './source/components/question-item/question-item.component';


@NgModule({
  declarations: [
    AppComponent,
    QuestionsComponent,
    QuestionItemComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnInit, Input } from '@angular/core';
import { Question } from '../../models/questions';

@Component({
  selector: 'app-question-item',
  templateUrl: './question-item.component.html',
  styleUrls: ['./question-item.component.css']
})
export class QuestionItemComponent implements OnInit {
  @Input() question: Question;

  constructor() {
  }

  ngOnInit(): void {
  }

  Delete(question) {
    console.log('delete');
  }

  Confirm(question) {
    console.log('confirm');
  }
}

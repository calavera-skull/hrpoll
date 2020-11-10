import { Component, OnInit } from '@angular/core';
import { Question } from '../../models/questions';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  questions: Question[];
  constructor() { }

  ngOnInit(): void {

    this.questions = [
      {
        id: 'Вопрос 1',
        text: 'Какой сейчас год?'
      },
      {
        id: 'Вопрос 2',
        text: 'Который сейчас час?'
      },
      {
        id: 'Вопрос 3',
        text: 'Где находится Шамбала?'
      },
      {
        id: 'Вопрос 4',
        text: 'Кто убил Лору Палмер?'
      },
      {
        id: 'Вопрос 5',
        text: 'Как зовут Путина?'
      },
    ];
  }

}

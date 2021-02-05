import { Component, OnInit } from '@angular/core';
import {ThemePalette} from '@angular/material/core';

@Component({
  selector: 'app-gxyz-taa',
  templateUrl: './gxyz-taa.component.html',
  styleUrls: ['./gxyz-taa.component.scss']
})
export class GxyzTaaComponent implements OnInit {


  title = 'taa-stepper';
  isLinear = true;


  wohnflaeche: number = 0;
  preisQMeter: number = 0.25;
  betrag: number = 0;

  zeitraum: string = 'Monatlich';

  hausart: number = 0.9;
  selbstBeteiligung: number = 1.2;
  vertragslänge: number = 1;
  zahlweise: number = 1;
  constructor() {}


  anreden: Anrede[] = [
    {value: 'female', viewValue: 'Frau'},
    {value: 'male', viewValue: 'Herr'},
    {value: 'gender', viewValue: 'Divers'},
    {value: 'company', viewValue: 'Firma'}
  ];

  ngOnInit() {
  }

  task: Task = {
    name: 'Indeterminate',
    completed: false,
    color: 'primary',
    subtasks: [
      {name: 'Primary', completed: false, color: 'primary'},
      {name: 'Accent', completed: false, color: 'accent'},
      {name: 'Warn', completed: false, color: 'warn'}
    ]
  };

  allComplete: boolean = false;

  updateAllComplete() {
    this.allComplete = this.task.subtasks != null && this.task.subtasks.every(t => t.completed);
  }

  someComplete(): boolean {
    if (this.task.subtasks == null) {
      return false;
    }
    return this.task.subtasks.filter(t => t.completed).length > 0 && !this.allComplete;
  }

  setAll(completed: boolean) {
    this.allComplete = completed;
    if (this.task.subtasks == null) {
      return;
    }
    this.task.subtasks.forEach(t => t.completed = completed);
  }
}

interface Anrede {
  value: string;
  viewValue: string;
}

export interface Task {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks?: Task[];
}

import { Component, OnInit } from '@angular/core';
import { PatientType } from "../../model/patientType.model";
import { Symptoms } from "../../model/symptom.model";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  patientType: PatientType[] = [
    {value: 'returnee', viewValue: 'Returnee'},
    {value: 'quarantined', viewValue: 'Quarantined'},
    {value: 'close', viewValue: 'Close Contact'},
    {value: 'infected', viewValue: 'Infected'},
    {value: 'suspected', viewValue: 'Suspected'}
  ];

  symptom: Symptoms[] = [
    {symptomName: 'Fever'},
    {symptomName: 'Cough'},
    {symptomName: 'Tiredness'},
    {symptomName: 'Breathing Difficulty'},
    {symptomName: 'Chest Pain'},
    {symptomName: 'Loss of Speech or Movement'}
  ];
}

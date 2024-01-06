import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  cards = [
    { title: 'REVA University', year: '2016 - 2020', branch: 'B.Tech in EEE', result: '7.64 CGPA',image: '/assets/map.png' },
    { title: 'ACS Dharwad', year: '2014 - 2016', branch: 'Pre University', result: '85.17%',image: '/assets/map.png' },
    { title: 'AVVS Athani', year: '2013 - 2014', branch: '10th Board', result: '84.96%',image: '/assets/map.png' }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}

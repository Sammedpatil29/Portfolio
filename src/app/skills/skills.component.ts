import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  logos = [
    {difficulty:'good', skill: 'assets/5847ea22cef1014c0b5e4833.png'},
    {difficulty:'average', skill: 'assets/4672509.png'},
    {difficulty:'good', skill: 'assets/5848152fcef1014c0b5e4967.png'},
    {difficulty:'green', skill: 'assets/google-cloud_logo-freelogovectors 1.png'},
    {difficulty:'good', skill: 'assets/5847ea22cef1014c0b5e4833.png'},
    {difficulty:'beginner', skill: 'assets/4672509.png'},
    {difficulty:'good', skill: 'assets/5848152fcef1014c0b5e4967.png'},
    {difficulty:'average', skill: 'assets/google-cloud_logo-freelogovectors 1.png'}
  ]
  logos2 = [
    {skill: 'assets/canva-logo-0.png'},
    {skill: 'assets/download (1).png'},
    {skill: 'assets/png-transparent-adobe-premiere-pro-cc-14-3-hd-logo-thumbnail.png'},
    {skill: 'assets/iBJehkOi_400x400.png'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

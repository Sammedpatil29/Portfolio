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
    {difficulty:'good', skill: 'assets/assets/github.png'},
  ]
  logos2 = [
    {skill: 'assets/after effect.png'},
    {skill: 'assets/canva.png'},
    {skill: 'assets/capcut.png'},
    {skill: 'assets/chatgpt.png'},
    {skill: 'assets/Google-Bard.png'},
    {skill: 'assets/premierpro.png'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

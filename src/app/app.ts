import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {A2} from './shared/models/a2';
@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  appList: A2[] =[
    {id:1, name:"Kamsi", hasLocation:true, union:"yes"},
    {id:2, name:"Okechukwu", hasLocation:false, union:0},
    {id:3, name:"Kycee", hasLocation:true, union:"yes"},
    {id:4, name:"Loki", hasLocation:false, union:69},
    {id:5, name:"Fenrir", hasLocation:true, union:"no", hasFriends:false},
    {id:6, name:"Bjorn", hasLocation:false, union:78, hasFriends:true},
    ]
}

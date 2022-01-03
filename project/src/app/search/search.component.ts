import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { TrainInfoService } from '../services/train-info.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor( private trainInfo : TrainInfoService , private router : Router) { 
  }

  date1 =  new Date();
  date =  new Date();
  date2 = this.date.setDate(this.date.getDate()+1)
  date3 = this.date.setDate(this.date.getDate()+1)
  selectedSource : string = 'source'
  selectedDest: string = 'dest'
  selectedDate: any = null
  open : boolean = false
  open_id : number = 0
  city = [
    {value: '101', viewValue: 'Allahabad'},
    {value: '102', viewValue: 'Delhi'},
    {value: '103', viewValue: 'Pune'},
    {value: '104', viewValue: 'Lucknow'},
    {value: '105', viewValue: 'Hyderabad'},
    {value: '106', viewValue: 'Bangalore'},
    {value: '107', viewValue: 'Chennai'}
  ];

  ngOnInit(): void {
  }
  search(date:Date,source:string,dest:string)
  {
    this.trainInfo.source = this.selectedSource
    this.trainInfo.dest = this.selectedDest
    this.trainInfo.date = this.selectedDate
    this.router.navigateByUrl('/search-landing');
    let result={date : date,source : source,destination : dest}
  }

}

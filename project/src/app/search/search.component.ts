import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  constructor() { 
  }

  ngOnInit(): void {
  }
  selectedSource!: string;
  selectedDest!: string;
  selectedDate!: any;
  city = [
    {value: '101', viewValue: 'Allahabad'},
    {value: '102', viewValue: 'Delhi'},
    {value: '103', viewValue: 'Pune'},
    {value: '104', viewValue: 'Lucknow'},
    {value: '105', viewValue: 'Hyderabad'},
    {value: '106', viewValue: 'Bangalore'},
    {value: '107', viewValue: 'Chennai'}
  ];
  date1 =  new Date();
  date =  new Date();
  date2 = this.date.setDate(this.date.getDate()+1)
  date3 = this.date.setDate(this.date.getDate()+1)

  search(date:Date,source:string,dest:string){
    let result={date : date,source : source,destination : dest}
    console.log(result)
  }

}

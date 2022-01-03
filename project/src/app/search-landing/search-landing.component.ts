import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { TrainInfoService } from '../services/train-info.service';
@Component({
  selector: 'app-search-landing',
  templateUrl: './search-landing.component.html',
  styleUrls: ['./search-landing.component.css']
})
export class SearchLandingComponent implements OnInit {

  constructor(private trainInfo: TrainInfoService) { }

  displayedColumns = ['Train No', 'Name', 'Source', 'Destination', 'Arrival', 'Departure', 'Journey Time', 'Seats']
  dataSource!: MatTableDataSource<any>;
  fontStyleControl = new FormControl();
  seat?: string;
  ac: boolean = false;
  nonac: boolean = false;
  id: any;
  date!: Date
  source: String = ' '
  dest!: String
  city = [
    { value: '101', viewValue: 'Allahabad' },
    { value: '102', viewValue: 'Delhi' },
    { value: '103', viewValue: 'Pune' },
    { value: '104', viewValue: 'Lucknow' },
    { value: '105', viewValue: 'Hyderabad' },
    { value: '106', viewValue: 'Bangalore' },
    { value: '107', viewValue: 'Chennai' }
  ];
  date1 = new Date();
  date_sample = new Date();
  date2 = this.date_sample.setDate(this.date_sample.getDate() + 1)
  date3 = this.date_sample.setDate(this.date_sample.getDate() + 1)

  ngOnInit(): void {

    this.source = this.trainInfo.source;
    this.dest = this.trainInfo.dest;
    this.date = this.trainInfo.date
    console.log(this.date, this.source, this.dest)
    this.dataSource = new MatTableDataSource(this.trainInfo.gettrain_info(this.date, this.source, this.dest));
  }

  Search() {
    this.dataSource = new MatTableDataSource(this.trainInfo.gettrain_info(this.date, this.source, this.dest));
  }
  checkseat(val: string, id: any) {
    this.id = id;
    if (val == 'ac') {
      this.ac = true;
      this.nonac = false;
    }
    else if (val == 'nonac') {
      this.nonac = true;
      this.ac = false;
    }

  }
}

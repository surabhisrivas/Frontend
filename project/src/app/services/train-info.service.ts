import { JsonPipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { from, Observable, of, Subject } from 'rxjs';
import { train_info } from '../models/train_info_model';


const res1 =
{
  "status": "success",
  "response": [
    {
      train_id : 1,
      train_name : 'Kalka mail',
      source_name : 'Pune',
      destination_name! : 'Bangalore',
      start_time : '8:00 am',
      end_time : '12:00 pm',
      journey_time : 4,
      ac_ticket: 4,
      sleeper_ticket : 40,
      ac_ticket_cost : 1200,
      sleeper_ticket_cost : 500
    },
    {
      train_id : 2,
      train_name : 'Duranto',
      source_name : 'Patna',
      destination_name! : 'Allahabad',
      start_time : '8:00 am',
      end_time : '2:00 pm',
      journey_time : 6,
      ac_ticket: 10,
      sleeper_ticket : 40,
      ac_ticket_cost : 2000,
      sleeper_ticket_cost : 750
    },
    {
      train_id : 3,
      train_name : 'Lokmanya mail',
      source_name : 'Pune',
      destination_name! : 'Mumbai',
      start_time : '8:00 am',
      end_time : '12:00 pm',
      journey_time : 4,
      ac_ticket: 4,
      sleeper_ticket : 40,
      ac_ticket_cost : 1200,
      sleeper_ticket_cost : 500
    },
    {
      train_id : 4,
      train_name : 'Lokmanya mail',
      source_name : 'Pune',
      destination_name! : 'Mumbai',
      start_time : '8:00 am',
      end_time : '12:00 pm',
      journey_time : 4,
      ac_ticket: 4,
      sleeper_ticket : 40,
      ac_ticket_cost : 1200,
      sleeper_ticket_cost : 500
    },
    {
      train_id : 5,
      train_name : 'Lokmanya mail',
      source_name : 'Pune',
      destination_name! : 'Mumbai',
      start_time : '8:00 am',
      end_time : '12:00 pm',
      journey_time : 4,
      ac_ticket: 4,
      sleeper_ticket : 40,
      ac_ticket_cost : 1200,
      sleeper_ticket_cost : 500
    }
  ]
}

const res2 =
{
  "status": "success",
  "response": [
    {
      train_id : 10,
      train_name : 'Shatabdi Express',
      source_name : 'Pune',
      destination_name! : 'Bangalore',
      start_time : '8:00 am',
      end_time : '12:00 pm',
      journey_time : 4,
      ac_ticket: 4,
      sleeper_ticket : 40,
      ac_ticket_cost : 1200,
      sleeper_ticket_cost : 500
    },
    {
      train_id : 6,
      train_name : 'Bombay mail',
      source_name : 'Patna',
      destination_name! : 'Allahabad',
      start_time : '8:00 am',
      end_time : '2:00 pm',
      journey_time : 6,
      ac_ticket: 10,
      sleeper_ticket : 40,
      ac_ticket_cost : 2000,
      sleeper_ticket_cost : 750
    },
    {
      train_id : 3,
      train_name : 'Lokmanya mail',
      source_name : 'Pune',
      destination_name! : 'Mumbai',
      start_time : '8:00 am',
      end_time : '12:00 pm',
      journey_time : 4,
      ac_ticket: 4,
      sleeper_ticket : 40,
      ac_ticket_cost : 1200,
      sleeper_ticket_cost : 500
    },
    {
      train_id : 4,
      train_name : 'Lokmanya mail',
      source_name : 'Pune',
      destination_name! : 'Mumbai',
      start_time : '8:00 am',
      end_time : '12:00 pm',
      journey_time : 4,
      ac_ticket: 4,
      sleeper_ticket : 40,
      ac_ticket_cost : 1200,
      sleeper_ticket_cost : 500
    },
    {
      train_id : 5,
      train_name : 'Lokmanya mail',
      source_name : 'Pune',
      destination_name! : 'Mumbai',
      start_time : '8:00 am',
      end_time : '12:00 pm',
      journey_time : 4,
      ac_ticket: 4,
      sleeper_ticket : 40,
      ac_ticket_cost : 1200,
      sleeper_ticket_cost : 500
    }
  ]
}

@Injectable({
  providedIn: 'root'
})
export class TrainInfoService {

  constructor() { }
  source : string = '';
  dest : string = '';
  date : any;
  gettrain_info(date:Date, source:String, dest:String){
    console.log(source,dest)
    if(source=='103' && dest==='106')
    return res1.response
    return res2.response
  }
}

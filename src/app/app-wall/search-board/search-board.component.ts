import { ThisReceiver } from '@angular/compiler';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router, Scroll } from '@angular/router';
import { Console } from 'console';
import { SearchBoardService } from './search-board.service';

import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-search-board',
  templateUrl: './search-board.component.html',
  styleUrls: ['./search-board.component.css']
})
export class SearchBoardComponent implements OnInit {

  @ViewChild('scrollspyHeading2') scrollspyHeading2: ElementRef;

  detailedView: any;
  searchForm: FormGroup;
  fromStArr:any;
  toStArr:any;



  constructor(private service: SearchBoardService, private fb: FormBuilder, private route: Router) { }

  ngOnInit(): void {

    this.detailedView = false;
    this.initSearchForm()
    this.fromStation()
    this.searchForm.controls['toStation'].disable();


  }

  

  initSearchForm() {
    this.searchForm = this.fb.group({
      'fromStation': new FormControl('DEFAULT'),
      'toStation': new FormControl('DEFAULT'),
      'switch': new FormControl()
    })
  }

  fromStation(){
    this.service.fetchFromSt().subscribe(
      (data)=>{
        // console.log(data);
        this.fromStArr = data;
      },
      (error)=>{

      }
    )
  }

  

  submitSearchForm() {
    const fromSel = this.searchForm.value.fromStation;
    const toSel = this.searchForm.value.toStation;
    this.route.navigate(['/dt-search/' + fromSel + "/" + toSel])

  }

  fromChange(){
    this.searchForm.controls['toStation'].enable();
    this.searchForm.setValue({
      fromStation: this.searchForm.value.fromStation,
      toStation:'DEFAULT',
      'switch': new FormControl('N')
    })
    // console.log(this.searchForm.value.fromStation);
    this.service.fetchToSt(this.searchForm.value.fromStation).subscribe(
      (data)=>{
        this.toStArr = data;
      },
      (error)=>{

      }
    )
  }






}

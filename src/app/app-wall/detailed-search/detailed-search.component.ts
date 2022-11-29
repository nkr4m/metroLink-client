import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import { Router } from '@angular/router';

import { DetailedSearchService } from './detailed-search.service';

@Component({
  selector: 'app-detailed-search',
  templateUrl: './detailed-search.component.html',
  styleUrls: ['./detailed-search.component.css']
})
export class DetailedSearchComponent implements OnInit {
  fromSt:any;
  toSt:any;

  dtForm:FormGroup;

  deatilObj:any;


  constructor(private fb:FormBuilder,private route:ActivatedRoute, private router:Router, private service:DetailedSearchService) {
    this.fromSt = this.route.snapshot.params['from'];
    this.toSt = this.route.snapshot.params['to'];
    // console.log(this.fromSt)
    // console.log(this.toSt)


    if((this.fromSt >= 1 && this.fromSt <= 309) && (this.toSt >= 1 && this.toSt <= 309)){
      if(this.fromSt != this.toSt){

      }else{
        this.router.navigate(['/search-board/']); 
      }
    }else{
      this.router.navigate(['/search-board/']); 
    }
  }

  ngOnInit(): void {
    this.initDtForm();
    this.setDtForm(this.fromSt, this.toSt);

  }

  initDtForm(){
    this.dtForm = this.fb.group({
      'fromStation': new FormControl(''),
      'toStation': new FormControl('')
    })
  }

  setDtForm(from, to){
    console.log(from, to)
    this.dtForm.controls['fromStation'].disable();
    this.dtForm.controls['fromStation'].setValue(from);


    this.dtForm.controls['toStation'].disable();
    this.dtForm.controls['toStation'].setValue(to);
    
    this.service.fetchDijkstraPath(from, to).subscribe(
      (data)=>{
        this.deatilObj = data;
        console.log(data)

      },
      (error)=>{

      }
    )
    
  }

}

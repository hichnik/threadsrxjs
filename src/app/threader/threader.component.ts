import { Component, OnInit } from '@angular/core';
import { RandomthreadService } from '../randomthread.service';
import { Subscription } from 'rxjs';
import {concatMap, mergeMap, exhaustMap, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-threader',
  templateUrl: './threader.component.html',
  styleUrls: ['./threader.component.css']
})
export class ThreaderComponent implements OnInit {

  public randomData: number[] = [];
  private dataSub$: Subscription;
  private allSub$: Subscription = new Subscription();

  constructor(private dataService: RandomthreadService) {  }

  ngOnInit() { }

  public fetchData(howMuch?: number) {
    this.dataSub$ = this.dataService.fetchData(howMuch).subscribe(data => {
      if (this.randomData.length > 50) {
        this.randomData.shift();
      }
      this.randomData.push(data);
    });
  // add this subscription to component subscribtions list
    this.allSub$.add(this.dataSub$);
  }

  public stopFetch() {
    this.dataSub$.unsubscribe();
    this.clearList();
  }

  public stopAll() {
    this.allSub$.unsubscribe();
    this.clearList();
  }

  public finishAll() {
    this.allSub$.unsubscribe();
    this.clearList();
    this.allSub$ = new Subscription();
  }

  private clearList() {
    this.randomData = [];
  }
}

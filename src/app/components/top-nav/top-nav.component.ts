import { AfterContentInit, AfterViewChecked, DoCheck, OnDestroy } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { AfterContentChecked } from '@angular/core';
import { Component, OnInit } from '@angular/core';


class name {
  constructor() {

  }
}

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit, DoCheck, OnDestroy, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {
  userEmail: string = "[user - email]";

  constructor() {
  }

  ngAfterViewInit(): void {

  }
  ngAfterViewChecked(): void {
  }
  ngAfterContentChecked(): void {
  }

  ngAfterContentInit(): void {
  }

  ngOnDestroy(): void {

  }



  ngOnInit(): void {

  }


  ngDoCheck() {
    console.count("in ngDoCheck");
  }

}

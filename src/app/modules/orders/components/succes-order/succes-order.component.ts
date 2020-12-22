import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-succes-order',
  templateUrl: './succes-order.component.html',
  styleUrls: ['./succes-order.component.css']
})


export class SuccesOrderComponent implements OnInit {
  idOrder: any;
  constructor(private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.idOrder = this.router.snapshot.params.id;
  }

}

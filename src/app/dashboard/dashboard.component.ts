import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  //This is code that controls the charts data
  //line chart  
  public chartType: string = 'line';

  public chartDatasets: Array<any> = [
    { data: [5.5, 5.9, 6.2, 6.4, 7.2, 7.9], label: 'Investor Yieled' }
  ];

  public chartLabels: Array<any> = ['2013', '2014', '2015', '2016', '2017', 'YTD 2018'];

  public chartColors: Array<any> = [
    {
      backgroundColor: 'rgba(0, 137, 132, .2)',
      borderColor: 'rgba(0, 10, 130, .7)',
      borderWidth: 2,
    }
  ];

  public chartOptions: any = {
    responsive: true
  };
  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }


  //colapse code
  panelOpenState = false;  



  constructor() { }

  ngOnInit() {
  }

}
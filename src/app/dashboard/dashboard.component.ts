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


  //This is code that controls the charts data
  //pie chart for portfolio by industries
  public chartTypeP: string = 'pie';

  public chartDatasetsP: Array<any> = [
    { data: [153, 30, 38, 7], label: 'My First dataset' }
  ];

  public chartLabelsP: Array<any> = ['Hospitality', 'Solar & Other', 'Healthcare', 'Industrial'];

  public chartColorsP: Array<any> = [
    {
      backgroundColor: ['#607d8b', '#46BFBD', '#FDB45C', '#81d4fa'],
      hoverBackgroundColor: ['#78909c', '#5AD3D1', '#FFC870', '#b3e5fc'],
      borderWidth: 2,
    }
  ];

  //This is code that controls the charts data
  //pie chart for income breakdown
  public chartTypeP_Inc: string = 'pie';

  public chartDatasetsP_Inc: Array<any> = [
    { data: [2.89, 2.66, 1.6, 0.2, 1.2], label: 'My First dataset' }
  ];

  public chartLabelsP_Inc: Array<any> = ['Interest', 'Origination Fee', 'Servicing & Other Fee', 'Strip', 'Gain on Sale'];

  public chartColorsP_Inc: Array<any> = [
    {
      backgroundColor: ['#607d8b', '#46BFBD', '#FDB45C', '#81d4fa', '#c5cae9'],
      hoverBackgroundColor: ['#78909c', '#5AD3D1', '#FFC870', '#b3e5fc', '#e8eaf6'],
      borderWidth: 2,
    }
  ];

  public chartOptionsP: any = {
    responsive: true
  };


  //colapse code
  panelOpenState = false;  



  constructor() { }

  ngOnInit() {
  }

}
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-gcharts',
  templateUrl: './gcharts.component.html',
  styleUrls: ['./gcharts.component.scss'],
})
export class GchartsComponent implements OnInit, OnDestroy {
  private auxCount = 3;

  private dataChartLine2:ChartDataSets = {
    data: [0, 0],
    label: 'Ventas',
    borderColor:'blue',
    backgroundColor: 'transparent',
    pointBorderColor:'red',
    pointBackgroundColor:'yellow',
    hoverBackgroundColor: 'gray',
  };


  private dataChartLine2_2:ChartDataSets = {
    data: [0, 0],
    label: 'Pérdidas',
    borderColor:'red',
    backgroundColor: 'transparent',
    pointBorderColor:'orange',
    pointBackgroundColor:'purple',
    hoverBackgroundColor: 'gray',
  };

  constructor() {}
  ngOnDestroy(): void {
    clearInterval(this.x);
  }

  x! : any;

  ngOnInit(): void {
     this.x = setInterval(() => {

      const pushitem = ''+this.auxCount;
      this.chart_Labels2.push(pushitem);

      this.dataChartLine2.data?.push(this.getRandomValue(70, 85));
      this.dataChartLine2_2.data?.push(this.getRandomValue(40, 75));

      this.auxCount++;

      if(this.auxCount>15){
        this.chart_Labels2.shift();
        this.dataChartLine2.data?.shift();
        this.dataChartLine2_2.data?.shift()
      }

      console.log('chart pushed');

    }, 2000);
  }
  getRandomValue (min:number, max:number):number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  public chart_Options: ChartOptions = {
    responsive: true,
    maintainAspectRatio: true,
    //Curva:
    elements:{
      line:{
        tension:0
      }
    }
  };
  public chart_Labels: Label[] = [
    '2015',
    '2016',
    '2017',
    '2018',
    '2019',
    '2020',
    '2021',
  ];
  public chart_Type: ChartType = 'bar';
  public chart_Legend = true;
  public chart_Plugins = [];

  public chart_Data: ChartDataSets[] = [
    {
      data: [35, 45, 67, 70, 75, 80, 90],
      label: 'Victorias',
      backgroundColor: '#27ada7',
      hoverBackgroundColor: 'gray',
    },
    {
      data:[45, 38, 41, 105, 20, 32, 54],
      label: 'Derrotas',
      backgroundColor: 'red',
      hoverBackgroundColor: 'black',
    }
  ];

  public chart_Type2: ChartType = 'line';

  public chart_Labels2: Label[] = ['0', '1'];

  public chart_Data2: ChartDataSets[] = [
    this.dataChartLine2,
    this.dataChartLine2_2
  ];



}

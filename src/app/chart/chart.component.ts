import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { ServicioBaseService } from '../servicio-base.service';
@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [CanvasJSAngularChartsModule],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.css'
})
export class ChartComponent{
  dataPoints:any = [];
  chart:any;
 
  constructor(private http : HttpClient, private service: ServicioBaseService) {
    
  }
  @Input() cargarID:string = "";
  
  chartOptions = {
    theme: "light2",
    zoomEnabled: true,
    exportEnabled: true,
    title: {
      text:"Precio de cierre"
    },
    subtitles: [{
      text: "Loading Data...",
      fontSize: 24,
      horizontalAlign: "center",
      verticalAlign: "center",
      dockInsidePlotArea: true
    }],
    axisY: {
      title: "Precio de cierre (en EUR)",
      prefix: "€"
    },
    data: [{
      type: "line",
      name: "Precio de Cierre",
      yValueFormatString: "#,###.00 €",
      xValueType: "dateTime",
      dataPoints: this.dataPoints
    }]
  }
 
  getChartInstance(chart: object) {
    this.chart = chart;
  }
  
  ngAfterViewInit() {
    this.http.get('https://api.coingecko.com/api/v3/coins/'+this.cargarID+'/market_chart?vs_currency=eur&days=max', { responseType: 'json' }).subscribe((response: any) => {
      let data = response;
      
      for(let i = 0; i < data.prices.length; i++){
        
        this.dataPoints.push({x: new Date(data.prices[i][0]), y: Number(data.prices[i][1]) });
      }
      
      this.chart.subtitles[0].remove();
    });
  }
}

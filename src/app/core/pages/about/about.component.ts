import { AfterViewInit, Component } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { RESUME } from './mx-es';

@Component({
  selector: 'home-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent implements AfterViewInit {
  summary = RESUME.summary;
  courses = RESUME.courses;
  jobs = RESUME.jobs;
  skills = RESUME.skills;

  chart?: Chart;

  ngAfterViewInit(): void {
    this.drawChart()
  }

  drawChart(): void {
    this.chart?.destroy(),
      (this.chart = new Chart(document.getElementById('chart') as any, {
        type: 'bar',
        data: {
          labels: this.skills.map((row) => row.name),
          datasets: [
            {
              label: 'Conocimiento',
              data: this.skills.map((row) => row.value),
              backgroundColor: this.skills.map(
                (row) => 'rgba(75, 192, 192, 0.2'
              ),
              borderColor: this.skills.map((row) => 'rgb(75, 192, 192'),
              borderWidth: 1,
            },
          ],
        },
        options: {
          indexAxis: 'y',
        },
      }));
  }
}

import { AppService } from './app.service';
import { Component } from '@angular/core';
import { getLocaleExtraDayPeriods } from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppService]
})
export class AppComponent {
  via = [{name: 'test'}];
  selectedVia;


  constructor(private app: AppService){
    this.getVia();
    this.selectedVia = {name: ''};
  }

  getVia = () => {
    this.app.getAllVia().subscribe(
      data => {
        this.via = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  viaClicked = (via) => {
    this.app.getVia(via.id).subscribe(
      data => {
        this.selectedVia = data;
      },
      error => {
        console.log(error);
      }
    );
    }

    updateVia = () => {
      this.app.updateVia(this.selectedVia).subscribe(
        data => {
          this.getVia();
          this.selectedVia = {name: ''};
        },
        error => {
          console.log(error);
        }
      );
    }

    createVia = () => {
      this.app.createVia(this.selectedVia).subscribe(
        data => {
          this.via.push(data);
          this.selectedVia = {name: ''};
        },
        error => {
          console.log(error);
        }
      );
    }
    deleteVia = () => {
      this.app.deleteVia(this.selectedVia.id).subscribe(
        data => {
          this.getVia();
          this.selectedVia = {name: ''};
        },
        error => {
          console.log(error);
        }
      );
    }

}

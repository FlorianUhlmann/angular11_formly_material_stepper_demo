import {Component} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormlyFieldConfig} from '@ngx-formly/core';
import { ActivatedRoute } from '@angular/router';
import { Router,NavigationEnd  } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {



  constructor(private route: ActivatedRoute, public router: Router) {

  }
  title = 'taa-stepper';
  isLinear = true;


  wohnflaeche: number = 100;
  preisQMeter: number = 0.25;
  betrag: number = 0;

  zeitraum: string = 'Monatlich';

  hausart: number = 0.9;
  selbstBeteiligung: number = 1.2;
  vertragslänge: number = 1;
  zahlweise: number = 1;
  routingName: any;





  anreden: Anrede[] = [
    {value: 'female', viewValue: 'Frau'},
    {value: 'male', viewValue: 'Herr'},
    {value: 'gender', viewValue: 'Divers'},
    {value: 'company', viewValue: 'Firma'}
  ];

  ngOnInit() {
    this.preisBerechner();
    console.log(this.router.url);
    console.log(window.location.href);

  }
  preisBerechner() {
    this.betrag =
      this.wohnflaeche *
      this.preisQMeter *
      this.hausart *
      this.selbstBeteiligung *
      this.vertragslänge *
      this.zahlweise;

    console.log(
      'Quadratmeter:' +
        this.wohnflaeche +
        '\nHausfaktor:' +
        this.hausart +
        '\nSelbstbeteiligungsfaktor:' +
        this.selbstBeteiligung +
        '\nvertragslängenFaktor:' +
        this.vertragslänge +
        '\nzahlweiseFaktor:' +
        this.zahlweise
    );
    console.log(this.betrag);
  }
  haus(value: number) {
    this.hausart = value;
    this.preisBerechner();
  }
  onSelbst(value: number) {
    this.selbstBeteiligung = value;
    this.preisBerechner();
  }
  onDauer(value: number) {
    this.vertragslänge = value;
    this.preisBerechner();
  }
  onZahlweise(value: number) {
    this.zahlweise = value;
    this.zeitraum = 'Monatlich';
    if (value == 12) {
      this.zahlweise = value * 0.97;
      this.zeitraum = 'Jährlich';
    }
    this.preisBerechner();
  }
}

interface Anrede {
  value: string;
  viewValue: string;
}


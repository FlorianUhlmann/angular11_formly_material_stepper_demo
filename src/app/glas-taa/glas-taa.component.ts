import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-glas-taa',
  templateUrl: './glas-taa.component.html',
  styleUrls: ['./glas-taa.component.scss']
})
export class GlasTaaComponent implements OnInit {

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

  wohnraum: string ="Einfamilienhaus";
  selbstBeteiligungBetrag:string = "150"
  vertragsdauer:string ="1 Jahr"


  constructor() {}


  anreden: Anrede[] = [
    {value: 'female', viewValue: 'Frau'},
    {value: 'male', viewValue: 'Herr'},
    {value: 'gender', viewValue: 'Divers'},
    {value: 'company', viewValue: 'Firma'}
  ];

  ngOnInit() {
    this.preisBerechner()
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
  haus(value: number, wohn:string) {
    this.hausart = value;
    this.wohnraum =wohn;
    this.preisBerechner();
  }
  onSelbst(value: number,selb:string) {
    this.selbstBeteiligung = value;
    this.selbstBeteiligungBetrag =selb
    this.preisBerechner();
  }
  onDauer(value: number,val:string) {
    this.vertragslänge = value;
    this.vertragsdauer =val;
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


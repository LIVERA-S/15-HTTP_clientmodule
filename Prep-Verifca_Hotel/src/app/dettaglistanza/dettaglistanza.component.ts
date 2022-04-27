import { Component, OnInit,Input } from '@angular/core';
import { Booking } from '../booking.model';
import { Room } from '../rooms.model';

@Component({
  selector: 'app-dettaglistanza',
  templateUrl: './dettaglistanza.component.html',
  styleUrls: ['./dettaglistanza.component.css']
})
export class DettaglistanzaComponent implements OnInit {

  constructor() { }
  @Input() room : Room = undefined!;
  ngOnInit(): void {
  }
}

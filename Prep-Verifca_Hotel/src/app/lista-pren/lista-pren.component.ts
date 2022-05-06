import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Booking } from '../booking.model';
import { Room } from '../rooms.model';
@Component({
  selector: 'app-lista-pren',
  templateUrl: './lista-pren.component.html',
  styleUrls: ['./lista-pren.component.css']
})
export class ListaPrenComponent implements OnInit {
  @Input() listaPreno: Booking[] = undefined!;
  @Input() room: Room = undefined!;
  @HostBinding('class') cssColor = 'white';

  constructor() { }

  ngOnInit(): void {
  }
  mostraDati(room: Room) {
    this.room.id = room.id;
    this.room.name = room.name;
    this.room.num_D_bed = room.num_D_bed;
    this.room.num_S_bed = room.num_S_bed;
  }
  makeFavorite(vet: Booking) {
    if (vet.cssColor == 'white')
      vet.cssColor = 'yellow';
    else
      vet.cssColor = 'white';

    this.cssColor = vet.cssColor;
  }

}

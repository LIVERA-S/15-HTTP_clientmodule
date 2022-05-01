import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Room } from './rooms.model';
import { Booking } from './booking.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Prep-Verifca_Hotel';
  obsRooms: Observable<Booking[]> | undefined
  data: Booking[] = undefined!;
  selectedRoom: Room = new Room(); 
  
  constructor(private http: HttpClient){
    
  }
  ngOnInit(): void {
   this.obsRooms = this.http.get<Booking[]>("https://my-json-server.typicode.com/malizia-g/hotel/booking");
   this.obsRooms.subscribe(this.fati)
  }
  fati = (data: Booking[]) => {
    this.data = data;
  }
}

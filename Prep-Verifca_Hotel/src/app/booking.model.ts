import { Room } from "./rooms.model";
export class Booking{

    from: string = "";
    to : string = "";
    name:string = "";
    surname:string = "";
    room: Room = undefined!;
}
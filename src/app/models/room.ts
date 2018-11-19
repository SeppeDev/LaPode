import { Booking } from './booking';
import { Price } from './price';

export class Room {
  id: number;
  type: string;
  bed_size: string;
  bathroom: boolean;
  price?: Price; // each room could have separate pricing
  booking?: Booking; //each room can be booked separately, working without users so data type on model itself
}

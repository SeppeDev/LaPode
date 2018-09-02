import { Room } from './room';
import { Equipment } from './equipment';
import { Image } from './image';
import { Price } from './price';

export class Gite {
    id: number;
    name: string;
    description: string;
    prices: Price[];
    images: Image[];
    area: number;
    people: number;
    equipment: Equipment[];
    rooms: Room[];
}

import { Gite } from './../models/gite';

export const Gites: Gite[] = [
    {
        id: 1,
        name: 'Le Grenier',
        description: 'De gite heeft toegang tot een overdekt terras, BBQ en tuinmeubelen. Zelf bestaat de gite uit een keuken, ' +
        'uitgerust met gasvuur, microgolf, oven, afwasmachine, grote koelkast en diepvries, een living, een eetkamer, ' +
        'een apart toilet en tot slot 3 kamers. Twee kamers met 2-persoonsbed en elk een eigen badkamer, en één kamer met een ' +
        'stapelbed voor drie, met een douche, lavabo en de sauna. Verder is er ook een elektrische piano beschikbaar. ' +
        'Tot slot is babyuitrusting mogelijk op aanvraag.',
        prices: [
          { id: 1, period: 'januari, februari, maart, november en december', description: 'per week', price: 1000 },
          { id: 1, period: 'april, mei, juni, september en oktober', description: 'per week', price: 1300 },
          { id: 1, period: 'juli, augustus en alle schoolvakanties', description: 'per week', price: 1500 }
        ],
        images: [
          {'id': 1, 'path': '../../../assets/images/gite1/living.jpg', 'description': 'The livingroom'},
          {'id': 2, 'path': '../../../assets/images/gite1/kichen.jpg', 'description': 'The kichen'},
          {'id': 3, 'path': '../../../assets/images/gite1/bedroom_1.jpg', 'description': 'The master bedroom'},
          {'id': 4, 'path': '../../../assets/images/gite1/bathroom_1.jpeg', 'description': 'Bathroom of the master bedroom'},
          {'id': 5, 'path': '../../../assets/images/gite1/sauna.jpg', 'description': 'The sauna'},
          {'id': 6, 'path': '../../../assets/images/gite1/hall.jpg', 'description': 'The hall'}
        ],
        area: 0,
        people: 7,
        equipment: [
          {'id': 1, 'name': 'gasvuur'},
          {'id': 2, 'name': 'microgolf'},
          {'id': 3, 'name': 'oven'},
          {'id': 4, 'name': 'afwasmachine'},
          {'id': 5, 'name': 'koelkast'},
          {'id': 6, 'name': 'diepvries'}
        ],
        rooms: [
          {id: 1, type: 'double_room', bed_size: '160x200', bathroom: true},
          {id: 2, type: 'double_room', bed_size: '160x200', bathroom: true},
          {id: 3, type: 'bunk', bed_size: '80x190', bathroom: true}
        ],
        booking: {
          id: 1,
          start_date: "01/01/2001",
          end_date: "01/02/2001",
          client_name: "Seppe Goossens"
        }
    }
];

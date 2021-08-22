import { FACILITY } from './data.interface';
import { findBestBorough } from './solution';

const interests1 = [ FACILITY.CINEMA, FACILITY.GYM, FACILITY.STORE  ];
const interests2 = [ FACILITY.SCHOOL, FACILITY.STORE, FACILITY.OFFICE  ];
const interests3 = [ FACILITY.GYM, FACILITY.OFFICE ];

console.log(findBestBorough(interests1)); // [ 1, 4, 5, 6 ]
console.log(findBestBorough(interests2)); // [ 1, 5, 6 ]
console.log(findBestBorough(interests3)); // [ 2, 6 ]
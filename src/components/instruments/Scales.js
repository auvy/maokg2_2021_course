import { PIANO } from './piano/constants.js';
import { LYRE } from './lyre/constants.js'
import { KALIMBA } from './kalimba/constants.js'
import { XYLOPHONE } from './xylophone/constants.js'
import { HANDPAN } from './handpan/constants.js'

import { Piano } from './piano/Instrument.js';
import { Kalimba } from './kalimba/Instrument.js';
import { Lyre } from './lyre/Instrument.js';
import { Xylophone } from './xylophone/Instrument.js';
import { Handpan } from './handpan/Instrument.js';


let LAYOUTS = 
{
  'piano' : Piano, 
  'kalimba': Kalimba, 
  'handpan': Handpan, 
  'xylophone': Xylophone, 
  'lyre': Lyre
}



let SCALES = {...PIANO, ...LYRE, ...KALIMBA, ...XYLOPHONE, ...HANDPAN}

export { SCALES, LAYOUTS }
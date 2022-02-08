const VALID_KEYS1 = ['1'];
const VALID_KEYS2 = ['q', 'w', 'e', 'r'];
const VALID_KEYS3 = ['d', 'f', 'g', 'h', 'j', 'k', 'l'];
const VALID_KEYS4 = ['o', 'p', '['];
const VALID_KEYS5 = ['-', '='];
const VALID_KEYS = VALID_KEYS1 + VALID_KEYS2 + VALID_KEYS3 + VALID_KEYS4 + VALID_KEYS5

const NOTES = [
  'd3',
  'b2', 'g2', 'e2', 'c2',
  'a1', 'f1', 'd1', 'c1', 'e1', 'g1', 'b1',
  'd2', 'f2', 'a2',
  'c3', 'e3'
];
const NOTE_TO_KEY = {
  d3: '1',  
  b2: 'q', g2: 'w', e2: 'e', c2: 'r',
  a1: 'd', f1: 'f', d1: 'g', c1: 'h', e1: 'j', g1: 'k', b1: 'l',
  d2: 'o', f2: 'p', a2: '[',
  c3: '-', e3: '='
};
const KEY_TO_NOTE = {
  1: 'd3',
  q: 'b2', w: 'g2', e: 'e2', r: 'c2',
  d: 'a1', f: 'f1', g: 'd1', h: 'c1', j: 'e1', k: 'g1', l: 'b1',
  o: 'd2', p: 'f2', '[': 'a2',
  '-': 'c3', '=': 'e3'
};

const NOTES1 = [
  'a3',
  'gb2', 'd2', 'b2', 'g2',
  'e1', 'c1', 'a1', 'g1', 'b1', 'd1', 'gb1',
  'a2', 'c2', 'e2',
  'g3', 'b3'
];
const NOTE_TO_KEY1 = {
  a3: '1',  
  gb2: 'q', d2: 'w', b2: 'e', g2: 'r',
  e1: 'd', c1: 'f', a1: 'g', g1: 'h', b1: 'j', d1: 'k', gb1: 'l',
  a2: 'o', c2: 'p', e2: '[',
  g3: '-', b3: '='
};
const KEY_TO_NOTE1 = {
  1: 'a3',
  q: 'gb2', w: 'd2', e: 'b2', r: 'g2',
  d: 'e1', f: 'c1', g: 'a1', h: 'g1', j: 'b1', k: 'd1', l: 'gb1',
  o: 'a2', p: 'c2', '[': 'e2',
  '-': 'g3', '=': 'b3'
};




const NOTES2 = [
  'd3',
  'b2', 'ab2', 'e2', 'c2',
  'a1', 'f1', 'd1', 'b0', 'e1', 'ab1', 'b1',
  'd2', 'f2', 'a2',
  'c3', 'e3'
];
const NOTE_TO_KEY2 = {
  d3: '1',  
  b2: 'q', ab2: 'w', e2: 'e', c2: 'r',
  a1: 'd', f1: 'f', d1: 'g', b0: 'h', e1: 'j', ab1: 'k', b1: 'l',
  d2: 'o', f2: 'p', a2: '[',
  c3: '-', e3: '='
};
const KEY_TO_NOTE2 = {
  1: 'd3',
  q: 'b2', w: 'ab2', e: 'e2', r: 'c2',
  d: 'a1', f: 'f1', g: 'd1', h: 'b0', j: 'e1', k: 'ab1', l: 'b1',
  o: 'd2', p: 'f2', '[': 'a2',
  '-': 'c3', '=': 'e3'
};


const KALIMBA = {'kalimba': {
  'classic': {
    'NOTES': NOTES,
    'VALID_KEYS': VALID_KEYS,
    'NOTE_TO_KEY': NOTE_TO_KEY,
    'KEY_TO_NOTE': KEY_TO_NOTE
  },
  'dreamy': {
    'NOTES': NOTES1,
    'VALID_KEYS': VALID_KEYS,
    'NOTE_TO_KEY': NOTE_TO_KEY1,
    'KEY_TO_NOTE': KEY_TO_NOTE1
  },
  'eastern': {
    'NOTES': NOTES2,
    'VALID_KEYS': VALID_KEYS,
    'NOTE_TO_KEY': NOTE_TO_KEY2,
    'KEY_TO_NOTE': KEY_TO_NOTE2
  }

}}
  
export { KALIMBA };
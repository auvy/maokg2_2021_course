const VALID_KEYS = ['t', 'y', 'u', 'f', 'v', 'b', 'n', 'j', 'g'];
const NOTES = [
  'b1', 'e1', 'g1', 'c1', 
  'a1', 'd1', 'c2', 'f1',
  'dingb'
];
const NOTE_TO_KEY = {
  b1: 'u', e1: 'j', g1: 'n', c1: 'b',
  a1: 'v', d1: 'f', c2: 't', f1: 'y',
  dingb: 'g'

};
const KEY_TO_NOTE = {
  u: 'b1', j: 'e1', n: 'g1', b: 'c1',
  v: 'a1', f: 'd1', t: 'c2', y: 'f1',
  g: 'dingb'
};


const NOTES1 = [
  'c2', 'g1', 'd1', 'a0', 
  'c1', 'f1', 'a1', 'd2',
  'dingd'
];
const NOTE_TO_KEY1 = {
  c2: 'u', g1: 'j', d1: 'n',  a0: 'b', 
  c1: 'v', f1: 'f', a1: 't',  d2: 'y',
  dingd: 'g'

};
const KEY_TO_NOTE1 = {
  u: 'c2', j: 'g1', n: 'd1', b: 'a0', 
  v: 'c1', f: 'f1', t: 'a1', y: 'd2', 
  g: 'dingd', 
};



const HANDPAN = {'handpan': {
  'classic': {
    'NOTES': NOTES,
    'VALID_KEYS': VALID_KEYS,
    'NOTE_TO_KEY': NOTE_TO_KEY,
    'KEY_TO_NOTE': KEY_TO_NOTE
  },
  'minor': {
    'NOTES': NOTES1,
    'VALID_KEYS': VALID_KEYS,
    'NOTE_TO_KEY': NOTE_TO_KEY1,
    'KEY_TO_NOTE': KEY_TO_NOTE1
  }
}}
  
export { HANDPAN };
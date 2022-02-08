const VALID_KEYS = ['q', 'w', 'e', 'r', 't', 
'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k'];
const NOTES = [
 'e1', 'f1', 'g1', 'a1', 'b1',
 'c2', 'd2', 'e2', 'f2', 'g2'
];
const NOTE_TO_KEY = {
  e1: 'q', f1: 'w', g1: 'e', a1: 'r', b1: 't',
  c2: 'y', d2: 'u', e2: 'i', f2: 'o', g2: 'p'

};
const KEY_TO_NOTE = {
  q: 'e1', w: 'f1', e: 'g1', r: 'a1', t: 'b1',
  y: 'c2', u: 'd2', i: 'e2', o: 'f2', p: 'g2'
};


const NOTES1 = [
  'g1', 'a1', 'b1', 'c2', 
  'd2', 'e2', 'f2', 'g2',
  'a2', 'b2', 'c3', 'd3',
  'e3', 'f3', 'g3', 'a3'
 ];
 const NOTE_TO_KEY1 = {
   g1: 'q', a1: 'w', b1: 'e', c2: 'r', 
   d2: 't', e2: 'y', f2: 'u', g2: 'i', 
   a2: 'a', b2: 's', c3: 'd', d3: 'f', 
   e3: 'g', f3: 'h', g3: 'j', a3: 'k'
 };
 const KEY_TO_NOTE1 = {
   q: 'g1', w: 'a1', e: 'b1', r: 'c2', 
   t: 'd2', y: 'e2', u: 'f2', i: 'g2', 
   a: 'a2', s: 'b2', d: 'c3', f: 'd3', 
   g: 'e3', h: 'f3', j: 'g3', k: 'a3'
  };


const LYRE = {'lyre': {
  'classic': {
    'NOTES': NOTES,
    'VALID_KEYS': VALID_KEYS,
    'NOTE_TO_KEY': NOTE_TO_KEY,
    'KEY_TO_NOTE': KEY_TO_NOTE
  },
  '16-string': {
    'NOTES': NOTES1,
    'VALID_KEYS': VALID_KEYS,
    'NOTE_TO_KEY': NOTE_TO_KEY1,
    'KEY_TO_NOTE': KEY_TO_NOTE1
  }

}}

export { LYRE };
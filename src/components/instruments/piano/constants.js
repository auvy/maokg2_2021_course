const VALID_BLACK_KEYS = ['2', '3', '5', '6', '7', 's', 'd', 'g', 'h', 'j'];
const VALID_WHITE_KEYS = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'z', 'x', 'c', 'v', 'b', 'n', 'm'];
const VALID_KEYS = [...VALID_BLACK_KEYS, ...VALID_WHITE_KEYS];
const NOTES = [
  'c1', 'db1', 'd1', 'eb1',
  'e1', 'f1', 'gb1', 'g1',
  'ab1', 'a1', 'bb1', 'b1',

  'c2', 'db2', 'd2', 'eb2',
  'e2', 'f2', 'gb2', 'g2',
  'ab2', 'a2', 'bb2', 'b2'
];
const NOTE_TO_KEY = {
        db1  : '2', eb1  : '3',
    c1   : 'q',  d1   : 'w',   e1: 'e', 

        gb1  : '5', ab1  : '6', bb1  : '7',
    f1   : 'r',  g1   : 't',  a1   : 'y',  b1   : 'u',
    

        db2: 's', eb2: 'd',
    c2: 'z',  d2: 'x',   e2: 'c', 

        gb2: 'g', ab2: 'h', bb2: 'j',
    f2: 'v',  g2: 'b',  a2: 'n',  b2: 'm'

};
const KEY_TO_NOTE = {
    2: 'db1', 3:'eb1',
  q:'c1', w:'d1', e: 'e1', 

    5:'gb1', 6:'ab1', 7:'bb1',
  r:'f1',  t:'g1',  y:'a1',  u:'b1',
  

    s:'db2', d:'eb2',
  z:'c2',  x:'d2',   c:'e2', 

    g:'gb2', h:'ab2', j:'bb2',
  v:'f2',  b:'g2',  n:'a2',  m:'b2'
};

const PIANO = {'piano': {
  'classic': {'NOTES': NOTES,
  'VALID_KEYS': VALID_KEYS,
  'NOTE_TO_KEY': NOTE_TO_KEY,
  'KEY_TO_NOTE': KEY_TO_NOTE}
}}

export { PIANO };
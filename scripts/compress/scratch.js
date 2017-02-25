'use strict';
const Trie = require('./trie');
let ptrie = require('./ptrie');
let PackedTrie = ptrie.PackedTrie;

// let arr = [
//   'cool',
//   'coolish',
//   'cool hat',
//   'cooledomingo',
// ];
let arr = require('/home/spencer/nlp/nlp_compromise/src/data/nouns/nouns.js');
let t = new Trie(arr);
// console.log('\n\n' + t.isWord('nothing'));

let compressed = t.pack();
console.log(compressed);

let p = new PackedTrie(compressed);
// console.log(p);

for(let i = 0; i < arr.length; i++) {
  if (!p.isWord(arr[i])) {
    console.log(arr[i]);
  }
}
// console.log(p.isWord('cool hat'));

// console.log(p.matches('coolish'));
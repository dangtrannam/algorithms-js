class HashTable {
  #keyMap;

  constructor(size = 53) {
    this.#keyMap = new Array(size);
  }

  // private hash method
  #hash(key) {
    let total = 0;
    const WEIRD_PRIME = 31;
    const limit = Math.min(key.length, 100);
    for (let i = 0; i < limit; i++) {
      const char = key[i];
      const value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.#keyMap.length;
    }
    return total;
  }

  set(key, value) {
    const index = this.#hash(key);
    // create bucket if missing using logical assignment
    (this.#keyMap[index] ??= []).push([key, value]);
  }

  get(key) {
    const bucket = this.#keyMap[this.#hash(key)];
    const pair = bucket?.find(([k]) => k === key);
    return pair?.[1];
  }

  keys() {
    const out = [];
    for (const bucket of this.#keyMap) {
      if (!bucket) continue;
      for (const [k] of bucket) out.push(k);
    }
    return [...new Set(out)];
  }

  values() {
    const out = [];
    for (const bucket of this.#keyMap) {
      if (!bucket) continue;
      for (const [, v] of bucket) out.push(v);
    }
    return [...new Set(out)];
  }
}

let ht = new HashTable(17);
ht.set("maroon", "#800000");
ht.set("yellow", "#FFFF00");
ht.set("olive", "#808000");
ht.set("salmon", "#FA8072");
ht.set("lightcoral", "#F08080");
ht.set("mediumvioletred", "#C71585");
ht.set("plum", "#DDA0DD");
ht.set("purple", "#DDA0DD");
ht.set("violet", "#DDA0DD");

console.log(ht.keys());
console.log(ht.values());

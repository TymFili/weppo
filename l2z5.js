const obj = {
  pole: 1,
  metoda() {},
  get prop() { return this.pole; },
  set prop(v) { this.pole = v; }
};

const obj = {};

// zwykłe przypisanie
obj.pole = 1;
obj.metoda = function() {};

// get / set
Object.defineProperty(obj, 'prop', {
  get() { return this.pole; },
  set(v) { this.pole = v; }
});

// wszystkie
// wlasciwosci z akcesoriami get i set w odniesieniu do istniejacego obiektu

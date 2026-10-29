const pipe = (value, ...fns) => fns.reduce((acc, fn) => fn(acc), value);

const groupBy = keySelector => arr => {
  const groupedObj = Object.groupBy(arr, keySelector);
  return Object.entries(groupedObj).map(([key, groupArr]) => {
    groupArr.key = key; // przypisanie klucza grupy jako wlasciwosci tablicy
    return groupArr;
  });
};

// 3. Zmodyfikowany sort
const sort = keySelector => arr => {
  return [...arr].sort((a, b) => {
    const ka = keySelector(a);
    const kb = keySelector(b);
    if (typeof ka === 'string' && typeof kb === 'string') {
      return ka.localeCompare(kb);
    }
    return ka < kb ? -1 : ka > kb ? 1 : 0;
  });
};

const take = n => arr => arr.slice(0, n);

const map = fn => arr => arr.map(fn);

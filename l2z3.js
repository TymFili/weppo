// https://en.wikipedia.org/wiki/JSFuck - niestety jest Turing Complete, czyli wielcy entuzjasci beda w nim pisac jakies funkcje prime(n)

// (![]+[])[+[]] - 'f'
// (![]+[])[+!+[]] - 'a'
// ([![]]+[][[]])[+!+[]+[+[]]] - 'i'
// (![]+[])[!+[]+!+[]] - 'l'

// (![]+[]) daje false, bo to ![] (false) do pustej tablicy konwertuje to na napis "false" (??), a potem [+[]] -> [0], wiec to "false"[0]
// +!+[] -> +!0 -> +true -> 1, wiec "false"[1]
// ([![]]+[][[]]) -> ([false]+[][[]]) -> ("false"+[][0]) -> ("false"+"undefined") -> "falseundefined", [+!+[] + [+[]]] -> [1 + [0]] -> [1 + "0"] -> ["10"], wiec mamy "falseundefined"[10] -> 'i'
// (![]+[]) -> false, [!+[] + !+[]] -> [2], mamy "false"[2] -> l

console.log( (![]+[])[+[]]+(![]+[])[+!+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]] );

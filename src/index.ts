import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";
import { Sorter } from "./Sorter";

const numbersCollection = new NumbersCollection([-5, 3, 1]);
const charactersCollection = new CharactersCollection("apFgdfBeAcCexX");
const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-500);
linkedList.add(400);
linkedList.add(100);

numbersCollection.sort();
charactersCollection.sort();
linkedList.sort();

console.log(numbersCollection.data);
console.log(charactersCollection.data);
linkedList.print();

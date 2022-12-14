import { Compound } from "../src/Compound";
import { Atom } from "../src/Atom";

test("Arrays as atoms test", () => {
  const comp = new Compound({
    arr: [1, 2, 3, 4],
  });

  const arr = comp.arr;
  expect(arr instanceof Atom).toBe(true);
  const arrVal = arr.getValue();
  expect(arrVal).toEqual([1, 2, 3, 4]);
});

test("Mixed object test", () => {
  const comp = new Compound({
    a: 100,
    b: 102,
    c: { c1: 104 },
    d: () => 4,
    arr: [1, 2, 3, 4],
  });

  const a = comp.a;
  const b = comp.b;
  const c = comp.c;
  const c_c1 = comp.c.c1;
  const d = comp.d;
  const arr = comp.arr;

  // console.log(a);
  expect(a instanceof Atom).toBe(true);
  expect(b instanceof Atom).toBe(true);
  expect(c instanceof Compound).toBe(true);
  expect(c_c1 instanceof Atom).toBe(true);
  expect(d instanceof Atom).toBe(true);
  expect(arr instanceof Atom).toBe(true);

  const aVal = a.getValue();
  const bVal = b.getValue();
  const c_c1Val = c.c1.getValue();
  const dVal = d.getValue();
  const arrVal = arr.getValue();

  expect(aVal === 100).toBe(true);
  expect(bVal === 102).toBe(true);
  expect(c_c1Val === 104).toBe(true);
  expect(dVal instanceof Function).toBe(true);
  expect(dVal() === 4).toBe(true);
  expect(arrVal).toEqual([1, 2, 3, 4]);
});

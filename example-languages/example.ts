// This test file has been based on:
// https://github.com/sharkdp/bat/blob/master/tests/syntax-tests/source/TypeScript/example.ts

/* eslint-disable @typescript-eslint/no-unused-vars */

/*
 * Multiline comments
 * Multiline comments
 */

const letNumber = 10;
const constNumber = 20;

const bool: boolean = true;
const array: number[] = [1, 2, 3];
const pair: [string, number] = ['hello', 10];
const map: Map<string, boolean> = new Map();

for (let i = 0; i < array.length; i += 1) {
  console.log(array[i]);
}

if (bool) {
  console.log('True');
} else {
  console.group('False', {});
}

const str: string = 'Jake';
const templateStr: string = `Hello, ${str}!`;

interface SquareConfig {
  label: string;
  color?: string;
  width?: number;
  [propName: string]: any;
}

interface SearchFunc {
  (source: string, subString: string): boolean;
}

enum Color {
  Red,
  Green,
}

type Easing = 'ease-in' | 'ease-out' | 'ease-in-out';

type AnyProps = {
  one: boolean;
  2: '2' | Date;
  ['thr-ee']: Pick<SquareConfig, 'label' | 'color'>;
  onPress: (one: any, { nested }: Record<string, boolean>) => Promise<void>;
};

type GenericNumber<T> = {
  zeroValue: T;
  add: (x: T, y: T) => T;
};

class Greeter {
  private readonly greeting: string;

  constructor(message: string) {
    this.greeting = message;
  }

  greet() {
    return 'Hello, ' + this.greeting;
  }
}

const greeter = new Greeter('world');

class Animal {
  move(distanceInMeters: number = 0) {
    console.log(`Animal moved ${distanceInMeters}m.`);
  }
}

class Dog extends Animal {
  bark() {
    console.log('Woof! Woof!');
  }
}

const dog = new Dog();
dog.bark();
dog.move(10);
dog.bark();

class Point {
  x!: number;
  y!: number;
}

interface Point3d extends Point {
  z: number;
}

const point3d: Point3d = { x: 1, y: 2, z: 3 };

function add(x: number, y: number) {
  return x + y;
}

const myAdd = (x: number, y: number) => {
  return x + y;
};

(function () {
  console.log('IIFE');
})();

function identity<T>(arg: T): T {
  return arg;
}

const myIdentity: <T>(arg: T) => T = identity;

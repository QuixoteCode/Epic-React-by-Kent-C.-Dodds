class Dog {
  name: string
  age: number

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
}

class Cat {
  name: string
  color: string

  constructor(name: string, color: string) {
    this.name = name
    this.color = color
  }
}

function memoize<ArgTypes extends any[], ReturnValue>(
  cb: (...args: ArgTypes) => ReturnValue,
) {
  const cache: Record<string, ReturnValue> = {}

  return function memoized(...args: ArgTypes): ReturnValue {
    const key = JSON.stringify(args)
    if (cache[key] === undefined) {
      cache[key] = cb(...args)
    }
    return cache[key]
  }
}

const add = memoize((num1: number, num2: number) => num1 + num2)
const getDog = memoize((name: string, age: number) => new Dog(name, age))
const getCat = memoize((name: string, color: string) => new Cat(name, color))

console.log(add(1, 2))
console.log(add(1, 2))
console.log(getDog('Fido', 5))
console.log(getDog('Fido', 5))
console.log(getCat('Garfield', 'orange'))
console.log(getCat('Garfield', 'orange'))
function CounterLogger() {
  let count: number = 0;
  function logCount(): void {
    console.log(count);
  }
  function increment(): void {
    count++;
  }
  return {
    logCount,
    increment,
  };
}

const counter1 = CounterLogger();
counter1.increment();
counter1.logCount();

const counter2 = CounterLogger();
counter2.increment();
counter2.increment();
counter2.logCount();

const person: { name: string, age: number, hobbies: string[] } = {
  name: "Буба",
  age: 30,
  hobbies: ["Чилить", "Кодить"],
};

person.hobbies.push("Пыхать");
console.log(person.hobbies);
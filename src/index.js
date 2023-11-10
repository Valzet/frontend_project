function CounterLogger() {
  let count = 0;
  function logCount() {
    console.log(count);
  }
  function increment() {
    count++;
  }
  return {
    logCount,
    increment,
  };
}

const counter1 = new CounterLogger();
counter1.increment();
counter1.logCount();

const counter2 = new CounterLogger();
counter2.increment();
counter2.increment();
counter2.logCount();

const person = {
  name: "Буба",
  age: 30,
  hobbies: ["Чилить", "Кодить"],
};

person.hobbies.push("Пыхать");
console.log(person.hobbies);


import Expenses from "./components/Expenses/Expenses";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Car Insurance",
      amount: 300,
      date: new Date(),
    },
    {
      id: "e2",
      title: "Standing Desk",
      amount: 350,
      date: new Date(),
    },
    {
      id: "e3",
      title: "Car Service",
      amount: 50,
      date: new Date(),
    },
    {
      id: "e4",
      title: "Rent",
      amount: 230,
      date: new Date(),
    },
  ];

  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">Let's get started!</h1>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;

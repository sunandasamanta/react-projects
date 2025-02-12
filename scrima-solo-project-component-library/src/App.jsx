import Badges from "./components/Badges";

const App = () => {
  return (
    <main>
      <h1 className="text-3xl font-bold text-center text-gray-900">
        React Components Library
      </h1>
      <div className="flex">
        <Badges shade="#FEF3C7" textColor="#92400E" buttonText="Badge" />
        <Badges shade="#FEF3C7" textColor="#92400E" buttonText="Badge" />
        <Badges shade="#FEF3C7" textColor="#92400E" buttonText="Badge" />
        <Badges shade="#FEF3C7" textColor="#92400E" buttonText="Badge" />
        <Badges shade="#FEF3C7" textColor="#92400E" buttonText="Badge" />
        <Badges shade="#FEF3C7" textColor="#92400E" buttonText="Badge" />
      </div>
    </main>
  );
};

export default App;

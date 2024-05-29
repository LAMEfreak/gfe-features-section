import "./App.css";
import FeatureGrid from "./components/FeatureGrid";

function App() {
  return (
    <section className="flex flex-col py-12 px-3 md:py-16 md:px-4 xl:py-24 xl:px-20">
      <div className="text-center mb-12 md:mb-16 xl:px-40">
        <p className="text-base font-semibold text-indigo-700 mb-3">
          Premium abstract images
        </p>
        <h1 className="text-3xl md:text-5xl font-semibold text-neutral-900 mb-5">
          Easy access to top quality images
        </h1>
        <h2 className="text-lg md:text-xl text-neutral-600">
          In a world where storytelling constantly evolves, we lead with
          groundbreaking images designed for your presentation excellence.
        </h2>
      </div>
      <FeatureGrid />
    </section>
  );
}

export default App;

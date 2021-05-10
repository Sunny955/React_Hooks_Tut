import "./styles.css";
import Counter from "./Counter";
// import HooksObject from "./HooksObjects";
import HooksObject1 from "./HooksObject1";
import HooksArray from "./HooksArrays";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <Counter />
      {/* <HooksObject /> */}
      <HooksObject1 />
      <HooksArray />
    </div>
  );
}

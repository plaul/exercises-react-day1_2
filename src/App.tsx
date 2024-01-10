import { useState, useContext, CSSProperties } from "react";
import "./App.css";
import Propsdemo1 from "./exercises/propsdemo1";
import ListDemo from "./exercises/ListDemo";
import EventDemo1 from "./exercises/EventDemo";
import FormUncontrolled from "./exercises/FormUncontrolled";

import StateDemo1 from "./exercises/StateDemo1";
import StateDemo2 from "./exercises/StateDemo2";
import StateDemo3 from "./exercises/StateDemo3";
import LiftingState from "./exercises/LiftingState";
import { HeaderContext } from "./components/headerProvider";
import FetchDemo1 from "./exercises/FetchDemo";
import UseEffectDemo from "./exercises/UseEffectDemo";
import FetchWithHook from "./exercises/FetchWithHook";
import LiftingStateRemote from "./exercises/LiftingStateDB";

function App() {
  // const [selected, setSelected] = useState(<></>);

  const [selectedView, setSelectedView] = useState("info");
  const { subTitle, setSubTitle } = useContext(HeaderContext);

  function handleSelected(selected: string) {
    setSubTitle("Please provide a title");
    setSelectedView(selected);
  }
  const buttonStyle = {
    width: "100%",
  };
  const exerciseStyle: CSSProperties = {
    flex: 3,
    padding: 10,
    width: 800,
    textAlign: "left",
    borderLeft: "2px solid black",
  };

  const headerStyle: CSSProperties = {
    borderBottom: "solid 2px blue",
    marginBottom: 20,
  };

  const outerDivStyle: CSSProperties = {
    display: "flex",
    width: "100%",
    textAlign: "center",
    flexDirection: "column",
  };

  type ViewComponentsType = {
    [key: string]: JSX.Element;
  };
  const viewComponents: ViewComponentsType = {
    info: <p>All exercises for React day-1</p>,
    props1: <Propsdemo1 title="Props Demo1" />,
    listDemo1: <ListDemo title="List Demo" />,
    eventDemo1: <EventDemo1 title="Event Demo1" />,
    formUncontrolled: <FormUncontrolled title="Form Uncontrolled" />,
    stateDemo1: <StateDemo1 title="State Demo1" />,
    stateDemo2: <StateDemo2 title="State Demo2" />,
    stateDemo3: <StateDemo3 title="State Demo3" />,
    liftingState: <LiftingState title="Lifting State" />,
    liftingState2: <LiftingStateRemote title="Lifting State Remote" />,

    fetchDemo1: <FetchDemo1 title="Fetching API Data 1" />,
    fetchDemoHook: <FetchWithHook title="Fetching API Data With a Hook" />,
    useEffectDemo: <UseEffectDemo title="Demonstrating UseEffect" />,
  };

  return (
    <>
      <div style={outerDivStyle}>
        <div style={headerStyle}>
          <h2>React Exercises</h2>
          <h4 style={{ color: "darkolivegreen" }}>{subTitle}</h4>
        </div>
        <div style={{ display: "flex" }}>
          <div style={{ flex: 1, padding: 10 }}>
            <Buttons handleSelected={handleSelected} buttonStyle={buttonStyle} />
          </div>
          <div style={exerciseStyle}>
            <Selector>{viewComponents[selectedView]}</Selector>
          </div>
        </div>
      </div>
    </>
  );
}
type ButtonProps = {
  handleSelected: (selected: string) => void;
  buttonStyle: CSSProperties;
};
const Buttons = (props: ButtonProps) => {
  const { handleSelected, buttonStyle: btnStyle } = props;
  return (
    <>
      <button style={btnStyle} onClick={() => handleSelected("info")}>
        Info
      </button>
      <button style={btnStyle} onClick={() => handleSelected("props1")}>
        Props demo
      </button>
      <button style={btnStyle} onClick={() => handleSelected("listDemo1")}>
        List demo
      </button>

      <button style={btnStyle} onClick={() => handleSelected("eventDemo1")}>
        Event demo1 (ImageButtons)
      </button>

      <button style={btnStyle} onClick={() => handleSelected("formUncontrolled")}>
        Forms Uncontrolled
      </button>
      <button style={btnStyle} onClick={() => handleSelected("stateDemo1")}>
        State demo1 (Count)
      </button>
      <button style={btnStyle} onClick={() => handleSelected("stateDemo2")}>
        State demo2 (Update Object)
      </button>
      <button style={btnStyle} onClick={() => handleSelected("stateDemo3")}>
        State demo3 (Update Array)
      </button>
      <button style={btnStyle} onClick={() => handleSelected("useEffectDemo")}>
        UseEffect Demo
      </button>
      <button style={btnStyle} onClick={() => handleSelected("fetchDemo1")}>
        Fetch Demo
      </button>
      <button style={btnStyle} onClick={() => handleSelected("fetchDemoHook")}>
        Fetch With User Defined Hook
      </button>
      <button style={btnStyle} onClick={() => handleSelected("liftingState")}>
        Lifting State
      </button>
      <button style={btnStyle} onClick={() => handleSelected("liftingState2")}>
        Lifting State (remote)
      </button>
    </>
  );
};

type Props = { children: React.ReactNode };

function Selector({ children }: Props) {
  return (
    <>
      <div>{children}</div>
    </>
  );
}

export default App;

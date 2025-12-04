import { lazy, Suspense, useEffect, useState } from "react";
import AppContext from "./contexts/AppContext";
import useSum from "./utils/useSum";
import { useRef } from "react";

const MyComponent = lazy(() => import("./MyComponent"));
const SecondComponent = lazy(() => import("./SecondComponent"));

function App() {
  const [isShow, setIsShow] = useState(false);
  const inputRef = useRef();
  const bottomElementRef = useRef();

  const [usernameState, setUsernameState] = useState("hakan123");
  const { result } = useSum(5, 4);

  // component ilk render edildiğinde input'a focuslasın:
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  // component ilk render edildikten 1 saniye sonra en alttaki elemente scroll yap
  useEffect(() => {
    setTimeout(() => {
      bottomElementRef.current.scrollIntoView({ behavior: "smooth" });
    }, 1000);
  }, []);

  return (
    <AppContext.Provider value={{ username: usernameState, setUsernameState }}>
      {/* setUsernameState fonksiyonunu da alt compentlere provide ettik */}
      <button onClick={() => setIsShow(true)}> Show MyComponent </button>
      <Suspense fallback={<div> yükleniyor… </div>}>
        {isShow && <MyComponent />}
      </Suspense>
      <Suspense fallback={<div>yükleniyor... second</div>}>
        <SecondComponent />
      </Suspense>
      <span>change username which comes from context:</span>
      <div>
        <input
          ref={inputRef}
          value={usernameState}
          placeholder="type to change global state"
          style={{ width: 200 }}
          type="text"
          onChange={(e) => setUsernameState(e.target.value)}
        />
      </div>
      <div>
        custom hook'dan gelen sonuç: (useSum)
        <span>{result}</span>
      </div>
      <div style={{ marginTop: "900px" }} ref={bottomElementRef}>
        en alttaki div
      </div>
    </AppContext.Provider>
  );
}

export default App;

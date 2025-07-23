import { lazy, Suspense, useState } from 'react'
import AppContext from './contexts/AppContext'
import useSum from './utils/useSum'


const MyComponent = lazy(() => import('./MyComponent'))
const SecondComponent = lazy(() => import('./SecondComponent'))

function App() {
  const [isShow, setIsShow] = useState(false)

  const [usernameState, setUsernameState] = useState("hakan123")
  const { result } = useSum(5, 4)

  return (
    <AppContext.Provider value={{ username: usernameState, setUsernameState }}>
      {/* setUsernameState fonksiyonunu da alt compentlere provide ettik */}
      <button onClick={() => setIsShow(true)}> Show MyComponent </button>
      <Suspense fallback={<div> yükleniyor… </div>}>
        {isShow &&
          <MyComponent />
        }
      </Suspense>
      <Suspense fallback={<div>yükleniyor... second</div>}>
        <SecondComponent />
      </Suspense>
      <span>change username which comes from context:</span>
      <div>
        <input value={usernameState} placeholder='type to change global state' style={{ width: 200 }} type="text" onChange={(e) => setUsernameState(e.target.value)} />
      </div>
      <div>
        custom hook'dan gelen sonuç: (useSum)
        <span>{result}</span>
      </div>
    </AppContext.Provider>
  )

}

export default App
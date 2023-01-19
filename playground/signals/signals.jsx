import { render } from 'solid-js/web'
import { createSignal } from 'solid-js'

function HelloWorld() {
  const [count, setCount] = createSignal(0)

  setInterval(() => {
    setCount(count() + 1)
  }, 500)

  return (
    <div>
      <h1>Hello World! {count()}</h1>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  )
}

render(() => <HelloWorld />, document.getElementById('app'))

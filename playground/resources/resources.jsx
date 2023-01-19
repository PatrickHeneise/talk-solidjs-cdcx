import { createResource } from 'solid-js'
import { render } from 'solid-js/web'
import Issues from './Issues.jsx'

async function fetchData() {
  const response = await fetch(
    'https://api.github.com/orgs/cyprus-developer-community/issues?filter=all',
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`
      }
    }
  )
  return response.json()
}

function HelloWorld() {
  const [data] = createResource(fetchData)

  return (
    <div>
      <h1>Cyprus Developer Community!</h1>
      <ul>
        <Issues issues={data()} />
      </ul>
    </div>
  )
}

render(() => <HelloWorld />, document.getElementById('app'))

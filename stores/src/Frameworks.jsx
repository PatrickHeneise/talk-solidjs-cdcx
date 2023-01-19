import { For } from 'solid-js'
import { createStore } from 'solid-js/store'

const [frameworks, setFrameworks] = createStore([
  { id: 0, name: 'React.js', url: 'https://reactjs.org/', fans: 0 },
  { id: 1, name: 'Vue.js', url: 'https://vuejs.org/', fans: 0 },
  { id: 2, name: 'Angular', url: 'https://angular.io/', fans: 0 },
  { id: 3, name: 'Svelte', url: 'https://svelte.dev/', fans: 0 },
  { id: 4, name: 'Solid.js', url: 'https://solidjs.com/', fans: 0 }
])

function add(idx) {
  setFrameworks(idx(), 'fans', (f) => f + 1)
}

export default function () {
  return (
    <ul role="list" class="divide-y divide-gray-200">
      <For each={frameworks}>
        {(framework, idx) => (
          <li class="flex py-4">
            <div class="ml-3 text-left">
              <p class="text-sm font-medium text-gray-900">{framework.name}</p>
              <p class="text-sm text-gray-500">{framework.url}</p>
              <p class="order-1 text-5xl font-bold tracking-tight text-indigo-600">
                {framework.fans}
                <button
                  class="ml-4 items-center rounded-full border border-transparent bg-indigo-600 px-5 py-3 text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  onClick={() => add(idx)}
                >
                  +
                </button>
              </p>
            </div>
          </li>
        )}
      </For>
    </ul>
  )
}

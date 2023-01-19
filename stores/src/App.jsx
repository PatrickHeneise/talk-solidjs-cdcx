import Frameworks from './Frameworks.jsx'

function App() {
  return (
    <main
      class="min-h-full bg-cover bg-top sm:bg-top"
      style={{
        'background-image': 'url("/src/assets/DJI_0021.jpeg")'
      }}
    >
      <div class="mx-auto max-w-7xl py-16 px-6 text-center">
        <h1 class="mt-2 text-6xl font-bold tracking-tight text-black py-16">
          Framework Comparison
        </h1>
        <p class="mt-2 text-lg font-medium text-black text-opacity-50 p-16 rounded-lg bg-white bg-opacity-75">
          <Frameworks />
        </p>
      </div>
    </main>
  )
}

export default App

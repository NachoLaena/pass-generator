import { useState } from 'react'
import { PassGenProvider } from './context/PassGenContext'


function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='h-screen flex justify-center items-center'>
      <div className='flex p-4 flex-col items-center'>
        <h1 className='font-bold text-3xl'>Password Generator</h1>
        <p className='m-3'>What do you want to include?</p>
        <PassGenProvider></PassGenProvider>
        <p className='m-3'>Your password:</p>
      </div>
    </main>
  )
}

export default App

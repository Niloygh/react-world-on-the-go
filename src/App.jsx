import { Suspense } from 'react'
import './App.css'
import Countries from './assets/components/Countries/Countries'

function App() {


  const countriesPromise = fetch('https://openapi.programming-hero.com/api/all')
    .then(res => res.json())

  return (
    <>

    <Suspense fallback={<p>Nadir Vai Loading...</p>}>
      <Countries countriesPromise={countriesPromise}></Countries>
    </Suspense>


    </>
  )
}

export default App

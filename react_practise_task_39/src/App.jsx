
import { Suspense } from 'react';
import './App.css'
import Companies from './Companies';
import Set from './Set'
import Visible from './Visible'

const companies = async()=>{
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    return response.json();
  } catch (error) {
    console.error('Error fetching companies:', error);
  }
}

function App() {

  const companiesPromise = companies(); 


  return (
    <>
       <h1>Vite + React</h1>

       {/* Task 1  */}

       <Set></Set>

       {/* Task 2 */}
       <Visible></Visible>

        {/* Task 3 */}
        <Suspense fallback={<div>Loading companies...</div>}>
          <Companies companies={companiesPromise} />
        </Suspense>

    </>
  )
}

export default App

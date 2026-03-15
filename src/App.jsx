import { Suspense } from 'react'
import './App.css'
import Footer from './component/Footer'
import Navbar from './component/Navbar'

const loadTickets = () => fetch('/ticket.json')
.then((res) => res.json());

function App() {
  const ticketsPromise = loadTickets ();

  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>

      <section>
        <Suspense fallback={"Loading....⌛"}>
      <ticketsPromise promise={ticketsPromise}></ticketsPromise>
        </Suspense>
      </section>
      <section>
        <Footer></Footer>
      </section>
    </>
  )
}

export default App

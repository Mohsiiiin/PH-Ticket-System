import { Suspense } from 'react';
import './App.css'
import Banner from './component/Banner'
import Footer from './component/Footer'
import Navbar from './component/Navbar'
import TicketContainer from './component/TicketContainer';

const loadTickets = () => fetch('/ticket.json')
.then((res) => res.json());

function App() {
const ticketsPromise = loadTickets ();
console.log(ticketsPromise)
  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>
      
      <section>
        <Suspense fallback={"...⌛Loading⌛..."}>
      <TicketContainer Promise={ticketsPromise} ></TicketContainer>
        </Suspense>
      </section>

      <section>
        <Footer></Footer>
      </section>
    </>
  )
}

export default App

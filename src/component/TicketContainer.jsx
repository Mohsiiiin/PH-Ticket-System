import React, { use, useState } from 'react';
import Banner from './Banner';
import TicketCard from './cards/TicketCard';
import TicketStatusCard from './cards/TicketStatusCard';

const TicketContainer = ({Promise}) => {
    const data = use(Promise);
    const [tickets, setTickets]=useState(data);
    const [ticketStatus, setTicketStatus] = useState([]);
    const [resolvedTask, setResolvedTask] = useState([]);

      const handleResolved=(ticket)=>{
    const newResolveTask=[...resolvedTask, ticket];
    setResolvedTask(newResolveTask);

      const remaining = ticketStatus.filter(item=> item.title !== ticket.title);
    setTicketStatus(remaining);

    const remainingTicket = tickets.filter((item)=> item.id !== ticket.id )
    setTickets(remainingTicket)
    };

    const handleTicket=(tickets)=>{
    const newTicketStatus= [...ticketStatus, tickets];
    setTicketStatus(newTicketStatus);
    };

    return (
        <div>
            <Banner ticketsStatusTotal={ticketStatus.length} ticketsTotal={tickets.length}
            resolveTotal={resolvedTask.length}></Banner>

        <section className='w-11/12 mx-auto py-10 grid grid-cols-1 lg:grid-cols-12 gap-5'>

        <div className='lg:col-span-7'>
            <h2 className='font-bold text-3xl'>Customer Tickets</h2>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
            {
                tickets.map(tickets => 
                <TicketCard handleTicket={handleTicket} key={tickets.id} tickets={tickets}></TicketCard>)
            }
        </div>
        </div>

        <div className='lg:col-span-5 space-y-5'>
            <h2 className='font-bold text-3xl'>Task Status</h2>
            <div className='shadow p-10 space-y-5 text-center'>
                {
                    ticketStatus.map(tickets => <TicketStatusCard handleResolved={handleResolved} key={tickets.id} tickets={tickets}></TicketStatusCard>)
                }
            </div>

            <h2 className='font-bold text-3xl'>Resolved Task</h2>
            <div className='shadow p-10 space-y-5 text-center'>{resolvedTask.map(tickets=><h3 className='bg-green-400 rounded px-10 py-2'>{tickets.title}</h3>)}</div>

        </div>

        </section>

        </div>



    );
};

export default TicketContainer;
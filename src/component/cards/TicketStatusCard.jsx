import React from 'react';

const TicketStatusCard = ({tickets, handleResolved}) => {
    return (
         <div className='rounded-xl p-5 shadow hover:shadow-lg'>
            <h3 className='text-xl font-bold mb-2'>{tickets.title}</h3>
            <button onClick={()=> handleResolved(tickets)} className='bg-green-500 rounded px-10 py-2'><a href="#">Complete</a></button>
        </div>
    );
};

export default TicketStatusCard;
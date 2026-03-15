import React from 'react';

const TicketCard = ({tickets, handleTicket}) => {
    return (
        <div onClick={()=> handleTicket(tickets)} className="p-5 rounded-xl shadow-xl relative space-y-3">
            <div className='flex justify-between'>
                <h3 className='font-bold text-xl'>{tickets.title}</h3>  

                <button className={`px-4 py-1 rounded-full ${
                tickets.status === "Open" ? "bg-green-500 text-white" :
                tickets.status === "In Progress" ? "bg-yellow-500 text-white" :
                tickets.status === "Resolved" ? "bg-blue-500 text-white" :
                "bg-gray-200 text-black"
                }`}>{tickets.status}</button>
                
            </div>
            
            <p className='text-gray-500'>{tickets.description}</p>

            <div className='flex gap-4 justify-between'>
                <h6>{tickets.id}</h6>

                <h6 className={` font-semibold ${
                tickets.priority === "Low" ? "text-green-500" :
                tickets.priority === "Medium" ? "text-yellow-500" :
                tickets.priority === "High" ? "text-red-500" :
                tickets.priority === "Critical" ? "text-purple-500" :
                "text-gray-400"
                }`}> {tickets.priority}</h6>

                <h6 className='text-gray-500'>{tickets.customer}</h6>
                <h6>{tickets.createdAt}</h6>
            </div>
        </div>
    );
};

export default TicketCard;
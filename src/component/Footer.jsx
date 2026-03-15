import React from 'react';

const Footer = () => {
    return (
         <div className='bg-black text-white' >
            <section className='bg-black text-white px-6 py-10 flex flex-col md:flex-row gap-10 md:gap-20 justify-between'>
                <div className='space-y-3'>
                <h3 className='font-semibold text-lg'>CS — Ticket System</h3>
                <p className='w-[350px]'>Our Support Ticket System allows users to easily submit issues and track the progress of their requests. Customers can create tickets, describe their problems, and receive updates from our support team.Our team works to resolve every ticket quickly and efficiently, ensuring that each user receives reliable and helpful support.</p>
            </div>

            <div className='space-y-3'>
                <h3 className='font-semibold text-lg'>Company</h3>
                <ul className='space-y-2'>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Our Mission</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>

            <div className='space-y-3'>
                <h3 className='font-semibold text-lg'>Services</h3>
               <ul className='space-y-2'>
                <li><a href="">Products</a></li>
                <li><a href="">Customer Stories</a></li>
                <li><a href="">Download Apps</a></li>
               </ul>
            </div>

            <div className='space-y-3'>
            <h3 className='font-semibold text-lg'>Information</h3>
            <ul className='space-y-2'>
                <li><a href="">Privacy Policy</a></li>
                <li><a href="">Terms & Conditions </a></li>
                <li><a href="">Join Us</a></li>
               </ul>
            </div>
            </section>
            
            <div>
                <span className=' flex justify-center text-center pb-6'>© 2025 CS — Ticket System. All rights reserved.</span>
            </div>

        </div>
        
    );
};

export default Footer;
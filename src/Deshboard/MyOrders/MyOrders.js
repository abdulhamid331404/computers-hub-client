import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';

const MyOrders = () => {
  const { user } = useContext(AuthContext);

  const url = `https://final-project-server-abdulhamid331404.vercel.app/bookings?email=${user?.email}`;

  const { data: bookings = [] } = useQuery({
    queryKey: ['bookings', user?.email],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    }
  })

  return (
    <div>
      <h1 className='text-2xl font-bold text-left mb-10'>My Orders</h1>

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Phone Number</th>
              <th>Meet Location</th>
            </tr>
          </thead>
          <tbody>
            {
              bookings.map((booking, i) => <>
                <tr>
                  <th>{i + 1}</th>
                  <td>{booking.name.slice(0, 50)}</td>
                  <td>{booking.phone}</td>
                  <td>{booking.location}</td>

                </tr>
              </>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
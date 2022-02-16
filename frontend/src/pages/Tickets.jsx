import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTickets, reset } from '../features/tickets/ticketSlice';
import Spinner from '../components/Spinner';
import BackButtons from '../components/BackButtons';
import TicketItem from '../components/TicketItem';

const Tickets = () => {
  const dispatch = useDispatch();

  const { tickets, isLoading, isSuccess } = useSelector(
    (state) => state.ticket
  );

  useEffect(() => {
    dispatch(getTickets());

    return () => {
      if (isSuccess) {
        dispatch(reset());
      }
    };
  }, [dispatch, isSuccess]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <BackButtons url='/' />
      <h1>Tickets</h1>
      <div className='tickets'>
        <div className='ticket-headings'>
          <div>Date</div>
          <div>Product</div>
          <div>Status</div>
          <div></div>
        </div>
        {tickets.map((ticket) => {
          return <TicketItem key={ticket._id} ticket={ticket} />;
        })}
      </div>
    </>
  );
};

export default Tickets;

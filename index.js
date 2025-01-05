import { useState } from "react";
import BookingForm from "../components/BookingForm";
import Availability from "../components/Availability";
import BookingSummary from "../components/BookingSummary";

export default function Home() {
  const [selectedDate, setSelectedDate] = useState("");
  const [bookingDetails, setBookingDetails] = useState(null);

  const handleBooking = (details) => {
    setBookingDetails(details);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <div className="max-w-4xl w-full bg-white rounded-lg shadow-lg p-6">
        {/* <h1 className="text-2xl font-bold text-gray-800 text-center  align-middle mb-6">
          Restaurant Table Booking
        </h1> */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            {/* <h2 className="text-xl font-semibold text-gray-700 mb-4">Book a Table</h2> */}
            <BookingForm onSubmit={handleBooking} />
          </div>
          <div>
            {/* <h2 className="text-xl font-semibold text-gray-700 mb-4">Available Slots</h2> */}
            <Availability selectedDate={selectedDate} />
          </div>
        </div>
        {bookingDetails && (
          <div className="mt-6">
            <BookingSummary details={bookingDetails} />
          </div>
        )}
      </div>
    </div>
  );
}

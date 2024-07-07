const Rooms = [
    {
        Availabel_Rooms : "2",
        Amenities : "LED TV, AC, 2BedRoom",
        Price : "$2000"
    }
];

const RoomBooking = [
    {
        Customer_Name : "Ram",
        Date : "12/05/2024",
        Start_Time: "10.00am",
        End_Time : "9.00pm",
        RoomId: 201,
    },
    {
        Customer_Name : "Raja",
        Date : "13/05/2024",
        Start_Time: "11.00am",
        End_Time : "9.00pm",
        RoomId: 202,
    },
    {
        Customer_Name : "Naveen",
        Date : "15/05/2024",
        Start_Time: "11.30am",
        End_Time : "9.00pm",
        RoomId: 203,
    }
];
 
const RoomBookingDetails = [
    {
        Room_Name: "08",
        Booked_Status: "10.00am",
        Customer_Name: "Ram",
        Date : "12/05/2024",
        Start_Time: "10.00am",
        End_Time : "9.00pm",
    },
    {
        Room_Name: "09",
        Booked_Status: "11.00am",
        Customer_Name: "Raja",
        Date : "13/05/2024",
        Start_Time: "10.30am",
        End_Time : "9.00pm",
    },
    {
        Room_Name: "10",
        Booked_Status: "11.30am",
        Customer_Name: "Naveen",
        Date : "15/05/2024",
        Start_Time: "11.30am",
        End_Time : "9.00pm",
    },
];

const CustomerBookingDetails = [
    {
        Customer_Name: "Ram",
        Room_Name: "08",
        Date : "12/05/2024",
        Start_Time: "10.00am",
        End_Time : "9.00pm",
    },
    {
        Customer_Name: "Raja",
        Room_Name: "09",
        Date : "13/05/2024",
        Start_Time: "10.30am",
        End_Time : "9.00pm",
    },
    {
        Customer_Name: "Naveen",
        Room_Name: "10",
        Date : "15/05/2024",
        Start_Time: "11.30am",
        End_Time : "9.00pm",
    },
];

const BookingHistory = [
    {
        Customer_Name: "Ram",
        Room_Name: "08",
        Date : "12/05/2024",
        Start_Time: "10.00am",
        End_Time : "9.00pm",
        BookingId : Date.now().toString(),
        Booking_Date: "12/05/2024",
        Booking_Status: "10.00am"
    },
    {
        Customer_Name: "Raja",
        Room_Name: "09",
        Date : "13/05/2024",
        Start_Time: "10.30am",
        End_Time : "9.00pm",
        BookingId : Date.now().toString(),
        Booking_Date: "13/05/2024",
        Booking_Status: "10.30am"
    },
   
];

export { Rooms, RoomBooking, RoomBookingDetails, CustomerBookingDetails ,BookingHistory };

const seats = document.getElementsByClassName('seat-btn');
const seatTableBody = document.getElementById('seat-table-body');
// const seatTable = document.getElementById('seat-table');
const couponBtn = document.getElementById('coupon-btn');
const New24 = document.getElementById('new24');
const couple40 = document.getElementById('couple40');
const availableSeat = document.getElementById('available-seat');
const totalPrice = document.getElementById('total-price-seat');
const grandPrice = document.getElementById('grand-price');
// const correctCoupon = document.getElementById('applied-coupon');
let selectedSeats = [];
const seatPrice = 550;
let count = 0;
let price;
function buyTickets() {
    const ticketBooking = document.getElementById('ticket-booking');
    ticketBooking.classList.remove('hidden');
}

// click seat button
for (let i = 0; i < seats.length; i++) {
    seats[i].onclick = function () {
        const seat = this.innerText;
        if(selectedSeats.includes(seat))
        {

            return;
        }
        this.classList.remove('bg-slate-300');
        this.classList.add('bg-green-400');
        this.disabled = true;
        available = parseInt(availableSeat.innerText);
        availableSeat.innerText = available - 1;
        count++;
        selectedSeats.push(seat);
        const tr = document.createElement('tr');
        // td-seat
        const tdSeat = document.createElement('td');
        // td-economy
        const tdClass = document.createElement('td');
        // td Price
        const tdPrice = document.createElement('td');


        tr.appendChild(tdSeat);
        tr.appendChild(tdClass);
        tr.appendChild(tdPrice);
        tdSeat.innerText = seat;
        tdClass.innerText = 'Economy';
        tdPrice.innerText = seatPrice;
        seatTableBody.appendChild(tr);
        price = seatPrice * count;
        totalPrice.innerText = price;
        console.log(seatTableBody);
        // seatName,innerText = seat;
        if (selectedSeats.length === 4) {
            couponBtn.disabled = false;
        }
    }
}
// function applyCoupon() {
//     const inputText = document.getElementById('text-input');
//     const message =  document.getElementById('messages');
//     const couponCode = inputText.value.trim();
//     // const newSingle = New24.innerText;
//     // const couple = couple40.innerText;
//     if ('NEW24' === couponCode || 'Couple40' === couponCode) {
//         message.innerText = 'Coupon Applied ✅';
//         message.classList.add('text-green-500');
//     }
//     else {
//         message.innerText = "Didn't match, try again ❌";
//         message.classList.add('text-red-500');
//     }
// }
function applyCoupon() {
    const inputText = document.getElementById('text-input');
    const message = document.getElementById('messages');

    const couponCode = inputText.value.trim().toUpperCase();
    const total = parseInt(totalPrice.innerText);
    grandPrice.innerText = total;
    let discount = 0;
    if(couponCode === 'NEW24')
    {
        discount = total * 0.15; //15% discount
    }
    else if(couponCode === 'COUPLE40')
    {
        discount = total * 0.20; //20% discount
    }
    else
    {
        message.innerText = "Didn't match, try again ❌";
        message.classList.add('text-red-500');
        return;
    }
    const grandTotal = total - discount;
    grandPrice.innerText = grandTotal;

    message.innerText = 'Applied ✅';
    message.classList.add('text-green-500');
    console.log('Discount',discount);
    
}



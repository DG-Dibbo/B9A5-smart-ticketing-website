
const seats = document.getElementsByClassName('seat-btn');
const seatTableBody = document.getElementById('seat-table-body');
const couponBtn = document.getElementById('coupon-btn');
const New24 = document.getElementById('new24');
const couple40 = document.getElementById('couple40');
const availableSeat = document.getElementById('available-seat');
const totalPrice = document.getElementById('total-price-seat');
const grandPrice = document.getElementById('grand-price');
const totalSeat = document.getElementById('total-seat');
const inputPhone = document.getElementById('input-phone');
const inputName = document.getElementById('input-name');
const inputEmail = document.getElementById('input-email');
const nextBtn = document.getElementById('next-btn');

let selectedSeats = [];
const seatPrice = 550;
let isCouponApplied = false;
let count = 0;
let price;
const bdPhoneRegex = /^01[3-9][0-9]{8}$/;

function buyTickets() {
    const ticketBooking = document.getElementById('ticket-booking');
    ticketBooking.classList.remove('hidden');
}
function checkNextButton() {
    const phone = inputPhone.value.trim();
    if (selectedSeats.length > 0 && bdPhoneRegex.test(phone)) {
        nextBtn.disabled = false;
    }
    else {
        nextBtn.disabled = true;
    }
}
nextBtn.addEventListener('click', function () {
    // clear input value
    inputPhone.value = '';
    inputName.value = '';
    inputEmail.value = '';
    // again disable next button
    nextBtn.disabled = true;
})
inputPhone.addEventListener('input', checkNextButton);

// click seat button
for (let i = 0; i < seats.length; i++) {
    seats[i].onclick = function () {
        const seat = this.innerText;
        if (selectedSeats.includes(seat)) {

            return;
        }
        this.classList.remove('bg-slate-300');
        this.classList.add('bg-green-400');
        this.disabled = true;

        // available seat
        available = parseInt(availableSeat.innerText);
        availableSeat.innerText = available - 1;


        count++;
        totalSeat.innerText = count;

        selectedSeats.push(seat);

        // table create and set data
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

        // set price
        price = seatPrice * count;
        totalPrice.innerText = price;
        console.log(seatTableBody);
        // seatName,innerText = seat;

        if (selectedSeats.length === 4) {
            couponBtn.disabled = false;
        }
        checkNextButton()
    }
}
function applyCoupon() {
    const inputText = document.getElementById('text-input');
    const message = document.getElementById('messages');

    const couponCode = inputText.value.trim();
    const total = parseInt(totalPrice.innerText);
    grandPrice.innerText = total;
    let discount = 0;
    if (couponCode === 'NEW24') {
        discount = total * 0.15; //15% discount
        message.innerText = 'Applied ✅';
        message.classList.remove('text-red-500');
        message.classList.add('text-green-500');
    }
    else if (couponCode === 'Couple40') {
        discount = total * 0.20; //20% discount
        message.innerText = 'Applied ✅';
        message.classList.remove('text-red-500');
        message.classList.add('text-green-500');
    }
    else {
        message.innerText = "Didn't match, try again ❌";
        message.classList.add('text-red-500');
        return;
    }
    const grandTotal = total - discount;
    grandPrice.innerText = grandTotal;
    isCouponApplied = true;
    couponBtn.disabled = true;
    console.log('Discount', discount);

}





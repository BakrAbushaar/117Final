// Calendar functionality for Noir Chocolat booking system

class BookingCalendar {
    constructor() {
        this.currentDate = new Date();
        this.selectedDate = null;
        this.monthYearElement = document.getElementById('monthYear');
        this.calendarDaysElement = document.getElementById('calendarDays');
        this.selectedDateDisplay = document.getElementById('selectedDateDisplay');
        this.prevMonthButton = document.getElementById('prevMonth');
        this.nextMonthButton = document.getElementById('nextMonth');
        
        this.init();
    }
    
    init() {
        this.renderCalendar();
        this.attachEventListeners();
    }
    
    attachEventListeners() {
        this.prevMonthButton.addEventListener('click', () => {
            this.currentDate.setMonth(this.currentDate.getMonth() - 1);
            this.renderCalendar();
        });
        
        this.nextMonthButton.addEventListener('click', () => {
            this.currentDate.setMonth(this.currentDate.getMonth() + 1);
            this.renderCalendar();
        });
    }
    
    renderCalendar() {
        const year = this.currentDate.getFullYear();
        const month = this.currentDate.getMonth();
        
        // Update month/year display
        const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
                          'July', 'August', 'September', 'October', 'November', 'December'];
        this.monthYearElement.textContent = `${monthNames[month]} ${year}`;
        
        // Get first day of month and number of days
        const firstDay = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const daysInPrevMonth = new Date(year, month, 0).getDate();
        
        // Clear calendar
        this.calendarDaysElement.innerHTML = '';
        
        // Add previous month's trailing days
        for (let i = firstDay - 1; i >= 0; i--) {
            const day = daysInPrevMonth - i;
            this.createDayElement(day, true, false);
        }
        
        // Add current month's days
        const today = new Date();
        for (let day = 1; day <= daysInMonth; day++) {
            const date = new Date(year, month, day);
            const isToday = date.toDateString() === today.toDateString();
            const isPast = date < today && !isToday;
            const isSelected = this.selectedDate && date.toDateString() === this.selectedDate.toDateString();
            
            this.createDayElement(day, false, isPast, isToday, isSelected, date);
        }
        
        // Add next month's leading days
        const totalCells = this.calendarDaysElement.children.length;
        const remainingCells = 42 - totalCells; // 6 rows x 7 days
        for (let day = 1; day <= remainingCells; day++) {
            this.createDayElement(day, true, false);
        }
    }
    
    createDayElement(day, isOtherMonth, isPast, isToday = false, isSelected = false, date = null) {
        const dayElement = document.createElement('div');
        dayElement.className = 'calendar-day';
        dayElement.textContent = day;
        
        if (isOtherMonth) {
            dayElement.classList.add('other-month');
        }
        
        if (isPast) {
            dayElement.classList.add('disabled');
        }
        
        if (isToday) {
            dayElement.classList.add('today');
        }
        
        if (isSelected) {
            dayElement.classList.add('selected');
        }
        
        // Add click handler for valid dates
        if (!isOtherMonth && !isPast && date) {
            dayElement.addEventListener('click', () => {
                this.selectDate(date);
            });
            dayElement.setAttribute('role', 'button');
            dayElement.setAttribute('tabindex', '0');
            dayElement.setAttribute('aria-label', `Select ${date.toLocaleDateString()}`);
            
            // Keyboard accessibility
            dayElement.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    this.selectDate(date);
                }
            });
        }
        
        this.calendarDaysElement.appendChild(dayElement);
    }
    
    selectDate(date) {
        this.selectedDate = date;
        this.renderCalendar();
        this.updateSelectedDateDisplay();
    }
    
    updateSelectedDateDisplay() {
        if (this.selectedDate) {
            const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            this.selectedDateDisplay.textContent = `Selected: ${this.selectedDate.toLocaleDateString('en-US', options)}`;
            this.selectedDateDisplay.style.display = 'flex';
        } else {
            this.selectedDateDisplay.textContent = 'Please select a date';
            this.selectedDateDisplay.style.display = 'flex';
        }
    }
}

// Initialize calendar when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const calendar = new BookingCalendar();
    
    // Handle form submission
    const bookingForm = document.querySelector('.booking-form');
    if (bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            if (!calendar.selectedDate) {
                alert('Please select a date for your booking.');
                return;
            }
            
            // In a real application, this would send data to a server
            const formData = new FormData(bookingForm);
            const data = {
                name: formData.get('name'),
                email: formData.get('email'),
                phone: formData.get('phone'),
                experience: formData.get('experience'),
                notes: formData.get('notes'),
                date: calendar.selectedDate.toLocaleDateString()
            };
            
            console.log('Booking submitted:', data);
            alert(`Thank you for your booking request!\n\nDate: ${data.date}\nWe'll contact you at ${data.email} to confirm your reservation.`);
            
            // Reset form
            bookingForm.reset();
            calendar.selectedDate = null;
            calendar.updateSelectedDateDisplay();
        });
    }
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});


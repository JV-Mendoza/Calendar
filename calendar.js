document.addEventListener('DOMContentLoaded', function() {
            const calendar2026 = {
                january: {
                    startDay: 0,
                    days: 31,
                    firstDate: 4
                },
                february: {
                    startDay: 0,
                    days: 28,
                    firstDate: 8
                },
                march: {
                    startDay: 0,
                    days: 31,
                    firstDate: 8
                },
                april: {
                    startDay: 0,
                    days: 30,
                    firstDate: 5
                },
                may: {
                    startDay: 0,
                    days: 31,
                    firstDate: 3
                },
                june: {
                    startDay: 0,
                    days: 30,
                    firstDate: 1
                },
                july: {
                    startDay: 0,
                    days: 31,
                    firstDate: 5
                },
                august: {
                    startDay: 0,
                    days: 31,
                    firstDate: 2
                },
                september: {
                    startDay: 0,
                    days: 30,
                    firstDate: 6
                },
                october: {
                    startDay: 0,
                    days: 31,
                    firstDate: 4
                },
                november: {
                    startDay: 0,
                    days: 30,
                    firstDate: 1
                },
                december: {
                    startDay: 0,
                    days: 31,
                    firstDate: 1
                }
            };

            const weekdays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

            for (const month in calendar2026) {
                const monthData = calendar2026[month];
                const monthElement = document.getElementById(month);
                
                const monthName = document.createElement('div');
                monthName.className = 'month-name';
                monthName.textContent = month.toUpperCase();
                monthElement.appendChild(monthName);
                
                const weekdaysRow = document.createElement('div');
                weekdaysRow.className = 'weekdays';
                weekdays.forEach(day => {
                    const weekdayElement = document.createElement('div');
                    weekdayElement.className = 'weekday';
                    weekdayElement.textContent = day;
                    weekdaysRow.appendChild(weekdayElement);
                });
                monthElement.appendChild(weekdaysRow);
                
                const daysContainer = document.createElement('div');
                daysContainer.className = 'days';
                
                let currentDay = 1;
                let dateCounter = monthData.firstDate;
                
                for (let week = 0; week < 6; week++) {
                    for (let day = 0; day < 7; day++) {
                        const dayElement = document.createElement('div');
                        dayElement.className = 'day';
                        
                        if (day === 0 || day === 6) {
                            dayElement.classList.add('weekend');
                        }
                        
                        if ((week === 0 && day < monthData.startDay && dateCounter > 1) || 
                            currentDay > monthData.days) {
                            dayElement.classList.add('empty');
                        } else {
                            if (dateCounter <= monthData.days + 7 && dateCounter > 0) {
                                dayElement.textContent = dateCounter;
                                dateCounter++;
                            }
                        }
                        
                        daysContainer.appendChild(dayElement);
                    }
                }
                
                monthElement.appendChild(daysContainer);
            }
        });
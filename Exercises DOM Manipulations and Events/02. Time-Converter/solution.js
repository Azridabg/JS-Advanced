function attachEventsListeners() {
   
        let dayElement = document.getElementById('days');
        let hoursElement = document.getElementById('hours');
        let minutesElement = document.getElementById('minutes');
        let secondsElement = document.getElementById('seconds');
    
        let dayButtonElement = document.getElementById('daysBtn');
        let hoursButtonElement = document.getElementById('hoursBtn');
        let minutesButtonElement = document.getElementById('minutesBtn');
        let secondsButtonElement = document.getElementById('secondsBtn');
    
        dayButtonElement.addEventListener('click', (e) => {
            hoursElement.value = Number(dayElement.value) * 24;
            minutesElement.value = hoursElement.value * 60;
            secondsElement.value = minutesElement.value * 60;
        });
    
        hoursButtonElement.addEventListener('click', () => {
            dayElement.value = Number(hoursElement.value / 24)
            minutesElement.value = hoursElement.value * 60;
            secondsElement.value = minutesElement.value * 60;
        });
    
        minutesButtonElement.addEventListener('click', () => {
            hoursElement.value = minutesElement.value / 60;
            dayElement.value = hoursElement.value / 24;
            secondsElement.value = minutesElement.value * 60;
        });
    
        secondsButtonElement.addEventListener('click', () => {
            minutesElement.value = secondsElement.value / 60;
            hoursElement.value = minutesElement.value / 60;
            dayElement.value = hoursElement.value / 24;
        });
    
    }

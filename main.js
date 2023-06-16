function updateClock() {
      const currentTime = new Date();

      const total_metric_seconds = 1.15740740741 * (currentTime.getHours()*3600 + currentTime.getMinutes()*60 + currentTime.getSeconds());

      // Convert current time to metric format from standard time
      const metricHours = Math.floor(total_metric_seconds/10000);
      const metricMinutes = Math.floor((total_metric_seconds - metricHours*10000) / 100);
      const metricSeconds = Math.floor((total_metric_seconds - metricHours*10000 - metricMinutes*100));

      // Update the clock display
      document.getElementById('hours').textContent = metricHours.toString().padStart(2, '0');
      document.getElementById('minutes').textContent = metricMinutes.toString().padStart(2, '0');
      document.getElementById('seconds').textContent = metricSeconds.toString().padStart(2, '0');



      //calendar
      //total seconds passed till now
      // Get the current date and time
      const now = new Date();

      // Get the current year
      const currentYear = now.getFullYear();

      // Create a new Date object for the first day of the current year
      const startOfYear = new Date(currentYear, 0, 1);

      // Calculate the time difference in milliseconds between the current date and the start of the year
      const timeDiff = now.getTime() - startOfYear.getTime();

      // Convert milliseconds to seconds
      const secondsPassed = Math.floor(timeDiff / 1000);

      const metricSecondsPassed = 1.15740740741 * secondsPassed;

      const metricMinutesPassed = metricSecondsPassed/100;
      const metricHoursPassed = metricMinutesPassed/100;
      const metricDaysPassed = metricHoursPassed/10;

      const currentMonth = Math.floor((metricDaysPassed / 36.5))+1;
      const monthLength = currentMonth % 2 ==0 ? 37 : 36;

      // Update the calendar display
      document.getElementById('month').textContent = `Month ${currentMonth} (${monthLength} days)`;
      document.getElementById('days').textContent = metricDaysPassed.toString().padStart(2, '0');

    }

    // Update the clock immediately and then every second
    updateClock();
    setInterval(updateClock, 864.80);

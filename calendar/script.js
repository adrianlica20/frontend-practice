const addEventBtn = document.getElementById('add-event-btn-outer');
const addEventBtnModal = document.getElementById('add-event-btn-modal');
const toggleBtn = document.getElementById('toggle-events-btn');
const eventsSidebar = document.getElementById('events-sidebar');
const calendarView = document.getElementById('calendar-view-container');
const currentTaskItems = document.querySelectorAll('.current-date-event-item');
const checkIcons = document.querySelectorAll('.check-icon');
const overlay = document.getElementById('overlay');
const modal = document.getElementById('add-new-event-modal');
const currentDateEventsList = document.getElementById(
  'current-date-events-list'
);

currentTaskItems.forEach((taskItem, idx) => {
  taskItem.addEventListener('click', () => {
    if (checkIcons[idx].style.strokeOpacity === '1') {
      checkIcons[idx].style.strokeOpacity = '0';
      checkIcons[idx].style.backgroundColor = 'transparent';
    } else {
      checkIcons[idx].style.strokeOpacity = '1';
      checkIcons[idx].style.backgroundColor = '#1b9e18';
    }
  });
});

let isSidebarOpen = true;

toggleBtn.addEventListener('click', () => {
  eventsSidebar.style.transition = 'translate 100ms';
  if (isSidebarOpen) {
    toggleBtn.style.rotate = '180deg';
    toggleBtn.style.translate = '18px 0';
    toggleBtn.style.outline = 'none';
    eventsSidebar.style.translate = '80% 0';
    isSidebarOpen = false;
  } else {
    toggleBtn.style.rotate = '0deg';
    toggleBtn.style.translate = '0 0';
    eventsSidebar.style.translate = '0 0';
    isSidebarOpen = true;
  }
});

let isModalClosed = true;

addEventBtn.addEventListener('click', () => {
  if (isModalClosed) {
    overlay.style.display = 'block';
    modal.showModal();
    isModalClosed = false;
  } else {
    overlay.style.display = 'none';
    modal.close();
    isModalClosed = true;
  }
});

addEventBtnModal.addEventListener('click', () => {
  let newEventInputValue = document.getElementById('add-new-event-input').value;
  let newEventTimeValue = document.querySelector('[aria-event-time]').value;

  const newEventLi = document.createElement('li');
  newEventLi.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" class="check-icon" width="22" height="22"
            viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" fill="none"
            stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M5 12l5 5l10 -10" />
      </svg>
      <div class="text-and-time-wrapper">
            <p data-event-text class="current-date-event-text">${newEventInputValue}</p>
            <span data-event-time class="current-date-event-time">${newEventTimeValue}</span>
      </div>
`;
  newEventLi.className = 'current-date-event-item';

  currentDateEventsList.append(newEventLi);

  if (!isModalClosed) {
    overlay.style.display = 'none';
    modal.close();
    isModalClosed = true;
  } else {
    overlay.style.display = 'block';
    modal.showModal();
    isModalClosed = false;
  }
});

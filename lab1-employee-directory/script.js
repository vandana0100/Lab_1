// script.js
// Wait until the page fully loads (images/fonts etc.) as requested
window.addEventListener('load', () => {
  // insert current year into footer
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // path to external JSON (employees.json)
  const dataUrl = 'employees.json';

  // fetch JSON and inject into a new section element inside <main>
  fetch(dataUrl)
    .then(response => {
      if (!response.ok) throw new Error('Failed to fetch employee data: ' + response.status);
      return response.json();
    })
    .then(data => {
      // create and populate section
      const section = document.createElement('section');
      section.id = 'employee-section';
      section.setAttribute('aria-label', 'Employees by department');

      // data is expected as { "Department Name": ["Name A", "Name B"], ... }
      Object.keys(data).forEach(department => {
        const deptCard = document.createElement('div');
        deptCard.className = 'department-card';

        const h4 = document.createElement('h4');
        h4.textContent = department;
        deptCard.appendChild(h4);

        const ul = document.createElement('ul');
        data[department].forEach(personName => {
          const li = document.createElement('li');
          li.textContent = personName;
          ul.appendChild(li);
        });

        deptCard.appendChild(ul);
        section.appendChild(deptCard);
      });

      const main = document.getElementById('main-content');
      main.appendChild(section);
    })
    .catch(err => {
      console.error(err);
      const main = document.getElementById('main-content');
      const p = document.createElement('p');
      p.className = 'error';
      p.textContent = 'Employee list could not be loaded. See browser console for details.';
      main.appendChild(p);
    });
});

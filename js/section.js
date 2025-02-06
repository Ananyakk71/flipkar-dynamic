export function loadTopSection(data) {
    const sectionContainer = document.querySelector('.section-container');
    data.sections.forEach(item => {
        const section = document.createElement('span');
              section.className = "section"
              section.textContent = item.name;
              if (item.arrow) {
                section.innerHTML += `
                    <svg width="4.7" height="8" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" class="CGMB7B"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z"  class="CPYntE"></path></svg>
                `;
            }

        sectionContainer.appendChild(section);

        item.innerSection.forEach(subSection => {
            
        })

    })
}
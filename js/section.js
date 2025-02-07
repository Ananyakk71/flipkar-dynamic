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

        const innerSection = document.createElement("div");
        innerSection.className = "inner-section";
        sectionContainer.appendChild(innerSection);
        

        section.addEventListener("mouseenter", ()=> {
            innerSection.style.display = "flex";
            innerSection.innerHTML = ""; 
            loadInnerSection(innerSection, item.innerSection);
        })
        section.addEventListener("mouseleave", () => {
            innerSection.style.display = "none"
        })

    })
    function loadInnerSection(innerSection, innerSections) {
        innerSections.forEach(subsection => {
            const innerCol = document.createElement("div");
            innerCol.className = "inner-col";
            innerSection.appendChild(innerCol);

            const subsectionTitle = document.createElement("a");
            subsectionTitle.className = "inner-head inner-title";
            subsectionTitle.textContent = subsection.title;
            innerCol.appendChild(subsectionTitle);

            subsection.items.forEach(textItem => {
                const subText = document.createElement("a");

                subText.textContent = textItem.text; 
            
                if (textItem.head) {
                    subText.className = "inner-head";
                } else {
                    subText.className = "inner-text";
                }
            
                innerCol.appendChild(subText);
            });
            
        });
    }
        

    // data.sections.forEach(section => {
    //     section.innerSection.forEach(subsection => {
    //         const innerCol = document.createElement("div");
    //         innerCol.className = "inner-col";
    //         innerSection.appendChild(innerCol);
    //         const firstText = document.createElement("a");
    //         firstText.className = "inner-head inner-title";
    //         firstText.textContent = subsection.title;
    //         innerCol.appendChild(firstText);

    //     })
    // })
}
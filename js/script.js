import { loadTopSection } from './section.js';
import { loadMainSection } from './main.js'
fetch("data.json")
.then(function(response) {
    return response.json();
})
.then(function(data) {
    loadTopSection(data);
    loadMainSection(data);
})

.catch(error => console.error("Error loading data:", error));
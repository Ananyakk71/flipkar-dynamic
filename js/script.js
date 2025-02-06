import { loadTopSection } from './section.js';
fetch("data.json")
.then(function(response) {
    return response.json();
})
.then(function(data) {
    loadTopSection(data);
})

.catch(error => console.error("Error loading data:", error));
const data = [
    "JavaScript Tutorial",
    "HTML and CSS Guide",
    "Learn Python",
    "Introduction to Java",
    "C++ Programming",
    "Web Development Basics",
    "React.js for Beginners",
    "Node.js and Express",
    "Database Management",
    "Machine Learning Basics"
];

document.addEventListener('DOMContentLoaded', () => {
    const searchBox = document.getElementById('searchBox');
    const searchButton = document.getElementById('searchButton');
    const searchResults = document.getElementById('searchResults');

    searchBox.addEventListener('input', () => {
        const query = searchBox.value.toLowerCase();
        searchResults.innerHTML = '';

        if (query === '') {
            searchResults.innerHTML = '<div class="no-results">Please enter a search term.</div>';
            return;
        }

        const filteredData = data.filter(item => item.toLowerCase().includes(query));

        if (filteredData.length === 0) {
            searchResults.innerHTML = '<div class="no-results">No results found.</div>';
            return;
        }

        filteredData.forEach(item => {
            const div = document.createElement('div');
            div.className = 'result';
            div.innerHTML = highlightQuery(item, query);
            searchResults.appendChild(div);
        });
    });

    searchButton.addEventListener('click', () => {
        const query = searchBox.value;
        if (query) {
            window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
        }
    });

    function highlightQuery(text, query) {
        const regex = new RegExp(`(${query})`, 'gi');
        return text.replace(regex, '<span class="highlight">$1</span>');
    }
});
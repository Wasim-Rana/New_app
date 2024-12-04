// API Key and Base URL
const API_KEY = "7430dbc0ee8f4436b76d3e342e4ca4d5";
const BASE_URL = "https://newsapi.org/v2/top-headlines";

// Fetch Data Function
let fetchData = async (url) => {
    try {
        let result = await fetch(url);
        if (!result.ok) throw new Error(`HTTP error! Status: ${result.status}`);
        return await result.json();
    } catch (error) {
        console.error(`Failed to fetch data from ${url}:`, error);
        return null; // Return null if the request fails
    }
};

// Display Articles Function
let displayArticles = (data, container) => {
    if (!data || !Array.isArray(data)) {
        console.warn("No articles available to display.");
        return;
    }

    data.forEach(article => {
        const div = document.createElement("div");
        div.innerHTML = `
            <h2>${article.source?.name || "Source unknown"}</h2>
            <h4>${article.title || "Title unavailable"}</h4>
            <img src="${article.urlToImage || "https://via.placeholder.com/150"}" alt="Image unavailable">
            <p>${article.description || "Description unavailable"}</p>
            <a href="${article.url}" target="_blank"><button>Explore Official Website</button></a>
        `;
        container.appendChild(div);
    });
};

// Fetch and Display News Function
let fetchAndDisplay = async (category, container) => {
    let url = `${BASE_URL}?country=us&${category ? `category=${category}&` : ""}apiKey=${API_KEY}`;
    let data = await fetchData(url);
    displayArticles(data?.articles, container);
};

// Containers
let headlineContainer = document.querySelector("#headline");
let businessContainer = document.getElementById("business");
let entertainmentContainer = document.getElementById("ent");
let healthContainer = document.getElementById("health");
let scienceContainer = document.getElementById("science");
let sportsContainer = document.getElementById("sports");
let techContainer = document.getElementById("tech");

// Fetch and Display News for Different Categories
fetchAndDisplay(null, headlineContainer);       // General headlines
fetchAndDisplay("business", businessContainer);
fetchAndDisplay("entertainment", entertainmentContainer);
fetchAndDisplay("health", healthContainer);
fetchAndDisplay("science", scienceContainer);
fetchAndDisplay("sports", sportsContainer);
fetchAndDisplay("technology", techContainer);

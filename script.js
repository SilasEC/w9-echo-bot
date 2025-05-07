const abortController = new AbortController();
let requestInFlight = undefined;

function fetchData(query) {
    const url = `https://echo-bot-shy-sea-4425.fly.dev/echo?q=${encodeURIComponent(query)}`;
    
    fetch(url, { signal: abortController.signal })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => console.log("Fetch result:", data))
        .catch(error => {
            if (error.name === 'AbortError') {
                console.log("Fetch request aborted");
            } else {
                console.error("Fetch error:", error);
            }
        });
}

function handleInputChange(event) {
    if (requestInFlight) {
        abortController.abort("new request");
    }
    requestInFlight = true;
    fetchData(event.target.value);
}

function main() {
    const input = document.querySelector("input");
    input.addEventListener("change", handleInputChange);
}

document.addEventListener("DOMContentLoaded", main);

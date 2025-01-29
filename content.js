// Function to remove the watermark
function removeWatermark() {
    const watermark = document.querySelector('.watermark');
    if (watermark && watermark.style.display !== 'none') {
        watermark.style.display = 'none';
        chrome.storage.sync.set({ watermarkHidden: true });
    }
}

// Function to handle mutations in the DOM
function handleMutations(mutationsList, observer) {
    for (const mutation of mutationsList) {
        // Check if nodes were added or attributes changed
        if (mutation.type === 'childList' || mutation.type === 'attributes') {
            removeWatermark();
        }
    }
}

// Set up a MutationObserver to watch for changes in the DOM
const observer = new MutationObserver(handleMutations);

// Start observing the document with the configured parameters
observer.observe(document.body, {
    childList: true,       // Observe direct children of the body
    subtree: true,         // Observe all descendants of the body
    attributes: true,      // Observe attribute changes
    attributeFilter: ['style', 'class'] // Only observe changes to 'style' or 'class' attributes
});

// Initial check when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    removeWatermark();
});

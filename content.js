function removeWatermark() {
    const watermark = document.querySelector('.watermark');
    if (watermark && watermark.style.display !== 'none') {
        watermark.style.display = 'none';
        chrome.storage.sync.set({ watermarkHidden: true });
    }
}


function handleMutations(mutationsList, observer) {
    for (const mutation of mutationsList) {
        if (mutation.type === 'childList' || mutation.type === 'attributes') {
            removeWatermark();
        }
    }
}


const observer = new MutationObserver(handleMutations);

observer.observe(document.body, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ['style', 'class']
});


document.addEventListener('DOMContentLoaded', () => {
    removeWatermark();
});

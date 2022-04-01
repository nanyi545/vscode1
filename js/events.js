
function triggerEvent(target, eventType, eventDetail) {
    const event = new CustomEvent(eventType, {
        detail: eventDetail
    });
    target.dispatchEvent(event);
}

document.addEventListener('ajax-start', e => {
    document.getElementById('root').innerHTML = 'loading...'+e.detail.url;
    console.log(e);
});

document.addEventListener('ajax-complete', e => {
    document.getElementById('root').innerHTML = '';
    console.log(e);
});

document.getElementById('btn').addEventListener('click', () => {
    triggerEvent(document, 'ajax-start', { url: 'my-url' });
    setTimeout(() => {
        triggerEvent(document, 'ajax-complete');
    }, 5000);
});
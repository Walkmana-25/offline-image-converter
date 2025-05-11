
// worker.js
onmessage = function(ev: MessageEvent) {
    console.log('Convert start');
    postMessage(ev.data);
}
addEventListener('fetch', event => {
 event.respondWith(handleRequest(event.request))
})

async function addition(a, b) {
  return a + b;
}

async function handleRequest(request) {
  return new Response('Hello World!');
}
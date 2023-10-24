// import {cacheName} from './config.js'

console.log('SW', typeof cacheName)

self.addEventListener('install', (event) => {
  console.log('INSTALL')
  return self.skipWaiting()
})

self.addEventListener('activate', async function (event) {
  console.log('CLAIM')
  return self.clients.claim()
})
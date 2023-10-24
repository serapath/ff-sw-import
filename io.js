import {cacheName} from './config.js'

globalThis.io = async url => {
  console.log({cacheName, url})
  const reg = await navigator.serviceWorker.register('worker.js', {type: 'module'})
  console.log('REGISTERED!', reg)
}

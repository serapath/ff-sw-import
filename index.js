if (location.port && location.hostname !== 'localhost') location.hostname = 'localhost'
else {
  console.log('BOOT')
  const url = new URL(`${location.origin}${location.pathname}`)
  url.pathname += 'io.js'
  console.log(url.href)
  await import(url.href)
  io(import.meta.url)
}
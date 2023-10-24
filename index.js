if (location.port && location.hostname !== 'localhost') location.hostname = 'localhost'
else {
  console.log('BOOT')
  await import(`${location.origin}/io.js`)
  io(import.meta.url)
}
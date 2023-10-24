if (location.port && location.hostname !== 'localhost') location.hostname = 'localhost'
else {
  console.log('BOOT')
  await import('http://localhost:33333/io.js')
  io(import.meta.url)
}
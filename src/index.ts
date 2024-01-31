Bun.serve({
  fetch() {
    return new Response("Hello Bun")
  }
})

console.log(`Listening on localhost:${process.env.PORT}`)

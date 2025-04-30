interface Iopts {
  name: string
}
const hello = (opts: Iopts) => {
  console.log(`hello123: ${opts.name}`)
}

export default hello

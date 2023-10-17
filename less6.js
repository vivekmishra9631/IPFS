const run = async () => {
    const bufferedContents = await toBuffer(ipfs.cat("/ipfs/QmcmnUvVV31txDfAddgAaNcNKbrtC2rC9FvkJphNWyM7gy/fun/success.txt"))
    return bufferedContents.toString()
  }
  return run
  
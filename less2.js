const run = async (files) => {
    const result =  await ipfs.add(files)
  
    return result
  }
  return run
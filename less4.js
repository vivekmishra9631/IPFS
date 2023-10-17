const run = async (files) => {
    // Using Array.map():
  
    let fileObjectsArray = files.map((file) => {
      return {
        path: file.name,
        content: file
      }
    })

    const results = await all(ipfs.addAll(fileObjectsArray, { wrapWithDirectory: true }))

  return results

}
return run
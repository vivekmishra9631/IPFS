const run = async (files) => {
    const fileObjectsArray = files.map((file) => { return { path: file.name, content: file }})
    const addedFiles = await all(ipfs.addAll(fileObjectsArray, { wrapWithDirectory: true }))
    const directoryCID = addedFiles[addedFiles.length - 1].cid
  
    return all(ipfs.ls(directoryCID))
  }
  return run
  
const run = async () => {
    const fileContents =await toBuffer(ipfs.cat('QmSPzHkH4ChaV3wwsn1c7BnssKd78mm2esVZizmxoGBC41'))
    const message = fileContents.toString()
    return message
}
return run

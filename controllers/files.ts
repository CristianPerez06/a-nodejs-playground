import axios from 'axios'
import { Readable } from 'stream'
import readline from 'readline'
import events from 'events'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const readFile = async (req: any, res: any) => {
  try {
    const response = await axios.get(process.env.CSV_URL || '')

    const readable = Readable.from([response.data])

    let content = ''

    //#region Read file content line by line
    const rl = readline.createInterface({
      input: readable,
      crlfDelay: Infinity,
    })
    rl.on('line', (line) => {
      content = content + '<p>' + line + '</p>'
    })
    await events.once(rl, 'close')
    //#endregion

    res.status(200).send(content)
  } catch (err) {
    console.log(err)
    res.status(400).send('oops... something went wrong')
  }
}

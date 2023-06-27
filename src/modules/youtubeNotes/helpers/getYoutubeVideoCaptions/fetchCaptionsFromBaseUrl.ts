import * as htmlParser from 'htmlparser2'
import fetch from 'cross-fetch'

const parseResponse = (chunks: string): string[] => {
  const result: string[] = []
  const parser = new htmlParser.Parser({
    ontext: (text) => {
      result.push(text)
    }
  })
  parser.write(chunks)
  parser.end()

  return result
}

export const fetchCaptionsFromBaseUrl = async (
  captionsUrl: string
): Promise<string[]> => {
  const response = await fetch(captionsUrl, { redirect: 'follow' })
  const text = await response.text()
  return parseResponse(text)
}

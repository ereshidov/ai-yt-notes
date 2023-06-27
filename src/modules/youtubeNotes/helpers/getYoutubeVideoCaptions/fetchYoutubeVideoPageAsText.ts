import fetch from 'node-fetch'
import { YOUTUBE_URL_PREFIX } from '../../constants'

export const fetchYoutubeVideoPageAsText = async (
  youtubeVideoId: string
): Promise<string> => {
  const response = await fetch(`${YOUTUBE_URL_PREFIX}${youtubeVideoId}`, {
    redirect: 'follow'
  })
  const text = await response.text()
  return text
}

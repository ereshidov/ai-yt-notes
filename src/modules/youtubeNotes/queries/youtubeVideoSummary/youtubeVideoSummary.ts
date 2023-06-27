import { type QueryResolvers } from '~/generated/resolvers-types'
import { type Context } from '~/server/createContext'
import { getYoutubeVideoCaptions } from '../../helpers'

import { getOGDataFromYoutubeVideo } from '../../helpers/getOGData'

export const youtubeVideoSummary: QueryResolvers<Context>['youtubeVideoSummary'] =
  async (_root, { videoId }, { openAI }) => {
    const captions = await getYoutubeVideoCaptions(videoId)

    const ogData = await getOGDataFromYoutubeVideo(videoId)

    const openAIResponse = await openAI.createCompletion({
      model: 'text-davinci-003',
      max_tokens: 1000,
      prompt: `Provided captions from video, please make a short summary: "${captions
        .join(' ')
        .slice(0, 900)}"`
    })

    const summary = openAIResponse.data.choices?.[0].text

    if (typeof summary !== 'string') {
      throw new Error('Can not get summary from openAI')
    }

    return {
      aiSummary: summary,
      video: {
        captions,
        ...ogData
      }
    }
  }

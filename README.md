### Get summary from youtube video using OpenAI

GraphQL API for application that provides posibility to get youtube video summary using OpenAI api. Also it allow you get all the captions from any youtube video.

[Frontend part repo](https://github.com/ereshidov/ai-yt-notes-frontend)


## Limitations: 🙃
- OpenAI input can take only 1000 tokens, that is why youtube video captions being sliced

## Development
- Prepare Your OpenAI API key and put it to `.env` file
```bash
#.env
PORT=4444
OPENAI_API_KEY=__YOUR_API_KEY__
```
- Install dependencies and run application
```bash
yarn install
yarn dev
```
- That's it! Your server is now on `http://localhost:4444/graphql` 🚀

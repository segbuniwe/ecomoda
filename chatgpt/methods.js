import { OpenAI } from "langchain/llms"
import {
  PromptTemplate,
} from "langchain/prompts"
import { LLMChain } from "langchain/chains"
import { PassThrough } from "stream"
import { CallbackManager } from "langchain/callbacks"

export const methods = [
  {
    id: "recycle",
    route: "/recycle",
    method: "post",
    description: "Gives some recycling ideas for a clothing",
    inputVariables: ["Item"],
    execute: async (input) => {
      const outputStream = new PassThrough()

      const callbackManager = CallbackManager.fromHandlers({
        async handleLLMNewToken(token) {
          outputStream.write(token)
        },
      })
      const llm = new OpenAI({
        temperature: 0,
        streaming: true,
        callbackManager,
      })

      const template = "You are a recycling expert, your only task is to give recycling ideas for clothing to te user, you have to write some recycling ideas about {Item}, including donations and ways to repair it, and instruction for two crafts."
      const prompt = new PromptTemplate({
        template,
        inputVariables: Object.keys(input),
      })
      const chain = new LLMChain({ llm, prompt })

      chain.call(input).then((response) => {
        console.log(response)
        outputStream.end()
      })

      return { stream: outputStream }
    },
  },
]

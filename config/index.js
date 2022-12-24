import dotenv from "dotenv"
import { Configuration} from "openai";
const envFile = process.env.NODE_ENV ? `.env.${process.env.NODE_ENV}` : '.env.development'

dotenv.config({ path: envFile })
export const port = process.env.PORT
export const NODE_ENV =process.env.NODE_ENV

export const openAiConfig = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
}); 



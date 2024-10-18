import OpenAI from 'openai'
const openai=new OpenAI({
    dangeriouslyAllowBrowser:true
})
const messages=[
    {
        role:'system',
        content:'You are a helpful general knowledge expert.'
    },
    {
        role:"user",
        content:'Who invented the  television?'
    }
]
const response=await openai.chat.completions.create({
model:'gpt-4',
messages:messages
})
console.log(response)
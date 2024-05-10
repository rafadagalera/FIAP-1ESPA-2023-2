import OpenAI from "openai";

const openai = new OpenAI({
    organization: "org-A5VWaiarWFVT0C31XFPdJKur",
    apiKey: "sk-proj-ykphmyQHQiYfECicXEzNT3BlbkFJJYvD5vReWCN117AFLuz2",
});

const chatCompletion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [{"role": "user", "content": "Quem é você?"}]
})

console.log(chatCompletion.choices[0].message);
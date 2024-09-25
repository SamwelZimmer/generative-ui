"use server";

import { generateObject } from "ai";
import { openai } from "@ai-sdk/openai";

import { STYLE_PRESETS } from "@/lib/data";
import { styleSchema } from "@/lib/schemas";

const exampleThemePrompt = `
Example prompt: 
"I want a barbie-like theme with soft corners and lots of pink"

Example response:
${STYLE_PRESETS["barbie"]}
`;

export async function generateTheme(prompt: string) {
  "use server";

  const { object: res } = await generateObject({
    model: openai("gpt-3.5-turbo"),
    system:
      "You apply Tailwind styling to pre-made react components given a users desired style. You will be given an example prompt and example output styles. Your job is to return a set of styles given a prompt.",
    prompt: `Here is an example ${exampleThemePrompt}\n\nUser's Style Prompt: ${prompt}`,
    schema: styleSchema,
  });

  return res;
}

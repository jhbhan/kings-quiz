import type { Question } from "./types"

const URL = "jason's URL"

export const fetchQuestions = async (): Promise<Question[]> => {
    const response = await fetch(URL)
    const data = await response.json()
    
    return data;
}
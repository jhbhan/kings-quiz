import type { Question } from "./types"

const URL = "jason's URL"

export const fetchQuestions = async (count: number, categories: number[]): Promise<Question[]> => {
    const response = await fetch(`${URL}?count=${count}&categories=${categories.join(',')}`);
    const data = await response.json()
    
    return data;
}
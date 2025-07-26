import type { Category, Question } from "./types"

const URL = "https://8539852b27d737c54d69d5a15610e246.balena-devices.com/trivia";

export const fetchQuestions = async (count: number, categories: Category[]): Promise<Question[]> => {
    const url = new URLSearchParams();
    url.append('type', 'kings');
    url.append('count', count.toString());
    url.append('categories', categories.join(','));
    const response = await fetch(`${URL}?${url.toString()}`);
    const data = await response.json();
    if (!response.ok) {
        throw new Error(data.message || 'Failed to fetch questions');
    }
    if (!Array.isArray(data)) {
        throw new Error('Invalid response format');
    }

    return data as Question[];
}
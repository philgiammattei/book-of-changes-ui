import { Line } from "./line";

export interface Hexagram {
    hexagramNumber: number;
    chineseName: string;
    englishName: string;
    hexagramExplanation: string;
    lines: Line[];
}
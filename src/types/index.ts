//TextInput Component

export interface TextInputProps {
  onTextChange: (text: string) => void;
  placeholder?: string;
  initialValue?: string;
}

//StatsDisplay Component
export interface TextStats {
    characterCount: number;
    wordCount: number;
    readingTime: number;
}
export interface StatsDisplayProps {
    stats: TextStats;
    showReadingTime?: boolean;
}
//CharacterCounter Component
export interface CharacterCounterProps {
    minWords?: number;
    maxWords?: number;
    targetReadingTime?: number;
}
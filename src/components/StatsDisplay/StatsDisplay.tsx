import type { StatsDisplayProps } from "../../types";

//reading needs to show
export function StatsDisplay({ stats, showReadingTime = true,}: StatsDisplayProps) {
    return (
        <div>
            <p>Characters: {stats.characterCount}</p>
            <p> Words: {stats.wordCount}</p>
            //showReadingTime needs to be read
            {showReadingTime && <p>Reading time: {stats.readingTime} min</p>}
        </div>
    );
}
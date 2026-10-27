import {useState} from "react";
import type{ CharacterCounterProps, TextStats } from "../../types";
import { TextInput } from "../TextInput/TextInput";
import { StatsDisplay } from "../StatsDisplay/StatsDisplay";

const WPM = 150;

export function CharacterCounter({ }: CharacterCounterProps) {
    //the text that is changing
    const [text, setText] = useState("");

    //the words needs to be "cut up"
    const trimmed = text.trim();
    let wordCount = 0;
    if (trimmed !== "") {
        wordCount = trimmed.split(/\s+/).length;
    }
    //calculating words per seconds
    const stats: TextStats = {characterCount: text.length, wordCount, readingTime: Math.ceil((wordCount / WPM) * 60),

    };

    return (
        <div>
            <TextInput onTextChange={setText} placeholder="Start typing..."/>
            <StatsDisplay stats={stats} />
        </div>
    );
    
}    
        


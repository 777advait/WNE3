// data
import { suggestionsData } from "../api/promptSuggestionsData"


export default function Suggestions() {
    return (
        <div className="flex flex-col gap-4">
            <p className=" text-lg text-white">Prompt Suggestions</p>
            <div className="grid grid-cols-4 gap-6">
                {
                    suggestionsData.map(suggestion => (
                        <a key={suggestion.id} className="bg-[#1E1E1E] text-white cursor-pointer border border-[#4D4D4D] rounded-md h-28 p-4">
                            {suggestion.suggestion}
                        </a>
                    ))
                }
            </div>
        </div>
    )
}
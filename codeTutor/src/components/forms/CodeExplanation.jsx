import React from 'react'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const CodeExplanation = ({ explanation }) => {
    return (
        <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
            <h3 className="font-semibold mb-2 text-gray-800">Explanation:</h3>
            <div className="whitespace-pre-wrap text-gray-700 leading-relaxed">
                <Markdown
                    remarkPlugins={[remarkGfm]}
                >{explanation}</Markdown>
            </div>
        </div>
    )
}

export default CodeExplanation

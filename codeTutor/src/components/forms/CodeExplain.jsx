import React from 'react'

const CodeExplainForm = () => {
    return (
        <div className='w-full max-w-4xl background-transparent mt-8'>
            <form className='w-full max-w-lg bg-white p-6 rounded-lg shadow-md'>
                <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='language'>
                    Programming Language
                </label>
                <select
                    id='language'
                    name='language'
                    className='border rounded-lg p-2 w-full mb-4 bg-transparent'
                    defaultValue=''
                >
                    <option value='' disabled>Select Programming Language</option>
                    <option value='javascript'>JavaScript</option>
                    <option value='python'>Python</option>
                    <option value='java'>Java</option>
                    <option value='csharp'>C#</option>
                    <option value='cpp'>C++</option>
                    <option value='ruby'>Ruby</option>
                    <option value='go'>Go</option>
                    <option value='php'>PHP</option>
                    <option value='typescript'>TypeScript</option>
                    <option value='swift'>Swift</option>
                </select>
                <h2 className='text-xl font-semibold mb-4'>Explain Code Snippet</h2>
                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='codeSnippet'>
                        Code Snippet
                    </label>
                    <textarea
                        id='codeSnippet'
                        name="code"
                        required
                        className='w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600'
                        rows='6'
                        placeholder='Paste your code snippet here...'
                    ></textarea>
                </div>
                <button
                    type='submit'
                    className='bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors'
                >
                    Explain Code
                </button>
            </form>
        </div>
    )
}

export default CodeExplainForm
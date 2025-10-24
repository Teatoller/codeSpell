import React, { useActionState, useState } from 'react'
import { explainCode } from '../../actions'
import CodeExplanation from './CodeExplanation';
import ErrorMessage from './Error';

const CodeExplainForm = () => {
    const [codeSnippet, setCodeSnippet] = useState('');
    const [state, formAction, isPending] = useActionState(explainCode, {
        success: false,
        data: null,
        error: null
    });

    // Handle state changes
    React.useEffect(() => {
        if (state.success) {
            console.log('Explanation received:', state.data);
            // You can also set state here or show a success message
        } else if (state.error) {
            console.error('Error fetching explanation:', state.error);
            // You can show error messages to the user here
        }
    }, [state]);

    // Handle textarea changes
    const handleCodeChange = (e) => {
        setCodeSnippet(e.target.value);
    };

    return (
        <div className='w-full max-w-4xl background-transparent mt-8 p-6 rounded-lg shadow-md'>
            {/* Display error messages using ErrorMessage component */}
            {state.error && (
                <ErrorMessage error={state.error} />
            )}

            {/* Success message */}
            {state.success && state.data && (
                <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded">
                    Explanation generated successfully!
                </div>
            )}

            <form action={formAction}>
                <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='language'>
                    Programming Language
                </label>
                <select
                    id='language'
                    name='language'
                    className='border rounded-lg p-2 w-full mb-4 bg-transparent'
                    defaultValue=''
                    required
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

                <h2 className='text-xl font-semibold mb-4 text-gray-800'>Explain Code Snippet</h2>

                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='codeSnippet'>
                        Code Snippet
                    </label>
                    <textarea
                        id='codeSnippet'
                        name="code"
                        required
                        value={codeSnippet} // Controlled value
                        onChange={handleCodeChange} // Update state on change
                        className='w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-white-800'
                        rows='6'
                        placeholder='Paste your code snippet here...'
                        data-gramm="false"
                        data-gramm_editor="false"
                        data-enable-grammarly="false"
                    ></textarea>
                </div>

                <button
                    type='submit'
                    disabled={isPending}
                    className='bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors disabled:bg-blue-300 disabled:cursor-not-allowed'
                >
                    {isPending ? 'Generating Explanation...' : 'Explain Code'}
                </button>
            </form>

            {/* Display the explanation result */}
            {state.success && state.data && (
                <CodeExplanation explanation={state.data} />
            )}
        </div>
    )
}

export default CodeExplainForm
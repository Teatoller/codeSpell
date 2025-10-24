"use server";

export async function explainCode(formData) {
  const code = formData.get("code");
  const language = formData.get("language");
  
  if (!code?.trim() || !language?.trim()) {
    return {
      success: false,
      error: "Code and language are required",
      data: null
    };
  }

  try {
    const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/explain-code`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ 
        code: code.trim(), 
        language: language.trim() 
      }),
    });

    if (!res.ok) {
      const errorText = await res.text();
      let detailedError;
      
      try {
        // Try to extract meaningful error from JSON response
        const errorData = JSON.parse(errorText);
        detailedError = errorData.details || errorData.message || errorData.error || errorText;
      } catch {
        // If not JSON, use the raw text or a generic message
        detailedError = errorText || `Server returned ${res.status} ${res.statusText}`;
      }
      
      return {
        success: false,
        error: `Failed to get explanation: ${detailedError}`,
        data: null
      };
    }

    const data = await res.json();
    
    if (!data) {
      return {
        success: false,
        error: "Server returned empty response",
        data: null
      };
    }

    return {
      success: true,
      data: data.explanation || data,
      error: null
    };
  } catch (err) {
    console.error("Explain code error:", err);
    
    // More specific network error messages
    const errorMessage = err.code === 'ENOTFOUND' 
      ? "Cannot reach the server. Please check your connection."
      : err.message || "An unexpected error occurred";
      
    return {
      success: false,
      error: `Network error: ${errorMessage}`,
      data: null
    };
  }
}
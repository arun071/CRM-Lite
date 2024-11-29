import React from 'react'

export default function Google() {
    const googleLogin = () => {
        window.location.href = "http://localhost:8080/oauth2/authorization/google";
    };
    return (
        <>
            <div className="mt-6">
                <button
                    type="button"
                    onClick={() => { googleLogin() }}
                    className="w-full py-2 px-4 flex items-center justify-center gap-3 bg-gray-100 text-gray-700 rounded-lg border border-gray-300 shadow-sm hover:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 transition-all"
                >
                    <img src="google.png" alt="Google Logo" className="w-6 h-6" />
                    <span className="font-medium">Continue With Google</span>
                </button>
            </div>
        </>
    )
}

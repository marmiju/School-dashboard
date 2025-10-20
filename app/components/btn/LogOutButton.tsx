'use client'

import { redirect } from 'next/navigation'
import React, { useState } from 'react'

const LogOutButton = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleLogout = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('token');
      redirect('/login');
    }
  
    setIsOpen(false)
  }

  return (
    <div className="relative">
      {/* Logout Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="text-text/50 bg-background px-4 py-1 rounded font-medium flex items-center gap-2 hover:bg-secondary hover:text-primary cursor-pointer duration-300"
      >
        Log Out
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50">
          <div className="bg-primary text-secondary p-6 rounded-2xl shadow-lg w-[90%] max-w-sm text-center">
            <h2 className="text-lg font-semibold mb-4">
              Are you sure you want to log out?
            </h2>

            <div className="flex justify-center gap-4 mt-4">
              <button
                onClick={handleLogout}
                className="bg-secondary text-primary px-4 py-1.5 rounded-lg font-medium hover:opacity-80 duration-300"
              >
                Yes, Log Out
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="border border-secondary text-secondary px-4 py-1.5 rounded-lg font-medium hover:bg-secondary hover:text-primary duration-300"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default LogOutButton



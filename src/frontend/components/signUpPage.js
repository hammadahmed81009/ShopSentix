import React from 'react'

export default function signUpPage() {
  return (
    <div>
      <body className="bg-gray-100 flex items-center justify-center h-screen">

<div className="bg-white p-8 rounded shadow-md w-96">

    <h1 className="text-2xl font-bold mb-6">Sign Up</h1>

    <form action="#" method="post">

        <div className="mb-4">
            <label for="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
            <input type="text" id="name" name="name" className="w-full border rounded px-3 py-2 focus:outline-none focus:border-blue-500" required></input>
        </div>

        <div className="mb-4">
            <label for="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
            <input type="email" id="email" name="email" className="w-full border rounded px-3 py-2 focus:outline-none focus:border-blue-500" required></input>
        </div>

        <div className="mb-4">
            <label for="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
            <input type="password" id="password" name="password" className="w-full border rounded px-3 py-2 focus:outline-none focus:border-blue-500" required></input>
        </div>

        <div className="mb-4">
            <label for="confirm-password" className="block text-gray-700 text-sm font-bold mb-2">Confirm Password</label>
            <input type="password" id="confirm-password" name="confirm-password" className="w-full border rounded px-3 py-2 focus:outline-none focus:border-blue-500" required></input>
        </div>

        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue">
            Sign Up
        </button>

    </form>

</div>

</body>

    </div>
  )
}


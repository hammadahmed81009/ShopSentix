import React from 'react'

export default function verfication() {
  return (
    <div>
      
<body class="bg-gray-100 flex items-center justify-center h-screen">

<div class="bg-white p-8 rounded shadow-md w-96">

    <h1 class="text-2xl font-bold mb-6">Verification Code</h1>

    <p class="text-gray-700 mb-4">A 6-digit verification code has been sent to your email.</p>

    <form action="#" method="post">

        <div class="mb-4">
            <label for="verificationCode" class="block text-gray-700 text-sm font-bold mb-2">Verification Code</label>
            <input type="text" id="verificationCode" name="verificationCode" class="w-full border rounded px-3 py-2 focus:outline-none focus:border-blue-500" maxlength="6" required></input>
        </div>

        <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue">
            Verify
        </button>

    </form>

</div>

</body>
    </div>
  )
}

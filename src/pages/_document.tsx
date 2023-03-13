import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html className='text-black bg-gradient-to-b from-indigo-800 to-[#7130A3]'>
      <Head />
      <title>Learning With Llama</title>
      <body className="min-w-screen min-h-screen bg-gradient-to-b from-indigo-700 to-violet-700">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
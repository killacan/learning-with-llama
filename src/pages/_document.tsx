import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html className='text-stone-100'>
      <Head />
      <title>Learning With Llama</title>
      <body className="min-w-screen min-h-screen bg-gradient-to-b from-indigo-800 to-[#7130A3]">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
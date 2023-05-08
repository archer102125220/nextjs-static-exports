import Head from 'next/head';
import { Inter } from 'next/font/google';
import Script from 'next/script';

import styles from '@/styles/Home.module.css';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        {/* <script src="javascript/index.js"></script>
        <script src="javascript/webComponent.js"></script> */}
        <title>Create Static Next App - test</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <style>
          {`
    button {
      -webkit-box-align: center;
      align-items: center;
      -webkit-box-pack: center;
      justify-content: center;
      position: relative;
      box-sizing: border-box;
      -webkit-tap-highlight-color: transparent;
      outline: 0px;
      border: 0px;
      margin: 10px 0px;
      cursor: pointer;
      user-select: none;
      vertical-align: middle;
      appearance: none;
      text-decoration: none;
      font-family: Roboto, Helvetica, Arial, sans-serif;
      font-weight: 500;
      font-size: 0.875rem;
      line-height: 1.75;
      letter-spacing: 0.02857em;
      min-width: 64px;
      padding: 6px 16px;
      border-radius: 4px;
      transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
        box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
        border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
        color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
      color: rgba(0, 0, 0, 0.87);
      box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 1px -2px,
        rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;
      background-color: rgb(251, 199, 128);
    cursor: pointer;
    }
    button:hover {
      background-color: rgb(248, 205, 146);
    }
    button:active {
      background-color: rgb(223, 161, 77);
    }`}
        </style>
      </Head>
      <Script src="javascript/index.js"></Script>
      <Script src="javascript/webComponent.js"></Script>
      <main className={`${styles.main} ${inter.className}`}>
        <p>測試頁面</p>
        <my-button></my-button>
        <my-shadow-button></my-shadow-button>
        <button>按鈕</button>
      </main>
    </>
  );
}

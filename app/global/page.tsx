"use client"
import Link from 'next/link';
import { FileCard, Footer } from '@digdir/tlp-react';
import '@digdir/tlp-react/dist/styles/global.css';

export default function Home() {
return (
<main className='content'>
    <ul>
        <li>
            <Link href="/">Go to client component with no styles</Link>
        </li>
        <li>
            <Link href="individual">Go to client component with individual styles</Link>
        </li>
        <li>
            <Link href="server">Go to server component, this will <b>NOT</b> work, and will <b>crash</b></Link>
        </li>
    </ul>
    <div>
        <h2>Client component (/client/page.tsx) with global styles imported</h2>
        <p>
        The footer should load all styles, since we have imported the global CSS file.
        If you naviagte to the "no styles page", the footer should still have styling, since we have loaded the global.css file once.
        Variants still works as expected.
        </p>
        <FileCard heading={'heading'} description={'desc.'} filePath={'/'} />
        <FileCard heading={'heading'} description={'desc.'} filePath={'/'} brand='tertiary' />
        <Footer>
            <Footer.Column>
                Footer column 1
            </Footer.Column>
            <Footer.Column>
                Footer column 2
            </Footer.Column>
        </Footer>
    </div>
</main>
)
}

"use client"
import Link from 'next/link';
import { Footer, FileCard } from '@digdir/tlp-react';
import '@digdir/tlp-react/dist/styles/footer.css';

export default function Home() {
    return (
        <main className='content'>
            <ul>
                <li>
                    <Link href="/">Go to client component with no styles</Link>
                </li>
                <li>
                    <Link href="global">Go to client component with global styles</Link>
                </li>
                <li>
                    <Link href="server">Go to server component, this will <b>NOT</b> work, and will <b>crash</b></Link>
                </li>
            </ul>
            <div>
                <h2>Client component (/client/page.tsx) with individual styles imported</h2>
                <p>
                The footer should load styles for itself, since we have imported the footer CSS file.
                If you naviagte to the "no styles page", the footer should still have styling, since we have loaded the global.css file once.
                The FileCard will not have any styles, since we did not load them.
                </p>
                <FileCard heading={'heading'} description={'desc.'} filePath={'/'} />
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

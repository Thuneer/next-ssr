import Link from 'next/link';
import { Footer } from '@digdir/tlp-react';
import '@digdir/tlp-react/dist/styles/global.css';

export default function Home() {
    return (
        <main className='content'>
            <Link href="/">Go to client component with no styles</Link>
            <div>
                <h2>Server component (/server/page.tsx)</h2>
                <p>
                You will never see this text.
                </p>
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

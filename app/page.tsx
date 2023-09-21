"use client"
import Link from 'next/link';
import { FileCard, Footer } from '@digdir/tlp-react';
import { Button } from '@digdir/design-system-react';

export default function Home() {
  return (
    <main className='content'>
      <ul>
        <li>
          <Link href="global">Go to client component with global styles</Link>
        </li>
        <li>
          <Link href="individual">Go to client component with individual styles</Link>
        </li>
        <li>
          <Link href="server">Go to server component, this will <b>NOT</b> work, and will <b>crash</b></Link>
        </li>
      </ul>
      <div>
        <h2>Client component (/page.tsx) with no styles imported</h2>
        <p>
          The footer and file card should not load any styles, since we have not imported the CSS file.
          If you navigate to other pages, do a refresh to clear the cache, to make sure you would get the css files loaded.
          As you navigate, styles will be loaded in, and will stay in the cache.
        </p>
        <p>This is an example of a button where the style "lags"</p>
        <Button>Button</Button>
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

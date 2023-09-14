import Link from 'next/link';
import { Footer } from '@digdir/tlp-react';
import { Button as DigdirButton } from '@digdir/design-system-react';

export default function Home() {
  return (
    <main className='content'>
      <Link href="client">Go to client component</Link>
             <div>
            <h2>Server component (/page.tsx)</h2>
            <p>
                The Digdir button uses client hooks so it wont work in a server component. Uncomment the button below
                to see it complaining about React.createConext.

            </p>
            { /* <DigdirButton>Digdir Button</DigdirButton> */ }
            <p>
              The footer component is a component from a library that uses CSS modules and supports SSR. It does not load its computed
              styles on the first page load. It will load the styles if you navigate from the /client page and back.
              This works because the server is done loading, and the client has taken over. I think, in order to make
              this work, a stylesheet has to be sent with the server (an imported CSS file) like NAV does it.
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

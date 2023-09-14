"use client";
import Link from 'next/link';
import { Button as DigdirButton } from '@digdir/design-system-react';
import { Button as NAVButton } from '@navikt/ds-react';
import { Footer } from '@digdir/tlp-react';

export default function Client() {
    return (
        <div>
            <Link href="/">Back to server component</Link>

            <h2>Client component (/client/page.tsx)</h2>
            <p>You will notice on page load, that the NAV Button styles are coming directly from the server payload
                while the computed styles from the CSS modules come in pass 2. This means that there is a small delay from
                when the computed styles are applied to the Digdir Button and the Footer component.
            </p>
            <div>
                <DigdirButton>Digdir Button</DigdirButton>
                <NAVButton>NAV Button</NAVButton>
            </div>

            <div>
            <Footer>
                <Footer.Column>
                    Footer column 1
                </Footer.Column>
                <Footer.Column>
                    Footer column 2
                </Footer.Column>
            </Footer>
            </div>
            
        </div>
    );
  }
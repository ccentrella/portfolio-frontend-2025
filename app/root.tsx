import { Links, Meta, Outlet, Scripts } from '@remix-run/react';

// @ts-expect-error For some reason produces file import error
import styles from '~/styles/main.scss?url';
import { LinksFunction } from '@remix-run/node';

export const links: LinksFunction = () => [{ rel: 'stylesheet', href: styles }];

export default function App() {
    return (
        <html>
            <head>
                <link rel='icon' href='data:image/x-icon;base64,AA' />
                <Meta />
                <Links />
            </head>
            <body>
                <Outlet />
                <Scripts />
            </body>
        </html>
    );
}

import { ExternalLink } from '@/components/molecules/ExternalLink';
import { type LayoutProps } from './types';

const Layout = ({ children }: LayoutProps) => (
  <>
    <header>
      <h1>{process.env.NEXT_PUBLIC_TITLE}</h1>
    </header>

    <main>{children}</main>

    <footer>
      <ExternalLink
        href="https://github.com/vdelafuenteHub"
        title="github.com/vdelafuenteHub"
      >
        github.com/vdelafuenteHub
      </ExternalLink>
    </footer>
  </>
);

export default Layout;

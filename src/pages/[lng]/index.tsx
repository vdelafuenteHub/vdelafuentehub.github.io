import { Home } from '@/components/pages/Home';

export { getStaticPaths, getStaticProps } from '@/ui/plugins/Intl';

export default function Page() {
  return (
    <>
      <Home />
    </>
  );
}

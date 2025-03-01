import { Home } from '@/components/pages/Home';

export { getStaticProps } from '@/ui/plugins/Intl';

export default function Page() {
  return (
    <>
      <Home />
    </>
  );
}

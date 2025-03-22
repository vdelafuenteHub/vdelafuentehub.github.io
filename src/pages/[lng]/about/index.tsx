import { About } from '@/components/pages/About';

export { getStaticPaths, getStaticProps } from '@/ui/plugins/Intl';

export default function Page() {
  return (
    <>
      <About />
    </>
  );
}

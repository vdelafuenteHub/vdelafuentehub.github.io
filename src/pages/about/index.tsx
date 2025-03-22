import { About } from '@/components/pages/About';

export { getStaticProps } from '@/ui/plugins/Intl';

export default function Page() {
  return (
    <>
      <About />
    </>
  );
}

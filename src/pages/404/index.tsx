import { NotFound } from '@/components/pages/NotFound';

export { getStaticProps } from '@/ui/plugins/Intl';

export default function Page() {
  return (
    <>
      <NotFound />
    </>
  );
}

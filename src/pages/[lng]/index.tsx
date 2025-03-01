import Sample from '@/components/pages/Sample';

export { getStaticPaths, getStaticProps } from '@/ui/plugins/Intl';

export default function Page() {
  return (
    <>
      <Sample />
    </>
  );
}

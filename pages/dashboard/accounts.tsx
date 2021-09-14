import FeatureUnavailable from '@/components/featureUnavail';
import Layout from '@/components/layout';
import { Center, Heading } from '@chakra-ui/react';

export default function Accounts() {
  return (
    <Layout>
      <FeatureUnavailable title="Accounts" />
    </Layout>
  );
}

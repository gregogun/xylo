import FeatureUnavailable from '@/components/featureUnavail';
import Layout from '@/components/layout';
import { Box, Center, Heading } from '@chakra-ui/react';

export default function Analytics() {
  return (
    <Layout>
      <FeatureUnavailable title="Analytics" />
    </Layout>
  );
}

import React from 'react';
import { Space, Divider } from 'antd';
import { Feature } from '../types/config';
import FeatureCard from './FeatureCard';

interface FeaturesSectionProps {
  features: Feature[];
}

const FeaturesSection: React.FC<FeaturesSectionProps> = ({ features }) => {
  return (
    <div id="features" style={{ scrollMarginTop: '80px' }}>
      <Divider />
      <Space direction="vertical" size="middle" style={{ width: '100%', marginBottom: '32px' }}>
        {features.map((feature) => (
          <FeatureCard key={feature.title} feature={feature} />
        ))}
      </Space>
    </div>
  );
};

export default FeaturesSection;


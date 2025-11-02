import React from 'react';
import { Card, Space, Typography } from 'antd';
import { Feature } from '../types/config';
import { iconMap } from '../config/features';

const { Text } = Typography;

interface FeatureCardProps {
  feature: Feature;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ feature }) => {
  const IconComponent = feature.icon ? iconMap[feature.icon as keyof typeof iconMap] : null;

  return (
    <Card>
      <Space>
        {IconComponent && <IconComponent style={{ fontSize: '20px', color: '#1890ff' }} />}
        <Text strong>{feature.title}</Text>
        <Text> - {feature.description}</Text>
      </Space>
    </Card>
  );
};

export default FeatureCard;


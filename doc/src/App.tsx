import React from 'react';
import { Layout, Typography, Divider, Row, Col } from 'antd';
import { pageConfig } from './config';
import FeaturesSection from './components/FeaturesSection';
import SectionRenderer from './components/SectionRenderer';
import Navigation from './components/Navigation';
import './App.css';

const { Content, Footer } = Layout;
const { Title, Paragraph } = Typography;

const App: React.FC = () => {
  return (
    <Layout className="layout">
      <Content className="content">
        <Row gutter={16}>
          <Col xs={24} sm={24} md={24} lg={18} xl={18}>
            <div className="main-content">
              <Title level={1}>{pageConfig.title}</Title>
              <Paragraph style={{ fontSize: '16px', marginBottom: '32px' }}>
                {pageConfig.description}
              </Paragraph>

              <FeaturesSection features={pageConfig.features} />

              {pageConfig.sections
                .filter((section) => section.id !== 'features')
                .map((section, index, filteredSections) => (
                  <React.Fragment key={section.id}>
                    <SectionRenderer section={section} />
                    {index < filteredSections.length - 1 && <Divider />}
                  </React.Fragment>
                ))}
            </div>
          </Col>
          <Navigation sections={pageConfig.sections} />
        </Row>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        {pageConfig.title} ©2025 Created by zhixin huang
      </Footer>
    </Layout>
  );
};

export default App;

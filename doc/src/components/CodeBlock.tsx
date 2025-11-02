import React from 'react';
import { Card } from 'antd';
import { CodeExample } from '../types/config';

interface CodeBlockProps {
  example: CodeExample;
  style?: React.CSSProperties;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ example, style }) => {
  return (
    <Card style={{ marginBottom: '24px', ...style }}>
      <pre style={{ margin: 0, whiteSpace: 'pre-wrap', fontSize: example.language === 'typescript' ? '14px' : '13px' }}>
        {example.code}
      </pre>
    </Card>
  );
};

export default CodeBlock;


import React from 'react';
import { Typography, Divider } from 'antd';
import { Section } from '../types/config';
import CodeBlock from './CodeBlock';

const { Title, Paragraph, Text } = Typography;

interface SectionRendererProps {
  section: Section;
  renderSubsections?: boolean;
}

const SectionRenderer: React.FC<SectionRendererProps> = ({ section, renderSubsections = true }) => {
  // 跳过特性章节，因为它有专门的组件处理
  if (section.id === 'features') {
    return null;
  }

  const renderContent = () => {
    const elements: React.ReactNode[] = [];

    // Divider 和标题
    elements.push(
      <Divider key={`divider-${section.id}`} />
    );
    elements.push(
      <Title key={`title-${section.id}`} level={section.level}>
        {section.title}
      </Title>
    );

    // 描述
    if (section.description) {
      elements.push(
        <Paragraph key={`desc-${section.id}`}>{section.description}</Paragraph>
      );
    }

    // 内容
    if (section.content) {
      elements.push(
        <Paragraph key={`content-${section.id}`}>{section.content}</Paragraph>
      );
    }

    // 代码示例
    if (section.examples && section.examples.length > 0) {
      section.examples.forEach((example, index) => {
        elements.push(
          <CodeBlock
            key={`example-${section.id}-${index}`}
            example={example}
            style={index === section.examples!.length - 1 && !section.subsections ? { marginBottom: '32px' } : undefined}
          />
        );
      });
    }

    // 列表
    if (section.lists && section.lists.length > 0) {
      elements.push(
        <ul key={`list-${section.id}`} style={{ margin: '16px 0', paddingLeft: '24px' }}>
          {section.lists.map((item, index) => (
            <li key={index} style={{ margin: '8px 0', lineHeight: '1.8' }}>
              {item.startsWith('`') && item.endsWith('`') ? (
                <Text code>{item.slice(1, -1)}</Text>
              ) : item.includes('**') ? (
                <Text dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
              ) : (
                item
              )}
            </li>
          ))}
        </ul>
      );
    }

    // 项目列表（支持文本和代码混合）
    if (section.items && section.items.length > 0) {
      elements.push(
        <div key={`items-${section.id}`}>
          {section.items.map((item, index) => {
            if (item.type === 'code') {
              return (
                <div key={index} style={{ margin: '8px 0' }}>
                  <Text code>{item.content}</Text>
                </div>
              );
            }
            // 处理文本中的加粗和代码
            let content = item.content;
            if (content.includes('**') || content.includes('`')) {
              // 替换 **文本** 为 <strong>文本</strong>
              content = content.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
              // 替换 `代码` 为 <code>代码</code>
              content = content.replace(/`([^`]+)`/g, '<code>$1</code>');
              return (
                <div
                  key={index}
                  style={{ margin: '8px 0', lineHeight: '1.8' }}
                  dangerouslySetInnerHTML={{ __html: content }}
                />
              );
            }
            return (
              <div key={index} style={{ margin: '8px 0', lineHeight: '1.8' }}>
                {content}
              </div>
            );
          })}
        </div>
      );
    }

    // 子章节
    if (renderSubsections && section.subsections && section.subsections.length > 0) {
      section.subsections.forEach((subsection, index) => {
        elements.push(
          <SectionRenderer key={`sub-${subsection.id}`} section={subsection} />
        );
        // 在子章节之间添加分隔符（除了最后一个）
        if (index < section.subsections!.length - 1) {
          elements.push(<Divider key={`divider-${subsection.id}`} />);
        }
      });
    }

    return elements;
  };

  return (
    <div id={section.id} style={{ scrollMarginTop: '80px' }}>
      {renderContent()}
    </div>
  );
};

export default SectionRenderer;


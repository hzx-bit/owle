import React, { useMemo } from 'react';
import { Anchor, Col } from 'antd';
import type { AnchorProps } from 'antd';
import { Section } from '../types/config';

interface NavigationProps {
  sections: Section[];
}

const Navigation: React.FC<NavigationProps> = ({ sections }) => {
  const anchorItems: AnchorProps['items'] = useMemo(() => {
    // 添加特性到导航（因为特性有专门的组件，但不在sections中）
    const allSections: Section[] = [
      { id: 'features', title: '特性', level: 2 },
      ...sections.filter((s) => s.id !== 'features'),
    ];

    return allSections
      .filter((section) => section.level <= 2) // 只显示一级和二级标题
      .map((section) => {
        const item: NonNullable<AnchorProps['items']>[number] = {
          key: section.id,
          href: `#${section.id}`,
          title: section.title,
        };

        // 如果有子章节且是使用章节，添加子项目
        if (section.subsections && section.subsections.length > 0 && section.id === 'usage') {
          item.children = section.subsections.map((sub) => ({
            key: sub.id,
            href: `#${sub.id}`,
            title: sub.title,
          }));
        }

        return item;
      }) as AnchorProps['items'];
  }, [sections]);

  return (
    <Col xs={0} sm={0} md={0} lg={6} xl={6}>
      <div className="anchor-wrapper">
        <Anchor items={anchorItems} affix={true} offsetTop={24} />
      </div>
    </Col>
  );
};

export default Navigation;


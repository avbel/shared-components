import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import NavigationItem from './NavigationItem';
import Anchor from '../Anchor';

export const Container = styled.div.withConfig({ displayName: 'NavigationItemsContainer' })`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  background: ${({ theme }) => theme.tab.bg};
  color: ${({ theme }) => theme.tab.fg};
  font-size: ${({ theme }) => theme.tab.fontSize};
  margin-bottom: ${({ theme }) => theme.tab.marginBottom};

  & > * {
    margin: ${({ theme }) => theme.tab.margin};
  }

  & > *:last-of-type {
    margin: 0;
    padding-right: 0;
  }

  & > a {
    color: inherit;
    text-decoration: none;
  }
`;

export const linksPropType = PropTypes.arrayOf(PropTypes.shape({
  to: PropTypes.string,
  onClick: PropTypes.func,
  content: PropTypes.node.isRequired,
  exact: PropTypes.bool,
  newTab: PropTypes.bool,
}));

const NavigationItems = ({ links, className, id }) => (
  <Container id={id} className={className}>
    {links.map((link) => (
      <Anchor
        key={`${link.content}_${link.to}`}
        to={link.to}
        onClick={link.onClick}
        exact={link.exact}
        newTab={link.newTab}
      >
        <NavigationItem>{link.content}</NavigationItem>
      </Anchor>
    ))}
  </Container>
);

NavigationItems.propTypes = {
  /**
   * Links to render in the list.
   */
  links: linksPropType,
  /**
   * Adds a class name to the link container element.
   */
  className: PropTypes.string,
  /**
   * Adds an id to the link container element.
   */
  id: PropTypes.string,
};
NavigationItems.defaultProps = {
  links: [],
  className: null,
  id: null,
};

NavigationItems.usage = `
Helper to generate a list of navigation items.

\`\`\`
<NavigationItems
  links={[
    { to: '/cat', exact: true, content: 'Cat' },
    { to: '/anotherCat', content: 'Another Cat' },
  ]}
/>
\`\`\`
`

NavigationItems.Item = NavigationItem;
export default NavigationItems;

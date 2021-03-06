import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

export const Container = styled.div.withConfig({ displayName: 'LoaderContainer' })`
  display: flex;
  flex-direction: row;
  margin: auto;
`;

const grow = keyframes`
  0% {
    transform: scale(0);
  }

  50% {
    opacity: 1;
    transform: scale(1);
  }

  100% {
    opacity: 0;
  }
`;

export const Dot = styled.div.withConfig({ displayName: 'LoaderDot' })`
  height: ${({ size }) => size};
  width: ${({ size }) => size};

  border-thickness: 2px;
  border-style: solid;
  border-color: ${({ theme, color }) => color ? color : theme.colors.primary};
  border-radius: 50%;
  margin: 0 5px;
  transform: scale(0);
  animation: ${grow} 1000ms ease infinite 0ms;

  &:nth-child(2) {
    animation-delay: 300ms;
  }
  &:nth-child(3) {
    animation-delay: 600ms;
  }

  &:first-child {
    margin-left: 0;
  }
  &:last-child {
    margin-right: 0;
  }
`;

Dot.defaultProps = {
  size: '20px',
  color: null,
};

class Loader extends React.Component {
  static propTypes = {
    /**
     * The size of each loader 'dot'. Can be any CSS dimension string.
     */
    size: PropTypes.string,
    /**
     * The color of the loader. Defaults to the primary theme color.
     */
    color: PropTypes.string,
    /**
     * Adds a class name to the element.
     */
    className: PropTypes.string,
    /**
     * Adds an id to the element.
     */
    id: PropTypes.string,
  };

  static defaultProps = {
    size: '20px',
    color: null,
    className: null,
    id: null,
  };

  render() {
    const { size, color, id, className } = this.props;

    return (
      <Container id={id} className={className}>
        <Dot size={size} color={color} />
        <Dot size={size} color={color} />
        <Dot size={size} color={color} />
      </Container>
    );
  }
}

Loader.usage = `
Drop a loader anywhere you want to display a loading animation. It should self-center in a flexbox.

Use the \`size\` prop to pass a custom dot size, \`color\` to override the color.

\`\`\`
<Loader size="20px" />
\`\`\`
`;

export default Loader;

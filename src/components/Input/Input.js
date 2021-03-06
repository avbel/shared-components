import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const StyledInput = styled.input`
  color: ${({ theme }) => theme.colors.black};
  background: ${({ theme }) => theme.colors.white};
  letter-spacing: 0.02em;
  line-height: ${({ theme }) => theme.input.lineHeight};
  font-size: ${({ theme }) => theme.input.fontSize};
  font-family: ${({ theme }) => theme.input.fontFamily};
  transition: all 0.2s ease;
  outline: none;
  width: 100%;
  padding: ${({ theme }) => theme.padding.medium};
  display: block;
  border: ${({ theme }) => theme.input.border};

  &:focus {
    box-shadow: inset 0 -5px 0 ${({ theme }) => theme.colors.primaryLight};
    border: 1px solid ${({ theme }) => theme.colors.border};
  }
  &:focus + div {
    opacity: 1;
  }

  &:disabled {
    background: ${({ theme }) => theme.colors.disabled};
    border: 1px solid ${({ theme }) => theme.colors.border};
    opacity: 0.5;
  }

  ${({ visited, theme }) => visited ?
    css`
      &:invalid {
        box-shadow: inset 0 -5px 0 ${theme.colors.errorBackgroundLight};
        border: 1px solid ${theme.colors.errorBorder};
      }
    ` : ''
  }

  ${({ invalid, error, theme }) => invalid || error ?
    `
    box-shadow: inset 0 -5px ${theme.colors.errorBackgroundLight};
    border: 1px solid ${theme.colors.errorBorder};
    ` :
    ''
  }
`;

class Input extends React.Component {
  static propTypes = {
    /**
     * The value of the input.
     */
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    /**
     * Handler for the onchange event.
     */
    onChange: PropTypes.func,
    /**
     * Handler for the onblur event.
     */
    onBlur: PropTypes.func,
    /**
     * Handler for the onfocus event.
     */
    onFocus: PropTypes.func,
    /**
       * Handler for the onkeydown event.
       */
    onKeyDown: PropTypes.func,
    /**
     * Controls whether the user can change this element.
     */
    disabled: PropTypes.bool,
    /**
     * Controls whether the element is marked as required for form submission.
     */
    required: PropTypes.bool,
    /**
     * Adds an id to the element.
     */
    id: PropTypes.string,
    /**
     * Adds a class name to the element.
     */
    className: PropTypes.string,
    /**
     * Sets the type of data expected for this input.
     */
    type: PropTypes.string,
    /**
     * Styles this input as being invalid
     */
    invalid: PropTypes.bool,
    /**
     * Styles this input as having an error related to it
     */
    error: PropTypes.bool,
  };

  static defaultProps = {
    disabled: false,
    required: false,
    id: null,
    type: 'text',
    onChange: () => null,
    onBlur: () => null,
    onFocus: () => null,
    onKeyDown: () => null,
    className: null,
    invalid: false,
    error: false,
  };

  constructor(props) {
    super(props);
    this.state = { visited: false };
  }

  onBlur = (event) => {
    this.setState({ visited: true });
    if (this.props.onBlur) {
      this.props.onBlur(event);
    }
  };

  render() {
    const {
      disabled,
      id,
      className,
      invalid,
      onFocus,
      onChange,
      onKeyDown,
      value,
      required,
      type,
      error,
    } = this.props;
    const { visited } = this.state;
    return (
      <StyledInput
        onBlur={this.onBlur}
        onKeyDown={onKeyDown}
        onFocus={onFocus}
        visited={visited}
        id={id}
        className={className}
        invalid={invalid}
        onChange={onChange}
        value={value}
        required={required}
        type={type}
        error={error}
        disabled={disabled}
      />
    );
  }
}

Input.usage = `
A basic styled text input.
`;

export default Input;

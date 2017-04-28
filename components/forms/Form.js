import styled from 'styled-components';
import { FieldGroup } from '../fields';
import { Container as BinaryFieldContainer } from '../fields/BinaryField';
import { Container as FieldWrapperContainer } from '../fields/FieldWrapper';
import FormText from './FormText';

const Form = styled.form.withConfig({ displayName: 'Form' })`
  background: 'transparent';
  color: inherit;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: stretch;

  /* these are field groups which help layout rows inside a form */
  & > ${FieldGroup},
  & > ${FormText} {
    flex: 1 0 100%;
    margin-top: ${({ theme }) => theme.form.elementVerticalSpacing / 2}px;
    margin-bottom: ${({ theme }) => theme.form.elementVerticalSpacing / 2}px;
  }

  /* these are inputs directly within a field group inside a form */
  & > ${FieldGroup} > ${FieldWrapperContainer}:not(:first-child),
  & > ${FieldGroup} > ${BinaryFieldContainer}:not(:first-child) {
    margin-left: ${({ theme }) => theme.form.elementHorizontalSpacing / 2}px;
  }
  & > ${FieldGroup} > ${FieldWrapperContainer}:not(:last-child),
  & > ${FieldGroup} > ${BinaryFieldContainer}:not(:last-child) {
    margin-right: ${({ theme }) => theme.form.elementHorizontalSpacing / 2}px;
  }

  /* these are 'loose' inputs placed directly inside a form */
  & > ${FieldWrapperContainer},
  & > ${BinaryFieldContainer} {
    margin: ${({ theme }) => theme.input.margin};
    margin-top: ${({ theme }) => theme.form.elementVerticalSpacing / 2}px;
    margin-bottom: ${({ theme }) => theme.form.elementVerticalSpacing / 2}px;

    /*
      loose inputs naturally take up about 1/2 width.
      we don't enforce this with margin, since that would cause extra margins on the 'outside'
      of the form. Instead, we specify how much space should be between inputs by subtracting it
      from their flex-basis, and then use the Form's justify-content and wrapping to make sure that
      space goes between the items on the inside of the form.
    */
    flex: 0 1 calc(50% - ${({ theme }) => theme.form.elementHorizontalSpacing / 2}px);
  }
`;

Form.usage = `
# Form

Form is a smart layout component. It tries its best to lay out any Input components you place within it in a reasonable way. There are two ways to put Inputs in forms:

1. 'Loose' inputs, placed directly in the form. The form will attempt to size these inputs to half the total width of the form.

2. FieldGroups, which take up a full row in the form, and can align / size their child inputs however they want using FlexBox.

Regardless of whether Inputs are 'loose' or inside a FieldGroup, the Form will try to put the proper padding between them and ensure that the outside edges are not padded.

\`\`\`
<FormBox>
  <Form>
    <TextInput />
    <TextInput />
    <FieldGroup>
      <ButtonInput />
      <LinkInput />
    </FieldGroup>
  </Form>
</FormBox>
\`\`\`
`;

export default Form;
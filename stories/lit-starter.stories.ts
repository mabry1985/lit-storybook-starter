import { html, TemplateResult } from 'lit';
import '../src/LitStarter.js';

export default {
  title: 'LitStarter',
  component: 'lit-starter',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  title?: string;
  backgroundColor?: string;
}

const Template: Story<ArgTypes> = ({
  title,
  backgroundColor = '#9AADBF',
}: ArgTypes) => html`
  <lit-starter
    style="--lit-starter-background-color: ${backgroundColor}"
    .title=${title!}
  ></lit-starter>
`;

export const App = Template.bind({});
App.args = {
  title: 'Lit + Storybook = 🔥📘',
};

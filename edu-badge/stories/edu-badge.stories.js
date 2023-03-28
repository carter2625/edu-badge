import { html } from 'lit';
import '../src/edu-badge.js';

export default {
  title: 'EduBadge',
  component: 'edu-badge',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ title, backgroundColor }) {
  return html`
    <edu-badge
      style="--edu-badge-background-color: ${backgroundColor || 'white'}"
      .title=${title}
    >
    </edu-badge>
  `;
}

export const App = Template.bind({});
App.args = {
  title: 'My app',
};

import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
//import { linkTo } from '@storybook/addon-links';

//import { Button, Welcome } from '@storybook/react/demo';

import Button from "../components/shared/Button";
import Editor from "../components/shared/Editor";
import TextBox from "../components/shared/TextBox";

storiesOf("Shared - Button", module)
  .add("submit", () => (
    <Button text="Post" type="submit" onClick={action("Triggered. onClick()")} />
  ))
  .add("action-button", () => (
    <Button text="Delete" type="action" onClick={action("Triggered. onClick()")} />
  ));

storiesOf("Shared - Editor",module)
.add("mini", () => (
  <Editor type="mini" onChange={action("Triggered. onChange()")} />
))
.add("full", () => (
  <Editor type="full" onChange={action("Triggered. onChange()")} />
));

storiesOf("Shares - TextBox",module)
.add("default",() => (
  <TextBox name="name" text="" label="TextLabel" onChange={action("Triggered onChange of TextBox")} />
));

/*storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));*/

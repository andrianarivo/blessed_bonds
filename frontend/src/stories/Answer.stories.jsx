import { fn } from '@storybook/test';

import Answer from '../components/Answer';
import Carousel from '../components/Carousel';
import BlurBackground from '../components/BlurBackground';

export default {
  title: 'Components/Answer',
  component: Answer,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onClickEdit: { table: { disable: true } },
    onClickRemove: { table: { disable: true } },
  },
};

export const Answer1 = {
  args: {
    key: 1,
    title: 'Be patient ⏰',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et dui id leo suscipit imperdiet. Nunc congue mauris id felis pellentesque, non vulputate felis pellentesque.',
    onClickEdit: fn(),
    onClickRemove: fn(),
  },
};

export const Answer2 = {
  args: {
    key: 2,
    title: 'Gear up ⚙️',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et dui id leo suscipit imperdiet. Nunc congue mauris id felis pellentesque, non vulputate felis pellentesque.',
    onClickEdit: fn(),
    onClickRemove: fn(),
  },
};

export const Slider = {
  render: () => (
    <BlurBackground className="w-96">
      <Carousel>
        <Answer {...Answer1.args} />
        <Answer {...Answer2.args} />
      </Carousel>
    </BlurBackground>
  ),
};

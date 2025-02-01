import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Avatar>
      <AvatarImage src='https://github.com/shadcn.png' alt='@shadcn' />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  ),
};

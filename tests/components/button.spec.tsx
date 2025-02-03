import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { Button } from '../../src/components/ui/button';

describe('Button component', () => {
  it('renders correctly', () => {
    render(<Button>Click me</Button>);
    expect(
      screen.getByRole('button', { name: /click me/i }),
    ).toBeInTheDocument();
  });

  it('applies variant and size correctly', () => {
    render(
      <Button variant='destructive' size='lg'>
        Delete
      </Button>,
    );
    const button = screen.getByRole('button', { name: /delete/i });

    expect(button).toHaveClass(
      'bg-destructive',
      'text-destructive-foreground',
      'hover:bg-destructive/90',
    );
    expect(button).toHaveClass('h-11', 'rounded-md', 'px-8');
  });

  it('calls onClick when clicked', () => {
    const onClick = vi.fn();
    render(<Button onClick={onClick}>Click me</Button>);

    fireEvent.click(screen.getByRole('button', { name: /click me/i }));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('renders as a different component when using asChild', () => {
    render(
      <Button asChild>
        <a href='/test'>Go to test</a>
      </Button>,
    );

    const link = screen.getByRole('link', { name: /go to test/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/test');
  });

  it('supports disabled state', () => {
    render(<Button disabled>Disabled</Button>);
    const button = screen.getByRole('button', { name: /disabled/i });
    expect(button).toBeDisabled();
  });

  it('supports aria-label for accessibility', () => {
    render(<Button aria-label='Custom Label' />);
    expect(screen.getByLabelText('Custom Label')).toBeInTheDocument();
  });
});

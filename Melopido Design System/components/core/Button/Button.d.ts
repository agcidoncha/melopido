export interface ButtonProps {
  /** Visual style: round pink pill CTA, light outline, primary solid, amazon commerce CTA, guide neutral card CTA */
  variant?: 'round' | 'light' | 'primary' | 'amazon' | 'guide';
  href?: string;
  children?: React.ReactNode;
  /** Shows the circular arrow glyph used on round CTAs */
  arrow?: boolean;
  disabled?: boolean;
}

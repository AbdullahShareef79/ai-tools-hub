interface SectionDividerProps {
  spacing?: 'sm' | 'md' | 'lg';
}

const spacingClasses = {
  sm: 'my-8',
  md: 'my-12',
  lg: 'my-16',
};

export default function SectionDivider({ spacing = 'md' }: SectionDividerProps) {
  return <hr className={`border-slate-200 ${spacingClasses[spacing]}`} />;
}

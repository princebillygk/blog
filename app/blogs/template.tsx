export interface BlogTemplateProps {
  children: React.ReactNode;
}
export default function BlogTemplate({ children }: BlogTemplateProps) {
  return (
    <div>
      <h2>Blog Template</h2>
      {children}
    </div>
  );
}

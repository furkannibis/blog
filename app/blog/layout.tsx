export default function Blog({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <section>{children}</section>
    );
  }
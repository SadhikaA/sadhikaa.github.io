import { useRouter } from 'next/router';

export default function Project() {
  const router = useRouter();
  const { project } = router.query;

  return (
    <div>
      <h1>{project}</h1>
      {/* Add content for the specific project */}
    </div>
  );
}
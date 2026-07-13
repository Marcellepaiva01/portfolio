import { useNavigate } from 'react-router-dom';
import { EssenceCaseStudy } from '@/app/components/essence-case-study';

export function CaseEssencePage() {
  const navigate = useNavigate();

  return (
    <EssenceCaseStudy
      onClose={() => navigate('/')}
      onBack={() => navigate('/')}
    />
  );
}

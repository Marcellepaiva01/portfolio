import { useNavigate } from 'react-router-dom';
import { EmbalagemCaseStudy } from '@/app/components/embalagem-case-study';

export function CaseEmbalagemPage() {
  const navigate = useNavigate();

  return (
    <EmbalagemCaseStudy
      onClose={() => navigate('/')}
      onBack={() => navigate('/')}
    />
  );
}

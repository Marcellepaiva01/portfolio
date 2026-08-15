import { useNavigate } from 'react-router-dom';
import { DescomplicaCaseStudy } from '@/app/components/descomplica-case-study';

export function CaseDescomplicaPage() {
  const navigate = useNavigate();

  return (
    <DescomplicaCaseStudy
      onClose={() => navigate('/')}
      onBack={() => navigate('/')}
    />
  );
}

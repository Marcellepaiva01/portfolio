import { useNavigate } from 'react-router-dom';
import { CaseOrganizei } from '@/app/components/case-organizei';

export function CaseOrganizeiPage() {
  const navigate = useNavigate();

  return <CaseOrganizei onClose={() => navigate('/')} />;
}

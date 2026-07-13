import { useNavigate } from 'react-router-dom';
import { CaseDietaFinanceira } from '@/app/components/case-dieta-financeira';

export function CaseDietaFinanceiraPage() {
  const navigate = useNavigate();

  return <CaseDietaFinanceira onClose={() => navigate('/')} />;
}

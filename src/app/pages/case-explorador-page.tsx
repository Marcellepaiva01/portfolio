import { useNavigate } from 'react-router-dom';
import { ExplorerCaseStudy } from '@/app/components/ExplorerCaseStudy';

export function CaseExploradorPage() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/');
  };

  const handleContact = () => {
    navigate('/');
    setTimeout(() => {
      const element = document.getElementById('contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return <ExplorerCaseStudy onBack={handleBack} onContact={handleContact} />;
}
import { useNavigate } from 'react-router-dom';
import { SignageCaseStudy } from '@/app/components/SignageCaseStudy';

export function CaseSinalizacaoPage() {
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

  return <SignageCaseStudy onBack={handleBack} onContact={handleContact} />;
}
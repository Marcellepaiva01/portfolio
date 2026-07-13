import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from '@/app/pages/home-page';
import { CaseOrganizeiPage } from '@/app/pages/case-organizei-page';
import { CaseDietaFinanceiraPage } from '@/app/pages/case-dieta-financeira-page';
import { CaseExploradorPage } from '@/app/pages/case-explorador-page';
import { CaseSinalizacaoPage } from '@/app/pages/case-sinalizacao-page';
import { CaseEmbalagemPage } from '@/app/pages/case-embalagem-page';
import { CaseEssencePage } from '@/app/pages/case-essence-page';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/case/essence-parfum" element={<CaseEssencePage />} />
        <Route path="/case/organizei" element={<CaseOrganizeiPage />} />
        <Route path="/case/dieta-financeira" element={<CaseDietaFinanceiraPage />} />
        <Route path="/case/explorador-emocoes" element={<CaseExploradorPage />} />
        <Route path="/case/sinalizacao-museu" element={<CaseSinalizacaoPage />} />
        <Route path="/case/embalagem-sacos-lixo" element={<CaseEmbalagemPage />} />
      </Routes>
    </BrowserRouter>
  );
}
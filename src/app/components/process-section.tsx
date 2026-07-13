import { Search, Lightbulb, Layers, Wrench, CheckCircle, Rocket } from 'lucide-react';

const processSteps = [
  {
    icon: Search,
    title: 'Descoberta',
    description: 'Entendimento do problema e necessidades'
  },
  {
    icon: Lightbulb,
    title: 'Pesquisa',
    description: 'Entrevistas, dados e insights'
  },
  {
    icon: Layers,
    title: 'Ideação',
    description: 'Estratégia e arquitetura'
  },
  {
    icon: Wrench,
    title: 'Prototipação',
    description: 'Wireframes e design de interface'
  },
  {
    icon: CheckCircle,
    title: 'Validação',
    description: 'Testes e iterações'
  },
  {
    icon: Rocket,
    title: 'Entrega',
    description: 'Handoff e acompanhamento'
  }
];

export function ProcessSection() {
  return (
    <section id="process" className="py-20 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <span className="text-accent text-xs tracking-wider uppercase">Processo</span>
          <h2 className="mt-2 mb-3">Como eu trabalho</h2>
          <p className="text-muted-foreground max-w-2xl">
            Processo estruturado e centrado no usuário.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.title} className="p-5 bg-card rounded-lg border border-border hover:border-accent/50 transition-colors group">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                    <Icon size={20} className="text-accent" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-accent">0{index + 1}</span>
                      <h4 className="text-sm">{step.title}</h4>
                    </div>
                    <p className="text-xs text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 p-5 bg-card rounded-lg border border-accent/20 text-center">
          <p className="text-sm text-muted-foreground max-w-3xl mx-auto">
            <strong className="text-foreground">Entender antes de criar, testar antes de lançar, e sempre colocar o usuário no centro das decisões.</strong>
          </p>
        </div>
      </div>
    </section>
  );
}

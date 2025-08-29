import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import businessExecutives from "@/assets/business-executives.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-hero relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-accent rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-60 left-1/4 w-1.5 h-1.5 bg-primary rounded-full animate-pulse delay-500"></div>
        <div className="absolute bottom-40 right-20 w-2 h-2 bg-accent rounded-full animate-pulse delay-700"></div>
        <div className="absolute bottom-60 left-1/3 w-1 h-1 bg-primary rounded-full animate-pulse delay-300"></div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <header className="flex justify-between items-center mb-12">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold text-foreground">
              JORNADA <span className="text-primary">EQUITY</span>
            </h1>
          </div>
        </header>

        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <Badge variant="default" className="bg-primary text-primary-foreground px-4 py-2 text-sm font-medium">
                2 DIAS
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                IMERSÃO PRESENCIAL
              </Badge>
            </div>

            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight">
                ACELERE 10 ANOS DE
                <br />
                <span className="bg-gradient-accent bg-clip-text text-transparent">
                  RESULTADO EM APENAS
                </span>
                <br />
                DOIS DIAS DE IMERSÃO
              </h2>

              <div className="space-y-4 text-lg text-muted-foreground">
                <p>Descubra qual é o método validado</p>
                <p>por trás dos ecossistemas de negócios</p>
                <p className="text-primary font-semibold">bilionários e escale seu modelo</p>
                <p className="text-accent font-semibold">de negócio na Nova Economia</p>
              </div>
            </div>

            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow px-8 py-4 text-lg">
              QUERO PARTICIPAR
            </Button>
          </div>

          {/* Right Content */}
          <div className="relative">
            <img 
              src={businessExecutives}
              alt="Executivos de negócios profissionais"
              className="w-full h-auto rounded-lg shadow-elevated"
            />
            
            {/* Stats Cards */}
            <div className="absolute -bottom-8 -left-8 right-8 space-y-4">
              <Card className="bg-card/90 backdrop-blur-sm border-border p-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-primary text-primary-foreground rounded-lg p-2 font-bold text-xl">
                    +2<span className="text-sm">MIL</span>
                  </div>
                  <div className="text-sm">
                    <p className="font-semibold text-card-foreground">EMPRESÁRIOS IMPACTADOS</p>
                    <p className="text-muted-foreground">PELA JORNADA EQUITY</p>
                  </div>
                </div>
              </Card>

              <Card className="bg-card/90 backdrop-blur-sm border-border p-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-accent text-accent-foreground rounded-lg p-2 font-bold text-xl">
                    +1M
                  </div>
                  <div className="text-sm">
                    <p className="font-semibold text-card-foreground">PARA EMPRESAS QUE</p>
                    <p className="text-muted-foreground">FATURAM <span className="text-accent font-bold">MAIS DE 1 MILHÃO</span></p>
                    <p className="text-muted-foreground">POR ANO</p>
                  </div>
                </div>
              </Card>

              <Card className="bg-card/90 backdrop-blur-sm border-border p-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-secondary text-secondary-foreground rounded-lg p-2">
                    <div className="w-6 h-6 border-2 border-current rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-current rounded-full"></div>
                    </div>
                  </div>
                  <div className="text-sm">
                    <p className="font-semibold text-card-foreground">MÉTODO COMPROVADO</p>
                    <p className="text-muted-foreground">PARA EMPRESAS DE TODOS</p>
                    <p className="text-muted-foreground">SEGMENTOS DE MERCADO</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
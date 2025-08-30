import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { StarBorder } from "@/components/ui/star-border";
import businessExecutives from "@/assets/business-executives.jpg";
const HeroSection = () => {
  return <section className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/lovable-uploads/af52bf16-1207-478b-aaa4-eceab312a25e.png)'
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      {/* Animated background particles */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-accent rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-60 left-1/4 w-1.5 h-1.5 bg-primary rounded-full animate-pulse delay-500"></div>
        <div className="absolute bottom-40 right-20 w-2 h-2 bg-accent rounded-full animate-pulse delay-700"></div>
        <div className="absolute bottom-60 left-1/3 w-1 h-1 bg-primary rounded-full animate-pulse delay-300"></div>
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Header */}
        <header className="flex justify-between items-center mb-12">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold text-foreground">
              PENSANDO FORA DO <span className="text-primary">PALCO</span>
            </h1>
          </div>
        </header>

        <div className="grid lg:grid-cols-3 gap-8 items-start min-h-[80vh]">
          {/* Column 1: Text Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start space-x-4 flex-wrap gap-2">
              <Badge variant="default" className="bg-primary text-primary-foreground px-4 py-2 text-sm font-medium text-center">
                MARCA PESSOAL
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm text-center">
                PORQUE A VIDA É UM SHOW
              </Badge>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground leading-tight">
                A FORMA MAIS
                <br />
                <span className="bg-gradient-accent bg-clip-text text-transparent">
                  RÁPIDA E INTELIGENTE
                </span>
                <br />
                DE GERAR MAIS VENDAS
              </h2>

              <div className="space-y-4 text-base lg:text-lg text-muted-foreground">
                <p>A forma mais rápida e inteligente de gerar mais</p>
                <p>transparência, credibilidade, confiança e vendas</p>
                <p>em uma empresa, é quando o dono entende</p>
                <p className="text-primary font-semibold">o valor da marca pessoal.</p>
                <p className="mt-6 text-accent font-semibold">
                  Sim, você pode ser autêntico, não precisa ser perfeito,
                </p>
                <p className="text-muted-foreground">
                  nem falar bonito, não precisa virar blogueiro(a),
                </p>
                <p className="text-blue-400 font-medium text-2xl lg:text-3xl">
                  eu te ajudo nisso.
                </p>
              </div>
            </div>

            <div className="flex justify-center lg:justify-start relative z-20">
              <StarBorder 
                as="a" 
                href="https://api.whatsapp.com/send/?phone=554797083422&text=Ol%C3%A1,+vim+da+p%C3%A1gina+*Pensando+Fora+do+Palco*"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-semibold relative z-20"
              >
                QUERO SABER MAIS
              </StarBorder>
            </div>
          </div>

          {/* Column 2: Stats Cards */}
          <div className="flex flex-col items-center lg:items-start justify-center space-y-4 h-full">
            <Card className="bg-card/90 backdrop-blur-sm border-border p-4 transition-all duration-300 ease-in-out hover:-translate-y-2.5 hover:shadow-lg hover:shadow-black/30 w-full max-w-sm card">
              <div className="flex items-center justify-center lg:justify-start space-x-3 text-center lg:text-left">
                <div className="bg-primary text-primary-foreground rounded-lg p-2 font-bold text-xl text-center">
                  100%
                </div>
                <div className="text-sm">
                  <p className="font-semibold text-card-foreground">AUTENTICIDADE</p>
                  <p className="text-muted-foreground">SEM PRECISAR SER PERFEITO</p>
                </div>
              </div>
            </Card>

            <Card className="bg-card/90 backdrop-blur-sm border-border p-4 transition-all duration-300 ease-in-out hover:-translate-y-2.5 hover:shadow-lg hover:shadow-black/30 w-full max-w-sm card">
              <div className="flex items-center justify-center lg:justify-start space-x-3 text-center lg:text-left">
                <div className="bg-accent text-accent-foreground rounded-lg p-2 font-bold text-xl text-center">
                  +VENDAS
                </div>
                <div className="text-sm">
                  <p className="font-semibold text-card-foreground">TRANSPARÊNCIA</p>
                  <p className="text-muted-foreground">CREDIBILIDADE E <span className="text-accent font-bold">CONFIANÇA</span></p>
                </div>
              </div>
            </Card>

            <Card className="bg-card/90 backdrop-blur-sm border-border p-4 transition-all duration-300 ease-in-out hover:-translate-y-2.5 hover:shadow-lg hover:shadow-black/30 w-full max-w-sm card">
              <div className="flex items-center justify-center lg:justify-start space-x-3 text-center lg:text-left">
                <div className="bg-secondary text-secondary-foreground rounded-lg p-2 text-center">
                  <div className="w-6 h-6 border-2 border-current rounded-full flex items-center justify-center mx-auto">
                    <div className="w-2 h-2 bg-current rounded-full"></div>
                  </div>
                </div>
                <div className="text-sm">
                  <p className="font-semibold text-card-foreground">NÃO PRECISA VIRAR</p>
                  <p className="text-muted-foreground">BLOGUEIRO(A), EU TE AJUDO</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Column 3: Expert Image */}
          <div className="flex justify-center lg:justify-end items-center">
            <img 
              src="/lovable-uploads/ba74a1a7-7bd6-4800-8144-dbb252c92b9a.png"
              alt="Expert em marca pessoal"
              className="w-full max-w-sm lg:max-w-md h-auto object-cover opacity-90 rounded-lg expert-photo"
            />
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;
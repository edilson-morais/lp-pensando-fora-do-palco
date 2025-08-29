import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import businessExecutives from "@/assets/business-executives.jpg";
const HeroSection = () => {
  return <section className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/lovable-uploads/09dc01c4-953e-4e5d-8176-7197cd4cc34e.png)'
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

        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <Badge variant="default" className="bg-primary text-primary-foreground px-4 py-2 text-sm font-medium">
                MARCA PESSOAL
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm">
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

              <div className="space-y-4 text-lg text-muted-foreground">
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
                <p className="text-blue-400 font-medium text-3xl">
                  eu te ajudo nisso.
                </p>
              </div>
            </div>

            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow px-8 py-4 text-lg">
              QUERO SABER MAIS
            </Button>
          </div>

          {/* Right Content */}
          <div className="relative">
            
            
            {/* Stats Cards */}
            <div className="relative top-12 space-y-4 w-80 ml-auto">
              <Card className="bg-card/90 backdrop-blur-sm border-border p-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-primary text-primary-foreground rounded-lg p-2 font-bold text-xl">
                    100%
                  </div>
                  <div className="text-sm">
                    <p className="font-semibold text-card-foreground">AUTENTICIDADE</p>
                    <p className="text-muted-foreground">SEM PRECISAR SER PERFEITO</p>
                  </div>
                </div>
              </Card>

              <Card className="bg-card/90 backdrop-blur-sm border-border p-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-accent text-accent-foreground rounded-lg p-2 font-bold text-xl">
                    +VENDAS
                  </div>
                  <div className="text-sm">
                    <p className="font-semibold text-card-foreground">TRANSPARÊNCIA</p>
                    <p className="text-muted-foreground">CREDIBILIDADE E <span className="text-accent font-bold">CONFIANÇA</span></p>
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
                    <p className="font-semibold text-card-foreground">NÃO PRECISA VIRAR</p>
                    <p className="text-muted-foreground">BLOGUEIRO(A), EU TE AJUDO</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;
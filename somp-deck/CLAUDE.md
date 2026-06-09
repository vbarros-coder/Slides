# SOMP Deck — Arquitectura e Regras de Ouro

## Visão Geral
Apresentação cinematográfica em Next.js (App Router) + TypeScript + Tailwind + GSAP + ScrollTrigger + Spline 3D sobre Síndrome dos Ovários Policísticos (SOMP). Navegação via setas (← →) ou teclado (A/D). Sem scroll. 10 slides.

## Stack
- **Next.js 16** (App Router)
- **TypeScript** (strict mode)
- **Tailwind CSS 4** (responsivo)
- **GSAP 3.15** + **@gsap/react** (animações obrigatórias)
- **@splinetool/react-spline 4** (visualizações 3D em 3–4 slides)
- **ESLint + TypeScript** (zero erros no build)

## Paleta de Cores
- **Fundo principal**: `#1A1A2E` ou `#0F1419` (escuro)
- **Acentos primários**: `#E91E8C` (rosa) ou `#9B59B6` (roxo)
- **Âncora**: `#003B5C` (azul escuro)
- **Texto**: `#FFFFFF` (branco), `#E0E0E0` (cinza claro)
- **Contraste**: mínimo WCAG AA (validar com WebAIM Contrast Checker)

## Tipografia
- **Títulos**: Montserrat (Google Fonts, 600–700 weight)
- **Corpo**: sans-serif padrão (system fonts, fallback para Inter)
- **Tamanhos**:
  - Títulos: 3.5rem–4.5rem
  - Subtítulos: 1.5rem–2rem
  - Corpo: 1rem–1.125rem

## Estrutura de Pastas
```
somp-deck/
├── app/
│   ├── layout.tsx          # Root layout + context provider
│   ├── page.tsx            # Redireciona para slide 1
│   ├── slides/
│   │   ├── [numero]/
│   │   │   ├── page.tsx    # Conteúdo do slide
│   │   │   └── ...
│   │   ├── layout.tsx      # Layout comum para slides
│   ├── globals.css         # Tailwind + estilos globais
│   └── ...
├── components/
│   ├── SlideContainer.tsx      # Wrapper comum (fundo, padding, transições)
│   ├── SlideTitle.tsx          # Título com clip-path reveal
│   ├── AnimatedText.tsx        # Texto com GSAP
│   ├── Card.tsx                # Card padrão (com hover)
│   ├── Navigation.tsx          # Setas e indicador de slide
│   ├── Spline3D.tsx            # Wrapper para Spline
│   └── ...
├── hooks/
│   ├── useSlideNavigation.ts   # Context hook para navegação
│   └── useGSAPAnimation.ts     # Helpers GSAP (se necessário)
├── context/
│   ├── SlideContext.tsx        # State global de slides (número atual, direção)
│   └── ...
├── lib/
│   ├── animations.ts           # Funções GSAP reutilizáveis
│   └── ...
├── public/
│   ├── fonts/                  # Montserrat (self-hosted se offline)
│   ├── images/                 # Ícones, backgrounds
│   └── ...
├── CLAUDE.md                   # Este arquivo
├── tsconfig.json               # Strict mode ativado
├── tailwind.config.ts          # Cores, tipografia customizadas
├── next.config.ts              # Config Next.js
└── pnpm-lock.yaml
```

## Regras de Ouro

### 1. Animações
- **Obrigatório**: Todo elemento que entra ou sai de um slide usa GSAP via `useGSAP` hook.
- **Permitidas**: `transform`, `opacity`, `clip-path`.
- **Proibidas**: `width`, `height`, `top`, `left`, `bottom`, `right` (usar Tailwind ou transform).
- **Eases**: `power3.out`, `power3.inOut`, `expo.out` apenas.
- **Duração padrão**: 0.6s–1s (nunca abrupt; mínimo 0.6s, máximo 1s para transições entre slides).
- **ScrollTrigger**: Não necessário (sem scroll); remover `@gsap/scrolltrigger` se instalado.

### 2. Navegação
- **Via setas**: ← (slide anterior), → (próximo slide).
- **Via teclado**: A (anterior), D (próximo).
- **Via clique**: botões "Voltar" e "Próximo" no rodapé.
- **Transição entre slides**: fade + slide (0.6–0.8s, `power3.inOut`).
- **Pré-carregamento**: próximo slide renderiza offscreen para evitar delay.
- **Estado global**: `SlideContext` rastreia `currentSlide` (0–9) e `direction` (+1 ou -1).

### 3. Responsivo
- **Desktop**: 1920×1080 (alvo principal).
- **Tablet**: 768×1024 (iPad).
- **Mobile**: 390px+ (iPhone 12 mínimo).
- **Ferramenta**: Tailwind breakpoints (`sm`, `md`, `lg`, `xl`, `2xl`).
- **Teste**: DevTools responsive mode antes de finalizar cada slide.
- **Sem layout shift**: transições de animação não devem causar reflow.

### 4. Acessibilidade
- **prefers-reduced-motion**: versão estática sem animações (GSAP respeitará essa preferência).
- **Contraste**: mínimo WCAG AA (não usar cores com contraste baixo).
- **Sem conteúdo essencial em animação**: todos os textos/informações devem ser legíveis instantaneamente.
- **Teste**: Lighthouse Accessibility ≥ 90 em cada slide.

### 5. Spline 3D
- **Máximo**: 3–4 slides com Spline (peso, performance).
- **Predefinido**: Slides 4 e 5 (visualizações do sistema reprodutivo).
- **Carregamento**: <3s em rede normal (monitorar via DevTools Network).
- **Fallback**: Se Spline não carregar, exibir imagem estática ou placeholder.
- **Performance**: FPS ≥ 45 durante apresentação (monitorar com DevTools Performance).

### 6. Validação de Build
**Checklist obrigatório antes de considerar fase concluída**:
1. `pnpm lint` → zero erros (ESLint)
2. `pnpm tsc --noEmit` → zero erros (TypeScript strict)
3. `pnpm build` → zero erros/warnings críticos
4. `pnpm dev` → navegar por todos os 10 slides, console limpo (sem erros ou warnings)
5. Desktop (1920×1080) + Tablet (768×1024) + Mobile (390px) — layout ok
6. Se Spline: carrega em <3s, FPS ≥ 45
7. Dry run: apresentação fluindo naturalmente, sem surpresas de timing

### 7. Estrutura de Slide
Cada slide é um componente `page.tsx` que:
```tsx
'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef, useEffect } from 'react';
import SlideContainer from '@/components/SlideContainer';
import SlideTitle from '@/components/SlideTitle';

export default function Slide2() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Animações de entrada aqui
      gsap.from('[data-animate]', {
        opacity: 0,
        y: 20,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
      });
    },
    { scope: containerRef }
  );

  return (
    <SlideContainer ref={containerRef}>
      <SlideTitle>Seu Título</SlideTitle>
      <div data-animate>Conteúdo...</div>
    </SlideContainer>
  );
}
```

## Estimativas de Tempo de Apresentação
*(Será atualizado conforme os slides forem finalizados)*
- Slide 1 (Abertura): 1:30 min
- Slide 2 (Definição): 1:30 min
- Slide 3 (Estatísticas): 1:30 min
- Slide 4 (3D Normal): 2:00 min
- Slide 5 (3D SOMP): 2:00 min
- Slide 6 (Causas): 2:00 min
- Slide 7 (Sintomas): 2:00 min
- Slide 8 (Diagnóstico): 2:00 min
- Slide 9 (Tratamentos): 2:00 min
- Slide 10 (Conclusão): 1:00 min
**Total**: ~17 minutos (ajuste conforme necessário)

## Configuração TypeScript
`tsconfig.json` deve incluir:
```json
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "strictFunctionTypes": true,
    "jsx": "preserve"
  }
}
```

## ESLint
`.eslintrc.json` deve usar `eslint-config-next` + regras customizadas (sem regras muito rigorosas que impeçam desenvolvimento rápido).

## Desenvolvimento
```bash
# Instalar dependências
pnpm install

# Iniciar servidor de desenvolvimento
pnpm dev

# Verificar build (sem erros)
pnpm build

# Lint
pnpm lint

# Type-check
pnpm tsc --noEmit
```

## Dicas Extras
1. Ensaie 2–3 vezes com a apresentação rodando — timing é tudo.
2. Se nervoso na hora, use teclado (A/D) em vez de mouse.
3. Deixe a primeira visualização 3D rodar em silêncio por 5–10s.
4. Exporte PDF de backup (print-to-PDF) caso rede caia.
5. Desabilitar DevTools antes de apresentar: F12 para fechar.

---

**Última atualização**: Inicialização FASE 0
**Status**: ✅ Scaffold criado, dependências instaladas, pronto para FASE 1

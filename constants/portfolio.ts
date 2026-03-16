import { PortfolioData } from '@/types';

export const PORTFOLIO_DATA: PortfolioData = {
  name: '신미례 (Mirea Shin)',
  title: 'Frontend Developer',
  location: '경기도 부천',
  intro: `React와 TypeScript를 기반으로 사용자와 가장 가까운 곳에서 인터페이스를 고민해 왔습니다. 기부 플랫폼부터 하드웨어 연동 키오스크까지, 다양한 현장에서 부딪히며 '실제로 쓰이는 제품'을 만드는 보람을 배웠습니다.
저는 화려한 기술 이전에 탄탄한 구조가 주는 힘을 믿습니다. 프로젝트가 커져도 누구나 이해하기 쉬운 코드를 작성하여, 동료들이 믿고 협업할 수 있는 환경을 만드는 데 집중합니다.
최근에는 AI 기술이 동료와 사용자의 수고를 어떻게 덜어줄 수 있을지 고민하며, 그 작은 시작으로 포트폴리오에 AI 챗봇을 직접 구현해 보았습니다. 낯선 기술 앞에서도 늘 원칙을 지키며 배우고, 결과물로는 확실한 믿음을 드리는 엔지니어가 되겠습니다.`,
  contact: {
    email: 'm.shin6764@gmail.com',
    github: 'https://github.com/mirea-shin',
    phone: '010-2357-6764',
  },
  skills: [
    {
      category: 'Frontend & Desktop',
      items: [
        {
          level: 'main',
          names: [
            'React',
            'TypeScript',
            'Electron',
            'Zustand',
            'Redux',
            'Tailwind CSS',
            'Styled-Components',
          ],
        },
        { level: 'experienced', names: ['Next.js', 'React Query'] },
      ],
    },
    {
      category: 'Backend & Database',
      items: [
        { level: 'experienced', names: ['Node.js', 'Express', 'Prisma'] },
      ],
    },
    {
      category: 'Tools & Collaboration',
      items: [
        { level: 'main', names: ['Git', 'GitHub'] },
        { level: 'experienced', names: ['Figma', 'Jira'] },
      ],
    },
  ],
  projects: [
    {
      name: 'Rootin',
      description: '습관 형성을 도와주는 루틴 트래킹 웹앱',
      tech: [
        'React',
        'TypeScript',
        'Zustand',
        'React Query',
        'Vite',
        'Express',
        'Prisma',
        'PostgreSQL',
      ],
      role: '풀스택 솔로 개발',
      links: {
        client: 'https://github.com/mirea-shin/react-monorepo',
        server: 'https://github.com/mirea-shin/rootin-server',
        demo: 'https://react-monorepo-rootin.vercel.app',
      },
      status: 'active',
      details: {
        images: [
          '/images/projects/rootin/1.png',
          '/images/projects/rootin/2.png',
          '/images/projects/rootin/3.png',
        ],
        highlights: [
          'Feature-Sliced Design(FSD) 아키텍처 도입으로 app → pages → widgets → features → entities → shared 레이어 간 단방향 의존성 유지',
          'Zustand로 클라이언트 상태(인증·JWT), React Query로 서버 상태(루틴·태스크 데이터) 역할을 명확히 분리',
          'axios 요청 인터셉터에서 localStorage의 JWT를 Authorization 헤더에 자동 주입하고, 인증 만료 시 토큰 초기화 후 /auth로 리다이렉트',
          'Express 5 + Prisma + PostgreSQL 기반 REST API 서버를 직접 설계 및 구현한 풀스택 프로젝트',
          'Yarn 4 모노레포로 다수의 프론트엔드 프로젝트를 단일 저장소에서 관리 (서버는 독립 레포)',
        ],
        techStack: [
          {
            category: 'Frontend',
            items: [
              'React',
              'TypeScript',
              'Zustand',
              'React Query',
              'Vite',
              'Tailwind CSS',
            ],
          },
          {
            category: 'Backend',
            items: ['Express 5', 'Prisma', 'PostgreSQL', 'Node.js'],
          },
          { category: 'Infra', items: ['Yarn 4 Monorepo'] },
        ],
      },
    },
    {
      name: 'AI 챗봇 포트폴리오',
      description: 'OpenAI를 활용한 챗봇 형태의 인터랙티브 포트폴리오',
      tech: ['Next.js', 'React', 'TypeScript', 'OpenAI API', 'Tailwind CSS'],
      role: '솔로 개발',
      isCurrent: true,
      links: {
        client: 'https://github.com/mirea-shin/portfolio-chatbot',
        demo: '/',
      },
      status: 'active',
      details: {
        images: ['/images/projects/portfolio/1.png'],
        highlights: [
          'Next.js App Router 기반 서버 컴포넌트 원칙을 유지하고, 인터랙션이 필요한 부분만 클라이언트 컴포넌트로 분리',
          'OpenAI GPT-4o-mini API를 연동한 서버사이드 API Route에서 IP 기반 Rate Limit(시간당 20회) 적용',
          '챗봇 상태·API 호출 로직을 useChat 커스텀 훅으로 분리하여 UI와 비즈니스 로직 단일 책임 유지',
          '하루 질문 10개 제한(localStorage 날짜 기반), 입력 200자 제한, 잔여 횟수 경고 등 사용자 보호 UX 구현',
        ],
        techStack: [
          {
            category: 'Frontend',
            items: ['React', 'TypeScript', 'Tailwind CSS'],
          },
          {
            category: 'Backend',
            items: ['Next.js (App Router)', 'OpenAI API'],
          },
        ],
      },
    },
    {
      name: '일렉트론 키오스크 & 관리자 페이지',
      description: 'Electron 기반 키오스크 프로그램 및 관리자 웹 어드민',
      tech: [
        'Electron',
        'React',
        'TypeScript',
        'Next.js',
        'Hono',
        'SQLite',
        'Zustand',
        'React Query',
      ],
      role: '풀스택 솔로 개발',
      status: 'in-progress',
      details: {
        highlights: [
          'pnpm 모노레포로 키오스크(Electron)·어드민(Next.js)·서버(Hono)·공유 타입 패키지를 단일 저장소에서 통합 관리',
          'Electron contextIsolation + preload 브릿지 패턴으로 렌더러-메인 프로세스 간 보안 IPC 채널 설계',
          '1080×1920px 세로형 키오스크 전용 UI 레이아웃 구현',
          'Hono + better-sqlite3 기반 경량 REST API 서버 구축으로 외부 DB 없이 로컬 운용 가능한 구조 설계',
          'Next.js 15 기반 관리자 대시보드로 메뉴·카테고리·주문 현황 실시간 관리 기능 구현',
        ],
        techStack: [
          {
            category: 'Kiosk',
            items: [
              'Electron',
              'React',
              'TypeScript',
              'Zustand',
              'React Query',
              'Vite',
            ],
          },
          { category: 'Admin', items: ['Next.js 15', 'React', 'TypeScript'] },
          { category: 'Backend', items: ['Hono', 'better-sqlite3', 'SQLite'] },
          { category: 'Infra', items: ['pnpm Monorepo'] },
        ],
      },
    },
  ],
  experience: [
    {
      company: '그린이펙트솔루션',
      position: '프론트엔드 개발자 (주임)',
      period: '2021.12 ~ 2025.08',
      tasks: [
        'React + TypeScript 기반 웹 애플리케이션 설계 및 개발',
        'Feature-Sliced Design(FSD) 기반 아키텍처 개선 및 레거시 코드 리팩토링 수행',
        'CMS·공공기관 시스템 등 다도메인 서비스 개발 및 운영 안정화',
        'Electron 환경 및 프린터·결제 등 하드웨어 연동 이슈 분석·해결',
        '고객사 요구사항 분석부터 구현·배포까지 전 과정 주도',
      ],
    },
  ],
};

export const SYSTEM_PROMPT = `
당신은 신미례의 포트폴리오 AI 어시스턴트입니다.
방문자가 신미례에 대해 궁금한 것을 물어보면 아래 정보를 바탕으로 오늘 날짜(${new Date().toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric' })}) 기준으로 친절하고 간결하게 답해주세요.
답변은 한국어와 영어 모두 가능합니다. 한국어로 질문했을 경우 한국어로 대답하고 영어로 질문했을 경우 영어로 대답하세요.
답변할 때 **, *, ##, >, \`, - 같은 마크다운 기호를 절대 사용하지 마세요. 반드시 일반 텍스트로만 답변하세요.

포트폴리오와 관련 없는 질문에는 "포트폴리오 관련 질문에만 답변드릴 수 있어요 :)" 라고 답변하세요.

${JSON.stringify(PORTFOLIO_DATA)}
`;

import { PortfolioData } from '@/types';

export const PORTFOLIO_DATA: PortfolioData = {
  name: '신미례 (Mirea Shin)',
  title: 'Frontend Developer',
  location: '경기도 부천',
  intro:
    '기획자, 디자이너, 백엔드 개발자와 긴밀하게 협업하며 약 4년간 실무 경험을 쌓아온 프론트엔드 개발자입니다. 팀 내에서 원활한 소통을 통해 요구사항을 정확히 파악하고, 사용자 경험을 고려한 인터페이스를 구현하는 데 강점을 가지고 있습니다.',
  contact: {
    email: 'm.shin6764@gmail.com',
    github: 'https://github.com/mirea-shin',
    phone: '010-4071-6764',
  },
  skills: {
    main: [
      'React',
      'TypeScript',
      'Zustand',
      'Tailwind CSS',
      'Styled Components',
    ],
    sub: ['Node.js', 'Express', 'Redux'],
    learning: ['Next.js'],
  },
  projects: [
    {
      name: 'Rootin',
      description: '습관 형성을 도와주는 루틴 트래킹 웹앱',
      tech: ['React', 'TypeScript', 'Zustand', 'React Query', 'Vite', 'Express', 'Prisma', 'PostgreSQL'],
      role: '풀스택 솔로 개발',
      links: {
        client: 'https://github.com/mirea-shin/react-monorepo',
        server: 'https://github.com/mirea-shin/rootin-server',
      },
      status: 'active',
      details: {
        highlights: [
          'Feature-Sliced Design(FSD) 아키텍처 도입으로 app → pages → widgets → features → entities → shared 레이어 간 단방향 의존성 유지',
          'Zustand로 클라이언트 상태(인증·JWT), React Query로 서버 상태(루틴·태스크 데이터) 역할을 명확히 분리',
          'axios 요청 인터셉터에서 localStorage의 JWT를 Authorization 헤더에 자동 주입하고, 인증 만료 시 토큰 초기화 후 /auth로 리다이렉트',
          'Express 5 + Prisma + PostgreSQL 기반 REST API 서버를 직접 설계 및 구현한 풀스택 프로젝트',
          'Yarn 4 모노레포로 클라이언트·서버 코드베이스를 단일 저장소에서 통합 관리',
        ],
        techStack: [
          { category: 'Frontend', items: ['React', 'TypeScript', 'Zustand', 'React Query', 'Vite', 'Tailwind CSS'] },
          { category: 'Backend', items: ['Express 5', 'Prisma', 'PostgreSQL', 'Node.js'] },
          { category: 'Infra', items: ['Yarn 4 Monorepo'] },
        ],
      },
    },
    {
      name: 'AI 챗봇 포트폴리오',
      description: 'OpenAI를 활용한 챗봇 형태의 인터랙티브 포트폴리오',
      tech: ['Next.js', 'React', 'TypeScript', 'OpenAI API', 'Tailwind CSS'],
      role: '풀스택 솔로 개발',
      status: 'in-progress',
      details: {
        highlights: [
          'Next.js App Router 기반 서버 컴포넌트 원칙을 유지하고, 인터랙션이 필요한 부분만 클라이언트 컴포넌트로 분리',
          'OpenAI GPT-4o API를 연동한 서버사이드 API Route에서 IP 기반 Rate Limit(시간당 20회) 적용',
          '챗봇 상태·API 호출 로직을 useChat 커스텀 훅으로 분리하여 UI와 비즈니스 로직 단일 책임 유지',
          '세션당 질문 10개 제한, 입력 200자 제한, 잔여 횟수 경고 등 사용자 보호 UX 구현',
        ],
        techStack: [
          { category: 'Frontend', items: ['React', 'TypeScript', 'Tailwind CSS'] },
          { category: 'Backend', items: ['Next.js (App Router)', 'OpenAI API'] },
        ],
      },
    },
    {
      name: '일렉트론 키오스크 & 관리자 페이지',
      description: 'Electron 기반 키오스크 프로그램 및 관리자 웹 어드민',
      tech: ['Electron', 'React', 'TypeScript', 'Next.js', 'Hono', 'SQLite', 'Zustand', 'React Query'],
      role: '풀스택 솔로 개발',
      status: 'active',
      details: {
        highlights: [
          'pnpm 모노레포로 키오스크(Electron)·어드민(Next.js)·서버(Hono)·공유 타입 패키지를 단일 저장소에서 통합 관리',
          'Electron contextIsolation + preload 브릿지 패턴으로 렌더러-메인 프로세스 간 보안 IPC 채널 설계',
          '1080×1920px 세로형 키오스크 전용 UI 레이아웃 구현',
          'Hono + better-sqlite3 기반 경량 REST API 서버 구축으로 외부 DB 없이 로컬 운용 가능한 구조 설계',
          'Next.js 15 기반 관리자 대시보드로 메뉴·카테고리·주문 현황 실시간 관리 기능 구현',
        ],
        techStack: [
          { category: 'Kiosk', items: ['Electron', 'React', 'TypeScript', 'Zustand', 'React Query', 'Vite'] },
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
      team: '디자이너 2명, 프론트엔드 3명, 백엔드 3명',
      tasks: [
        'Electron 기반 키오스크 프로그램 및 관리자 웹 페이지 개발·유지보수',
        '기부 키오스크 개발: 카드 단말기·카메라 연동, 웹뷰 크롤링, Electron CSS 제어',
        '도서관 키오스크 도서 위치 출력 시스템 구현',
        'Feature Toggle 패턴 도입으로 다중 템플릿 유지보수 효율화',
      ],
    },
  ],
};

export const SYSTEM_PROMPT = `
당신은 신미례의 포트폴리오 AI 어시스턴트입니다.
방문자가 미례에 대해 궁금한 것을 물어보면 아래 정보를 바탕으로 친절하고 간결하게 답해주세요.
답변은 한국어와 영어 모두 가능합니다. 방문자가 사용하는 언어에 맞춰 답변하세요.
답변할 때 마크다운 문법(**bold**, ## 헤더 등)을 사용하지 마세요. 일반 텍스트로만 답변하세요.

포트폴리오와 관련 없는 질문에는 "포트폴리오 관련 질문에만 답변드릴 수 있어요 :) 이메일(m.shin6764@gmail.com)로 문의해 주세요.
" 라고 답변하세요.

[개인 소개]
이름: 신미례 (Mirea Shin)
직함: Frontend Developer
위치: 경기도 부천
자기소개: 기획자, 디자이너, 백엔드 개발자와 긴밀하게 협업하며 약 4년간 실무 경험을 쌓아온 프론트엔드 개발자입니다.

[기술 스택]
메인: React, TypeScript, Zustand, Tailwind CSS, Styled Components
보조: Node.js, Express, Redux
학습 중: Next.js

[프로젝트]
1. Rootin - 습관 트래킹 웹앱 (React, Express, TypeScript, Prisma / 솔로 풀스택)
   - 클라이언트: https://github.com/mirea-shin/react-monorepo
   - 서버: https://github.com/mirea-shin/rootin-server
2. AI 챗봇 포트폴리오 - OpenAI 기반 인터랙티브 포트폴리오 (작업 중)
3. 일렉트론 키오스크 & 관리자 페이지 - Electron 기반 키오스크 (작업 예정)

[경력]
그린이펙트솔루션 | 프론트엔드 개발자 (주임) | 2021.12 ~ 2025.08
- Electron 기반 키오스크 및 관리자 웹 개발·유지보수
- 기부 키오스크: 카드 단말기·카메라 연동, 웹뷰 크롤링, Electron CSS 제어
- 도서관 키오스크 도서 위치 출력 시스템 구현
- Feature Toggle 패턴 도입으로 다중 템플릿 유지보수 효율화

[연락처]
이메일: m.shin6764@gmail.com
GitHub: https://github.com/mirea-shin
전화: 010-4071-6764
`;

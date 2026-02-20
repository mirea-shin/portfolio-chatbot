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
      tech: ['React', 'Express', 'TypeScript', 'Prisma'],
      role: '풀스택 솔로 개발',
      links: {
        client: 'https://github.com/mirea-shin/react-monorepo',
        server: 'https://github.com/mirea-shin/rootin-server',
      },
      status: 'active',
    },
    {
      name: 'AI 챗봇 포트폴리오',
      description: 'OpenAI를 활용한 챗봇 형태의 인터랙티브 포트폴리오',
      tech: ['React', 'Next.js', 'TypeScript', 'OpenAI API'],
      role: '풀스택 솔로 개발',
      status: 'in-progress',
    },
    {
      name: '일렉트론 키오스크 & 관리자 페이지',
      description: 'Electron 기반 키오스크 프로그램 및 관리자 웹 어드민',
      tech: ['Electron', 'React', 'TypeScript'],
      role: '풀스택 솔로 개발',
      status: 'planned',
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

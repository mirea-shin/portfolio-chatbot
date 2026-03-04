'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PORTFOLIO_DATA } from '@/constants/portfolio';
import {
  TbWorld,
  TbSparkles,
  TbDeviceDesktop,
  TbServer,
  TbBrandFigma,
  TbClipboardList,
} from 'react-icons/tb';

interface NodeData {
  id: string;
  label: string;
  angle: number;
  Icon: React.ElementType;
  tooltip: string;
}

const NODES: NodeData[] = [
  {
    id: 'web-core',
    label: 'Web Core',
    angle: 0,
    Icon: TbWorld,
    tooltip: '웹의 언어로 제품을 완성합니다',
  },
  {
    id: 'product',
    label: 'Product',
    angle: 60,
    Icon: TbClipboardList,
    tooltip: '요구사항을 정확히 파악해 구현합니다',
  },
  {
    id: 'ai',
    label: 'AI-Native',
    angle: 120,
    Icon: TbSparkles,
    tooltip: 'AI를 제품에 자연스럽게 녹입니다',
  },
  {
    id: 'desktop',
    label: 'Desktop',
    angle: 180,
    Icon: TbDeviceDesktop,
    tooltip: '브라우저 너머 플랫폼도 다룹니다',
  },
  {
    id: 'backend',
    label: 'Backend',
    angle: 240,
    Icon: TbServer,
    tooltip: '백엔드와 같은 언어로 대화합니다',
  },
  {
    id: 'design',
    label: 'Design',
    angle: 300,
    Icon: TbBrandFigma,
    tooltip: '디자인 의도를 코드로 구현합니다',
  },
];

const RADIUS = 175;

const getPos = (angle: number) => {
  const rad = ((angle - 90) * Math.PI) / 180;
  return { x: Math.cos(rad) * RADIUS, y: Math.sin(rad) * RADIUS };
};

const HeroBridgeHub = () => {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [centerHovered, setCenterHovered] = useState(false);
  const { contact } = PORTFOLIO_DATA;

  return (
    <section id="hero" className="md:min-h-screen bg-white px-6">
      <div className="max-w-5xl mx-auto md:min-h-screen flex flex-col md:flex-row items-center gap-10 py-24 md:py-0">
        {/* ── 왼쪽: 다이어그램 (md 이상) ── */}
        <div className="hidden md:flex flex-1 self-stretch items-center justify-center bg-white rounded-2xl">
          <div className="relative" style={{ width: 500, height: 500 }}>
            {/* SVG 연결선 */}
            <svg
              className="absolute inset-0"
              width="500"
              height="500"
              viewBox="-250 -250 500 500"
              style={{ overflow: 'visible' }}
            >
              {NODES.map((node, i) => {
                const { x, y } = getPos(node.angle);
                const active = centerHovered || hoveredNode === node.id;
                return (
                  <motion.line
                    key={node.id}
                    x1={0}
                    y1={0}
                    x2={x}
                    y2={y}
                    strokeDasharray="5 5"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, strokeDashoffset: [0, -20] }}
                    transition={{
                      opacity: { duration: 0.4, delay: 0.38 + i * 0.07, ease: 'easeOut' },
                      strokeDashoffset: { repeat: Infinity, duration: 1.8, ease: 'linear' },
                    }}
                    style={{
                      stroke: active ? '#52525b' : '#cbd5e1',
                      strokeWidth: active ? 2 : 1.5,
                      transition: 'stroke 0.2s, stroke-width 0.2s',
                    }}
                  />
                );
              })}
            </svg>

            {/* 중앙 노드 */}
            <div
              className="absolute"
              style={{
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
              }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2, type: 'spring', stiffness: 220, damping: 18 }}
              >
              <motion.div
                className="relative flex items-center justify-center cursor-pointer"
                style={{ width: 76, height: 76 }}
                animate={{ y: [0, -5, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                  ease: 'easeInOut',
                }}
                onMouseEnter={() => setCenterHovered(true)}
                onMouseLeave={() => setCenterHovered(false)}
              >
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-zinc-300"
                  animate={{ scale: [1, 1.65, 1], opacity: [0.55, 0, 0.55] }}
                  transition={{
                    repeat: Infinity,
                    duration: 2.6,
                    ease: 'easeOut',
                  }}
                />
                <div className="relative z-10 w-full h-full rounded-full bg-zinc-900 flex flex-col items-center justify-center shadow-lg">
                  <span className="text-[11px] font-bold text-white leading-none">
                    신미례
                  </span>
                  <span className="text-[9px] text-zinc-400 mt-1 tracking-wide">
                    FE Dev
                  </span>
                </div>
              </motion.div>
              </motion.div>
            </div>

            {/* 6개 전문성 노드 */}
            {NODES.map((node, i) => {
              const { x, y } = getPos(node.angle);
              const hovered = hoveredNode === node.id;
              const { Icon } = node;

              return (
                <div
                  key={node.id}
                  className="absolute"
                  style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                    transform: 'translate(-50%, -50%)',
                  }}
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.45,
                      delay: 0.38 + i * 0.08,
                      type: 'spring',
                      stiffness: 200,
                      damping: 16,
                    }}
                  >
                  <motion.div
                    className="relative cursor-pointer"
                    animate={{ y: [0, -6, 0] }}
                    transition={{
                      repeat: Infinity,
                      duration: 3.2,
                      delay: i * 0.45,
                      ease: 'easeInOut',
                    }}
                    onMouseEnter={() => setHoveredNode(node.id)}
                    onMouseLeave={() => setHoveredNode(null)}
                  >
                    <div
                      className="flex items-center gap-2.5 bg-white rounded-2xl px-4 py-3 transition-all duration-200"
                      style={{
                        minWidth: 130,
                        border: `1.5px solid ${hovered ? '#a1a1aa' : '#e2e8f0'}`,
                        boxShadow: hovered
                          ? '0 6px 20px rgba(0,0,0,0.1)'
                          : '0 1px 4px rgba(0,0,0,0.06)',
                      }}
                    >
                      <Icon
                        size={18}
                        className={hovered ? 'text-zinc-700' : 'text-zinc-400'}
                      />
                      <span
                        className={`text-sm font-semibold ${hovered ? 'text-zinc-900' : 'text-zinc-600'}`}
                      >
                        {node.label}
                      </span>
                    </div>

                    <AnimatePresence>
                      {hovered && (
                        <motion.div
                          initial={{ opacity: 0, y: 4 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 4 }}
                          transition={{ duration: 0.14 }}
                          className="absolute top-full mt-2 left-1/2 -translate-x-1/2 whitespace-nowrap bg-zinc-900 text-white text-xs px-3 py-1.5 rounded-lg pointer-events-none shadow-lg"
                          style={{ zIndex: 50 }}
                        >
                          {node.tooltip}
                          <div
                            className="absolute bottom-full left-1/2 -translate-x-1/2 border-4 border-transparent border-b-zinc-900"
                            style={{ width: 0, height: 0 }}
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── 오른쪽: 이름·슬로건·버튼 ── */}
        <div className="w-full md:flex-1 flex flex-col justify-center ">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className=" font-mono text-zinc-400 tracking-[0.2em] uppercase mb-5">
                신미례 · Mirea Shin
              </p>

              <h1 className="text-4xl lg:text-[2.75rem] leading-tight mb-6">
                <span className="font-normal text-zinc-400">
                  기획·디자인·백엔드를 잇는
                </span>
                <br />
                <span className="font-bold text-zinc-900">
                  협업형 프론트엔드 엔지니어
                </span>
              </h1>

              <p className="text-sm text-zinc-500 leading-relaxed mb-10 max-w-[300px]">
                다양한 직군과 긴밀히 협업하며
                <br />
                팀의 언어로 제품을 완성해왔습니다.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.22 }}
              className="flex gap-3"
            >
              <a
                href={`mailto:${contact.email}`}
                className="px-6 py-3 bg-zinc-900 text-white rounded-lg text-sm font-medium hover:bg-zinc-700 transition-colors"
              >
                이메일 보내기
              </a>
              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-zinc-300 text-zinc-700 rounded-lg text-sm font-medium hover:border-zinc-500 transition-colors"
              >
                GitHub
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBridgeHub;

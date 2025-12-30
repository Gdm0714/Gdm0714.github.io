"use client";

import React, { useState, useEffect } from 'react';
import { Github, Mail, Phone, ExternalLink, ChevronDown, Code, Database, Cloud, Award, Calendar, MapPin, Briefcase, GraduationCap, Trophy, BookOpen, Zap, TrendingUp, Server } from 'lucide-react';

const Portfolio = () => {
    const [activeSection, setActiveSection] = useState('about');
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId: string) => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
        setActiveSection(sectionId);
    };

    return (
        <div className="min-h-screen bg-[#0a0a0f] text-white">
            {/* Navigation */}
            <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0a0a0f]/95 backdrop-blur-md shadow-lg border-b border-gray-800' : 'bg-transparent'}`}>
                <div className="max-w-6xl mx-auto px-6 py-4">
                    <div className="flex justify-between items-center">
                        <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">고동민</div>
                        <div className="hidden md:flex space-x-8">
                            {['About', 'Experience', 'Projects', 'Education', 'Contact'].map((item) => (
                                <button
                                    key={item}
                                    onClick={() => scrollToSection(item.toLowerCase())}
                                    className={`text-sm font-medium hover:text-blue-400 transition-colors ${activeSection === item.toLowerCase() ? 'text-blue-400' : 'text-gray-400'}`}
                                >
                                    {item}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
                {/* Background gradient effects */}
                <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>
                
                <div className="text-center max-w-4xl mx-auto relative z-10">
                    <div className="w-36 h-36 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 p-1">
                        <div className="w-full h-full rounded-full bg-[#0a0a0f] flex items-center justify-center">
                            <span className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">DM</span>
                        </div>
                    </div>
                    <p className="text-blue-400 text-lg mb-4 font-medium tracking-wide">Backend Developer</p>
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                        <span className="text-white">느린 API를</span><br />
                        <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">빠르게 만드는 개발자</span>
                    </h1>
                    <p className="text-lg text-gray-400 mb-4 leading-relaxed max-w-2xl mx-auto">
                        인덱싱, 캐싱, 병렬 처리로 <span className="text-cyan-400 font-semibold">50~99%</span> 성능 개선을 달성했습니다
                    </p>
                    <p className="text-xl text-gray-300 mb-10">
                        버그는 <span className="text-red-400">고치고</span>, 속도는 <span className="text-green-400">올리고</span>, 코드는 <span className="text-blue-400">줄입니다</span>
                    </p>
                    <div className="flex justify-center space-x-4 mb-12">
                        <a href="https://github.com/go714n" target="_blank" rel="noopener noreferrer" className="group p-4 bg-gray-800/50 rounded-xl hover:bg-gray-700/50 transition-all duration-300 border border-gray-700 hover:border-blue-500/50">
                            <Github size={24} className="text-gray-400 group-hover:text-white transition-colors" />
                        </a>
                        <a href="mailto:go714n@naver.com" className="group p-4 bg-gray-800/50 rounded-xl hover:bg-gray-700/50 transition-all duration-300 border border-gray-700 hover:border-blue-500/50">
                            <Mail size={24} className="text-gray-400 group-hover:text-white transition-colors" />
                        </a>
                        <a href="tel:010-3540-3372" className="group p-4 bg-gray-800/50 rounded-xl hover:bg-gray-700/50 transition-all duration-300 border border-gray-700 hover:border-blue-500/50">
                            <Phone size={24} className="text-gray-400 group-hover:text-white transition-colors" />
                        </a>
                    </div>
                    <button
                        onClick={() => scrollToSection('about')}
                        className="animate-bounce text-gray-500 hover:text-blue-400 transition-colors"
                    >
                        <ChevronDown size={32} />
                    </button>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-24 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="flex items-center gap-3 mb-12">
                        <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
                        <h2 className="text-3xl font-bold text-white">About Me</h2>
                    </div>
                    
                    <div className="grid lg:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                                <Zap className="text-yellow-400" size={20} />
                                핵심 역량
                            </h3>
                            <div className="space-y-4">
                                <div className="p-4 bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-800">
                                    <div className="flex items-center gap-3 mb-2">
                                        <TrendingUp className="text-green-400" size={18} />
                                        <span className="font-medium text-white">성능 최적화 전문</span>
                                    </div>
                                    <p className="text-gray-400 text-sm">인덱싱, 캐싱, 병렬 처리를 통한 API 성능 개선</p>
                                </div>
                                <div className="p-4 bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-800">
                                    <div className="flex items-center gap-3 mb-2">
                                        <Server className="text-blue-400" size={18} />
                                        <span className="font-medium text-white">클린 아키텍처</span>
                                    </div>
                                    <p className="text-gray-400 text-sm">Strategy, Factory 패턴 등 디자인 패턴 적용</p>
                                </div>
                                <div className="p-4 bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-800">
                                    <div className="flex items-center gap-3 mb-2">
                                        <BookOpen className="text-purple-400" size={18} />
                                        <span className="font-medium text-white">지식 공유</span>
                                    </div>
                                    <p className="text-gray-400 text-sm">블로그 포스팅과 세미나를 통한 기술 공유</p>
                                </div>
                            </div>
                        </div>
                        
                        <div>
                            <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                                <Code className="text-blue-400" size={20} />
                                기술 스택
                            </h3>
                            <div className="space-y-4">
                                <div className="p-4 bg-gray-800/30 rounded-xl border border-gray-800">
                                    <div className="flex items-center gap-2 mb-3">
                                        <Code className="text-blue-400" size={18} />
                                        <span className="font-medium text-gray-300">Backend</span>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {['Java 11/17/21', 'Spring Boot 3', 'NestJS', 'TypeScript'].map((tech) => (
                                            <span key={tech} className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-lg text-sm border border-blue-500/20">{tech}</span>
                                        ))}
                                    </div>
                                </div>
                                <div className="p-4 bg-gray-800/30 rounded-xl border border-gray-800">
                                    <div className="flex items-center gap-2 mb-3">
                                        <Database className="text-green-400" size={18} />
                                        <span className="font-medium text-gray-300">Database</span>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {['PostgreSQL', 'MySQL', 'Redis', 'MyBatis', 'JPA'].map((tech) => (
                                            <span key={tech} className="px-3 py-1 bg-green-500/10 text-green-400 rounded-lg text-sm border border-green-500/20">{tech}</span>
                                        ))}
                                    </div>
                                </div>
                                <div className="p-4 bg-gray-800/30 rounded-xl border border-gray-800">
                                    <div className="flex items-center gap-2 mb-3">
                                        <Cloud className="text-purple-400" size={18} />
                                        <span className="font-medium text-gray-300">Infrastructure & Others</span>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {['AWS S3', 'Terraform', 'Flutter', 'OAuth2.0'].map((tech) => (
                                            <span key={tech} className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-lg text-sm border border-purple-500/20">{tech}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Experience Section */}
            <section id="experience" className="py-24 px-6 bg-gradient-to-b from-transparent via-gray-900/30 to-transparent">
                <div className="max-w-6xl mx-auto">
                    <div className="flex items-center gap-3 mb-12">
                        <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
                        <h2 className="text-3xl font-bold text-white">Experience</h2>
                    </div>

                    <div className="space-y-8">
                        {/* 플랜잇스퀘어 */}
                        <div className="group relative p-8 bg-gray-800/20 rounded-2xl border border-gray-800 hover:border-blue-500/30 transition-all duration-300">
                            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-500 to-cyan-500 rounded-l-2xl"></div>
                            <div className="flex flex-col md:flex-row justify-between items-start mb-4">
                                <div>
                                    <div className="flex items-center gap-2 mb-2">
                                        <Briefcase className="text-blue-400" size={20} />
                                        <h3 className="text-2xl font-bold text-white">플랜잇스퀘어</h3>
                                    </div>
                                    <p className="text-blue-400 font-medium">백엔드 개발자</p>
                                </div>
                                <span className="text-gray-500 text-sm mt-2 md:mt-0 flex items-center gap-1">
                                    <Calendar size={14} />
                                    2025.08 ~ 현재
                                </span>
                            </div>
                            
                            <div className="mb-6">
                                <h4 className="text-lg font-semibold text-cyan-400 mb-3">InsightEx</h4>
                                <p className="text-gray-400 mb-4">의료 서비스 품질 관리에서 병원 실적관리까지 모니터링하는 통합 솔루션 | 풀스택</p>
                                
                                <div className="space-y-4">
                                    <div className="p-4 bg-gray-900/50 rounded-xl">
                                        <h5 className="text-white font-medium mb-2">전년도, 올해 비교 데이터 조회 속도 개선</h5>
                                        <ul className="text-sm text-gray-400 space-y-1">
                                            <li>• 약 2만개의 데이터 조회 시간 <span className="text-green-400 font-semibold">3분 50초 → 0.17초</span></li>
                                            <li>• 병렬 처리 + 인덱스 추가로 <span className="text-green-400 font-semibold">99% 이상 성능 개선</span></li>
                                        </ul>
                                    </div>
                                    <div className="p-4 bg-gray-900/50 rounded-xl">
                                        <h5 className="text-white font-medium mb-2">복합 PK 테이블 엑셀 업로드 버그 수정</h5>
                                        <ul className="text-sm text-gray-400 space-y-1">
                                            <li>• 카르테시안 곱 방식을 복합 PK 튜플 방식으로 수정</li>
                                            <li>• 업로드 성능 <span className="text-green-400 font-semibold">54% 개선 (13초 → 6초)</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="flex flex-wrap gap-2">
                                {['Java 11', 'Spring Boot 3', 'PostgreSQL 16', 'MyBatis'].map((tech) => (
                                    <span key={tech} className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-lg text-sm">{tech}</span>
                                ))}
                            </div>
                        </div>

                        {/* ETRI */}
                        <div className="group relative p-8 bg-gray-800/20 rounded-2xl border border-gray-800 hover:border-blue-500/30 transition-all duration-300">
                            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-green-500 to-emerald-500 rounded-l-2xl"></div>
                            <div className="flex flex-col md:flex-row justify-between items-start mb-4">
                                <div>
                                    <div className="flex items-center gap-2 mb-2">
                                        <Briefcase className="text-green-400" size={20} />
                                        <h3 className="text-2xl font-bold text-white">한국전자통신연구원(ETRI)</h3>
                                    </div>
                                    <p className="text-green-400 font-medium">사이버브레인연구실 | 연구연수생(인턴)</p>
                                </div>
                                <span className="text-gray-500 text-sm mt-2 md:mt-0 flex items-center gap-1">
                                    <Calendar size={14} />
                                    2023.07 ~ 2023.08
                                </span>
                            </div>
                            
                            <div className="mb-6">
                                <h4 className="text-lg font-semibold text-emerald-400 mb-3">자율·협업형 데이터 허브기술</h4>
                                <p className="text-gray-400 mb-4">IoT 데이터 하베스팅 관리 시스템 - 다양한 소스로부터 데이터를 자동으로 수집, 추출하고 저장하는 과정</p>
                                <ul className="text-sm text-gray-400 space-y-1">
                                    <li>• REST API 설계 주도</li>
                                    <li>• 데이터 하베스팅 관련 설계서를 기반으로 REST API 구축</li>
                                </ul>
                            </div>
                            
                            <div className="flex flex-wrap gap-2">
                                {['Java 17', 'Spring Boot 3', 'PostgreSQL 16', 'MyBatis 2.3.0'].map((tech) => (
                                    <span key={tech} className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-lg text-sm">{tech}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="py-24 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="flex items-center gap-3 mb-12">
                        <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
                        <h2 className="text-3xl font-bold text-white">Projects</h2>
                    </div>

                    <div className="grid gap-8">
                        {/* 렛츠커리어 */}
                        <div className="group p-8 bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl border border-gray-800 hover:border-orange-500/30 transition-all duration-300">
                            <div className="flex flex-col md:flex-row justify-between items-start mb-6">
                                <div>
                                    <div className="flex items-center gap-3 mb-2">
                                        <h3 className="text-2xl font-bold text-white">렛츠커리어</h3>
                                        <span className="px-2 py-1 bg-orange-500/20 text-orange-400 rounded-lg text-xs font-medium">MAU 5000+</span>
                                    </div>
                                    <p className="text-gray-400">취업 준비 청년들을 위한 가이드 플랫폼 | 백엔드 3명, 프론트 3명</p>
                                </div>
                                <div className="flex items-center gap-3 mt-4 md:mt-0">
                                    <span className="text-gray-500 text-sm flex items-center gap-1">
                                        <Calendar size={14} />
                                        2025.07 ~ 현재
                                    </span>
                                    <a href="#" className="p-2 bg-gray-700/50 rounded-lg hover:bg-gray-600/50 transition-colors">
                                        <ExternalLink size={18} className="text-gray-400" />
                                    </a>
                                </div>
                            </div>

                            <div className="p-4 bg-gray-900/50 rounded-xl mb-6">
                                <h4 className="text-white font-medium mb-3">프로그램 통합 조회 API 성능 최적화</h4>
                                <div className="grid md:grid-cols-3 gap-4 text-sm">
                                    <div>
                                        <span className="text-red-400 font-medium">문제</span>
                                        <p className="text-gray-400 mt-1">챌린지, 라이브, VOD 3개 테이블 각각 조회 후 애플리케이션 레벨에서 병합</p>
                                    </div>
                                    <div>
                                        <span className="text-blue-400 font-medium">해결</span>
                                        <p className="text-gray-400 mt-1">DB View 도입으로 UNION ALL 쿼리를 DB레벨에서 추상화</p>
                                    </div>
                                    <div>
                                        <span className="text-green-400 font-medium">성과</span>
                                        <p className="text-gray-400 mt-1">API 응답 시간 <span className="text-green-400 font-semibold">65% 개선 (280ms → 95ms)</span></p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {['Java 17', 'Spring Boot 3', 'MySQL'].map((tech) => (
                                    <span key={tech} className="px-3 py-1 bg-orange-500/10 text-orange-400 rounded-lg text-sm border border-orange-500/20">{tech}</span>
                                ))}
                            </div>
                        </div>

                        {/* 찰칵 */}
                        <div className="group p-8 bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl border border-gray-800 hover:border-pink-500/30 transition-all duration-300">
                            <div className="flex flex-col md:flex-row justify-between items-start mb-6">
                                <div>
                                    <div className="flex items-center gap-3 mb-2">
                                        <h3 className="text-2xl font-bold text-white">찰칵</h3>
                                        <span className="px-2 py-1 bg-pink-500/20 text-pink-400 rounded-lg text-xs font-medium">App Store 출시</span>
                                    </div>
                                    <p className="text-gray-400">네컷사진관 위치 기반 검색 서비스 | 2인 개발, 풀스택</p>
                                </div>
                                <div className="flex items-center gap-3 mt-4 md:mt-0">
                                    <span className="text-gray-500 text-sm flex items-center gap-1">
                                        <Calendar size={14} />
                                        2025.04 ~ 현재
                                    </span>
                                    <a href="#" className="p-2 bg-gray-700/50 rounded-lg hover:bg-gray-600/50 transition-colors">
                                        <Github size={18} className="text-gray-400" />
                                    </a>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-4 mb-6">
                                <div className="p-4 bg-gray-900/50 rounded-xl">
                                    <h4 className="text-white font-medium mb-3">위치 기반 검색 성능 최적화</h4>
                                    <ul className="text-sm text-gray-400 space-y-1">
                                        <li>• Haversine 공식 + 공간 인덱스 도입</li>
                                        <li>• 3km 반경 검색 <span className="text-green-400 font-semibold">75% 향상 (200ms → 50ms)</span></li>
                                    </ul>
                                </div>
                                <div className="p-4 bg-gray-900/50 rounded-xl">
                                    <h4 className="text-white font-medium mb-3">캐싱 전략 도입</h4>
                                    <ul className="text-sm text-gray-400 space-y-1">
                                        <li>• Redis 도입, 위치 기반 검색 결과 캐싱</li>
                                        <li>• 캐시 히트율 <span className="text-green-400 font-semibold">70%</span>, DB 부하 <span className="text-green-400 font-semibold">60% 감소</span></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {['Java 21', 'Spring Boot 3.5.0', 'MySQL 8.0', 'Redis', 'Flutter'].map((tech) => (
                                    <span key={tech} className="px-3 py-1 bg-pink-500/10 text-pink-400 rounded-lg text-sm border border-pink-500/20">{tech}</span>
                                ))}
                            </div>
                        </div>

                        {/* Cloud Canvas */}
                        <div className="group p-8 bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl border border-gray-800 hover:border-cyan-500/30 transition-all duration-300">
                            <div className="flex flex-col md:flex-row justify-between items-start mb-6">
                                <div>
                                    <div className="flex items-center gap-3 mb-2">
                                        <h3 className="text-2xl font-bold text-white">Cloud Canvas</h3>
                                        <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 rounded-lg text-xs font-medium">네이버 부스트캠프</span>
                                    </div>
                                    <p className="text-gray-400">클라우드 인프라를 GUI로 설계하고 Terraform 코드로 자동 변환하는 도구 | 4인 개발, 백엔드·테라폼컨버터 담당</p>
                                </div>
                                <div className="flex items-center gap-3 mt-4 md:mt-0">
                                    <span className="text-gray-500 text-sm flex items-center gap-1">
                                        <Calendar size={14} />
                                        2024.10 ~ 2025.02
                                    </span>
                                    <a href="#" className="p-2 bg-gray-700/50 rounded-lg hover:bg-gray-600/50 transition-colors">
                                        <Github size={18} className="text-gray-400" />
                                    </a>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-4 mb-6">
                                <div className="p-4 bg-gray-900/50 rounded-xl">
                                    <h4 className="text-white font-medium mb-3">Strategy & Factory 패턴 도입</h4>
                                    <ul className="text-sm text-gray-400 space-y-1">
                                        <li>• ResourceParserFactory를 통한 Parser 관리 중앙화</li>
                                        <li>• 새 리소스 추가 시 코드 수정량 <span className="text-green-400 font-semibold">40~70% 감소</span></li>
                                    </ul>
                                </div>
                                <div className="p-4 bg-gray-900/50 rounded-xl">
                                    <h4 className="text-white font-medium mb-3">참조 성능 문제 개선</h4>
                                    <ul className="text-sm text-gray-400 space-y-1">
                                        <li>• 참조 캐싱 메커니즘 + 얕은 복사로 최적화</li>
                                        <li>• 처리 속도 <span className="text-green-400 font-semibold">70% 향상</span>, 메모리 <span className="text-green-400 font-semibold">50% 감소</span></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {['TypeScript', 'NestJS 10.4.7', 'MySQL 9.0.1', 'Strategy Pattern', 'Factory Pattern'].map((tech) => (
                                    <span key={tech} className="px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-lg text-sm border border-cyan-500/20">{tech}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Education Section */}
            <section id="education" className="py-24 px-6 bg-gradient-to-b from-transparent via-gray-900/30 to-transparent">
                <div className="max-w-6xl mx-auto">
                    <div className="flex items-center gap-3 mb-12">
                        <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
                        <h2 className="text-3xl font-bold text-white">Education & Activities</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* 학력 */}
                        <div className="p-6 bg-gray-800/20 rounded-2xl border border-gray-800">
                            <div className="flex items-center gap-2 mb-6">
                                <GraduationCap className="text-purple-400" size={24} />
                                <h3 className="text-xl font-bold text-white">학력</h3>
                            </div>
                            <div className="space-y-4">
                                <div className="p-4 bg-gray-900/50 rounded-xl">
                                    <h4 className="text-white font-medium">인제대학교 컴퓨터공학부</h4>
                                    <p className="text-gray-500 text-sm mb-2">2019.03 ~ 2025.02</p>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-2 py-1 bg-purple-500/20 text-purple-400 rounded text-xs">학점 4.1/4.5</span>
                                        <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded text-xs">성적장학금 2회</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 자격증 & 수상 */}
                        <div className="p-6 bg-gray-800/20 rounded-2xl border border-gray-800">
                            <div className="flex items-center gap-2 mb-6">
                                <Trophy className="text-yellow-400" size={24} />
                                <h3 className="text-xl font-bold text-white">자격증 & 수상</h3>
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between p-3 bg-gray-900/50 rounded-xl">
                                    <div>
                                        <span className="text-white font-medium">정보처리기사</span>
                                        <p className="text-gray-500 text-xs">한국산업인력공단</p>
                                    </div>
                                    <span className="text-gray-500 text-sm">2024.09</span>
                                </div>
                                <div className="flex items-center justify-between p-3 bg-gray-900/50 rounded-xl">
                                    <div>
                                        <span className="text-white font-medium">OPIC IM1</span>
                                        <p className="text-gray-500 text-xs">ACTFL</p>
                                    </div>
                                    <span className="text-gray-500 text-sm">2025.02</span>
                                </div>
                                <div className="flex items-center justify-between p-3 bg-yellow-500/10 rounded-xl border border-yellow-500/20">
                                    <div>
                                        <span className="text-yellow-400 font-medium">DND 해커톤 1등</span>
                                        <p className="text-gray-500 text-xs">Java 17, Spring Boot, MySQL</p>
                                    </div>
                                    <span className="text-gray-500 text-sm">2025.05</span>
                                </div>
                            </div>
                        </div>

                        {/* 활동 */}
                        <div className="md:col-span-2 p-6 bg-gray-800/20 rounded-2xl border border-gray-800">
                            <div className="flex items-center gap-2 mb-6">
                                <Award className="text-blue-400" size={24} />
                                <h3 className="text-xl font-bold text-white">주요 활동</h3>
                            </div>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                                <div className="p-4 bg-gray-900/50 rounded-xl">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="text-green-400 font-medium">네이버 부스트캠프 웹풀스택 9기</span>
                                    </div>
                                    <p className="text-gray-500 text-sm mb-2">2024.06 ~ 2025.01</p>
                                    <p className="text-gray-400 text-xs">스크럼, 페어 프로그래밍, 코드 리뷰 등 소프트 스킬 강화</p>
                                </div>
                                <div className="p-4 bg-gray-900/50 rounded-xl">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="text-blue-400 font-medium">DND 13기</span>
                                    </div>
                                    <p className="text-gray-500 text-sm mb-2">2025.07 ~ 2025.08</p>
                                    <p className="text-gray-400 text-xs">연합 동아리, 8주간 프로젝트 진행</p>
                                </div>
                                <div className="p-4 bg-gray-900/50 rounded-xl">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="text-purple-400 font-medium">IL LAB (학부 연구실)</span>
                                    </div>
                                    <p className="text-gray-500 text-sm mb-2">2023.01 ~ 2024.12</p>
                                    <p className="text-gray-400 text-xs">학부 연구생, 랩장 / Java, Spring Boot 세미나 진행</p>
                                </div>
                                <div className="p-4 bg-gray-900/50 rounded-xl">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="text-orange-400 font-medium">P&N (학부 동아리)</span>
                                    </div>
                                    <p className="text-gray-500 text-sm mb-2">2019.03 ~ 2024.12</p>
                                    <p className="text-gray-400 text-xs">동아리원 → 부팀장 → 팀장, Spring Boot 스터디 운영</p>
                                </div>
                                <div className="p-4 bg-gray-900/50 rounded-xl">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="text-cyan-400 font-medium">한국교육개발원(GED) 정보과학반</span>
                                    </div>
                                    <p className="text-gray-500 text-sm mb-2">2023.04 ~ 2024.11</p>
                                    <p className="text-gray-400 text-xs">멘토 및 TA, 연 70시간 이상 프로그래밍 수업 보조</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-24 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="flex items-center justify-center gap-3 mb-12">
                        <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
                        <h2 className="text-3xl font-bold text-white">Contact</h2>
                        <div className="w-12 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
                    </div>

                    <p className="text-xl text-gray-400 mb-12">
                        함께 성장할 수 있는 기회를 찾고 있습니다
                    </p>

                    <div className="grid md:grid-cols-3 gap-6 mb-12">
                        <a href="mailto:go714n@naver.com" className="group p-6 bg-gray-800/30 rounded-2xl border border-gray-800 hover:border-blue-500/50 transition-all duration-300">
                            <Mail className="mx-auto mb-4 text-blue-400 group-hover:scale-110 transition-transform" size={32} />
                            <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                            <span className="text-gray-400 group-hover:text-blue-400 transition-colors">go714n@naver.com</span>
                        </a>
                        <a href="tel:010-3540-3372" className="group p-6 bg-gray-800/30 rounded-2xl border border-gray-800 hover:border-green-500/50 transition-all duration-300">
                            <Phone className="mx-auto mb-4 text-green-400 group-hover:scale-110 transition-transform" size={32} />
                            <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                            <span className="text-gray-400 group-hover:text-green-400 transition-colors">010-3540-3372</span>
                        </a>
                        <a href="https://github.com/go714n" target="_blank" rel="noopener noreferrer" className="group p-6 bg-gray-800/30 rounded-2xl border border-gray-800 hover:border-purple-500/50 transition-all duration-300">
                            <Github className="mx-auto mb-4 text-purple-400 group-hover:scale-110 transition-transform" size={32} />
                            <h3 className="text-lg font-semibold text-white mb-2">GitHub</h3>
                            <span className="text-gray-400 group-hover:text-purple-400 transition-colors">@go714n</span>
                        </a>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-8 px-6 border-t border-gray-800">
                <div className="max-w-6xl mx-auto text-center">
                    <p className="text-gray-500 text-sm">&copy; 2025 고동민. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Portfolio;

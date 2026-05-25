"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Spotlight } from "@/components/ui/spotlight";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { 
  Cpu, 
  Globe, 
  Zap, 
  Shield, 
  Layers,
  Search,
  Plus,
  Video,
  MousePointer2,
  Megaphone,
  Heart,
  MessageCircle,
  TrendingUp,
  Clock,
  RotateCcw,
  DollarSign,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Calendar,
  Play,
  Sparkles,
  Diamond
} from "lucide-react";

export default function Home() {
  const [activeVideo, setActiveVideo] = React.useState(0);
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);
  const [selectedService, setSelectedService] = React.useState<number | null>(null);
  const [selectedDate, setSelectedDate] = React.useState<number>(21);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-purple-500/30 overflow-x-hidden">
      <Navbar />

      {/* Left Sidebar */}
      <aside className="fixed left-0 top-0 h-screen w-16 border-r border-white/5 flex flex-col items-center py-8 gap-8 z-50 bg-black/50 backdrop-blur-md hidden md:flex">
         <div className="text-neutral-500 hover:text-white cursor-pointer transition-colors"><Search size={18} /></div>
         <div className="text-neutral-500 hover:text-white cursor-pointer transition-colors mt-auto"><Plus size={18} /></div>
         <div className="text-neutral-500 hover:text-white cursor-pointer transition-colors"><div className="w-4 h-4 border-2 border-current rounded-sm"></div></div>
         <div className="text-neutral-500 hover:text-white cursor-pointer transition-colors"><div className="w-4 h-4 bg-gradient-to-tr from-yellow-400 to-purple-600 rounded-sm"></div></div>
         <div className="text-neutral-500 hover:text-white cursor-pointer transition-colors"><div className="w-5 h-5 bg-neutral-800 rounded-full"></div></div>
         <div className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-white cursor-pointer hover:bg-white/10 transition-all">
            <Zap size={18} />
         </div>
      </aside>
      
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden md:pl-16">
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="purple" />
        
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="text-left">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-8 h-px bg-neutral-700"></div>
              <span className="text-neutral-500 text-xs font-bold tracking-widest uppercase">
                {"10M+ VIEWS GENERATED · TRUSTED BY SAAS FOUNDERS"}
              </span>
            </div>
            
            <h1 className="text-7xl md:text-[10rem] font-black tracking-tighter leading-[0.8] mb-8 uppercase">
              Launch videos <br />
              that <br />
              <span className="text-purple-600">Convert.</span>
            </h1>
            
            <p className="text-neutral-400 text-lg md:text-xl max-w-sm mb-12 leading-relaxed">
              Katalyst creates custom UI animations, launch videos & personal brand content for SaaS founders.
            </p>
            
            <div className="flex flex-col md:flex-row items-center gap-4">
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-10 py-5 rounded-full text-xs font-black transition-all purple-glow w-full md:w-auto uppercase tracking-widest">
                Get Custom Quote →
              </button>
              <button className="bg-transparent hover:bg-white/5 text-white px-10 py-5 rounded-full text-xs font-black transition-all w-full md:w-auto border border-white/20 uppercase tracking-widest">
                See Our Work
              </button>
            </div>
          </div>

          {/* Right Side - Floating Elements */}
          <div className="relative h-[800px] hidden lg:block">
            {/* Blackbox AI Card */}
            <div className="absolute top-20 left-0 glassmorphism p-6 rounded-3xl purple-glow animate-bounce [animation-duration:5s] z-20">
               <div className="flex flex-col items-center gap-3">
                 <div className="w-12 h-12 bg-black rounded-lg border border-white/10 flex items-center justify-center">
                   <Cpu size={24} className="text-white" />
                 </div>
                 <span className="font-bold text-[10px] tracking-widest uppercase">Blackbox AI</span>
               </div>
            </div>

            {/* Circular Text */}
            <div className="absolute top-1/3 right-10 w-48 h-48 animate-spin [animation-duration:15s] z-10 opacity-50">
              <svg viewBox="0 0 100 100" className="w-full h-full text-white fill-current">
                <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
                <text fontSize="6" fontWeight="900" letterSpacing="3">
                  <textPath xlinkHref="#circlePath">
                    VIDEO • CREATIVE • AGENCY • VIDEO • CREATIVE • AGENCY • 
                  </textPath>
                </text>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center p-2 shadow-2xl">
                    <div className="w-full h-full bg-black rounded-full flex flex-col items-center justify-center overflow-hidden">
                       <div className="flex gap-0.5">
                          <div className="w-1.5 h-3 bg-white rounded-full"></div>
                          <div className="w-1.5 h-4 bg-white rounded-full"></div>
                          <div className="w-1.5 h-2 bg-white rounded-full"></div>
                       </div>
                    </div>
                 </div>
              </div>
            </div>

            {/* Play AI Card */}
            <div className="absolute bottom-1/4 -right-10 glassmorphism p-6 rounded-3xl purple-glow animate-bounce [animation-duration:4s] z-20">
               <div className="flex flex-col items-center gap-3">
                 <div className="w-12 h-12 bg-black rounded-lg border border-white/10 flex items-center justify-center">
                   <Globe size={24} className="text-white" />
                 </div>
                 <span className="font-bold text-[10px] tracking-widest uppercase">PlayAI</span>
               </div>
            </div>

            {/* Blue Card Placeholder */}
            <div className="absolute bottom-40 left-10 bg-blue-600 p-8 rounded-2xl shadow-2xl rotate-12 z-0 scale-125">
               <div className="flex flex-col gap-2">
                  <div className="w-16 h-2 bg-white/40 rounded-full"></div>
                  <div className="w-12 h-2 bg-white/20 rounded-full"></div>
                  <div className="w-20 h-2 bg-white/30 rounded-full"></div>
               </div>
            </div>
          </div>
        </div>

        {/* Floating Sidebar Link */}
        <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-8 text-neutral-600">
           <div className="w-px h-20 bg-neutral-800 mx-auto"></div>
           <span className="rotate-90 origin-left translate-x-4 text-[10px] font-bold tracking-widest uppercase whitespace-nowrap">FOLLOW US</span>
        </div>

        {/* Bottom Right Floating Button */}
        <div className="absolute bottom-10 right-10 z-50">
           <div className="relative group cursor-pointer">
              <div className="absolute inset-0 bg-purple-600 rounded-full blur-xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative w-16 h-16 bg-black border border-white/10 rounded-full flex items-center justify-center overflow-hidden">
                 <div className="flex flex-col items-center gap-1">
                    <div className="w-6 h-1 bg-purple-500 rounded-full"></div>
                    <div className="w-4 h-1 bg-purple-500 rounded-full"></div>
                    <div className="w-5 h-1 bg-purple-500 rounded-full"></div>
                 </div>
                 <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-purple-600 text-[8px] font-bold uppercase text-center p-2 leading-tight">
                    Book a Call
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-y border-white/5 bg-black">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/5">
          <div className="p-12 md:p-16 flex flex-col gap-4">
            <span className="text-[10px] font-black tracking-[0.2em] text-purple-500 uppercase">
              {"// WORLDWIDE CLIENTS"}
            </span>
            <div className="flex items-baseline">
              <span className="text-7xl font-black tracking-tighter">15</span>
              <span className="text-7xl font-black tracking-tighter text-purple-600">+</span>
            </div>
            <span className="text-[10px] font-black tracking-[0.2em] text-neutral-500 uppercase">
              BRANDS ELEVATED
            </span>
          </div>

          <div className="p-12 md:p-16 flex flex-col gap-4">
            <span className="text-[10px] font-black tracking-[0.2em] text-purple-500 uppercase">
              {"// VIEWS GENERATED"}
            </span>
            <div className="flex items-baseline">
              <span className="text-7xl font-black tracking-tighter">10</span>
              <span className="text-7xl font-black tracking-tighter text-purple-600">M+</span>
            </div>
            <span className="text-[10px] font-black tracking-[0.2em] text-neutral-500 uppercase">
              ORGANIC IMPRESSIONS
            </span>
          </div>

          <div className="p-12 md:p-16 flex flex-col gap-4">
            <span className="text-[10px] font-black tracking-[0.2em] text-purple-500 uppercase">
              {"// SATISFACTION RATE"}
            </span>
            <div className="flex items-baseline">
              <span className="text-7xl font-black tracking-tighter">98</span>
              <span className="text-7xl font-black tracking-tighter text-purple-600">%</span>
            </div>
            <span className="text-[10px] font-black tracking-[0.2em] text-neutral-500 uppercase">
              CLIENT RETENTION
            </span>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-40 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div className="flex flex-col gap-4">
              <span className="text-[10px] font-black tracking-[0.2em] text-purple-500 uppercase">
                {"// WHAT WE DO"}
              </span>
              <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.8] uppercase">
                Content that <br />
                <span className="text-purple-600">Converts</span>
              </h2>
            </div>
            <p className="text-neutral-500 text-sm max-w-sm leading-relaxed mb-4">
              Three core services engineered to stop the scroll and start the conversation. Click any service to open an interactive preview.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <div 
                key={i}
                className="group relative bg-white/[0.02] border border-white/5 rounded-[40px] p-12 flex flex-col items-start transition-all duration-500 hover:border-purple-500/60 hover:bg-purple-500/[0.06] hover:shadow-[0_0_80px_rgba(168,85,247,0.25)]"
              >
                {/* Primary Large Ambient Glow */}
                <div className="absolute inset-0 bg-purple-500/40 blur-[160px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 rounded-[40px]"></div>
                
                {/* Secondary Concentrated Core Glow */}
                <div className="absolute inset-0 bg-purple-400/20 blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 rounded-[40px]"></div>
                
                <span className="text-[10px] font-black tracking-[0.2em] text-purple-500 uppercase mb-8">
                  {service.id} {"//"}
                </span>
                
                <h3 className="text-2xl font-black tracking-widest uppercase mb-12">
                  {service.title}
                </h3>
                
                <div className="w-full aspect-square flex items-center justify-center mb-12 text-neutral-800 group-hover:text-purple-500/50 transition-colors duration-500">
                  {React.cloneElement(service.icon as React.ReactElement, { size: 120, strokeWidth: 1 })}
                </div>
                
                <p className="text-neutral-500 text-sm leading-relaxed mb-12">
                  {service.description}
                </p>
                
                <button className="text-[10px] font-black tracking-[0.2em] text-neutral-400 group-hover:text-purple-500 uppercase flex items-center gap-2 transition-colors">
                  EXPLORE <span className="text-lg">→</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Showcase Section */}
      <section className="relative bg-black py-20">
        <ContainerScroll
          titleComponent={
            <>
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
                The Dashboard of the <br />
                <span className="text-4xl md:text-7xl font-bold mt-1 text-purple-500">
                  Future
                </span>
              </h2>
            </>
          }
        >
          <div className="w-full h-full bg-neutral-900 rounded-xl border border-white/10 overflow-hidden relative group">
             {/* Mock Dashboard UI */}
             <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-transparent"></div>
             <div className="p-8">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                  </div>
                  <div className="h-8 w-64 bg-white/5 rounded-lg border border-white/10"></div>
                </div>
                <div className="grid grid-cols-3 gap-6">
                  <div className="col-span-2 space-y-6">
                    <div className="h-48 bg-white/5 rounded-xl border border-white/10 p-6">
                      <div className="flex justify-between items-center mb-4">
                         <div className="w-32 h-4 bg-white/10 rounded"></div>
                         <div className="w-12 h-8 bg-purple-500/20 rounded-lg"></div>
                      </div>
                      <div className="w-full h-24 bg-gradient-to-t from-purple-500/10 to-transparent rounded-lg border-b border-purple-500/30"></div>
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                       <div className="h-32 bg-white/5 rounded-xl border border-white/10"></div>
                       <div className="h-32 bg-white/5 rounded-xl border border-white/10"></div>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="h-full bg-white/5 rounded-xl border border-white/10 p-6">
                       <div className="space-y-4">
                          <div className="w-full h-4 bg-white/10 rounded"></div>
                          <div className="w-2/3 h-4 bg-white/10 rounded"></div>
                          <div className="w-full h-4 bg-white/10 rounded"></div>
                          <div className="w-1/2 h-4 bg-white/10 rounded"></div>
                       </div>
                    </div>
                  </div>
                </div>
             </div>
             <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-sm">
                <button className="bg-purple-600 text-white px-6 py-2 rounded-full font-bold">Preview Application</button>
             </div>
          </div>
        </ContainerScroll>
      </section>

      {/* Video Showcase Section */}
      <section className="py-40 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col gap-4 mb-16">
            <span className="text-[10px] font-black tracking-[0.2em] text-purple-500 uppercase">
              {"// LAUNCH VIDEOS"}
            </span>
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.8] uppercase">
              Videos that <br />
              <span className="text-purple-600">Launch Ideas</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Main Video Player */}
            <div className="lg:col-span-3 space-y-6">
              <div className="relative aspect-video bg-neutral-900 rounded-[20px] border border-white/5 overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10"></div>
                
                {/* Now Playing Indicator */}
                <div className="absolute top-6 left-6 z-20 flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                  <span className="text-[10px] font-black tracking-widest uppercase text-white/70">NOW PLAYING</span>
                </div>

                {/* Sound Visualizer Mock */}
                <div className="absolute top-6 right-6 z-20 flex items-end gap-0.5 h-4">
                  {[40, 70, 100, 60, 80, 50, 90].map((h, i) => (
                    <div 
                      key={i} 
                      className="w-1 bg-purple-500 rounded-full animate-bounce" 
                      style={{ height: `${h}%`, animationDuration: `${0.6 + (i * 0.1)}s` }}
                    ></div>
                  ))}
                </div>

                {/* Video Content Placeholder */}
                <div className="absolute inset-0 flex items-center justify-center bg-purple-900/10">
                   <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform cursor-pointer">
                      <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[15px] border-l-white border-b-[10px] border-b-transparent ml-1"></div>
                   </div>
                </div>

                {/* Video Info Overlay */}
                <div className="absolute bottom-8 left-8 right-8 z-20">
                  <div className="flex flex-col gap-2">
                    <span className="text-[10px] font-black tracking-widest text-purple-500 uppercase">{showcaseVideos[activeVideo].category}</span>
                    <div className="w-full h-0.5 bg-white/10 rounded-full overflow-hidden">
                       <div className="w-1/3 h-full bg-purple-600 rounded-full shadow-[0_0_10px_rgba(147,51,234,0.5)]"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Thumbnails */}
              <div className="grid grid-cols-4 gap-4">
                {showcaseVideos.map((video, i) => (
                  <div 
                    key={i}
                    onClick={() => setActiveVideo(i)}
                    className={cn(
                      "aspect-video rounded-xl border-2 transition-all cursor-pointer overflow-hidden",
                      activeVideo === i ? "border-purple-600 shadow-[0_0_20px_rgba(147,51,234,0.3)]" : "border-white/5 opacity-50 hover:opacity-100"
                    )}
                  >
                    <div className="w-full h-full bg-neutral-800 flex items-center justify-center text-[10px] font-bold">
                       {video.title}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Feature List */}
            <div className="lg:col-span-1 flex flex-col justify-between py-4">
              {showcaseFeatures.map((feature, i) => (
                <div key={i} className="group cursor-default border-b border-white/5 pb-8 last:border-0">
                  <div className="flex gap-4">
                    <span className="text-[10px] font-black tracking-widest text-purple-600 uppercase pt-1">0{i+1}</span>
                    <div className="flex flex-col gap-2">
                      <h4 className="text-[10px] font-black tracking-[0.2em] text-white uppercase group-hover:text-purple-500 transition-colors">
                        {feature.title}
                      </h4>
                      <p className="text-[10px] leading-relaxed text-neutral-500 uppercase tracking-wider font-medium">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Bento Grid */}
      <section className="py-40 px-6 bg-black">
        <div className="max-w-7xl mx-auto text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Built for Scale</h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            Everything you need to ship world-class software, all in one unified ecosystem.
          </p>
        </div>
        <BentoGrid>
          {features.map((feature, i) => (
            <BentoGridItem
              key={i}
              title={feature.title}
              description={feature.description}
              header={feature.header}
              className={feature.className}
              icon={feature.icon}
            />
          ))}
        </BentoGrid>
      </section>

      {/* Testimonials (Social Proof) Section */}
      <section className="py-40 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div className="flex flex-col gap-4">
              <span className="text-[10px] font-black tracking-[0.2em] text-purple-500 uppercase">
                {"// SOCIAL PROOF"}
              </span>
              <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.8] uppercase">
                What clients <br />
                say <span className="text-purple-600">Publicly</span>
              </h2>
            </div>
            <button className="bg-transparent hover:bg-white/5 text-white px-10 py-5 rounded-full text-[10px] font-black tracking-[0.2em] transition-all border border-white/20 uppercase">
              Work with us
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0.5 bg-white/5 border border-white/5 rounded-[40px] overflow-hidden">
            {socialProof.map((post, i) => (
              <div 
                key={i}
                className="bg-black p-10 flex flex-col gap-6 hover:bg-white/[0.02] transition-colors group"
              >
                <div className="flex justify-between items-start">
                  <div className="flex gap-4">
                    <div className={cn(
                      "w-12 h-12 rounded-full flex items-center justify-center text-xs font-black text-white",
                      post.color || "bg-purple-600"
                    )}>
                      {post.initials}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-black tracking-tight uppercase">{post.name}</span>
                      <span className="text-[10px] font-bold text-neutral-600 uppercase tracking-widest">{post.handle}</span>
                    </div>
                  </div>
                  <span className="text-neutral-700 text-lg font-black group-hover:text-purple-500 transition-colors cursor-default select-none">X</span>
                </div>

                <p className="text-sm leading-relaxed text-neutral-400 font-medium">
                  {post.content.split(/(@\w+)/g).map((part, index) => 
                    part.startsWith('@') ? <span key={index} className="text-purple-500">{part}</span> : part
                  )}
                </p>

                <div className="flex gap-6 mt-auto">
                  <div className="flex items-center gap-2 text-neutral-600 text-[10px] font-black hover:text-purple-500 transition-colors cursor-pointer">
                    <Heart size={12} fill="currentColor" />
                    <span>{post.likes}</span>
                  </div>
                  <div className="flex items-center gap-2 text-neutral-600 text-[10px] font-black hover:text-purple-500 transition-colors cursor-pointer">
                    <MessageCircle size={12} />
                    <span>{post.comments}</span>
                  </div>
                  <span className="text-neutral-700 text-[10px] font-black ml-auto">{post.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-40 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center mb-24 gap-4">
            <span className="text-[10px] font-black tracking-[0.2em] text-neutral-500 uppercase">
              {"// REAL RESULTS"}
            </span>
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.8] uppercase">
              Client success <br />
              <span className="text-purple-600">Stories</span>
            </h2>
            <p className="text-neutral-500 text-sm max-w-lg mt-8 leading-relaxed">
              Here&apos;s what happened when founders chose Katalyst for their video strategy.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, i) => (
              <div 
                key={i}
                className="bg-white/[0.02] border border-white/5 rounded-[40px] p-10 flex flex-col gap-10 hover:border-purple-500/30 transition-all group"
              >
                <div className="flex justify-between items-start">
                  <div className="flex flex-col gap-1">
                    <h3 className="text-xl font-black tracking-tight uppercase">{study.client}</h3>
                    <span className="text-[9px] font-black tracking-[0.2em] text-neutral-500 uppercase">{study.industry}</span>
                    <span className="text-[10px] font-black tracking-[0.1em] text-purple-500 uppercase mt-4">{study.campaign}</span>
                  </div>
                  <TrendingUp className="text-purple-600" size={20} />
                </div>

                <div className="space-y-6">
                  <div className="space-y-2">
                    <span className="text-[9px] font-black tracking-[0.2em] text-neutral-600 uppercase">CHALLENGE</span>
                    <p className="text-[11px] leading-relaxed text-neutral-400 uppercase tracking-wider font-medium">
                      {study.challenge}
                    </p>
                  </div>
                  <div className="space-y-2">
                    <span className="text-[9px] font-black tracking-[0.2em] text-neutral-600 uppercase">SOLUTION</span>
                    <p className="text-[11px] leading-relaxed text-neutral-400 uppercase tracking-wider font-medium">
                      {study.solution}
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <span className="text-[9px] font-black tracking-[0.2em] text-neutral-600 uppercase">RESULTS</span>
                  <div className="grid grid-cols-3 gap-4">
                    {study.results.map((result, j) => (
                      <div key={j} className="flex flex-col gap-1">
                        <span className="text-xl font-black tracking-tighter text-purple-500">{result.value}</span>
                        <span className="text-[8px] leading-tight text-neutral-500 uppercase font-black">{result.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-auto pt-10 border-t border-white/5">
                  <p className="text-[11px] italic leading-relaxed text-neutral-400 mb-4 uppercase tracking-wider font-medium">
                    &quot;{study.quote}&quot;
                  </p>
                  <span className="text-[9px] font-black tracking-[0.2em] text-white uppercase">{study.founder}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 flex justify-center">
             <button className="bg-purple-600 hover:bg-purple-700 text-white px-10 py-5 rounded-full text-xs font-black tracking-[0.1em] transition-all purple-glow uppercase">
                Get Similar Results for Your Company
             </button>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-40 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center mb-24 gap-4">
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase">
              Built on <span className="text-purple-600">Trust</span>
            </h2>
            <p className="text-neutral-500 text-sm max-w-lg mt-4 leading-relaxed font-medium uppercase tracking-wider">
              We stand behind our work with guarantees that protect your investment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {trustFactors.map((factor, i) => (
              <div 
                key={i}
                className="bg-white/[0.02] border border-white/5 rounded-[30px] p-10 flex flex-col items-start gap-6 hover:border-purple-500/30 transition-all group"
              >
                <div className="text-purple-500 group-hover:text-purple-400 transition-colors">
                   {React.cloneElement(factor.icon as React.ReactElement, { size: 24, strokeWidth: 2.5 })}
                </div>
                <div className="space-y-3">
                   <h3 className="text-sm font-black tracking-tight uppercase">{factor.title}</h3>
                   <p className="text-[10px] leading-relaxed text-neutral-500 uppercase tracking-widest font-medium">
                      {factor.description}
                   </p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             {trustStats.map((stat, i) => (
               <div 
                key={i}
                className="bg-white/[0.02] border border-white/5 rounded-[20px] p-8 flex flex-col items-center text-center gap-2 hover:border-purple-500/20 transition-all"
               >
                 <span className="text-3xl font-black tracking-tighter text-purple-600">{stat.value}</span>
                 <span className="text-[9px] font-bold text-neutral-500 uppercase tracking-[0.2em]">{stat.label}</span>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-40 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center mb-24 gap-4">
            <span className="text-[10px] font-black tracking-[0.2em] text-purple-500 uppercase">
              {"// OUR PACKAGES"}
            </span>
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.8] uppercase">
              Motion content that <br />
              <span className="text-purple-600">Pays for itself</span>
            </h2>
            <p className="text-neutral-500 text-sm max-w-lg mt-8 leading-relaxed font-medium uppercase tracking-wider">
              Premium motion content tailored to your exact needs. <span className="text-purple-500">Custom quote within 24 hours.</span>
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {packages.map((pkg, i) => (
              <div 
                key={i}
                className={cn(
                  "relative bg-white/[0.02] border rounded-[40px] p-10 flex flex-col gap-8 transition-all group",
                  pkg.featured ? "border-purple-500/50 purple-glow scale-105 z-10 bg-purple-500/[0.02]" : "border-white/5"
                )}
              >
                {pkg.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-purple-600 text-white text-[9px] font-black tracking-[0.2em] uppercase px-4 py-2 rounded-full shadow-[0_0_20px_rgba(147,51,234,0.5)]">
                    Most Popular
                  </div>
                )}

                <div className="space-y-4">
                  <span className="text-[10px] font-black tracking-[0.2em] text-purple-500 uppercase">{pkg.id} {"//"}</span>
                  <h3 className="text-2xl font-black tracking-tight uppercase">{pkg.name}</h3>
                  <p className="text-[10px] leading-relaxed text-neutral-500 uppercase tracking-widest font-medium h-12">
                    {pkg.description}
                  </p>
                </div>

                <div className="flex items-center gap-4">
                   <div className="bg-purple-600/10 border border-purple-500/20 rounded-full px-4 py-2 text-[10px] font-black tracking-widest text-purple-500 uppercase">
                      + Custom Pricing
                   </div>
                   <span className="text-[8px] font-bold text-neutral-600 uppercase tracking-widest">tailored to you</span>
                </div>

                <div className="flex items-center gap-2 text-neutral-500">
                   <Clock size={12} className="text-purple-500" />
                   <span className="text-[9px] font-bold uppercase tracking-widest">{pkg.turnaround}</span>
                </div>

                <div className="flex-1 space-y-4 pt-4">
                   {pkg.features.map((feature, j) => (
                     <div key={j} className="flex items-start gap-3">
                        <Check size={12} className="text-purple-500 mt-0.5 shrink-0" />
                        <span className="text-[10px] leading-tight text-neutral-400 uppercase font-black tracking-wider">{feature}</span>
                     </div>
                   ))}
                </div>

                <button className={cn(
                  "w-full py-4 rounded-2xl text-[10px] font-black tracking-[0.2em] uppercase transition-all",
                  pkg.featured ? "bg-purple-600 hover:bg-purple-700 text-white purple-glow" : "bg-white/5 hover:bg-white/10 text-white border border-white/10"
                )}>
                  Get Quote
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-40 px-6 bg-black">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center text-center mb-24 gap-4">
            <span className="text-[10px] font-black tracking-[0.2em] text-purple-500 uppercase">
              {"// FREQUENTLY ASKED QUESTIONS"}
            </span>
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.8] uppercase">
              Questions? <br />
              <span className="text-purple-600">We&apos;ve got answers</span>
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div 
                key={i}
                className="bg-white/[0.02] border border-white/5 rounded-2xl overflow-hidden hover:border-purple-500/30 transition-all"
              >
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full p-8 flex items-center justify-between text-left group"
                >
                  <span className="text-sm font-black tracking-tight uppercase group-hover:text-purple-400 transition-colors">
                    {faq.question}
                  </span>
                  <ChevronDown 
                    size={16} 
                    className={cn(
                      "text-purple-600 transition-transform duration-300",
                      openFaq === i ? "rotate-180" : ""
                    )} 
                  />
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-8 pb-8 text-[11px] leading-relaxed text-neutral-500 uppercase tracking-wider font-medium border-t border-white/5 pt-6">
                         {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <div className="mt-20 glassmorphism rounded-[30px] p-12 text-center flex flex-col items-center gap-8 border border-white/5">
             <span className="text-sm font-black tracking-widest text-neutral-500 uppercase">Still have questions?</span>
             <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full text-[10px] font-black tracking-[0.2em] transition-all purple-glow flex items-center gap-3 uppercase">
                <Calendar size={14} />
                Book a Free Discovery Call
             </button>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-40 px-6 bg-black">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center text-center mb-24 gap-4">
            <span className="text-[10px] font-black tracking-[0.2em] text-purple-500 uppercase">
              {"// GET YOUR CUSTOM QUOTE"}
            </span>
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.8] uppercase">
              Tell us about <br />
              <span className="text-purple-600">Your Project</span>
            </h2>
            <p className="text-neutral-500 text-sm max-w-lg mt-8 leading-relaxed font-medium uppercase tracking-wider">
              We&apos;ll respond with a custom quote within 24 hours. No commitment needed.
            </p>
          </div>

          <div className="bg-white/[0.02] border border-white/5 rounded-[40px] p-8 md:p-16 space-y-20">
            {/* Step 1: Selection */}
            <div className="space-y-10">
              <div className="flex items-center gap-4">
                <span className="text-[10px] font-black text-neutral-600 uppercase tracking-widest">01 /</span>
                <h3 className="text-[10px] font-black text-neutral-400 uppercase tracking-[0.2em]">What do you need?</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {quoteServices.map((service, i) => (
                  <button 
                    key={i}
                    onClick={() => setSelectedService(i)}
                    className={cn(
                      "p-8 rounded-3xl border flex flex-col items-center text-center gap-6 transition-all group",
                      selectedService === i 
                        ? "bg-purple-600/10 border-purple-500 shadow-[0_0_30px_rgba(147,51,234,0.1)]" 
                        : "bg-black/40 border-white/5 hover:border-white/20"
                    )}
                  >
                    <div className={cn(
                      "w-12 h-12 rounded-2xl flex items-center justify-center transition-colors",
                      selectedService === i ? "text-purple-400" : "text-neutral-600 group-hover:text-neutral-400"
                    )}>
                      {React.cloneElement(service.icon as React.ReactElement, { size: 24, strokeWidth: 1.5 })}
                    </div>
                    <div className="space-y-2">
                       <span className="block text-[10px] font-black uppercase tracking-[0.2em]">{service.title}</span>
                       <span className="block text-[8px] font-bold text-neutral-600 uppercase tracking-widest leading-relaxed">
                          {service.description}
                       </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Details */}
            <div className="space-y-10">
              <div className="flex items-center gap-4">
                <span className="text-[10px] font-black text-neutral-600 uppercase tracking-widest">02 /</span>
                <h3 className="text-[10px] font-black text-neutral-400 uppercase tracking-[0.2em]">Your Details</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div className="space-y-3">
                    <label className="text-[9px] font-black text-neutral-600 uppercase tracking-widest ml-1">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="Alex Johnson"
                      className="w-full bg-white/[0.03] border border-white/5 rounded-2xl px-6 py-4 text-xs font-medium focus:outline-none focus:border-purple-500/50 transition-colors uppercase tracking-widest placeholder:text-neutral-700"
                    />
                 </div>
                 <div className="space-y-3">
                    <label className="text-[9px] font-black text-neutral-600 uppercase tracking-widest ml-1">Email</label>
                    <input 
                      type="email" 
                      placeholder="alex@company.com"
                      className="w-full bg-white/[0.03] border border-white/5 rounded-2xl px-6 py-4 text-xs font-medium focus:outline-none focus:border-purple-500/50 transition-colors uppercase tracking-widest placeholder:text-neutral-700"
                    />
                 </div>
              </div>
              <div className="space-y-3">
                <label className="text-[9px] font-black text-neutral-600 uppercase tracking-widest ml-1 flex items-center gap-2">
                  Anything Else? <span className="text-[8px] text-neutral-700">(optional)</span>
                </label>
                <textarea 
                  rows={4}
                  placeholder="Deadline, platform, reference links..."
                  className="w-full bg-white/[0.03] border border-white/5 rounded-3xl px-6 py-4 text-xs font-medium focus:outline-none focus:border-purple-500/50 transition-colors uppercase tracking-widest placeholder:text-neutral-700 resize-none"
                ></textarea>
              </div>
            </div>

            <div className="space-y-8">
               <button className="w-full py-6 rounded-[20px] bg-white/5 border border-white/10 text-[10px] font-black tracking-[0.3em] uppercase text-neutral-400 hover:bg-purple-600 hover:text-white hover:border-purple-500 transition-all hover:purple-glow">
                  Get My Custom Quote →
               </button>
               <div className="flex flex-wrap justify-center gap-8 opacity-40">
                  <div className="flex items-center gap-2 text-[8px] font-black uppercase tracking-widest"><Check size={10} className="text-purple-500" /> 24hr Reply</div>
                  <div className="flex items-center gap-2 text-[8px] font-black uppercase tracking-widest"><Check size={10} className="text-purple-500" /> Zero Pressure</div>
                  <div className="flex items-center gap-2 text-[8px] font-black uppercase tracking-widest"><Check size={10} className="text-purple-500" /> Custom Pricing</div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-40 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="flex flex-col gap-4">
              <span className="text-[10px] font-black tracking-[0.2em] text-purple-500 uppercase">
                {"// SCHEDULE"}
              </span>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-[0.8] uppercase">
                Book a <span className="text-purple-600">Discovery</span> Call
              </h2>
            </div>
            <p className="text-neutral-500 text-[10px] max-w-xs leading-relaxed font-medium uppercase tracking-widest mb-2">
              30 minutes. No sales pitch. Just a clear plan for your content strategy. Pick a time that works.
            </p>
          </div>

          <div className="bg-white/[0.02] border border-white/5 rounded-[40px] overflow-hidden grid grid-cols-1 lg:grid-cols-4 min-h-[600px]">
               {/* Sidebar Details - Now smaller (1/4) */}
               <div className="lg:col-span-1 border-r border-white/5 p-12 flex flex-col gap-12">
                  <div className="flex flex-col gap-6">
                     <div className="w-12 h-10 flex items-end gap-1">
                        {[0.4, 0.8, 0.6, 1].map((h, i) => (
                           <div key={i} className="flex-1 bg-purple-600 rounded-sm" style={{ height: `${h * 100}%` }}></div>
                        ))}
                     </div>
                     <div>
                        <span className="block text-[8px] font-black text-purple-500 uppercase tracking-widest">KATALYST</span>
                        <h3 className="text-xs font-black uppercase tracking-widest text-white mt-1">Discovery Call</h3>
                     </div>
                  </div>

                  <div className="space-y-6">
                     <div className="flex items-center gap-4 text-neutral-500">
                        <Clock size={16} className="text-purple-500" />
                        <span className="text-[10px] font-black uppercase tracking-widest">30 minutes</span>
                     </div>
                     <div className="flex items-center gap-4 text-neutral-500">
                        <Video size={16} className="text-purple-500" />
                        <span className="text-[10px] font-black uppercase tracking-widest">Google Meet</span>
                     </div>
                  </div>
               </div>

               {/* Calendar Area - Now larger (3/4) */}
               <div className="lg:col-span-3 p-12 md:p-20 flex flex-col gap-12 bg-black/40">
                  <div className="flex items-center justify-between">
                     <h4 className="text-[12px] font-black uppercase tracking-[0.3em] text-neutral-400">Select a Date</h4>
                  </div>

                  <div className="space-y-12">
                     <div className="flex items-center justify-between max-w-md mx-auto">
                        <button className="text-neutral-600 hover:text-white transition-colors p-2"><ChevronLeft size={20} /></button>
                        <span className="text-[12px] font-black uppercase tracking-[0.4em] text-white">May 2026</span>
                        <button className="text-neutral-600 hover:text-white transition-colors p-2"><ChevronRight size={20} /></button>
                     </div>

                     <div className="grid grid-cols-7 gap-4">
                        {["SU", "MO", "TU", "WE", "TH", "FR", "SA"].map((day) => (
                           <div key={day} className="text-[10px] font-black text-neutral-700 text-center pb-4">{day}</div>
                        ))}
                        {Array.from({ length: 31 }).map((_, i) => {
                           const day = i + 1;
                           const isInactive = day < 10;
                           return (
                              <button 
                                 key={day}
                                 onClick={() => !isInactive && setSelectedDate(day)}
                                 className={cn(
                                    "aspect-square rounded-2xl flex items-center justify-center text-xs font-black transition-all",
                                    isInactive ? "text-neutral-800 cursor-default" : "hover:bg-white/5 hover:text-white",
                                    selectedDate === day ? "bg-purple-600/10 border border-purple-600 text-white shadow-[0_0_30px_rgba(147,51,234,0.2)] scale-110" : "text-neutral-400"
                                 )}
                              >
                                 {day}
                              </button>
                           );
                        })}
                     </div>
                  </div>
               </div>
            </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 dark:border-white/[0.1] border border-transparent"></div>
);

const quoteServices = [
  {
    title: "Launch Video",
    description: "Cinematic product launch films",
    icon: <Play />,
  },
  {
    title: "UI Animation",
    description: "Micro-interactions & motion design",
    icon: <Sparkles />,
  },
  {
    title: "Ad Creative",
    description: "High-converting social video ads",
    icon: <Diamond />,
  },
];

const features = [
  {
    title: "Real-time Collaboration",
    description: "Work together with your team in real-time with zero latency.",
    header: <Skeleton />,
    className: "md:col-span-2",
    icon: <Globe className="h-4 w-4 text-purple-500" />,
  },
  {
    title: "AI Engine",
    description: "Intelligent code completion and bug detection built-in.",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <Cpu className="h-4 w-4 text-purple-500" />,
  },
  {
    title: "Global Edge",
    description: "Deploy to 200+ regions around the world automatically.",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <Layers className="h-4 w-4 text-purple-500" />,
  },
  {
    title: "Security First",
    description: "Enterprise-grade security with end-to-end encryption.",
    header: <Skeleton />,
    className: "md:col-span-2",
    icon: <Shield className="h-4 w-4 text-purple-500" />,
  },
];

const services = [
  {
    id: "01",
    title: "Launch Videos",
    icon: <Video />,
    description: "Premium product launch videos designed to generate buzz and conversions",
  },
  {
    id: "02",
    title: "UI Animations",
    icon: <MousePointer2 />,
    description: "10-15 custom micro-interactions that make users stop and engage",
  },
  {
    id: "03",
    title: "Ad Creatives",
    icon: <Megaphone />,
    description: "Performance-optimized video ads with average 60K+ views",
  },
];

const socialProof = [
  {
    name: "Siddharth Kulkarni",
    handle: "@siddkul",
    initials: "SK",
    color: "bg-purple-600",
    content: "Just dropped our product launch video by @Katalyst — I've never seen our audience this engaged. Comments are going crazy.",
    likes: 284,
    comments: 67,
    time: "2h",
  },
  {
    name: "Neha Mehta",
    handle: "@neha_builds",
    initials: "NM",
    color: "bg-neutral-800",
    content: "The UI animation package from @Katalyst made our onboarding feel 10x more premium. Worth every single rupee for SaaS founders.",
    likes: 512,
    comments: 103,
    time: "4h",
  },
  {
    name: "Vikram Rao",
    handle: "@vikramrao_",
    initials: "VR",
    color: "bg-purple-600",
    content: "Hired @Katalyst for my personal brand — LinkedIn grew 4x in 6 weeks and I booked 12 new coaching clients. Genuinely game-changing.",
    likes: 731,
    comments: 188,
    time: "1d",
  },
  {
    name: "Tara Ahuja",
    handle: "@taraahuja",
    initials: "TA",
    color: "bg-neutral-800",
    content: "Our course launch trailer by @Katalyst converted at 14% on a cold audience. If you're launching anything, talk to these guys.",
    likes: 344,
    comments: 89,
    time: "2d",
  },
  {
    name: "Dev Khanna",
    handle: "@devkhanna_io",
    initials: "DK",
    color: "bg-purple-600",
    content: "Meta ad creative from @Katalyst cut our CPL from ₹340 to ₹190 in week one. Creative really does make this much difference.",
    likes: 621,
    comments: 142,
    time: "3d",
  },
  {
    name: "Riya Pillai",
    handle: "@riyapillai",
    initials: "RP",
    color: "bg-neutral-800",
    content: "Working with @Katalyst felt like having a full in-house creative team. Responsive, strategic, obsessed with quality.",
    likes: 198,
    comments: 44,
    time: "5d",
  },
];

const showcaseVideos = [
  {
    title: "Cinematic Quality",
    category: "Brand Films",
  },
  {
    title: "Fast Turnaround",
    category: "Product Demos",
  },
  {
    title: "Conversion-Optimized",
    category: "Social Ads",
  },
  {
    title: "Repurposing Bundle",
    category: "Micro-Content",
  },
];

const showcaseFeatures = [
  {
    title: "Cinematic Quality",
    description: "4K production with professional colour grading, motion graphics, and original sound design baked in from day one.",
  },
  {
    title: "Fast Turnaround",
    description: "First cut in 5 business days. Revisions are fast and unlimited on our monthly retainer plan.",
  },
  {
    title: "Conversion-Optimised",
    description: "Scripts written by strategists, not just editors — every scene has a measurable objective and goal.",
  },
  {
    title: "Repurposing Bundle",
    description: "One hero video becomes 10+ social cuts, audiograms, and email assets — maximum ROI per shoot.",
  },
];

const caseStudies = [
  {
    client: "Blackbox AI",
    industry: "AI SAAS",
    campaign: "Product Launch Campaign",
    challenge: "New AI platform launch needed immediate market validation and user acquisition",
    solution: "Created 5 product demo videos + launch video with focused messaging for founder audience",
    results: [
      { value: "2.4M", label: "Views Generated" },
      { value: "+340%", label: "Signups Increase" },
      { value: "4.2%", label: "CTR" },
    ],
    quote: "The videos absolutely moved the needle on signups. Worth every rupee.",
    founder: "Founder, Blackbox AI",
  },
  {
    client: "Play AI",
    industry: "VOICE AI",
    campaign: "Personal Brand Series",
    challenge: "Founder needed to establish authority in crowded AI space with limited visibility",
    solution: "Produced 12-video monthly series showcasing founder expertise + behind-the-scenes content",
    results: [
      { value: "45K", label: "LinkedIn Imp./Month" },
      { value: "14%", label: "Engagement Rate" },
      { value: "50K", label: "Followers Added" },
    ],
    quote: "This changed my personal brand positioning completely. Now industry leaders reach out to me.",
    founder: "Founder, Play AI",
  },
  {
    client: "Base (Crypto)",
    industry: "BLOCKCHAIN",
    campaign: "Educational Content Hub",
    challenge: "Complex product needed simple, engaging explanations for different audience segments",
    solution: "Created library of 20+ explainer videos breaking down features for beginners to developers",
    results: [
      { value: "3.8M", label: "Total Views" },
      { value: "2.1%", label: "Conversion Rate" },
      { value: "40%", label: "Reduced Support Tickets" },
    ],
    quote: "Reduced our support burden significantly. Customers understand the product way better now.",
    founder: "Product Lead, Base",
  },
];

const packages = [
  {
    id: "01",
    name: "The Signal",
    description: "Perfect for testing cold email & LinkedIn outreach with video for the first time",
    turnaround: "7 business days",
    features: [
      "1 x UI/Product Animation Video (30-60s)",
      "The mintmedia Motion Brief™",
      "Feature-to-Feeling Script™",
      "2 export formats: 16:9 + 1:1",
      "2 rounds of revisions",
      "Full commercial rights",
    ],
    featured: false,
  },
  {
    id: "02",
    name: "The Launch Stack",
    description: "Launching a feature, running ads, or going outbound at scale",
    turnaround: "14 business days",
    features: [
      "1 x Launch/Explainer Video (60-90s)",
      "2 x UI Animation Clips (30-45s each)",
      "3 x Ad Creative Variants (15s each)",
      "Motion Brief™ + Feature-to-Feeling Script™",
      "SaaS Objection Overlay™",
      "All aspect ratios: 16:9, 9:16, 1:1",
      "LinkedIn caption copy (3 videos)",
      "3 rounds of revisions",
      "Full commercial rights",
    ],
    featured: true,
  },
  {
    id: "03",
    name: "Motion OS",
    description: "Build video as a compounding growth channel with a monthly retainer",
    turnaround: "5-day turnaround · 2-month minimum",
    features: [
      "4 x UI/Product Animation Videos/mo",
      "6 x Ad Creative Variants/mo",
      "Unlimited minor revision requests",
      "Monthly Content Strategy Call (30 min)",
      "The Motion Content Calendar™",
      "All aspect ratios & formats",
      "Full commercial rights",
    ],
    featured: false,
  },
];

const trustFactors = [
  {
    title: "100% Satisfaction",
    description: "50% refund on UI animations if unsatisfied after revisions",
    icon: <Shield />,
  },
  {
    title: "24-Hour Guarantee",
    description: "We respond to all quote requests within 24 business hours",
    icon: <Clock />,
  },
  {
    title: "Fair Pricing",
    description: "No hidden fees, no surprise costs. Tailored quotes for every project",
    icon: <DollarSign />,
  },
  {
    title: "Unlimited Revisions",
    description: "Retainer packages include unlimited revisions until perfect",
    icon: <RotateCcw />,
  },
];

const trustStats = [
  { value: "15+", label: "Happy clients across Asia & US" },
  { value: "10M+", label: "Organic views generated (verified)" },
  { value: "100%", label: "Project on-time delivery rate" },
];

const faqs = [
  {
    question: "How much does a launch video cost?",
    answer: "Every project is unique. We provide custom quotes within 24 hours based on your specific requirements, complexity, and timeline.",
  },
  {
    question: "How long does the video production process take?",
    answer: "Typical turnaround for a single launch video is 7-14 business days. Retainer clients on 'Motion OS' benefit from priority 5-day turnaround.",
  },
  {
    question: "Do you offer revisions?",
    answer: "Yes, every package includes set rounds of revisions. Retainer packages include unlimited revisions until the content is perfect.",
  },
  {
    question: "Can you guarantee my video will go viral or get specific results?",
    answer: "While we can't guarantee virality, our scripts are written by strategists to maximize conversion and engagement based on historical data.",
  },
  {
    question: "What's your process like?",
    answer: "We start with the 'Motion Brief™', followed by a 'Feature-to-Feeling' script, professional production, and finally delivery in multiple formats.",
  },
  {
    question: "Do you work with international clients?",
    answer: "Yes, we work with SaaS founders and startups globally, primarily across Asia and the US.",
  },
  {
    question: "What software/formats do you deliver in?",
    answer: "We deliver in all standard aspect ratios (16:9, 9:16, 1:1) and provide high-quality MP4/MOV files optimized for various platforms.",
  },
  {
    question: "What if I'm not happy with the final video?",
    answer: "We offer a 'Love it or Redo it' guarantee. If you're still unsatisfied after revisions, we offer a 50% refund on UI animations.",
  },
];

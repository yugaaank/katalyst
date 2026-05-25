# Katalyst | High-End Agency Landing Page

Katalyst is a premium, high-performance agency landing page built with **Next.js 16**, **Tailwind CSS v4**, and **Framer Motion**. It features a "razor-sharp" rectangular aesthetic, cinematic scroll animations, and a sophisticated dark-mode palette.

![Katalyst Preview](public/vercel.svg) <!-- Replace with actual screenshot if available -->

## 🚀 Tech Stack

- **Framework:** [Next.js 16 (App Router)](https://nextjs.org/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Smooth Scroll:** [Lenis](https://lenis.darkroom.engineering/)
- **Components:** [Aceternity UI](https://ui.aceternity.com/) & [OpenUI](https://openui.dev/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Package Manager:** [Bun](https://bun.sh/)

## ✨ Key Features

- **Cinematic Hero Section:** Dynamic spotlight effect and floating brand elements.
- **Product Reveal:** 3D scroll-triggered dashboard reveal using `ContainerScroll`.
- **Interactive Video Showcase:** Auto-playing cinematic previews with a thumbnail selection system.
- **Wall of Love:** A high-density social proof grid featuring engagement metrics and brand mentions.
- **Client Success Stories:** Detailed case studies with challenge, solution, and impact metrics.
- **Trust & Guarantees:** Strategic section dedicated to reliability and customer satisfaction.
- **Advanced Quote Form:** Multi-step interactive form for project inquiries.
- **Booking Interface:** Interactive calendar for scheduling discovery calls.
- **Staggered Animations:** Every card and section enters the viewport with a sequenced fade-in-up transition.
- **Smooth Momentum Scrolling:** Buttery-smooth navigation powered by Lenis.

## 🎨 Design Aesthetic

- **Color Palette:**
  - **Dominant:** Dark Grey (`#121212`) & Deep Black (`#000000`)
  - **Primary Accent:** Hyper Magenta (`#BF40FA`)
  - **Secondary Accent:** Ultrasonic Blue (`#4928C2`)
  - **Unique Highlight:** Sunglow Yellow (`#FFD166`)
- **Typography:** Bold, black-weight, uppercase agency style with wide tracking.
- **Layout:** Razor-sharp rectangular corners (`rounded-none`) for a structured, industrial feel.

## 🛠️ Getting Started

### Prerequisites

Ensure you have [Bun](https://bun.sh/) installed.

### Installation

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd katalyst
   ```

2. Install dependencies:
   ```bash
   bun install
   ```

3. Start the development server:
   ```bash
   bun dev
   ```

4. Build for production:
   ```bash
   bun run build
   ```

## 📁 Project Structure

- `app/`: Next.js App Router directory.
  - `page.tsx`: Main landing page implementation.
  - `layout.tsx`: Root layout with Lenis Smooth Scroll wrapper.
- `components/`:
  - `ui/`: Reusable UI components (Aceternity & OpenUI).
  - `smooth-scroll.tsx`: Lenis configuration.
- `lib/`: Utility functions (e.g., `cn` for Tailwind merging).
- `public/`: Static assets and images.

## 📜 License

This project is licensed under the MIT License.

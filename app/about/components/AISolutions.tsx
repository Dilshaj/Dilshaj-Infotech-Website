import { Cpu, Sparkles, Eye, Smartphone, Bot, Mic2, Cloud, Puzzle } from "lucide-react";

const solutions = [
    {
        title: "Custom AI/ML Development",
        description: "We design and develop tailored AI solutions that automate workflows and improve operational efficiency.",
        icon: Cpu,
    },
    {
        title: "Generative AI & LLM Solutions",
        description: "Building intelligent chatbots, content automation systems, and AI-powered assistants for smarter engagement.",
        icon: Sparkles,
    },
    {
        title: "Computer Vision Solutions",
        description: "Implementing AI-driven image processing and visual intelligence systems for real-world applications.",
        icon: Eye,
    },
    {
        title: "AI-Powered App Development",
        description: "Integrating AI into web and mobile applications to deliver smarter user experiences.",
        icon: Smartphone,
    },
    {
        title: "AI Agents & Process Automation",
        description: "Developing intelligent agents and automation systems to streamline business operations.",
        icon: Bot,
    },
    {
        title: "Voice & Speech Solutions",
        description: "Creating speech recognition and voice-enabled applications for interactive digital experiences.",
        icon: Mic2,
    },
    {
        title: "Cloud-Based AI Deployment",
        description: "Deploying secure, scalable AI systems on modern cloud infrastructure.",
        icon: Cloud,
    },
    {
        title: "AI Strategy & Technology Consulting",
        description: "Helping businesses identify AI opportunities and implement solutions aligned with growth objectives.",
        icon: Puzzle,
    },
];

export default function AISolutions() {
    return (
        <section className="bg-black py-24 px-6 md:px-12 lg:px-10 xl:px-20 border-t border-zinc-800/30">
            <div className="max-w-[1550px] mx-auto text-center mb-16 space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                    Advanced AI & Digital Solutions for Business Growth
                </h2>
                <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
                    Delivering intelligent, scalable, and performance-driven technology solutions tailored to modern business needs
                </p>
            </div>

            <div className="max-w-[1550px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 justify-items-center">
                    {solutions.map((item, index) => (
                        <div
                            key={index}
                            className="bg-[#111111] border border-zinc-800/50 rounded-[24px] p-8 flex flex-col items-start gap-6 hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] transition-all duration-300 w-full lg:w-[355px] lg:h-[343px] group"
                        >
                            <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0 group-hover:bg-zinc-800 group-hover:border-zinc-700 transition-colors">
                                <item.icon className="w-6 h-6 text-white" />
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-xl font-bold text-white leading-tight">
                                    {item.title}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

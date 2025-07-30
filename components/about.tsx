import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { HTMLAttributes } from "react";
import { GithubLogo, LinkedinLogo } from "./icons";

const About = () => {
  return (
    <section id="about" className="relative py-20 px-6">
      <div className="max-w-screen-md mx-auto">
        <div className="flex flex-col md:flex-row-reverse gap-12">
          <ProfileImage className="hidden md:block" />

          {/* Content */}
          <div className="flex-1 md:text-left">
            <Badge variant="secondary" className="mb-4">
              About Me
            </Badge>
            <ProfileImage className="mt-3 mb-8 block md:hidden" />
            <h2 className="text-4xl font-bold mb-4 tracking-tight">
              Passionate about creating impactful business impact!
            </h2>
            <p className="text-muted-foreground mb-6 text-justify">
              With over 3 years of experience in data analyst, I
              specialize in building Data Visualization, Project Management, and Machine Learning using modern technologies.
              I focus on enhancing project efficiency while fostering collaboration and clarity.
              In a world where media is often misused,
              I&apos;m committed to leveraging it for positive impact — contributing to environmental and social progress, while helping build sustainable and profitable ventures.
            </p>
            <div className="flex flex-wrap gap-4 justify-start">
              <a href="https://github.com/bismareza81" target="_blank" rel="noopener noreferrer">
                <Button className="rounded-full">
                  <GithubLogo />
                  View Github
                </Button>
              </a>
              <a href="https://linkedin.com/in/bismaboostXP" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="rounded-full">
                  <LinkedinLogo />
                  Linkedin
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProfileImage = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("mt-10 w-48 h-48 md:w-64 md:h-64", className)} {...props}>
    <div className="relative w-full h-full rounded-2xl overflow-hidden bg-accent">
      <Image src="/potrait.png" alt="" className="object-cover" fill />
    </div>
  </div>
);
export default About;

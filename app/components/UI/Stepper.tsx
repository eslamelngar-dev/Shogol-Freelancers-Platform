import { LucideIcon } from "lucide-react";

interface Step {
  title: string;
  Icon: LucideIcon;
}

interface StepperProps {
  steps: Step[];
}

export default function Stepper({ steps }: StepperProps) {
  return (
    <ol className="relative text-body border-s border-default">
      {steps.map((step, index) => (
        <li key={index} className="mb-6 md:mb-10 ms-7">
          <span className="absolute flex items-center justify-center w-7 h-7 md:w-8 md:h-8 bg-[#f3f4f6] translate-x-11 rounded-full -inset-s-4-4 ring-4 ring-[#f3f4f6]">
            <step.Icon color="#21b3b6" className="w-4 h-4 md:w-5 md:h-5" />
          </span>
          <h3 className="font-medium leading-tight text-[#616160] text-sm md:text-base">
            {step.title}
          </h3>
        </li>
      ))}
    </ol>
  );
}

import { Epilogue } from "~/types/story";
import React from "react";
import Link from "next/link";

interface StoryEpilogueProps {
  epilogue: Epilogue;
}

export const StoryEpilogue: React.FC<StoryEpilogueProps> = ({ epilogue }) => {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
      <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500">
        Epilogue
      </p>
      <h2 className="mt-2 text-2xl font-normal text-black">{epilogue.title}</h2>
      <div className="mt-4 h-px w-16 bg-gray-200" />

      <div className="mt-12 space-y-6 text-xs leading-relaxed text-gray-800">
        {epilogue.content.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      <div className="mt-16 text-center">
        <Link
          href="/contact"
          className="group inline-flex items-center text-xs text-gray-900"
        >
          <span className="border-b border-transparent pb-1 transition-all duration-300 group-hover:border-gray-900">
            Connect with me
          </span>
          <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </Link>
      </div>
    </div>
  );
};

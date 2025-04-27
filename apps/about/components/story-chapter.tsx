// components/Chapter.tsx
import Image from "next/image";
import { Chapter } from "~/types/story";
import React from "react";

type ChapterProps = {
  chapter: Chapter;
};

export const StoryChapter: React.FC<ChapterProps> = ({ chapter }) => {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
      <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500">
        Chapter {chapter.id}
      </p>
      <h2 className="mt-2 text-2xl font-normal text-black">{chapter.title}</h2>
      <div className="mt-4 h-px w-16 bg-gray-200" />

      <div className="mt-12 grid gap-12 md:grid-cols-5">
        <div className="md:col-span-3">
          <div className="space-y-6 text-xs leading-relaxed text-gray-800">
            {chapter.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
        <div className="md:col-span-2">
          <div className="sticky top-8 space-y-8">
            {chapter.image && (
              <Image
                src={chapter.image}
                alt={chapter.imageAlt || ""}
                width={400}
                height={600}
                className="h-auto w-full object-cover"
              />
            )}
            <div className="space-y-4">
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500">
                  Location
                </p>
                <p className="mt-1 text-xs text-gray-900">{chapter.location}</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500">
                  Period
                </p>
                <p className="mt-1 text-xs text-gray-900">{chapter.period}</p>
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500">
                  {chapter.message.label}
                </p>
                <p className="mt-1 text-xs italic text-gray-900">
                  "{chapter.message.content}"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

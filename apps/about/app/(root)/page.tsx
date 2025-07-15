import profile from "@repo/data/profile";
import contents from "./content.json";
import { StoryChapter } from "~/components/story-chapter";
import React from "react";
import { StoryIntroduction } from "~/components/story-introduction";
import { StoryEpilogue } from "~/components/story-epilogue";

export default function StoryPage() {
  return (
    <div className="relative min-h-screen bg-white font-mono">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 z-0 opacity-[0.01]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000000' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Introduction */}
      <section className="py-24 bg-black">
        <StoryIntroduction introduction={contents.introduction} />
      </section>

      {/* Chapters */}
      {contents.chapters.map((chapter) => (
        <section
          style={{
            backgroundColor: chapter.bgColor,
          }}
          className={`py-24 ${chapter.bgColor}`}
          key={chapter.id}
        >
          <StoryChapter chapter={chapter} />
        </section>
      ))}

      {/* Epilogue */}
      <section className="py-24">
        <StoryEpilogue epilogue={contents.epilogue} />
      </section>

      <footer className="py-8 text-center text-xs text-gray-500">
        <p>{profile.copyright}</p>
      </footer>
    </div>
  );
}

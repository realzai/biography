import { Introduction } from "~/types/story";

interface StoryIntroductionProps {
  introduction: Introduction;
}

export const StoryIntroduction: React.FC<StoryIntroductionProps> = ({
  introduction,
}) => {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
      <p className="text-center text-sm italic leading-relaxed text-white">
        {introduction.quote}
      </p>
      <div className="mx-auto mt-4 h-px w-16 bg-gray-800" />

      <div className="mt-16 space-y-6 text-xs leading-relaxed text-gray-100">
        {introduction.content.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
};

"use client";

import { useEffect, useState } from "react";

import Image from "next/image";
import { ChevronLeft, ChevronRight, X, Filter } from "lucide-react";
import profile from "@repo/data/profile";

const categories = [
  { id: "all", label: "All Memories" },
  { id: "travel", label: "Travel" },
  { id: "family", label: "Family" },
  { id: "friends", label: "Friends" },
  { id: "milestones", label: "Milestones" },
  { id: "nature", label: "Nature" },
];

const memories = [
  {
    id: 1,
    title: "Summer in Paris",
    description:
      "That magical summer evening at the Eiffel Tower. The city lights were just beginning to twinkle.",
    date: "June 2019",
    category: "travel",
    image: "/placeholder.svg",
    aspectRatio: "portrait",
  },
  {
    id: 2,
    title: "Family Reunion",
    description:
      "First time the whole family was together in over five years. Grandma's cooking was the highlight.",
    date: "December 2020",
    category: "family",
    image: "/placeholder.svg",
    aspectRatio: "landscape",
  },
  {
    id: 3,
    title: "Hiking the Pacific Trail",
    description:
      "The view after a three-hour climb. Worth every step and blister.",
    date: "August 2018",
    category: "nature",
    image: "/placeholder.svg",
    aspectRatio: "portrait",
  },
  {
    id: 4,
    title: "College Graduation",
    description:
      "The culmination of four years of hard work. Still can't believe we made it.",
    date: "May 2015",
    category: "milestones",
    image: "/placeholder.svg",
    aspectRatio: "landscape",
  },
  {
    id: 5,
    title: "Road Trip with Friends",
    description:
      "Spontaneous weekend getaway. Three states, two nights, countless memories.",
    date: "July 2021",
    category: "friends",
    image: "/placeholder.svg",
    aspectRatio: "square",
  },
  {
    id: 6,
    title: "First Marathon",
    description:
      "Crossing the finish line after months of training. Exhausted but exhilarated.",
    date: "October 2017",
    category: "milestones",
    image: "/placeholder.svg",
    aspectRatio: "landscape",
  },
  {
    id: 7,
    title: "Sunset in Santorini",
    description:
      "The most breathtaking sunset I've ever witnessed. The colors were unreal.",
    date: "September 2019",
    category: "travel",
    image: "/placeholder.svg",
    aspectRatio: "portrait",
  },
  {
    id: 8,
    title: "Mom's Birthday",
    description:
      "Surprised her with a visit home. Her face when she opened the door was priceless.",
    date: "April 2022",
    category: "family",
    image: "/placeholder.svg",
    aspectRatio: "square",
  },
  {
    id: 9,
    title: "First Apartment",
    description:
      "Empty rooms full of possibility. The beginning of true independence.",
    date: "January 2016",
    category: "milestones",
    image: "/placeholder.svg",
    aspectRatio: "landscape",
  },
  {
    id: 10,
    title: "Beach Day",
    description:
      "Perfect weather, good friends, and endless laughter. Days like these are rare and precious.",
    date: "July 2020",
    category: "friends",
    image: "/placeholder.svg",
    aspectRatio: "portrait",
  },
  {
    id: 11,
    title: "Mountain Sunrise",
    description:
      "Woke up at 4am for this view. The silence and stillness were almost otherworldly.",
    date: "June 2018",
    category: "nature",
    image: "/placeholder.svg",
    aspectRatio: "landscape",
  },
  {
    id: 12,
    title: "New Year in Tokyo",
    description:
      "Celebrating the new year in Shibuya. The energy of the crowd was electric.",
    date: "December 2019",
    category: "travel",
    image: "/placeholder.svg",
    aspectRatio: "square",
  },
];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [filteredMemories, setFilteredMemories] = useState(memories);
  const [selectedMemory, setSelectedMemory] = useState<number | null>(null);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Filter memories when category changes
  useEffect(() => {
    if (selectedCategory === "all") {
      setFilteredMemories(memories);
    } else {
      setFilteredMemories(
        memories.filter((memory) => memory.category === selectedCategory),
      );
    }
  }, [selectedCategory]);

  // Set mounted state for client-side rendering
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Handle memory selection for lightbox view
  const handleMemoryClick = (id: number) => {
    setSelectedMemory(id);
    document.body.style.overflow = "hidden";
  };

  // Close lightbox view
  const handleCloseLightbox = () => {
    setSelectedMemory(null);
    document.body.style.overflow = "auto";
  };

  // Navigate to next or previous memory in lightbox
  const handleNavigate = (direction: "next" | "prev") => {
    if (selectedMemory === null) return;

    const currentIndex = filteredMemories.findIndex(
      (memory) => memory.id === selectedMemory,
    );
    let newIndex;

    if (direction === "next") {
      newIndex = (currentIndex + 1) % filteredMemories.length;
    } else {
      newIndex =
        (currentIndex - 1 + filteredMemories.length) % filteredMemories.length;
    }

    setSelectedMemory(filteredMemories[newIndex]?.id!);
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedMemory === null) return;

      if (e.key === "Escape") {
        handleCloseLightbox();
      } else if (e.key === "ArrowRight") {
        handleNavigate("next");
      } else if (e.key === "ArrowLeft") {
        handleNavigate("prev");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedMemory, filteredMemories]);

  // Don't render anything during SSR to avoid hydration mismatch
  if (!isMounted) {
    return null;
  }

  // Get the selected memory for lightbox
  const currentMemory =
    selectedMemory !== null
      ? memories.find((memory) => memory.id === selectedMemory)
      : null;

  return (
    <div className="relative min-h-screen bg-white font-mono">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 z-0 opacity-[0.01]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000000' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Hero Section */}
      <section className="relative bg-black">
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-40 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-normal uppercase tracking-[0.5em] text-gray-300">
              Collection
            </p>
            <h1 className="mt-4 text-4xl font-normal tracking-tight text-white sm:text-5xl">
              Memory Gallery
            </h1>
            <div className="mt-8 h-px w-16 bg-gray-500" />
            <p className="mt-8 max-w-xl text-sm leading-relaxed text-gray-300">
              A curated collection of moments that have shaped my journey. Each
              image tells a story, captures an emotion, or preserves a memory
              that I hold dear.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Mobile filter dialog */}
          <div className="flex items-center justify-between lg:hidden">
            <h2 className="text-lg font-normal text-gray-900">Memories</h2>
            <button
              type="button"
              className="flex items-center gap-x-2 text-xs text-gray-700"
              onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
            >
              <Filter className="h-4 w-4" />
              Filter
            </button>
          </div>

          {mobileFiltersOpen && (
            <div className="fixed inset-0 z-40 flex lg:hidden">
              <div
                className="fixed inset-0 bg-black bg-opacity-25"
                onClick={() => setMobileFiltersOpen(false)}
              />
              <div className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                <div className="flex items-center justify-between px-4">
                  <h2 className="text-lg font-normal text-gray-900">
                    Categories
                  </h2>
                  <button
                    type="button"
                    className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                    onClick={() => setMobileFiltersOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <X className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Mobile filter options */}
                <div className="mt-4 border-t border-gray-200">
                  <ul className="space-y-4 px-4 py-6">
                    {categories.map((category) => (
                      <li key={category.id} className="flex items-center">
                        <button
                          onClick={() => {
                            setSelectedCategory(category.id);
                            setMobileFiltersOpen(false);
                          }}
                          className={`text-xs ${
                            selectedCategory === category.id
                              ? "text-black"
                              : "text-gray-500"
                          } hover:text-black`}
                        >
                          {category.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
            {/* Desktop filters */}
            <div className="hidden lg:block">
              <h2 className="text-lg font-normal text-gray-900">Categories</h2>
              <ul className="mt-6 space-y-4">
                {categories.map((category) => (
                  <li key={category.id} className="flex items-center">
                    <button
                      onClick={() => setSelectedCategory(category.id)}
                      className={`text-xs ${
                        selectedCategory === category.id
                          ? "text-black after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:bg-black"
                          : "text-gray-500"
                      } relative hover:text-black`}
                    >
                      {category.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Gallery grid */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {filteredMemories.map((memory) => (
                  <div
                    key={memory.id}
                    className="group cursor-pointer overflow-hidden"
                    onClick={() => handleMemoryClick(memory.id)}
                  >
                    <div
                      className={`relative overflow-hidden ${
                        memory.aspectRatio === "portrait"
                          ? "aspect-[3/4]"
                          : memory.aspectRatio === "square"
                            ? "aspect-square"
                            : "aspect-[4/3]"
                      }`}
                    >
                      <Image
                        src={memory.image || "/placeholder.svg"}
                        alt={memory.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 transition-opacity duration-300 group-hover:bg-opacity-20" />
                    </div>
                    <div className="mt-4">
                      <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500">
                        {memory.date}
                      </p>
                      <h3 className="mt-1 text-sm font-normal text-gray-900">
                        {memory.title}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>

              {filteredMemories.length === 0 && (
                <div className="mt-12 text-center">
                  <p className="text-sm text-gray-500">
                    No memories found in this category.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedMemory !== null && currentMemory && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90">
          <button
            onClick={handleCloseLightbox}
            className="absolute right-4 top-4 z-10 rounded-full bg-black bg-opacity-50 p-2 text-white transition-all hover:bg-opacity-70"
          >
            <X className="h-6 w-6" />
          </button>

          <button
            onClick={() => handleNavigate("prev")}
            className="absolute left-4 z-10 rounded-full bg-black bg-opacity-50 p-2 text-white transition-all hover:bg-opacity-70 md:left-8"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={() => handleNavigate("next")}
            className="absolute right-4 z-10 rounded-full bg-black bg-opacity-50 p-2 text-white transition-all hover:bg-opacity-70 md:right-8"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div className="flex h-full w-full flex-col items-center justify-center px-4 py-16 md:px-12">
            <div className="relative max-h-[70vh] max-w-4xl">
              <Image
                src={currentMemory.image || "/placeholder.svg"}
                alt={currentMemory.title}
                width={1200}
                height={800}
                className="h-auto max-h-[70vh] w-auto object-contain"
              />
            </div>

            <div className="mt-8 max-w-2xl text-center">
              <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400">
                {currentMemory.date}
              </p>
              <h3 className="mt-2 text-xl font-normal text-white">
                {currentMemory.title}
              </h3>
              <p className="mt-4 text-sm text-gray-300">
                {currentMemory.description}
              </p>
            </div>
          </div>
        </div>
      )}

      <footer className="py-8 text-center text-xs text-gray-500">
        <p>{profile.copyright}</p>
      </footer>
    </div>
  );
}

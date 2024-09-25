"use client";

import Footer from "@/components/misc/Footer";
import ExportButton from "@/components/misc/ExportButton";
import GenerationForm from "@/components/misc/GenerationForm";
import BookCard from "@/components/examples/BookCard";
import {
  EXAMPLE_BOOK_ITEM,
  EXAMPLE_NEWS_ARTICLE,
  EXAMPLE_TESTIMONIAL,
  EXAMPLE_TEXT_MESSAGES,
} from "@/lib/data";
import Messages from "@/components/examples/Messages";
import NewsArticle from "@/components/examples/NewsArticle";
import Testimonial from "@/components/examples/Testimonial";
import DraggableContainer from "@/components/common/DraggableContainer";

export default function Home() {
  return (
    <>
      <div className="h-[calc(100dvh-56px)] w-screen fill-available pt-[57px] flex flex-col relative">
        <div className="w-full flex justify-center h-max pb-2 relative">
          <GenerationForm />

          <div className="absolute top-full z-20 left-0 w-full h-4 bg-gradient-to-b from-background to-transparent" />
        </div>

        <DraggableContainer className="grid gap-2 grid-cols-[repeat(auto-fill,minmax(0,448px))] justify-center px-6 py-6">
          <div className="relative space-y-2 w-full">
            <BookCard data={EXAMPLE_BOOK_ITEM} className="w-full" />
            <Testimonial data={EXAMPLE_TESTIMONIAL} className="w-full" />
          </div>

          <div className="relative w-full">
            <Messages data={EXAMPLE_TEXT_MESSAGES} className="w-full" />
          </div>

          <div className="relative w-full">
            <NewsArticle data={EXAMPLE_NEWS_ARTICLE} className="w-full p-4" />
          </div>
        </DraggableContainer>

        <div className="absolute bottom-6 right-6">
          <ExportButton />
        </div>
      </div>

      <Footer />
    </>
  );
}

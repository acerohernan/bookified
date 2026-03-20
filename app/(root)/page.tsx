import { BookCard } from "@/components/BookCard";
import { HeroSection } from "@/components/HeroSection";
import { sampleBooks } from "@/lib/constants";
import React from "react";

const Page = (): React.ReactElement => {
  return (
    <main className="wrapper container">
      <HeroSection />

      <div className="library-books-grid">
        {sampleBooks.map((book) => (
          <BookCard key={book._id} book={book} />
        ))}
      </div>
    </main>
  );
};

export default Page;

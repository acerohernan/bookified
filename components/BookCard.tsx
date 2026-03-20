import { SampleBook } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const BookCard = ({
  book: { title, slug, coverURL, author },
}: {
  book: SampleBook;
}): React.ReactElement => {
  return (
    <Link href={`/books/${slug}`}>
      <article className="book-card">
        <figure className="book-card-figure">
          <div className="book-card-cover-wrapper">
            <Image
              src={coverURL}
              alt={title}
              width={133}
              height={200}
              className="book-card-cover"
            />
          </div>

          <figcaption className="book-card-title">
            <h3 className="book-card-title">{title}</h3>
            <p className="book-card-author">{author} </p>
          </figcaption>
        </figure>
      </article>
    </Link>
  );
};

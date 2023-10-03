import React from "react";
import { Linkedin, Github, MessageCircle, Instagram } from "lucide-react";
import Link from "next/link";

function SocialLinks() {
  return (
    <div className="my-3 flex items-center  gap-3 ">
      <Link href="" target="_blank" rel="noopener noreferrer">
        <button className="rounded-full bg-stone-200 p-2 shadow-lg hover:bg-primary/80 dark:bg-stone-600">
          <Linkedin className="h-6 w-6 " />
        </button>
      </Link>
      <Link href="" target="_blank" rel="noopener noreferrer">
        <button className="rounded-full bg-stone-200  p-2 shadow-lg hover:bg-primary/80 dark:bg-stone-600">
          <Github className="h-6 w-6 " />
        </button>
      </Link>
      <Link href="" target="_blank" rel="noopener noreferrer">
        <button className="rounded-full bg-stone-200  p-2 shadow-lg hover:bg-primary/80 dark:bg-stone-600">
          <MessageCircle className="h-6 w-6 " />
        </button>
      </Link>
      <Link href="" target="_blank" rel="noopener noreferrer">
        <button className="rounded-full bg-stone-200  p-2 shadow-lg hover:bg-primary/80 dark:bg-stone-600">
          <Instagram className="h-6 w-6 " />
        </button>
      </Link>
    </div>
  );
}

export default SocialLinks;

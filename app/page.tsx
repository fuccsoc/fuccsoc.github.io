import Image from "next/image";
import Link from "next/link";
import { receiveData } from "./action";
import ClientData from "./ClientData";

export default async function Home() {
  const data = await receiveData();
  return (
    <div className="flex items-center justify-center min-h-screen flex-col gap-4 py-10">
      <h1 className="font-black text-xl">Vladislav Gorodkov</h1>
      <div className="flex flex-col gap-2 max-w-screen-md px-8">
        <h2 className="font bold text-2xl text-center font-black opacity-30 italic">
          Developer
        </h2>
        <ul className="list-disc list-outside">
          <li>
            <div className="flex gap-1 flex-col">
              <div>
                <b>Python</b>
              </div>
              <div>Middle python3 developer. Worked with many frameworks.</div>
              <div>
                Most interesting project:{" "}
                <Link
                  href="https://github.com/Dragon-Userbot"
                  className="text-blue-300"
                >
                  Dragon Userbot
                </Link>
              </div>
            </div>
          </li>
          <li>
            <div className="flex gap-1 flex-col">
              <div>
                <b>JavaScript (FrontEnd)</b>
              </div>
              <div>
                Middle frontend developer. Primary framework - Next.JS (v14)
              </div>
              <div>
                Most interesting project:{" "}
                <Link href="https://espasatel.com/" className="text-blue-300">
                  ESpasatel (closed sources)
                </Link>
              </div>
              <div>
                <p>
                  <b>Attention:</b> When this project was written, I was a
                  junior. New version with <s>blackjack and...</s> was written
                  but wasn&apos;t released... (yet?).
                  <br />
                  It utilizes server action, so __THE WHOLE__ page renders on
                  the server (yeah, including data received from API)
                  <br />
                  This page also use SSR (for demonstration of skills) - you can
                  check{" "}
                  <Link
                    href="https://github.com/fuccsoc/fuccsoc.github.io"
                    className="text-blue-200"
                  >
                    it&apos;s sources.
                  </Link>
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="flex gap-1 flex-col">
              <div>
                <b>Other languages</b>
              </div>
              <div>
                I can quickly switch to (almost) any language and leatrn it
                while code on it.
              </div>
              <div>
                Most interesting project:{" "}
                <Link
                  href="https://gitlab.com/leetheartz/MinakoAinoBot-KT/-/tree/master?ref_type=heads"
                  className="text-blue-300"
                >
                  MinakoAino-KT (Kotlin) (closed sources, request for it)
                </Link>
              </div>
              <div>
                <p>
                  <b>Attention:</b> This project discontinued.
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div>
        Contact me @{" "}
        <Link href="https://t.me/fuccsoc2" className="text-blue-200">
          telegram
        </Link>
      </div>
      <div>
        <code>This page was rendered when server time was {data}</code>
      </div>
      <div>
        <ClientData />
      </div>
    </div>
  );
}

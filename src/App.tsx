// @ts-nocheck
import "@fontsource/roboto/300-italic.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "@fontsource/roboto/900.css";
import strings from "react-timeago/lib/language-strings/es";
import buildFormatter from "react-timeago/lib/formatters/buildFormatter";
import ReactTimeago from "react-timeago";
import promisesData from "./data";
import github from "./assets/github.png";

const formatter = buildFormatter(strings);
const defaultEmote = "60ae4ec30e35477634988c18";

function App() {
  return (
    <div className="overflow-hidden h-full text-white flex flex-col items-center justify-center bg-no-repeat bg-cover bg-center bg-[url('https://img.goodfon.com/original/1920x1080/f/f9/disturbed-hard-demon-evil.jpg')]">
      <div className="flex flex-col my-2 md:my-0 max-w-5xl h-4/5 mx-auto p-4 bg-gray-800 bg-opacity-85 backdrop-blur-sm rounded-xl shadow-lg">
        <h1 className="py-4 pb-6 text-shadow-large text-xl font-bold text-center">
          💀 Promesas sin cumplir de PoMeLiToxx 💀
        </h1>

        <ul className="max-h-full flex-grow grid md:grid-cols-2 xl:grid-cols-3 gap-4 overflow-y-scroll">
          {promisesData.data.map((promise, index) => (
            <li
              key={index}
              className="flex items-center space-x-3 p-4 bg-gray-700 hover:bg-gray-600 rounded-lg shadow-md transition-transform transform hover:scale-105"
            >
              <div className="flex flex-col w-full">
                <span className="text-sm font-medium">{promise.text}</span>
                {promise.date && (
                  <span className="italic text-xs mt-0.5 font-light">
                    <ReactTimeago date={promise.date} formatter={formatter} />
                  </span>
                )}
              </div>
              <img
                className="h-10 md:h-12"
                src={`https://cdn.7tv.app/emote/${
                  promise.emote ?? defaultEmote
                }/4x.webp`}
              />
            </li>
          ))}
        </ul>
        <footer className="flex flex-col md:flex-row gap-2 text-xs items-center justify-between pt-4">
          <div className="flex gap-1 items-center">
            Vamos {promisesData.data.length} promesas y contando...
            <img
              className="h-5"
              src="https://cdn.7tv.app/emote/638905150d4985e50d525aaa/4x.webp"
            />
          </div>
          <div>
            <a
              href="https://github.com/johannmorales/promesaslitoxx"
              className="hover:underline"
            >
              <div className="flex gap-1">
                <img className="h-4" src={github} />{" "}
                johannmorales/promesaslitoxx
              </div>
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;

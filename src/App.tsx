// @ts-nocheck

import "@fontsource/roboto/300-italic.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "@fontsource/roboto/900.css";
import strings from "react-timeago/lib/language-strings/es";
import buildFormatter from "react-timeago/lib/formatters/buildFormatter";
import ReactTimeago from "react-timeago";

import promisesData from './data';

const formatter = buildFormatter(strings);


function App() {
  return (
    <div className="bg-gray-900 min-h-screen text-white flex flex-col items-center justify-center bg-no-repeat bg-cover bg-center bg-[url('https://img.goodfon.com/original/1920x1080/f/f9/disturbed-hard-demon-evil.jpg')]">
      <div className="max-w-4xl mx-auto p-8 bg-gray-800 bg-opacity-95 backdrop-blur-sm rounded-xl shadow-lg">
        <h1 className="text-shadow-large text-4xl font-bold text-white mb-8 text-center">
          💀 Promesas sin cumplir de PoMeLiToxx 💀
        </h1>

        <ul className="grid grid-cols-2 gap-4">
          {promisesData.data.map((promise, index) => (
            <li
              key={index}
              className="flex items-center space-x-3 p-4 bg-gray-700 hover:bg-gray-600 rounded-lg shadow-md transition-transform transform hover:scale-105"
            >
              <div className="flex flex-col  w-full">
                <span className="text-xl font-medium">{promise.text}</span>
                <span className="italic text-sm mt-0.5 font-light">
                  <ReactTimeago date={promise.date} formatter={formatter} />
                </span>
              </div>
              <img
                className="h-14"
                src={`https://cdn.7tv.app/emote/${promise.emote}/4x.webp`}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

import TypeIt from "typeit-react";

export default function Heading() {
  return (
    <div className="px-6 pt-4 bg-black sm:px-14 sm:pt-10">
      <p className="antialiased font-bold text-white text-7xl">
        <TypeIt
          options={{
            strings: ["sonder."],
            speed: 150,
            cursor: false,
          }}
        ></TypeIt>
      </p>
    </div>
  );
}

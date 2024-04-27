// This component is the header for the status of each task and the number of tasks contained within

export default function Header({ text, background, count }) {
  return (
    <div
      className={`${background} flex items-center h-12 pl-4 rounded-md uppercase text-sm text-white`}
    >
      {text}{" "}
      <div className="ml-2 bg-white w-5 h-5 text-black rounded-full flex items-center justify-center">
        {count}
      </div>
    </div>
  );
}

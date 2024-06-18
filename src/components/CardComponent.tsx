import InfoComponent from "./InfoComponent";

interface Props {
  name?: string;
  isSoldout?: boolean;
  price?: number;
  image_url?: string;
}

function getRandomFloat(min=1,max=4) : number {
    return Math.random()*(max-min)+min;
}
function getRandomInt(min=1,max=10**6) : number {
    return Math.floor( Math.random()*(max-min)+min);
}

const CardComponent = ({
  name = "Cappuccino",
  isSoldout = true,
  price = 13.12,
  image_url = "",
}: Props) => (
  <div className="group flex flex-col lg:size-128 h-64 w-[70%] ">
    <div className="bg-slate-900 h-[70%] relative ">
      <button
        onClick={() => console.log(`My name is ${name}`)}
        className="absolute hidden p-2 rounded-sm group-hover:block right-4 bg-slate-900/40"
      >
        &#9432;
      </button>
      <img src={image_url} className="object-cover w-full h-full rounded-md " />
    </div>

    <div className="flex justify-between px-2 mt-2">
      <p>{name}</p>
      <p className="p-1 font-mono text-sm font-semibold text-gray-900 bg-green-200 rounded-sm">
        {" "}
        ${price}{" "}
      </p>
    </div>
    <div className=" text-[12px] mt-1 px-2 flex justify-between">
      <div className="space-x-2">
        <span className="text-yellow-500">★</span>
        <span>{getRandomFloat().toPrecision(2)}</span>
        <span className="text-stone-600">({getRandomInt().toLocaleString()})</span>
      </div>
      {isSoldout && (
        <span className="text-red-800 align-middle"> Sold out</span>
      )}
    </div>

    <InfoComponent />
  </div>
);

export default CardComponent;

interface Props {
  changeVisibilityCallback : Function;
  title? : string;
  bannerImg? : string
  description? : string
}


const InfoComponent = ({changeVisibilityCallback,title,bannerImg,description}:Props) => {

    const ingredients = ["Coffee","Espresso",
      "Ångad mjölk","Espresso",
      "Ångad mjölk",
      "Karamellsirap"];

  return (
    <div className="fixed top-0 right-0 z-10 w-screen h-screen bg-slate-900/70 backdrop-blur-xl ">
        <div className="absolute top-0 left-0 p-4">
            <button onClick={()=>changeVisibilityCallback()
            } className="p-2 text-4xl rounded-md bg-slate-400 text-slate-800">&times;</button>
        </div>
      <div className="absolute top-0 right-0 w-2/4 h-screen p-4 space-y-4 ">
        <h1 className="text-4xl text-center font-playwrite">{title}</h1>
        <div className="w-full h-2/4">
          <img
            src={bannerImg}
            className="object-cover w-full h-full rounded-lg "
          />
        </div>
        <p className="p-2 font-normal rounded-md font-playwrite bg-slate-800">{description}</p>

        <div className="flex flex-wrap justify-center gap-2 ">

        {ingredients.map(ingredient=><p className="p-2 rounded-md bg-slate-400 text-slate-800">{ingredient}</p>)}
        
        
        </div>


      </div>
    </div>
  );
};

export default InfoComponent;

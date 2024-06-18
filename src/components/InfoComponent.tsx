const InfoComponent = () => {

    const ingredients = ["Coffee","Espresso",
      "Ångad mjölk","Espresso",
      "Ångad mjölk",
      "Karamellsirap"];

  return (
    <div className="fixed top-0 right-0 hidden w-screen h-screen bg-slate-900/10 ">
        <div className="absolute top-0 left-0 p-4">
            <button onClick={()=>console.log("Close the cousel")
            } className="p-2 text-4xl rounded-md bg-slate-400 text-slate-800">&times;</button>
        </div>
      <div className="absolute top-0 right-0 w-2/4 h-screen p-4 space-y-4 ">
        <h1 className="text-4xl text-center font-playwrite">Title</h1>
        <div className="w-full h-2/4">
          <img
            src="https://images.unsplash.com/photo-1557772611-722dabe20327?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="object-cover w-full h-full rounded-lg "
          />
        </div>
        <p className="p-2 font-normal rounded-md font-playwrite bg-slate-800">Svart kaffe är så enkelt som det kan bli med malda kaffebönor dränkta i hett vatten, serverat varmt. Och om du vill låta fancy kan du kalla svart kaffe med sitt rätta namn: café noir.</p>

        <div className="flex flex-wrap justify-center gap-2 ">

        {ingredients.map(ingredient=><p className="p-2 rounded-md bg-slate-400 text-slate-800">{ingredient}</p>)}
        
        
        </div>


      </div>
    </div>
  );
};

export default InfoComponent;

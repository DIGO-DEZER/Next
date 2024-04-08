/* eslint-disable @next/next/no-img-element */
import articles from './side-right/articles.json';

export default function RigthSide() {
  return (
    <div className="">
      <p className="bg-primary text-white p-4">
        <span className="text-xl font-bold">
          Liste des services disponibles
        </span>
        <br />
        Veillez selectioner ci dessous les produits qui vous interesse,puis
        indiquez la quantité
      </p>

      {articles.map((item, index) => (
        <div key={index}>
          <h1 className="text-xl font-bold top-10 relative">{item.title}</h1>
          <div className="grid grid-cols-3 gap-6 py-5">
            {item.items.map((element, idx) => (
              <div key={idx}>
                {/* <div className="bg-[#15803d] text-white p-1 rounded-md relative top-8  max-w-20  right-0 z-20">
                  <h3 className="text-center">{element.pourcentage}</h3>
                </div> */}

                <div className="relative">
                  <img src={element.imageUrl} className="mt-10" alt="image" />
                  <div className="bg-black text-white text-xs p-1.5 absolute bottom-0 right-0 z-20">
                    <h3 className="text-center font-semibold">
                      {element.price + "F"}
                    </h3>
                  </div>
                </div>
                <a className="top-5 relative" href={element.url}>
                  <span className="font-semibold">{element.name}</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

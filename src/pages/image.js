const images = [
    {
        "name": "CR90 corvette",
        "img": "https://cdnb.artstation.com/p/assets/images/images/026/021/607/large/malte-ullrich-tantiveiv-image.jpg?1608982531"
    },
    {
        "name": "Star Destroyer",
        "img": "https://cdnb.artstation.com/p/assets/images/images/022/216/159/large/ben-nicholas-bennicholas-stardestroyer-01.jpg?1574563335 "
    },
    {
        "name": "Death Star",
        "img": "https://cdnb.artstation.com/p/assets/images/images/028/214/581/large/ansel-hsiao-vsd120.jpg?1593795082"
    },
    {
        "name": "X-wing",
        "img": "https://cdnb.artstation.com/p/assets/images/images/007/125/427/large/amancio-de-almeida-1.jpg?1503878927"
    },
    {
        "name": "Millennium Falcon",
        "img": "https://cdnb.artstation.com/p/assets/images/images/008/448/223/large/jay-machado-millenniumfalcon-render-0141.jpg?1512849335"
    },
    {
        "name": "Y-wing",
        "img": "https://cdnb.artstation.com/p/assets/images/images/023/537/149/large/encho-enchev-sw1.jpg?1579539647"
    },
    {
        "name": "Executor",
        "img": "https://wallpapercave.com/wp/wp10683027.png"
    },
    {
        "name": "Rebel transport",
        "img": "https://cdna.artstation.com/p/assets/images/images/010/662/144/large/ansel-hsiao-yz16.jpg?1525581755"
    },
    {
        "name": "TIE Advanced x1",
        "img": "https://cdna.artstation.com/p/assets/images/images/007/727/540/large/ansel-hsiao-x1-8.jpg?1508121329"
    },
    {
        "name": "Sentinel-class landing craft",
        "img": "https://cdna.artstation.com/p/assets/images/images/019/160/250/large/alexander-ivanov-sent-7.jpg?1562265020"
    },
    {
        "name": "Slave 1",
        "img": "https://cdnb.artstation.com/p/assets/images/images/033/981/897/large/mack-sztaba-kuat-systems-interceptor.jpg?1611082305"
    },
    {
        "name": "B-wing",
        "img": "https://cdna.artstation.com/p/assets/images/images/015/875/396/large/angelos-karderinis-bwing13.jpg?1550004921"
    },
    {
        "name": "Republic Cruiser",
        "img": "https://cdna.artstation.com/p/assets/images/images/004/429/674/large/alexander-axelsson-trianglev3.jpg?1483696519"
    },
    {
        "name": "Droid control ship",
        "img": "https://cdna.artstation.com/p/assets/images/images/033/069/986/large/rijian-tan-scene-concept.jpg?1608301434"
    },
    {
        "name": "Calamari Cruiser",
        "img": "https://cdna.artstation.com/p/assets/images/images/039/852/852/large/littleeggart-mon-calamari-cruiser2.jpg?1627133413"
    },
    {
        "name": "Naboo fighter",
        "img": "https://cdna.artstation.com/p/assets/images/images/051/491/354/large/erik-stitt-arrowhex-fighter-lg.jpg?1657444142"
    },
    {
        "name": "A-wing",
        "img": "https://cdnb.artstation.com/p/assets/images/images/001/437/793/large/andrew-hodgson-finalcomp.jpg?1446427709"
    },
    {
        "name": "Naboo Royal Starship",
        "img": "https://cdna.artstation.com/p/assets/images/images/019/523/876/large/jose-mikhail-nubian-blackbird-wip-05ef.jpg?1563883440"
    },
    {
        "name": "AA-9 Coruscant freighter",
        "img": "https://i.ytimg.com/vi/JuURC186u4Q/hqdefault.jpg"
    },
    {
        "name": "Scimitar",
        "img": "https://preview.redd.it/lmssapb3neu81.jpg?width=640&crop=smart&auto=webp&s=12af6e0656f4e88f3778e0a22cffe8223c814bd8"
    },
    {
        "name": "J-type diplomatic barge",
        "img": "https://cdna.artstation.com/p/assets/images/images/009/100/184/large/alexey-novikov-_-forest-cat-amidalaship2-ue4-1.jpg?1517152573"
    },
    {
        "name": "Trade Federation cruiser",
        "img": "https://lumiere-a.akamaihd.net/v1/images/databank_tradefederationbattleship_01_169_fc5458ce.jpeg?region=0%2C49%2C1560%2C780"
    },
    {
        "name": "Republic attack cruiser",
        "img": "https://lumiere-a.akamaihd.net/v1/images/databank_republicattackcruiser_01_169_812f153d.jpeg?region=0%2C0%2C1560%2C780"
    },
    {
        "name": "Theta-class T-2c shuttle",
        "img": "https://media.sketchfab.com/models/e11da66567c44646b47b6da80074fc1a/thumbnails/ffb1bbe16a9e469fb44ab5bda78f6135/1024x576.jpeg"
    },
    {
        "name": "Jedi starfighter",
        "img": "https://cdna.artstation.com/p/assets/images/images/046/404/840/large/kim-murzin-8br.jpg?1645034796"
    },
    {
        "name": "V-wing",
        "img": "https://cdna.artstation.com/p/assets/images/images/027/928/694/large/paul-ozzimo-v-wing-speeder-v01-po.jpg?1592985117"
    },
    {
        "name": "H-type Nubian yacht",
        "img": "https://cdnb.artstation.com/p/assets/images/images/009/131/483/large/alexey-novikov-_-forest-cat-amidalaship3-ue4-1.jpg?1517311919"
    },
    {
        "name": "Republic Assault ship",
        "img": "https://i.pinimg.com/564x/e8/5e/7b/e85e7b5645b87d0addb2cd6350fc244a.jpg"
    },
    {
        "name": "Solar Sailer",
        "img": "https://cdna.artstation.com/p/marketplace/presentation_assets/001/481/358/large/file.jpg?1642387116"
    },
    {
        "name": "Belbullab-22 starfighter",
        "img": "https://i.pinimg.com/originals/4d/2f/03/4d2f036f9111fb78fb44679cb07a3a50.jpg"
    },
    {
        "name": "Naboo star skiff",
        "img": "https://i.ebayimg.com/images/g/2AEAAMXQ0pNQ9kgu/s-l500.jpg"
    },
    {
        "name": "Jedi Interceptor",
        "img": "https://cdna.artstation.com/p/assets/images/images/001/297/514/large/ismael-moreno-flipada2.jpg?1443890486"
    },
    {
        "name": "arc-170",
        "img": "https://cdnb.artstation.com/p/assets/images/images/044/885/033/large/lea-borde-borde-lea-spaceship-compo-front-apresmodif.jpg?1641399145"
    },
    {
        "name": "Imperial shuttle",
        "img": "https://cdnb.artstation.com/p/assets/images/images/041/879/347/large/alex-polgar-arkanian-class-imperial-shuttle.jpg?1632947793"
    },
    {
        "name": "EF76 Nebulon-B escort frigate",
        "img": "https://cdnb.artstation.com/p/assets/images/images/041/601/087/large/isaiah-nebulon-b-frigate.jpg?1632165598"
    },
    {
        "name": "Banking clan frigte",
        "img": "https://cdnb.artstation.com/p/assets/images/images/024/312/147/large/seung-hyup-nam-munificent-class-frigate.jpg?1582012165"
    }
]


export default images

/* 


<div className="fixed z-10 inset-0 bg-transparent  overflow-y-auto">
          <div className="flex items-center justify-center w-full min-h-[100vh]">
            <div className='flex justify-center w-full'>

              <article className="flex w-1/2 bg-transparent transition hover:shadow-xl">
                <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
                  <time

                    className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
                  >
                    <span>2022</span>
                    <span className="w-px flex-1 bg-gray-900/10"></span>
                    <span>Oct 10</span>
                  </time>
                </div>

                <div className="hidden sm:block sm:basis-56">
                  <img
                    alt="Guitar"
                    src="https://images.unsplash.com/photo-1609557927087-f9cf8e88de18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                    className="aspect-square h-full w-full object-cover"
                  />
                </div>

                <div className="flex flex-1 flex-col justify-between">
                  <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                    <a href="#">
                      <h3 className="font-bold uppercase text-gray-900">
                        Finding the right guitar for your style - 5 tips
                      </h3>
                    </a>

                    <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
                      dolores, possimus pariatur animi temporibus nesciunt praesentium dolore
                      sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta,
                      voluptates neque explicabo tempora nisi culpa eius atque dignissimos.
                      Molestias explicabo corporis voluptatem?
                    </p>
                  </div>

                  <div className="sm:flex sm:items-end sm:justify-end">
                    <a
                      href="#"
                      className="block bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400"
                    >
                      Read Blog
                    </a>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
        
        
        
                              <div className="flex flex-col   w-full p-3   rounded-lg  ">
                                <div className="grid grid-rows sm:grid  w-full">
                                  <div className="flex flex-col border  rounded-lg sm:border-l col-span-3">

                                    <div className="flex flex-col border-b  p-6 sm:border-b items-center  justify-center">
                                      <p className="text-3xl font-bold text-[#0ed3cf] rounded-full">{data.name}</p>
                                    </div>



                                    <div className="flex flex-col items-center p-2 ">
                                      <div className="flex flex-row items-center border p-4 rounded-xl space-x-3">
                                        <span className="">Model: </span>
                                        <p className="text-[#0ed3cf]"> {data.model}</p>
                                      </div>

                                      <div className="grid grid-cols-3 w-full  gap-2 p-2">

                                        <div className="flex flex-col justify-center items-center p-2 border rounded-lg">
                                          <span className="text-2xl text-[#0ed3cf] ">{data.length}</span>
                                          <p className="text-xs  uppercase">length</p>
                                        </div>
                                        <div className="flex flex-col justify-center items-center p-2 border rounded-lg">
                                          <span className="text-2xl text-[#0ed3cf] ">{data.consumables}</span>
                                          <p className="text-xs uppercase">consumables</p>
                                        </div>
                                        <div className="flex flex-col justify-center items-center p-2 border rounded-lg">
                                          <span className="text-2xl text-[#0ed3cf] ">{data.cost_in_credits}</span>
                                          <p className="text-xs uppercase">cost_in_credits
                                          </p>
                                        </div>

                                        <div className="flex flex-col justify-center items-center p-2 border rounded-lg">
                                          <span className="text-2xl text-[#0ed3cf] ">{data.passengers}</span>
                                          <p className="text-xs uppercase">passengers</p>
                                        </div>
                                        <div className="flex flex-col justify-center items-center p-2 border rounded-lg">
                                          <span className="text-2xl text-[#0ed3cf] ">{data.starship_class}</span>
                                          <p className="text-xs uppercase">starship_class</p>
                                        </div>
                                        <div className="flex flex-col justify-center items-center p-2 border rounded-lg">
                                          <span className="text-2xl text-[#0ed3cf] ">{data.passengers}</span>
                                          <p className="text-xs uppercase">passengers</p>
                                        </div>

                                      </div>
                                    </div>



                                    <div className="flex flex-col w-full relative bottom-0">
                                      <div className="grid grid-cols-3 border-t divide-x text-[#0ed3cf]  bg-gray-50 dark:bg-transparent py-3">
                                        <a
                                          className=" cursor-pointer uppercase text-xs flex flex-row items-center justify-center font-semibold">
                                          <div className="mr-2" >
                                            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 24 24" width="20px" fill="#0ed3cf"><path d="M0 0h24v24H0z" fill="none" /><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" /></svg>
                                          </div>
                                          Update
                                        </a>
                                        <a className="cursor-pointer uppercase text-xs flex flex-row items-center justify-center font-semibold">
                                          <div className="mr-2" >
                                            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 24 24" width="20px" fill="#0ed3cf"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4z" /></svg>
                                          </div>
                                          Remove
                                        </a>
                                        <a className="cursor-pointer uppercase text-xs flex flex-row items-center justify-center font-semibold">
                                          <div className="mr-2" >
                                            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 24 24" width="20px" fill="#0ed3cf"><path d="M0 0h24v24H0z" fill="none" /><path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" /></svg>
                                          </div>
                                          View
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
        
        
        */
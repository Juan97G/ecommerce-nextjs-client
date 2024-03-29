import React, {useState, useEffect} from 'react';
import BasicLayout from "../layouts/BasicLayout";
import {useRouter} from "next/router";
import {getGameByUrlApi} from "../api/game";
import HeaderGame from "../components/Game/HeaderGame";
import TabsGame from "../components/Game/TabsGame";
import Seo from "../components/SEO";

const Game = () => {

   /* STATES */
   const [game, setGame] = useState(null);

   /* HOOKS */
   const router = useRouter();

   /* DESTRUCTURING */
   const {query} = router;

   /* USE EFFECT */
   useEffect(() => {
      (async () => {
         const response = await getGameByUrlApi(query.game);
         setGame(response[0]);
      })()
   }, [query])


   if(!game) return null;

   return (
      <BasicLayout className="game">
         <Seo title={game.title}/>
         <HeaderGame game={game} />
         <TabsGame game={game} />
      </BasicLayout>
   );
};

export default Game;

import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0xa94476e98903232FCa7e58d281AA1b52D1EB12BD");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "Patche BJJ DAO",
        description: "Esse NFT vai te dar acesso a comunidade BJJ DAO!",
        image: readFileSync("scripts/assets/nftBjjDao.png"),
      },
    ]);
    console.log("✅ Novo NFT criado com sucesso no drop!");
  } catch (error) {
    console.error("falha ao criar o novo NFT", error);
  }
})()
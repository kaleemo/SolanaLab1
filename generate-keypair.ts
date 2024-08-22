import "dotenv/config";
import "@solana-developers/helpers";
import { getKeypairFromEnvironment } from "@solana-developers/helpers";
 
const keypair = await getKeypairFromEnvironment("SECRET_KEY");
 
console.log(
  `✅ Finished! We've loaded our secret key securely, using an env file!`,
);
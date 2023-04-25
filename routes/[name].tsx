import { Handlers, PageProps } from "$fresh/server.ts";
import { getCookies } from "std/http/cookie.ts";
import Card from "../components/Card.tsx";
import { qrcode } from "qrcode/mod.ts";
import db, { Crypto, User } from "../database.ts";

async function getCryptoKeys(username: string): Promise<Crypto[]> {
  try {
    const users = await db.find({ selector: { username } });
    const userDoc = users.docs[0] as unknown as User;

    if (!userDoc) return [];

    const crypto = userDoc.crypto || [];

    // Fetch keys and generate QR codes
    if (crypto.length === 0) return [];

    const keysWithQRCodes = await Promise.all(crypto.map(async (crypto: Crypto) => {
      const qrCode = await qrcode(crypto.key) as unknown as string;
      return { ...crypto, qrCode };
    }));

    return keysWithQRCodes;
  } catch (error) {
    console.error(error);
    return [];
  }
}
interface ProfileProps {
  crypto: Crypto[];
  name: string;
}


export const handler: Handlers<ProfileProps> = {
  async GET(req, ctx) {
    const { name } = ctx.params;
    const crypto = await getCryptoKeys(name);

    return ctx.render!({ crypto, name });
  },
};

export default function Profile({data}: PageProps<ProfileProps>) {
  const { crypto, name } = data;

  return (
    <>
      <div class="profile">
        <br/>
        <h1>{name}'s Profile</h1>
        <br/>
      </div>
      <div class="cards-container">
        <ul role="list" class="link-card-grid">
          {crypto.length > 0 && crypto.map((crypto: Crypto, index: number) => (
            <Card
              title={crypto.title}
              key={crypto.key}
              image={crypto.qrCode}
              id={index + 1}
            />
          ))}
        </ul>
    </div>
    </>
  );
}

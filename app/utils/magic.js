import { Magic } from 'magic-sdk';

const createMagic = () => {
    if (typeof window !== "undefined") {
       return new Magic(process.env.MAGIC_KEY)
      }
  };
export const magic = createMagic()

export interface CryptoKeys {
    title: string,
    key: string
}
export interface UserDocument {
    _id: string;
    _rev?: string;
    hashedPassword: string;
    crypto?: CryptoKeys[],
    // add any other properties you need here
  }
